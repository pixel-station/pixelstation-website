import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);

    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    try {
      const session = event.data.object as Stripe.Checkout.Session;
      const { env } = await getCloudflareContext();

      const orderNumber = `DRG-${session.id.slice(-8).toUpperCase()}`;

      const existingOrder = await env.DB.prepare(
        "SELECT id FROM orders WHERE stripe_session_id = ?"
      )
        .bind(session.id)
        .first();

      if (existingOrder) {
        console.log("ORDER ALREADY PROCESSED:", orderNumber);
        return NextResponse.json({ received: true });
      }

      const apiKey = process.env.RESEND_API_KEY;

      if (!apiKey) {
        console.error("Missing Resend API key");
        return NextResponse.json(
          { success: false, error: "Missing Resend API key" },
          { status: 500 }
        );
      }

      const resend = new Resend(apiKey);

      const customerName = session.customer_details?.name || "Not provided";
      const customerEmail = session.customer_details?.email || "Not provided";
      const customerPhone = session.customer_details?.phone || "Not provided";

      const address = session.customer_details?.address;

      const shippingAddress = address
        ? `${address.line1 || ""}, ${address.line2 || ""}, ${address.city || ""}, ${address.state || ""}, ${address.postal_code || ""}, ${address.country || ""}`
        : "Not provided";

      const productName = session.metadata?.productName || "Unknown Product";
      const size = session.metadata?.size || "Not provided";
      const quantity = session.metadata?.quantity || "Not provided";

      const amount = session.amount_total
        ? `$${(session.amount_total / 100).toFixed(2)} AUD`
        : "Not provided";

      console.log("NEW ORDER RECEIVED:", {
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        size,
        quantity,
        amount,
      });

      await env.DB.prepare(`
        INSERT OR IGNORE INTO orders (
          order_number,
          stripe_session_id,
          stripe_payment_intent_id,
          customer_name,
          customer_email,
          customer_phone,
          shipping_address,
          product_id,
          product_name,
          size,
          quantity,
          amount_total,
          currency,
          status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `)
        .bind(
          orderNumber,
          session.id,
          typeof session.payment_intent === "string" ? session.payment_intent : null,
          customerName,
          customerEmail,
          customerPhone,
          shippingAddress,
          session.metadata?.productId || null,
          productName,
          size,
          Number(quantity),
          session.amount_total || 0,
          session.currency || "aud",
          "paid"
        )
        .run();

      console.log("ORDER SAVED TO DATABASE:", orderNumber);

      const emailResult = await resend.emails.send({
        from: "Pixel Station <noreply@pixelstation.com.au>",
        to: process.env.BUSINESS_ORDER_EMAIL!,
        subject: `🚨 New Dragaround Order Received - ${orderNumber}`,
        replyTo:
          customerEmail !== "Not provided"
            ? customerEmail
            : "create@pixelstation.com.au",
        html: `
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
          Order ${orderNumber} • ${quantity}x ${productName} • ${amount}
        </div>
          <h2>🚨 New Dragaround Order Received</h2>

          <p><strong>Order Number:</strong> ${orderNumber}</p>

          <p>
            <strong>Customer:</strong> ${customerName}<br />
            <strong>Quantity:</strong> ${quantity}<br />
            <strong>Total:</strong> ${amount}
          </p>

          <h3>Order Details</h3>
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Size:</strong> ${size}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Total Paid:</strong> ${amount}</p>

          <h3>Customer Details</h3>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>Phone:</strong> ${customerPhone}</p>

          <h3>Shipping Address</h3>
          <p>${shippingAddress}</p>
        `,
      });

      console.log("Business email result:", emailResult);

      if (customerEmail !== "Not provided") {
  const customerEmailResult = await resend.emails.send({
    from: "Pixel Station <noreply@pixelstation.com.au>",
    to: customerEmail,
    subject: "Your Dragaround order has been received",
    html: `
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        Order ${orderNumber} • ${quantity}x ${productName} • ${amount}
      </div>

      <h1>Thank you for your order!</h1>
      <p style="font-size:16px;"><strong>Order Number:</strong> ${orderNumber}</p>

      <p>Hi ${customerName},</p>

      <p>We've successfully received your order and will begin preparing it shortly.</p>
      <p><strong>Estimated Dispatch:</strong> 2-3 business days</p>

      <h2>Order Summary</h2>

      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Size:</strong> ${size}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Total Paid:</strong> ${amount}</p>

      <h2>Shipping Address</h2>

      <p>${shippingAddress}</p>

      <br />

      <p><strong>Questions?</strong></p>

      <p>
        Contact us at
        <a href="mailto:create@pixelstation.com.au">
          create@pixelstation.com.au
        </a>
      </p>

      <p>Thank you for supporting Dragaround!</p>
    `,
  });

  console.log("Customer email result:", customerEmailResult);
}
      

      

      if (emailResult.error) {
        console.error(
          "RESEND ERROR FULL:",
          JSON.stringify(emailResult.error, null, 2)
        );
      }
    } catch (error) {
      console.error("ORDER EMAIL ERROR:", error);
    }
  }

  return NextResponse.json({ received: true });
}