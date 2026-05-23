import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/modules/instagram-sync/services/instagramService";

export async function GET() {
  try {
    const posts = await getInstagramPosts();

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Instagram posts" },
      { status: 500 }
    );
  }
}