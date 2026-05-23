"use client";


import { motion } from "framer-motion";
import ContactPixelIntro from "../components/ContactPixelIntro";
import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    onTurnstileSuccess: (token: string) => void;
  }
}


export default function ContactUsPage() {

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  comment: "",
});

const [turnstileToken, setTurnstileToken] = useState("");
const [companyWebsite, setCompanyWebsite] = useState("");

const [statusMessage, setStatusMessage] = useState("");
const [statusType, setStatusType] = useState<"success" | "error" | "">("");

useEffect(() => {
  window.onTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
  };
}, []);



const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
              ...formData,
              turnstileToken,
              companyWebsite,
            }),
    });

    if (response.ok) {
            setStatusType("success");
            setStatusMessage("Message received successfully. We’ll get back to you shortly.");

            setFormData({
                name: "",
                email: "",
                phone: "",
                comment: "",
            });
            setTurnstileToken("");
            setCompanyWebsite("");

            } else {
            setStatusType("error");
            setStatusMessage("Something went wrong. Please try again in a moment.");
            }
  } catch (error) {
    console.error(error);
    setStatusType("error");
    setStatusMessage("Something went wrong. Please try again in a moment.");
  }
};


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
            className="absolute left-1/2 top-[67%] w-full -translate-x-1/2 -translate-y-1/2 px-8 text-center md:top-[60%]"
            >
            <h1 className="text-[56px] font-normal leading-[0.92] tracking-[-0.05em] text-white md:text-[92px]">
                Contact Us
            </h1>

            <motion.p
                initial={{
                opacity: 0,
                y: 10,
                }}
                animate={{
                opacity: 1,
                y: 0,
                }}
                transition={{
                duration: 1,
                delay: 0.35,
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
            onSubmit={handleSubmit}
            className="mx-auto max-w-3xl rounded-[32px] bg-white/92 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm md:p-12"
            >
            <div className="grid gap-5 md:grid-cols-2">
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

                <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
            </div>

            <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-5 h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <textarea
                name="comment"
                placeholder="Comment"
                rows={8}
                value={formData.comment}
                onChange={handleChange}
                required
                className="mt-5 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-5 text-[15px] text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <input
                type="text"
                name="companyWebsite"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div
                      className="cf-turnstile mt-6 flex justify-center"
                      data-sitekey="0x4AAAAAADUoEf10wkNnGQuS"
                      data-callback="onTurnstileSuccess"
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
      <div className="flex w-full flex-col items-center gap-10 text-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:text-left">
        
        <div className="order-2 flex flex-col items-center md:order-1 md:items-start">
          <h3 className="text-[18px] font-normal text-slate-950">
            Navigation
          </h3>

          <div className="mt-3 flex flex-col items-center gap-2 text-[15px] font-normal text-slate-600 md:items-start">
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

        <div className="order-1 flex items-center justify-center md:order-2">
          <img
            src="/images/logo/logo.png"
            alt="Pixel Station"
            className="block h-auto w-[220px] object-contain md:w-[320px]"
          />
        </div>

        <div className="order-3 flex flex-col items-center md:items-end md:text-right">
          <h3 className="text-[18px] font-normal text-slate-950">
            Get in Touch
          </h3>

          <div className="mt-3 flex flex-col gap-2 text-[15px] font-normal text-slate-600">
              <a
                href="https://www.instagram.com/pixelstationau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition hover:text-blue-600 md:justify-end"
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

      <div className="mt-8 flex w-full flex-col items-center justify-center gap-2 border-t border-slate-200 pt-5 text-center text-[13px] font-normal text-slate-500 md:flex-row md:justify-between">
        <p>© 2026 Pixel Station</p>
        <p>Terms and Policies</p>
      </div>
    </footer>

{statusMessage && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/50 px-6 backdrop-blur-sm">
    <div className="max-w-md rounded-[32px] border border-white/40 bg-white p-8 text-center shadow-[0_24px_90px_rgba(15,23,42,0.25)]">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
        {statusType === "success" ? (
          <div className="grid grid-cols-5 gap-[2px]">
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-transparent" />

            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />

            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-[#2563ff]" />

            <div className="h-2 w-2 bg-transparent" />
            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-[#2563ff]" />
            <div className="h-2 w-2 bg-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-[2px]">
                            {/* Row 1 */}
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-transparent"></div>


                        {/* Row 2 */}
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>

                        {/* Row 3 */}
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-transparent"></div>

                        {/* Row 4 */}
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-transparent"></div>
                        <div className="h-2 w-2 bg-[#2563ff]"></div>
          </div>
        )}
      </div>

      <h3 className="text-[28px] font-medium tracking-[-0.03em] text-slate-950">
        {statusType === "success" ? "Message received" : "Oops!"}
      </h3>

      <p className="mt-3 text-[17px] leading-7 text-slate-600">
        {statusMessage}
      </p>

      <button
        type="button"
        onClick={() => {
          setStatusMessage("");
          setStatusType("");
        }}
        className="mt-8 rounded-full bg-[#2563ff] px-8 py-3 text-[15px] font-medium text-white transition hover:scale-105 hover:bg-[#1f4ed8]"
      >
        Close
      </button>
    </div>
  </div>
)}

<Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  strategy="afterInteractive"
/>

    </main>
  );
}