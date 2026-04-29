"use client";

import Image from "next/image";
import { useState } from "react";

type CircularGalleryItem = {
  src: string;
  alt: string;
};

type CircularGalleryProps = {
  items: readonly CircularGalleryItem[];
};

export function CircularGallery({ items }: CircularGalleryProps) {
  const galleryItems = items.length > 0 ? items : [];
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 rounded-[50%] border-t border-dashed border-foreground/15" />
      <div className="flex snap-x gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-1040px)/2))] pb-16 pt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryItems.map((item, index) => {
          const offset = index % 5;
          const translateY = [28, 8, -14, 8, 28][offset];
          const rotate = [-10, -5, 0, 5, 10][offset];
          const itemKey = `${item.src}-${index}`;
          const isExpanded = expandedItem === itemKey;

          return (
            <div
              key={itemKey}
              role="button"
              tabIndex={0}
              aria-label={`Expand ${item.alt}`}
              aria-pressed={isExpanded}
              onClick={() =>
                setExpandedItem((current) =>
                  current === itemKey ? null : itemKey
                )
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setExpandedItem((current) =>
                    current === itemKey ? null : itemKey
                  );
                }
              }}
              className={[
                "group relative h-80 w-64 shrink-0 snap-center cursor-zoom-in overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-xl shadow-foreground/5 outline-none transition-[box-shadow,transform] duration-300 sm:h-[28rem] sm:w-80",
                "[transform:translateY(var(--gallery-y))_rotate(var(--gallery-rotate))]",
                "hover:z-20 hover:[transform:translateY(-8px)_rotate(0deg)_scale(1.08)]",
                "focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:[transform:translateY(-8px)_rotate(0deg)_scale(1.08)]",
                "active:z-20 active:[transform:translateY(-8px)_rotate(0deg)_scale(1.08)]",
                isExpanded
                  ? "z-30 cursor-zoom-out [transform:translateY(-8px)_rotate(0deg)_scale(1.12)]"
                  : "",
              ].join(" ")}
              style={{
                "--gallery-y": `${translateY}px`,
                "--gallery-rotate": `${rotate}deg`,
              } as React.CSSProperties}
              onBlur={() => {
                if (isExpanded) {
                  setExpandedItem(null);
                }
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 360px, 288px"
                quality={100}
                className={[
                  "object-cover transition-[object-fit,transform] duration-500",
                  "group-hover:scale-95 group-hover:object-contain group-focus-visible:scale-95 group-focus-visible:object-contain group-active:scale-95 group-active:object-contain",
                  isExpanded ? "scale-95 object-contain" : "",
                ].join(" ")}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
