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
  const { env } = await getCloudflareContext({ async: true });
  const db = (env as any).DB;

  const result = await db
    .prepare("SELECT * FROM orders ORDER BY created_at DESC")
    .all();

  return result.results as Order[];
}