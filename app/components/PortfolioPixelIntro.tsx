"use client";

import { motion } from "framer-motion";

const pixels = Array.from({ length: 240 }, (_, index) => {
  const fromTop = index % 2 === 0;

  return {
    id: index,
    x: ((index * 47) % 980) - 490,
    y: fromTop ? -70 - ((index * 13) % 55) : 70 + ((index * 17) % 55),
  };
});

export default function PortfolioPixelIntro() {
  return (
    <div className="relative inline-block overflow-visible">
      <motion.div
        className="pointer-events-none absolute left-0 top-[-30px] z-10 h-[150px] w-full"
        initial="hidden"
        animate="visible"
      >
        {pixels.map((pixel, index) => (
          <motion.span
            key={pixel.id}
            className="absolute h-[4px] w-[4px] bg-white/65"
            style={{
              left: `${(index * 37) % 100}%`,
              top: "50%",
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: pixel.x,
                y: pixel.y,
                scale: 0.4,
              },
              visible: {
                opacity: [0, 1, 0.7, 0],
                x: [pixel.x, pixel.x * 0.22, pixel.x * 0.04],
                y: [pixel.y, pixel.y * 0.22, pixel.y * 0.04],
                scale: [0.35, 0.9, 0.45, 0],
              },
            }}
            transition={{
              duration: 6,
              delay: (index % 28) * 0.02,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.985,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 2.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-20 w-full max-w-5xl text-center text-[52px] font-normal leading-[0.92] tracking-[-0.05em] text-white md:text-[86px]"
      >
        Selected Projects & Digital Work
      </motion.h1>
    </div>
  );
}