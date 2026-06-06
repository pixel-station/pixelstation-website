import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { productId, size, quantity } = await req.json();

    const product = products.find((item) => item.id === productId);

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
            productId: product.id,
            productName: product.name,
            size,
            quantity: String(orderQuantity),
        },

        payment_intent_data: {
                metadata: {
                     productId: product.id,
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