import type { Metadata } from "next";
import { Assistant, Merriweather } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Pixel Station | Modern Websites. Real Results.",
  description:
    "Pixel Station designs and builds modern websites for businesses, events and brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${assistant.variable} ${merriweather.variable}`}
      >
        {children}
      </body>
    </html>
  );
}