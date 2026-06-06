"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/shop");
    }, 15000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-green-600">
          Payment Successful
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Thank You!
        </h1>

        <p className="mb-8 text-xl leading-relaxed text-slate-600">
          Your order has been received successfully. We'll begin preparing
          your shirt and ship it via Australia Post.
        </p>

        <Link
          href="/shop"
          className="inline-block rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold transition hover:bg-blue-700"
        >
          Continue Shopping
        </Link>

        <p className="mt-6 text-sm text-slate-500">
          You will be redirected back to the shop automatically in 15 seconds.
        </p>
      </div>
    </main>
  );
}