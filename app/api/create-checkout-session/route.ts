import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug } from "@/lib/db-products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      metadata: {
        productId: product.slug,
        productName: product.name,
        size,
        quantity: String(orderQuantity),
      },

      payment_intent_data: {
        metadata: {
          productId: product.slug,
          productName: product.name,
          size,
          quantity: String(orderQuantity),
        },
      },

      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: `${product.name} - Size ${size}`,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: orderQuantity,
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["AU"],
      },

      shipping_options:
            product.price * orderQuantity >= 100
                ? [
                    {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                        amount: 0,
                        currency: "aud",
                        },
                        display_name: "Free Standard Shipping",
                        delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 2,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 5,
                        },
                        },
                    },
                    },
                    {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                        amount: 1995,
                        currency: "aud",
                        },
                        display_name: "Express Shipping",
                        delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 2,
                        },
                        },
                    },
                    },
                ]
                : [
                    {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                        amount: 1295,
                        currency: "aud",
                        },
                        display_name: "Standard Shipping",
                        delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 2,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 5,
                        },
                        },
                    },
                    },
                    {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                        amount: 1995,
                        currency: "aud",
                        },
                        display_name: "Express Shipping",
                        delivery_estimate: {
                        minimum: {
                            unit: "business_day",
                            value: 1,
                        },
                        maximum: {
                            unit: "business_day",
                            value: 2,
                        },
                        },
                    },
                    },
                ],

      phone_number_collection: {
        enabled: true,
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}