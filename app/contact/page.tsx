"use client";

import { motion } from "framer-motion";
import ContactPixelIntro from "../components/ContactPixelIntro";





export default function ContactUsPage() {
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
            className="relative h-[360px] overflow-hidden bg-cover bg-center px-6 text-white md:h-[440px] md:px-8"
            style={{
                backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.42), rgba(0,0,0,0.12)), url('/images/backgrounds/background-21.png')",
            }}
            >
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 top-[65%] w-full -translate-x-1/2 -translate-y-1/2 px-8 text-center md:top-[62%]"
            >
                <ContactPixelIntro />

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
                Tell us about your project and we’ll get back to you shortly.
                </motion.p>
                
            </motion.div>
            </section>

      <motion.section
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-cover bg-center px-6 py-20 md:px-20 md:py-24"
        style={{
          backgroundImage: "url('/images/backgrounds/background-12.png')",
        }}
      >
        <form
          action="mailto:create@pixelstation.com.au"
          method="post"
          encType="text/plain"
          className="mx-auto max-w-3xl rounded-[32px] bg-white/92 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-12"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="mt-5 h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />

          <textarea
            name="message"
            placeholder="Comment"
            rows={8}
            className="mt-5 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />

          <div className="text-center">
            <button
              type="submit"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#2563ff] px-10 py-4 text-[16px] font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#1f4ed8]"
            >
              Submit →
            </button>
          </div>
        </form>
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