import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/db-products";

export async function POST(req: Request) {
  try {
    const { slug, size, quantity } = await req.json();

    const product = await getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const orderQuantity = quantity || 1;
    const productTotal = product.price * orderQuantity;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!siteUrl) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_SITE_URL" },
        { status: 500 }
      );
    }

    const shippingOptions =
      productTotal >= 100
        ? [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 0, currency: "aud" },
                display_name: "Free Standard Shipping",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 2 },
                  maximum: { unit: "business_day", value: 5 },
                },
              },
            },
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 1995, currency: "aud" },
                display_name: "Express Shipping",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 1 },
                  maximum: { unit: "business_day", value: 2 },
                },
              },
            },
          ]
        : [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 1295, currency: "aud" },
                display_name: "Standard Shipping",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 2 },
                  maximum: { unit: "business_day", value: 5 },
                },
              },
            },
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 1995, currency: "aud" },
                display_name: "Express Shipping",
                delivery_estimate: {
                  minimum: { unit: "business_day", value: 1 },
                  maximum: { unit: "business_day", value: 2 },
                },
              },
            },
          ];

    const body = new URLSearchParams();

    body.append("mode", "payment");
    body.append("payment_method_types[0]", "card");

    body.append("line_items[0][price_data][currency]", "aud");
    body.append(
      "line_items[0][price_data][product_data][name]",
      `${product.name} - Size ${size}`
    );
    body.append(
      "line_items[0][price_data][unit_amount]",
      String(Math.round(product.price * 100))
    );
    body.append("line_items[0][quantity]", String(orderQuantity));

    body.append("shipping_address_collection[allowed_countries][0]", "AU");

    shippingOptions.forEach((option, index) => {
      const rate = option.shipping_rate_data;

      body.append(`shipping_options[${index}][shipping_rate_data][type]`, rate.type);
      body.append(
        `shipping_options[${index}][shipping_rate_data][fixed_amount][amount]`,
        String(rate.fixed_amount.amount)
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][fixed_amount][currency]`,
        rate.fixed_amount.currency
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][display_name]`,
        rate.display_name
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][delivery_estimate][minimum][unit]`,
        rate.delivery_estimate.minimum.unit
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][delivery_estimate][minimum][value]`,
        String(rate.delivery_estimate.minimum.value)
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][delivery_estimate][maximum][unit]`,
        rate.delivery_estimate.maximum.unit
      );
      body.append(
        `shipping_options[${index}][shipping_rate_data][delivery_estimate][maximum][value]`,
        String(rate.delivery_estimate.maximum.value)
      );
    });

    body.append("phone_number_collection[enabled]", "true");

    body.append("metadata[productId]", product.slug);
    body.append("metadata[productName]", product.name);
    body.append("metadata[size]", size);
    body.append("metadata[quantity]", String(orderQuantity));

    body.append("payment_intent_data[metadata][productId]", product.slug);
    body.append("payment_intent_data[metadata][productName]", product.name);
    body.append("payment_intent_data[metadata][size]", size);
    body.append(
      "payment_intent_data[metadata][quantity]",
      String(orderQuantity)
    );

    body.append("success_url", `${siteUrl}/success`);
    body.append("cancel_url", `${siteUrl}/cancel`);

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const session = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Stripe checkout session failed",
          details: session,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to create checkout session",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}