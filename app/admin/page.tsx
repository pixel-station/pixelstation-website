import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { getOrders, type Order } from "@/lib/orders";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const orders = await getOrders();

  const totalProducts = products.length;
  const activeProducts = products.filter((product) => product.active).length;
  const inactiveProducts = products.filter((product) => !product.active).length;

  const totalOrders = orders.length;

const totalRevenue = orders.reduce(
  (sum: number, order: Order) => sum + (order.amount_total ?? 0),
  0
);
  const averageOrderValue =
    totalOrders > 0 ? totalRevenue / totalOrders : 0;

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>

        <p className="mt-2 text-slate-600">
          Product and order overview for the Pixel Station ecommerce module.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Products</p>
            <p className="mt-2 text-4xl font-bold">{totalProducts}</p>
            </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
                <p className="text-sm text-green-600">Active Products</p>
                <p className="mt-2 text-4xl font-bold text-green-900">{activeProducts}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm text-slate-500">Inactive Products</p>
                <p className="mt-2 text-4xl font-bold text-slate-900">{inactiveProducts}</p>
            </div>
        </div>

        <div className="mt-10 grid gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-sm md:grid-cols-[160px_1fr_auto]"
            >
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-xl object-contain"
                />
              )}

              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>

                <p className="mt-2 text-slate-600">{product.description}</p>

                <p className="mt-4 font-semibold">
                  ${product.price.toFixed(2)} AUD
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 md:items-end">
                {product.active ? (
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        Active
                    </span>
                    ) : (
                    <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                        Inactive
                    </span>
                    )}

                <Link
                  href={`/shop/${product.id}`}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
                <h2 className="mb-6 text-3xl font-bold">Order Summary</h2>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
                    <p className="text-sm text-blue-600">Total Orders</p>
                    <p className="mt-2 text-4xl font-bold text-blue-900">
                        {totalOrders}
                    </p>
                    </div>

                    <div className="rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
                    <p className="text-sm text-green-600">Revenue</p>
                    <p className="mt-2 text-4xl font-bold text-green-900">
                        ${(totalRevenue / 100).toFixed(2)}
                    </p>
                    </div>

                    <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6 shadow-sm">
                    <p className="text-sm text-purple-600">Average Order Value</p>
                    <p className="mt-2 text-4xl font-bold text-purple-900">
                        ${(averageOrderValue / 100).toFixed(2)}
                    </p>
                    </div>
                </div>
                </div>

        <div className="mt-16">
          <h2 className="mb-6 text-3xl font-bold">Recent Orders</h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order: Order) => (
                  <tr key={order.id} className="border-t border-slate-200">
                    <td className="font-semibold text-blue-600">
                      {order.order_number}
                    </td>

                    <td className="px-4 py-3">
                      {new Date(order.created_at).toLocaleDateString("en-AU")}
                    </td>

                    <td className="px-4 py-3">{order.customer_name}</td>

                    <td className="px-4 py-3">{order.customer_email}</td>

                    <td className="px-4 py-3">{order.product_name}</td>

                    <td className="px-4 py-3">{order.size}</td>

                    <td className="px-4 py-3">{order.quantity}</td>

                    <td className="px-4 py-3">
                      ${((order.amount_total ?? 0) / 100).toFixed(2)}
                    </td>

                    <td className="px-4 py-3">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {(order.status ?? "paid")
                            .charAt(0)
                            .toUpperCase() +
                            (order.status ?? "paid").slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}