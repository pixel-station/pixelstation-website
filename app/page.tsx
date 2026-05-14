export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-8 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
          Websites for small businesses, events and personal brands
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Modern websites.
          <br />
          Real results.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Pixel Station builds clean, professional and conversion-focused websites
          for businesses that need to look sharp online without the tech headache.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:create@pixelstation.com.au"
            className="rounded-full bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-400"
          >
            Start a project
          </a>

          <a
            href="#services"
            className="rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
          >
            View services
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Services
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          Everything your digital presence needs.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Website Design",
              text: "Professional websites for businesses, events and brands.",
            },
            {
              title: "SEO Setup",
              text: "Optimised structure, metadata and Google visibility basics.",
            },
            {
              title: "Digital Setup",
              text: "Domains, business email, Google Maps, forms and integrations.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-blue-950/20"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}