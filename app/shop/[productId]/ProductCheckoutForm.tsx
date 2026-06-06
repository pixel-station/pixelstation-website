"use client";

import { useState } from "react";

type ProductCheckoutFormProps = {
  productId: string;
  productName: string;
  price: number;
};

export default function ProductCheckoutForm({
  productId,
  productName,
  price,
}: ProductCheckoutFormProps) {
  const sizes = ["S", "M", "L", "XL"];

  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        size,
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
    <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
      <p className="mb-4 text-2xl font-bold">
        ${price.toFixed(2)} AUD
      </p>

      <label className="mb-2 block font-semibold">Size</label>
      <select
        className="mb-6 w-full rounded-xl border border-slate-300 p-3"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        {sizes.map((sizeOption) => (
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
        {loading ? "Redirecting..." : `Buy ${productName}`}
      </button>
    </div>
  );
}