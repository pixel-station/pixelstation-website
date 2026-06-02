"use client";

import { useState } from "react";

export default function ShopPage() {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ size, quantity }),
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

        <h1 className="mb-4 text-4xl font-bold">
          Dragaround T-Shirt
        </h1>

        <p className="mb-8 text-lg text-slate-600">
          Made on demand. Ships via Australia Post.
        </p>

        <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="mb-4 text-2xl font-bold">$29.99 AUD</p>

          <label className="mb-2 block font-semibold">Size</label>
          <select
            className="mb-6 w-full rounded-xl border border-slate-300 p-3"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
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