import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/db-products";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    const product = await getProductBySlug(slug);

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}