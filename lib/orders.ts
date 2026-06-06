import { getCloudflareContext } from "@opennextjs/cloudflare";

export type Order = {
  id: number;
  order_number: string;
  customer_name: string | null;
  customer_email: string | null;
  product_name: string | null;
  size: string | null;
  quantity: number | null;
  amount_total: number | null;
  currency: string | null;
  status: string | null;
  created_at: string;
};

export async function getOrders() {
  const { env } = await getCloudflareContext();

  const result = await env.DB.prepare(
    "SELECT * FROM orders ORDER BY created_at DESC"
  ).all<Order>();

  return result.results;
}