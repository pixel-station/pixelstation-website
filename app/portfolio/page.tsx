"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PortfolioPixelIntro from "../components/PortfolioPixelIntro";

const features = [
  {
    icon: "/images/icons/icon-modern.png",
    title: "Modern & Responsive",
    text: "Clean, responsive websites optimized for desktop, tablet, and mobile.",
  },
  {
    icon: "/images/icons/icon-convert.png",
    title: "Designed to Convert",
    text: "Clear layouts and fast experiences designed to turn visitors into customers.",
  },
  {
    icon: "/images/icons/icon-scalable.png",
    title: "Simple & Scalable",
    text: "Easy-to-manage websites built to grow with your business.",
  },
  {
    icon: "/images/icons/icon-personal.png",
    title: "Personal Support",
    text: "Practical guidance before, during, and after launch.",
  },
];

const projects = [
  {
    title: "Escándalo",
    category: "EVENT BRAND · NIGHTLIFE · SYDNEY",
    text: "Modern event platform designed to drive ticket sales, showcase nightlife branding, and optimize mobile engagement.",
    image: "/images/portfolio/portfolio-escandalo.png",
    link: "https://www.escandalo.com.au/",
  },
  {
    title: "JONI Shoes",
    category: "FASHION · ECOMMERCE · RETAIL",
    text: "Elegant ecommerce experience focused on premium product presentation, mobile shopping, and conversion-driven design.",
    image: "/images/portfolio/portfolio-jonishoes.png",
    link: "https://jonishoes.com.au/",
  },
  {
    title: "Dragaround",
    category: "ENTERTAINMENT · EVENTS",
    text: "Entertainment platform combining event discovery, ticket sales, gamification, and community-driven engagement.",
    image: "/images/portfolio/portfolio-dragaround.png",
    link: "https://www.dragaround.com.au/",
  },
];

const benefits = [
  {
    title: "Modern & Responsive",
    text: "Clean, responsive websites optimized for desktop, tablet, and mobile.",
    icon: "/images/icons/icon-modern.png",
  },
  {
    title: "Designed to Convert",
    text: "Clear layouts and fast experiences designed to turn visitors into customers.",
    icon: "/images/icons/icon-convert.png",
  },
  {
    title: "Simple & Scalable",
    text: "Easy-to-manage websites built to grow with your business.",
    icon: "/images/icons/icon-scalable.png",
  },
  {
    title: "Personal Support",
    text: "Practical guidance before, during, and after launch.",
    icon: "/images/icons/icon-personal.png",
  },
];

export default function PortfolioPage() {
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
  className="relative h-[430px] overflow-hidden bg-cover bg-center px-6 text-white md:h-[560px] md:px-8"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.48) 52%, rgba(0,0,0,0.16) 100%), url('/images/backgrounds/background-23.png')",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="absolute left-1/2 top-[65%] flex w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 text-center md:top-[60%]"
  >
    <h1 className="mx-auto max-w-[360px] text-center text-[38px] font-normal leading-[0.92] tracking-[-0.05em] text-white md:max-w-5xl md:text-[86px]">
      Selected Projects & Digital Work
    </h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-7 max-w-[320px] text-center text-[17px] leading-8 text-white/90 md:max-w-3xl md:text-[18px]"
    >
      Websites, branding, digital setup, and modern online experiences designed
      for growing businesses.
    </motion.p>
  </motion.div>
</section>

      <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-16 md:px-20 md:py-20"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <h2 className="text-center text-[38px] font-normal tracking-[-0.04em] md:text-[54px]">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl bg-white/80 p-6 text-center shadow-sm ring-1 ring-slate-200/70 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <h3 className="mt-8 text-[26px] font-medium tracking-[-0.02em]">
                {project.title}
              </h3>

              <p className="mt-3 text-[12px] font-medium tracking-[0.08em] text-slate-500">
                {project.category}
              </p>

              <p className="mx-auto mt-5 max-w-sm text-[15px] leading-7 text-slate-600">
                {project.text}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-[14px] font-medium text-slate-950 transition hover:text-blue-600"
              >
                Visit Website →
              </a>
            </article>
          ))}
        </div>
      </motion.section>

      <section
  className="bg-cover bg-center px-6 py-20 md:px-20 md:py-24"
  style={{
    backgroundImage: "url('/images/backgrounds/background-12.png')",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 42 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
  >
    <h2 className="text-center text-[42px] font-normal tracking-[-0.04em] md:text-[58px]">
      Built for Real Businesses
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-[18px] leading-8 text-slate-700">
      We create websites and digital setups designed to help businesses look
      professional, build trust, and grow online without unnecessary complexity.
    </p>

    <div className="mt-20 grid gap-10 md:grid-cols-4 md:gap-12">
      {features.map((item) => (
        <div
          key={item.title}
          className="group flex flex-col items-center text-center"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="mx-auto h-44 w-auto object-contain transition duration-500 group-hover:scale-105 md:h-52"
          />

          <h3 className="mt-6 text-[28px] font-medium leading-tight tracking-[-0.02em] text-slate-900">
            {item.title}
          </h3>

          <p className="mx-auto mt-4 max-w-sm text-[17px] leading-7 text-slate-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-24 text-center">
      <h2 className="font-[var(--font-merriweather)] text-3xl italic leading-snug md:text-5xl">
        Ready to elevate your business online?
      </h2>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center rounded-full bg-[#2563ff] px-10 py-4 text-[16px] font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#1f4ed8]"
      >
        Start Your Project →
      </Link>
    </div>
  </motion.div>
</section>

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