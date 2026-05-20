"use client";

import HeroPixelIntro from "./components/HeroPixelIntro";
import { motion } from "framer-motion";

const services = [
  {
    title: "Fast and responsive websites",
    text: "Clean builds that load quickly and look sharp across desktop and mobile.",
    icon: "/images/icons/icon-fast.png",
  },
  {
    title: "Built to convert visitors into customers",
    text: "Clear structure, strong calls to action and user journeys designed for results.",
    icon: "/images/icons/icon-built.png",
  },
  {
    title: "Easy to manage and scale",
    text: "Flexible websites that can grow with your business.",
    icon: "/images/icons/icon-easy.png",
  },
];


export default function Home() {
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
          className="relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center px-0 pt-32 text-white md:min-h-[560px] md:pt-36"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.72), rgba(0,0,0,0.38), rgba(0,0,0,0.05)), url('/images/backgrounds/background-14.png')",
          }}
        >
          <div className="w-full px-6 md:px-8">
            <div className="max-w-5xl">
              <HeroPixelIntro />

              <motion.p
                initial={{
                  opacity: 0,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.4,
                  delay: 3.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 max-w-2xl text-[16px] font-normal leading-[1.85] tracking-[0.005em] text-white/88 md:text-[17px]"
              >
                Pixel Station designs and builds modern websites for businesses,
                events and brands. We specialise in website design, eCommerce,
                branding and SEO-focused digital experiences across leading
                platforms.
              </motion.p>

            </div>
          </div>
        </section>

       <motion.section
          id="about"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-cover bg-center px-6 py-6 text-center md:px-8 md:py-15"
          style={{
            backgroundImage: "url('/images/backgrounds/background-12.png')",
          }}
        >
        <div className="mx-auto max-w-4xl">
          <p className="font-[var(--font-playfair)] text-3xl italic leading-snug md:text-4xl">
            We build websites that help your business grow.
          </p>

          <p className="mx-auto mt-8 max-w-3xl font-[var(--font-playfair)] text-2xl italic leading-snug text-slate-700">
            From design to launch, everything is created to attract customers,
            increase conversions, and make your operations simpler.
          </p>
        </div>
      </motion.section>

        <motion.section
          id="services"
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden bg-cover bg-center px-6 py-24 text-white md:px-8 md:py-28"
        style={{
          backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.70) 35%, rgba(0,0,0,0.46) 70%, rgba(0,0,0,0.28) 100%), url('/images/backgrounds/background-16.png')",
        }}
       >
        <div className="w-full">
          <div className="reveal max-w-3xl">
            <h2 className="max-w-5xl text-[46px] font-normal leading-[0.92] tracking-[-0.05em] md:text-[76px]">
              Services That Grow Your Business
            </h2>

            <p className="mt-10 max-w-3xl text-[16px] font-normal leading-[1.85] tracking-[0.005em] text-white/88 md:text-[17px]">
              Everything you need to launch, run and scale your business online.
            </p>

            <a
              href="/services"
              className="font-[var(--font-assistant)] mt-12 inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-[14px] font-normal tracking-[0.01em] text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
            >
              Explore Our Services →
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 bg-cover bg-center px-6 py-16 md:grid-cols-3 md:gap-12 md:px-20 md:py-20"
          style={{
            backgroundImage: "url('/images/backgrounds/background-12.png')",
          }}
        >
          {services.map((item) => (
            <div
              key={item.title}
              className="reveal group flex flex-col items-center rounded-3xl px-4 py-6 text-center transition duration-500 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-auto h-36 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-[24px] font-medium leading-tight tracking-[-0.02em] text-slate-900">
                {item.title}
              </h3>

              <p className="mx-auto mt-4 max-w-sm text-[17px] leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </motion.section>

      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden bg-cover bg-center px-6 py-20 text-white md:px-8 md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.84), rgba(0,0,0,0.48), rgba(0,0,0,0.12)), url('/images/backgrounds/background-28.png')",
        }}
      >
        <div className="w-full">
          <div className="reveal max-w-3xl">
            <h2 className="max-w-5xl text-[46px] font-normal leading-[0.92] tracking-[-0.05em] md:text-[76px]">
              Our Work
            </h2>

            <p className="mt-10 max-w-3xl text-[16px] font-normal leading-[1.85] tracking-[0.005em] text-white/88 md:text-[17px]">
              A selection of websites we have designed and built to help businesses
              grow online.
            </p>

            <a
              href="/portfolio"
              className="font-[var(--font-assistant)] mt-12 inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-[14px] font-normal tracking-[0.01em] text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-16 text-center md:px-8 md:py-20"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <h2 className="mx-auto max-w-4xl font-[var(--font-merriweather)] text-3xl italic leading-snug tracking-[-0.02em] md:text-5xl">
          Ready to turn your website into your best sales tool?
        </h2>

        <a
          href="/contact"
          className="font-[var(--font-assistant)] mt-12 inline-flex items-center rounded-full bg-blue-600 px-7 py-3.5 text-[14px] font-normal tracking-[0.01em] text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg"
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