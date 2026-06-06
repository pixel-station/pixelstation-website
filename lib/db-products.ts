import { getCloudflareContext } from "@opennextjs/cloudflare";

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url: string | null;
  status: string;
};

export async function getProducts() {
  const { env } = await getCloudflareContext();

  const result = await env.DB.prepare(
    `
      SELECT *
      FROM products
      ORDER BY created_at DESC
    `
  ).all<Product>();

  return result.results;
}

export async function getProductBySlug(slug: string) {
  const { env } = await getCloudflareContext();

  const result = await env.DB.prepare(
    `
      SELECT *
      FROM products
      WHERE slug = ?
      AND status = 'active'
      LIMIT 1
    `
  )
    .bind(slug)
    .first<Product>();

  return result;
}