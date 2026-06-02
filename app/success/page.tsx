export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
          Payment Successful
        </p>

        <h1 className="mb-4 text-5xl font-bold text-slate-900">
          Thank You!
        </h1>

        <p className="text-lg text-slate-600">
          Your order has been received successfully.
          We’ll begin preparing your shirt and ship it via Australia Post.
        </p>
      </div>
    </main>
  );
}