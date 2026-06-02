export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Checkout Cancelled
        </p>

        <h1 className="mb-4 text-5xl font-bold text-slate-900">
          No worries.
        </h1>

        <p className="mb-8 text-lg text-slate-600">
          Your payment was not processed. You can return to the shop and try again.
        </p>

        <a
          href="/shop"
          className="inline-flex rounded-full bg-slate-900 px-8 py-4 font-bold text-white hover:bg-slate-700"
        >
          Back to Shop
        </a>
      </div>
    </main>
  );
}