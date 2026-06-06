"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/products";

export default function ShopPage() {
  const params = useParams();

  const product = products.find(
    (item) => item.id === params.productId && item.active
  );

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Product not found</h1>
          <p className="mt-4 text-slate-600">
            This product is unavailable or no longer active.
          </p>
        </div>
      </main>
    );
  }

  const selectedSize = size || product.sizes[0];

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.id,
        size: selectedSize,
        quantity,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-slate-900">
      <section className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Test Shop
        </p>

        <h1 className="text-5xl font-bold text-slate-900">{product.name}</h1>

        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          className="mt-6 mb-6 w-full rounded-3xl border border-slate-200"
        />

        <p className="mt-4 text-xl text-slate-600">{product.description}</p>

        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="mb-4 text-2xl font-bold">
            ${product.price.toFixed(2)} AUD
          </p>

          <label className="mb-2 block font-semibold">Size</label>
          <select
            className="mb-6 w-full rounded-xl border border-slate-300 p-3"
            value={selectedSize}
            onChange={(e) => setSize(e.target.value)}
          >
            {product.sizes.map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>

          <label className="mb-2 block font-semibold">Quantity</label>
          <input
            className="mb-6 w-full rounded-xl border border-slate-300 p-3"
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full rounded-full bg-slate-900 px-6 py-4 font-bold text-white hover:bg-slate-700 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Buy Now"}
          </button>
        </div>
      </section>
    </main>
  );
}