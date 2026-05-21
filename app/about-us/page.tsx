"use client";

import { motion } from "framer-motion";
import Link from "next/link";



import AboutPixelIntro from "../components/AboutPixelIntro";

const reasons = [
  {
    title: "Strategic, not just visual",
    text: "Every decision is made to improve how your business performs online, not just how it looks.",
    icon: "/images/icons/icon-strategic.png",
  },
  {
    title: "Built for growth",
    text: "Your website is designed to evolve with your business, from launch to scale.",
    icon: "/images/icons/icon-growth.png",
  },
  {
    title: "Simple and effective",
    text: "We remove complexity and focus on what actually drives results.",
    icon: "/images/icons/icon-simple.png",
  },
];

export default function AboutUsPage() {
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
        className="relative flex min-h-[750px] items-center bg-cover bg-center px-6 pt-32 text-white md:px-8"
        style={{
          backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.46) 45%, rgba(0,0,0,0.16) 100%), url('/images/backgrounds/background-15.png')",
        }}
      >
        <div className="w-full px-3 md:px-8">
          <motion.div
                initial={{
                    opacity: 0,
                    y: 24,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-5xl"
                >
                <h1 className="text-[46px] font-normal leading-[0.9] tracking-[-0.05em] text-white md:text-[76px]">
                    About Us
                </h1>
                </motion.div>
        </div>
      </section>

        <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-16 text-center md:px-8 md:py-20"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <p className="mx-auto max-w-4xl font-[var(--font-merriweather)] text-3xl italic leading-snug md:text-4xl">
          We design and build high-performing websites that help businesses
          grow, convert, and scale with confidence.
        </p>
      </motion.section>

        <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-0 md:grid-cols-[0.9fr_1.1fr]"
            style={{
                backgroundImage: "url('/images/backgrounds/background-12.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
        <div className="overflow-hidden">
        <div
            className="min-h-[760px] bg-cover bg-center transition duration-700 hover:scale-[1.02]"
            style={{
            backgroundImage: "url('/images/backgrounds/background-01.png')",
            backgroundPosition: "center",
            }}
        />
        </div>

        <div className="max-w-2xl px-10 py-16 md:px-20">
            <h2 className="text-[44px] font-normal leading-[1] tracking-[-0.045em] md:text-[60px]">
            Built for businesses that want real results
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
            Pixel Station was created to help businesses turn their websites
            into powerful tools for growth.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-slate-700">
            Too many websites look good but fail to deliver results. We focus on
            building digital experiences that attract customers, increase
            conversions, and support your business as it grows.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-slate-700">
            Every project is designed with performance, clarity, and long-term
            success in mind.
            </p>
        </div>
        </motion.section>

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
            Why businesses choose Pixel Station
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-12">
            {reasons.map((item) => (
            <div
                key={item.title}
                className="reveal group flex flex-col items-center rounded-3xl px-4 py-2 text-center transition duration-500 hover:-translate-y-1"
            >
                <div className="overflow-hidden rounded-3xl">
                <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto h-64 w-auto object-contain transition duration-500 group-hover:scale-105 md:h-52"
                />
                </div>

                <h3 className="mt-1 text-[24px] font-medium leading-tight tracking-[-0.02em] text-slate-900">
                {item.title}
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-[17px] leading-7 text-slate-600">
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
            className="grid items-center gap-0 md:grid-cols-[1.05fr_0.95fr]"
            style={{
                backgroundImage: "url('/images/backgrounds/background-12.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
        <div className="max-w-2xl px-10 py-16 md:px-20">
            <h2 className="text-[44px] font-normal leading-[1] tracking-[-0.045em] md:text-[60px]">
            A more personal approach
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
            You are not just another project. We work closely with you to
            understand your business, your goals, and what success looks like for
            you.
            </p>

            <p className="mt-5 text-[17px] leading-8 text-slate-700">
            The result is a website that feels aligned with your brand and works
            as a real extension of your business.
            </p>
        </div>

        <div className="overflow-hidden">
        <div
            className="min-h-[760px] bg-cover bg-center transition duration-700 hover:scale-[1.02]"
            style={{
            backgroundImage: "url('/images/backgrounds/background-19.png')",
            backgroundPosition: "center",
            }}
        />
        </div>
        </motion.section>

        <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
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
          href="/contact"
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