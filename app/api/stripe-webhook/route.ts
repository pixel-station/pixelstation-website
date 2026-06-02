import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

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
    const session = event.data.object as Stripe.Checkout.Session;

    const customerName =
      session.customer_details?.name || "Not provided";

    const customerEmail =
      session.customer_details?.email || "Not provided";

    const customerPhone =
      session.customer_details?.phone || "Not provided";

    const address = session.customer_details?.address;

    const shippingAddress = address
      ? `${address.line1 || ""}, ${address.line2 || ""}, ${address.city || ""}, ${address.state || ""}, ${address.postal_code || ""}, ${address.country || ""}`
      : "Not provided";

    const size =
      session.metadata?.size || "Not provided";

    const quantity =
      session.metadata?.quantity || "Not provided";

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

    // TEMPORARILY DISABLED DUE TO VPN / LOCAL NETWORK ISSUE
    /*
    const emailResult = await resend.emails.send({
      from: "Pixel Station <onboarding@resend.dev>",
      to: process.env.BUSINESS_ORDER_EMAIL!,
      subject: "New shirt order received",
      html: `
        <h1>New Shirt Order</h1>

        <h2>Order Details</h2>
        <p><strong>Product:</strong> Dragaround T-Shirt</p>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total Paid:</strong> ${amount}</p>

        <h2>Customer Details</h2>
        <p><strong>Name:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>

        <h2>Shipping Address</h2>
        <p>${shippingAddress}</p>
      `,
    });

    console.log("Resend email result:", emailResult);

    if (emailResult.error) {
      console.error(
        "RESEND ERROR FULL:",
        JSON.stringify(emailResult.error, null, 2)
      );
    }
    */
  }

  return NextResponse.json({ received: true });
}