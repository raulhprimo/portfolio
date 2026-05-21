"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type LandingGalleryItem = {
  title: string;
  href?: string;
  screenshots: readonly string[];
};

type LandingGalleryProps = {
  items: readonly LandingGalleryItem[];
  placeholderLabel: string;
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function getCardStyle(offset: number) {
  const absoluteOffset = Math.abs(offset);
  const isCenter = offset === 0;

  return {
    transform: [
      "translateX(-50%)",
      "translateY(-50%)",
      `translateX(${offset * 26}%)`,
      `translateY(${absoluteOffset * 22}px)`,
      `translateZ(${isCenter ? 120 : -120 - absoluteOffset * 60}px)`,
      `rotateY(${offset * -28}deg)`,
      `scale(${isCenter ? 1 : 0.82 - absoluteOffset * 0.04})`,
    ].join(" "),
    opacity: absoluteOffset > 1 ? 0 : isCenter ? 1 : 0.78,
    zIndex: isCenter ? 30 : 20 - absoluteOffset,
    filter: isCenter ? "none" : "saturate(0.8) brightness(0.92)",
    pointerEvents: absoluteOffset > 1 ? "none" : "auto",
  } as const;
}

export function LandingGallery({
  items,
  placeholderLabel,
}: LandingGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const validItems = useMemo(() => items.filter((item) => item), [items]);

  useEffect(() => {
    if (validItems.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, validItems.length));
    }, 3200);

    return () => window.clearInterval(interval);
  }, [validItems.length]);

  if (validItems.length === 0) return null;

  return (
    <div className="space-y-5">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative mx-auto h-[320px] w-full max-w-5xl perspective-[1800px] sm:h-[460px] lg:h-[620px]">
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0.55)_40%,rgba(255,255,255,0)_75%)]" />
        <div className="absolute left-1/2 bottom-3 h-14 w-[68%] -translate-x-1/2 rounded-full bg-black/10 blur-3xl sm:bottom-6 sm:h-20" />

        {validItems.map((item, index) => {
          const relativeOffset = wrapIndex(index - activeIndex, validItems.length);
          const normalizedOffset =
            relativeOffset > validItems.length / 2
              ? relativeOffset - validItems.length
              : relativeOffset;
          const screenshot = item.screenshots[0];
          const card = (
            <div
              className="group absolute left-1/2 top-1/2 flex h-[250px] w-[92%] max-w-4xl flex-col overflow-hidden rounded-[1.6rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] transition-all duration-700 ease-out sm:h-[360px] sm:w-[86%] lg:h-[500px] lg:w-[82%]"
              style={getCardStyle(normalizedOffset)}
            >
              <div className="z-10 flex h-9 shrink-0 items-center gap-1 border-b border-black/5 bg-white px-4 sm:h-11">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative min-h-0 flex-1 bg-muted">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.06))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                {screenshot ? (
                  <Image
                    src={screenshot}
                    alt={`${item.title} desktop screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                ) : (
                  <div className="absolute inset-4 flex items-center justify-center rounded-[1.2rem] border border-dashed border-foreground/20 bg-background/72 px-6 text-center text-sm text-muted-foreground sm:inset-6">
                    {placeholderLabel}
                  </div>
                )}
              </div>
            </div>
          );

          if (item.href) {
            return (
              <Link
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                className="absolute inset-0 block"
                aria-label={item.title}
              >
                {card}
              </Link>
            );
          }

          return (
            <div key={`${item.title}-${index}`} className="absolute inset-0">
              {card}
            </div>
          );
        })}
      </div>
      </div>

      {validItems.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {validItems.map((item, index) => (
            <button
              key={`${item.title}-dot`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-foreground"
                  : "w-2.5 bg-foreground/20 hover:bg-foreground/35"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
