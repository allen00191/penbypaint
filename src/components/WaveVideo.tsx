"use client";

import { useEffect, useRef } from "react";

export function WaveVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyMotion = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        video.pause();
        return;
      }
      void video.play().catch(() => {});
    };

    applyMotion();
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", applyMotion);
    return () => media.removeEventListener("change", applyMotion);
  }, []);

  return (
    <section className="relative bg-white" aria-label="幼兒繪畫工作坊影片">
      <div className="relative h-[min(72vh,560px)] bg-white md:h-[min(70vh,820px)]">
        <div className="absolute inset-0 overflow-hidden bg-white">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full border-0 object-cover outline-none"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/video/KidPaint.webm" type="video/webm" />
          </video>
        </div>

        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px z-[1] h-[26%] w-full md:hidden"
          viewBox="0 0 390 140"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#ffffff"
            d="M0 102C48 128 96 48 156 58C228 70 300 122 390 78V140H0Z"
          />
        </svg>

        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px z-[1] hidden h-[22%] w-full md:block"
          viewBox="0 0 1920 220"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="#ffffff"
            d="M0 168C280 210 420 36 640 68C980 112 1280 188 1600 96C1760 48 1860 18 1920 10V220H0Z"
          />
        </svg>
      </div>
    </section>
  );
}
