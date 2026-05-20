"use client";

import { motion } from "framer-motion";
import ServicesPixelIntro from "../components/ServicesPixelIntro";

const services = [
  {
    title: "Website Design & Development",
    text: "Modern, responsive websites built to look professional, load fast, and convert visitors into customers.",
    icon: "/images/icons/icon-design.png",
  },
  {
    title: "Online Store Setup",
    text: "Complete eCommerce setup with products, payments, checkout, and the tools you need to sell online.",
    icon: "/images/icons/icon-ecommerce.png",
  },
  {
    title: "Domain, Email & Business Setup",
    text: "We help you get your domain, business email, hosting, and essential digital tools set up properly from day one.",
    icon: "/images/icons/icon-setup.png",
  },
  {
    title: "SEO & Google Visibility",
    text: "Basic SEO setup to help your website appear clearly on Google and make it easier for customers to find you.",
    icon: "/images/icons/icon-seo.png",
  },
  {
    title: "Social & Business Integrations",
    text: "Integration with tools like Google Maps, contact forms, Instagram, Meta Business Suite, and online shop features.",
    icon: "/images/icons/icon-integration.png",
  },
  {
    title: "Ongoing Support",
    text: "Support after launch so your website stays updated, working properly, and aligned with your business needs.",
    icon: "/images/icons/icon-support.png",
  },
];

const process = [
  {
    title: "Discover",
    text: "We clarify your goals, audience, and what your website needs to achieve.",
    background: "/images/backgrounds/background-08.png",
  },
  {
    title: "Design",
    text: "We create a clean, modern design that reflects your brand and guides customers toward action.",
    background: "/images/backgrounds/background-09.png",
  },
  {
    title: "Build",
    text: "We develop your website with performance, usability, and scalability in mind.",
    background: "/images/backgrounds/background-10.png",
  },
  {
    title: "Launch",
    text: "We prepare everything for go live, including final checks and setup.",
    background: "/images/backgrounds/background-11.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-[var(--font-assistant)] text-slate-950">
    
          <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="grid h-32 w-full grid-cols-[1fr_auto_1fr] items-center px-8">
          <div className="flex items-center">
            <details className="group relative md:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <span className="text-2xl leading-none">☰</span>
              </summary>

              <div className="absolute left-0 top-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                <nav className="flex flex-col p-2 font-[var(--font-assistant)] text-[16px] font-normal tracking-[-0.01em] text-slate-700">
                  <a className="whitespace-nowrap rounded-xl px-5 py-3 font-normal transition duration-200 hover:bg-blue-50 hover:text-blue-600" href="/">Home</a>
                  <a className="whitespace-nowrap rounded-xl px-5 py-3 font-normal transition duration-200 hover:bg-blue-50 hover:text-blue-600" href="/about-us">About Us</a>
                  <a className="whitespace-nowrap rounded-xl px-5 py-3 font-normal transition duration-200 hover:bg-blue-50 hover:text-blue-600" href="/services">Services</a>
                  <a className="whitespace-nowrap rounded-xl px-5 py-3 font-normal transition duration-200 hover:bg-blue-50 hover:text-blue-600" href="/portfolio">Portfolio</a>
                  <a className="whitespace-nowrap rounded-xl px-5 py-3 font-normal transition duration-200 hover:bg-blue-50 hover:text-blue-600" href="/contact">Contact Us</a>
                </nav>
              </div>
            </details>

            <nav className="hidden items-center gap-10 font-[var(--font-assistant)] text-[17px] font-normal tracking-[-0.01em] text-slate-700 md:flex">
              <a href="/" className="nav-link whitespace-nowrap transition hover:text-blue-600">Home</a>
              <a href="/about-us" className="nav-link whitespace-nowrap transition hover:text-blue-600">About Us</a>
              <a href="/services" className="nav-link whitespace-nowrap transition hover:text-blue-600">Services</a>
              <a href="/portfolio" className="nav-link whitespace-nowrap transition hover:text-blue-600">Portfolio</a>
              <a href="/contact" className="nav-link whitespace-nowrap transition hover:text-blue-600">Contact Us</a>
            </nav>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/logo/logo.png"
              alt="Pixel Station"
              className="h-auto w-[250px] object-contain md:w-[260px] xl:w-[320px]"
            />
          </div>

          <div />
        </div>
      </header>
    
    
      <section
        className="relative flex min-h-[720px] items-center justify-center bg-cover bg-[center_top] px-6 pt-24 pb-0 text-center text-white md:min-h-[760px] md:bg-center md:px-8 md:pt-52 md:pb-32"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.18) 100%), url('/images/backgrounds/background-22.png')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <ServicesPixelIntro />

         <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
                duration: 1.4,
                delay: 3.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-8 max-w-3xl text-[17px] leading-8 text-white/90"
            >
            From websites to business setup, we build digital solutions that
            help you attract customers, convert leads, and run your business
            with confidence.
            </motion.p>

            <motion.a
            href="mailto:create@pixelstation.com.au"
            initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{
                duration: 1.2,
                delay: 3.55,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-[15px] font-normal tracking-[0.01em] text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
            >
            Start Your Project →
            </motion.a>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-16 text-center md:px-20 md:py-20"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <h2 className="text-[38px] font-normal tracking-[-0.04em] md:text-[54px]">
          What We Can Help With
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {services.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center rounded-3xl px-4 py-6 text-center transition duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-auto h-44 w-auto object-contain transition duration-500 group-hover:scale-105 md:h-52"
                />
              </div>

              <h3 className="mt-4 text-[24px] font-medium leading-tight tracking-[-0.02em] text-slate-900">
                {item.title}
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-[17px] leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

        <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center"
        style={{
            backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
        >
        <h2 className="px-6 py-14 text-center text-[38px] font-normal tracking-[-0.04em] md:text-[54px]">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4">
          {process.map((step) => (
            <div
              key={step.title}
              className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center px-8 text-center text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.48)), url('${step.background}')`,
              }}
            >
              <div>
                <h3 className="text-[36px] font-medium tracking-[-0.03em]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-28 max-w-xs text-[18px] leading-7 text-white/90">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid items-center gap-0 bg-cover bg-center md:grid-cols-[0.95fr_1.05fr]"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overflow-hidden">
          <div
            className="min-h-[680px] bg-cover bg-center transition duration-700 hover:scale-[1.02]"
            style={{
              backgroundImage: "url('/images/backgrounds/background-03.png')",
            }}
          />
        </div>

        <div className="max-w-2xl px-10 py-16 text-center md:px-20 md:text-left">
          <h2 className="text-[42px] font-normal leading-[1] tracking-[-0.045em] md:text-[58px]">
            Websites engineered to convert attention into customers.
          </h2>

          <p className="mt-8 text-[17px] leading-8 text-slate-700">
            A good website should do more than sit online. It should help people
            understand your business, trust your brand, and take action.
          </p>

          <p className="mt-5 text-[17px] leading-8 text-slate-700">
            Every service we offer is focused on making your business easier to
            find, easier to contact, and easier to grow.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-16 text-center md:px-8 md:py-20"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <h2 className="mx-auto max-w-4xl font-[var(--font-merriweather)] text-3xl italic leading-snug md:text-5xl">
          Ready to build something that works?
        </h2>

        <a
          href="mailto:create@pixelstation.com.au"
          className="mt-12 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-[16px] font-normal tracking-[0.01em] text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
        >
          Start Your Project →
        </a>
      </motion.section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 font-[var(--font-assistant)] md:px-8 pt-20">
      <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto_1fr]">
        
        <div>
          <h3 className="text-[18px] font-normal text-slate-950">
            Navigation
          </h3>

          <div className="mt-3 flex flex-col gap-2 text-[15px] font-normal text-slate-600">
            <a href="#" className="transition hover:text-blue-600">
              Home
            </a>

            <a href="/about-us" className="transition hover:text-blue-600">
              About Us
            </a>

            <a href="/services" className="transition hover:text-blue-600">
              Services
            </a>

            <a href="/portfolio" className="transition hover:text-blue-600">
              Portfolio
            </a>

            <a href="/contact" className="transition hover:text-blue-600">
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/images/logo/logo.png"
            alt="Pixel Station"
            className="block h-auto max-w-none w-[320px] object-contain"
          />
        </div>

        <div className="md:text-right">
          <h3 className="text-[18px] font-normal text-slate-950">
            Get in Touch
          </h3>

          <div className="mt-3 flex flex-col gap-2 text-[15px] font-normal text-slate-600">
              <a
                href="https://www.instagram.com/pixelstationau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-blue-600 md:justify-end"
              >
                <img
                  src="/images/icons/instagram_icon.png"
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                />

                <span>Instagram</span>
              </a>
            </div>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-between border-t border-slate-200 pt-5 text-[13px] font-normal text-slate-500">
        <p>© 2026 Pixel Station</p>
        <p>Terms and Policies</p>
      </div>
    </footer>

    </main>
  );
}