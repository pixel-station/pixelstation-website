import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCheckoutForm from "./ProductCheckoutForm";
import { getProductBySlug } from "@/lib/db-products";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  const product = await getProductBySlug(productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-slate-900">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Test Shop
        </p>

        <h1 className="text-5xl font-bold text-slate-900">{product.name}</h1>

        {product.image_url && (
          <Image
            src={product.image_url}
            alt={product.name}
            width={800}
            height={800}
            className="mt-6 mb-6 w-full rounded-3xl border border-slate-200"
          />
        )}

        <p className="mt-4 text-xl text-slate-600">{product.description}</p>

        <ProductCheckoutForm
          productId={product.slug}
          productName={product.name}
          price={product.price}
        />
      </section>
    </main>
  );
}