import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { slug, size, quantity } = await req.json();

  return NextResponse.json({
    success: true,
    received: {
      slug,
      size,
      quantity,
    },
  });
}