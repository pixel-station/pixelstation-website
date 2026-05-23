import { mockInstagramPosts } from "./mockInstagramPosts";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const USER_ID = process.env.INSTAGRAM_USER_ID;

export async function getInstagramPosts() {
  if (!ACCESS_TOKEN || !USER_ID) {
    console.log("Instagram environment variables missing.");
    return mockInstagramPosts;
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);

    return mockInstagramPosts;
  }
}