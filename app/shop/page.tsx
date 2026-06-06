import Link from "next/link";
import { products } from "@/lib/products";
import Image from "next/image";


export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-5xl font-bold">
          Shop
        </h1>

        <div className="grid gap-6">
          {products
            .filter((product) => product.active)
            .map((product) => (
                      <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="rounded-2xl border p-6 hover:shadow-lg"
            >
              <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="mb-4 h-56 w-full rounded-xl object-contain bg-white"
                />
              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="mt-2 text-slate-600">
                {product.description}
              </p>

              <p className="mt-4 font-bold">
                ${product.price.toFixed(2)} AUD
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}