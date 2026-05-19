"use client";

type PixelTextProps = {
  text: string;
  className?: string;
};

export default function PixelText({ text, className = "" }: PixelTextProps) {
  return (
    <span className={`pixel-text ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="pixel-letter text-white"
          style={{ animationDelay: `0ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}