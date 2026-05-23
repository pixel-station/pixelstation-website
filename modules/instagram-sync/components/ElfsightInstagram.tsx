"use client";

import Script from "next/script";

export function ElfsightInstagram() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <div
        className="elfsight-app-c4c7c152-914d-4dfd-a25f-c6d9ebd068de"
        data-elfsight-app-lazy
      />
    </div>
  );
}

