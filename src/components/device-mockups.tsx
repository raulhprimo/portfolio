"use client";

import Image from "next/image";

// ─── MacBook Pro Mockup ────────────────────────────────────────────────────
// Código exato do cuicui.day (component.mackbook.tsx)
// Adaptado: Tailwind v4 → v3 (bg-linear-to-b → bg-gradient-to-b, z-1→z-[1], etc.)
// Adaptado: dimensões fixas → responsivas via aspect-ratio + percentuais

type MacbookMockupProps = {
  video?: string;
  title: string;
  className?: string;
};

export function MacbookMockup({ video, title, className }: MacbookMockupProps) {
  return (
    <div
      className={`relative z-[1] mx-0 my-4 w-full ${className ?? ""}`}
      style={{ aspectRatio: "740 / 434" }}
    >
      {/* Tela */}
      <div
        className="relative z-[1] mx-auto my-0 overflow-hidden rounded-[20px] border-2 border-[rgb(200,202,203)] bg-[rgb(13,13,13)]"
        style={{
          width: "83.5%",    /* 618/740 */
          height: "96.3%",   /* 418/434 */
          padding: "9px 9px 23px 9px",
        }}
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-label={`${title} demo video`}
            className="relative h-full w-full rounded-t-[10px] border-2 border-solid border-[rgb(18,18,18)] object-cover object-top"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center rounded-t-[10px] border-2 border-solid border-[rgb(18,18,18)] bg-neutral-900 text-sm text-neutral-500">
            Demo coming soon
          </div>
        )}
        {/* Gradiente inferior */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-b from-[#272727] to-[#0d0d0d]" />
      </div>

      {/* Camera notch */}
      <div className="absolute left-1/2 top-[11px] z-[2] -ml-8 h-3 w-16 rounded-bl rounded-br bg-[rgb(13,13,13)]" />

      {/* Base / Hinge */}
      <div
        className="relative -mt-2.5 z-[9] w-full rounded-[2px_2px_12px_12px] border border-[rgb(160,163,167)]"
        style={{
          height: "5.5%",  /* 24/434 */
          background: "radial-gradient(circle, rgb(226,227,228) 85%, rgb(200,202,203) 100%)",
          boxShadow: "rgb(108,112,116) 0px -2px 8px 0px inset",
        }}
      >
        <div className="absolute left-1/2 top-0 -ml-[60px] h-2.5 w-[120px] rounded-b-[10px] shadow-[inset_0_0_4px_2px_#babdbf]" />
      </div>

      {/* Pés */}
      <div className="absolute -bottom-0.5 left-[16%] h-0.5 w-[5.4%] rounded-b-full bg-neutral-600" />
      <div className="absolute -bottom-0.5 right-[16%] h-0.5 w-[5.4%] rounded-b-full bg-neutral-600" />
    </div>
  );
}

// ─── iPhone 14 Pro Mockup ─────────────────────────────────────────────────
// Código exato do cuicui.day (iphone14.variant.tsx)
// Adaptado: Tailwind v4 → v3
// Adaptado: dimensões fixas → responsivas via aspect-ratio + percentuais

type IPhoneMockupProps = {
  image?: string;
  title: string;
  index?: number;
};

export function IPhoneMockup({ image, title, index = 0 }: IPhoneMockupProps) {
  // Cuicui usa dimensões fixas 428×868. Escalamos via CSS transform
  // para caber no container, igual ao MacBook.
  return (
    <div className="w-full" style={{ aspectRatio: "428 / 868" }}>
      <div
        className="origin-top-left"
        style={{
          width: 428,
          height: 868,
          transform: "scale(var(--iphone-scale, 1))",
        }}
      >
        {/* ── Código EXATO do cuicui (iphone14.variant.tsx) ── */}
        <div className="relative z-10 h-[868px] w-[428px]">
          <div className="relative z-30 h-[868px] w-[428px] rounded-[68px] border border-[#1B1721] bg-black p-[19px] shadow-[inset_0_0_4px_2px_rgb(192,183,205),inset_0_0_0_6px_rgb(52,44,63)]">
            <div className="absolute left-0 top-[85px] z-20 h-[7px] w-5 bg-black/25" />
            <div className="absolute right-0 top-[85px] z-20 h-[7px] w-5 bg-black/25" />
            <div className="absolute bottom-[85px] left-0 z-20 h-[7px] w-5 bg-black/25" />
            <div className="absolute bottom-[85px] right-0 z-20 h-[7px] w-5 bg-black/25" />
            <div className="absolute right-[85px] top-0 z-20 h-5 w-[7px] bg-black/25" />
            <div className="absolute bottom-0 left-[85px] z-20 h-5 w-[7px] bg-black/25" />
            {image ? (
              <Image
                src={image}
                alt={`${title} screen ${index + 1}`}
                width={390}
                height={830}
                className="relative z-20 block h-full w-full rounded-[49px] bg-black object-cover object-top"
              />
            ) : (
              <div className="relative z-20 block h-full w-full rounded-[49px] bg-black" />
            )}
          </div>

          <div className="absolute left-1/2 top-[29px] z-40 ml-[-60px] flex h-[35px] w-[120px] items-center justify-end rounded-[20px] bg-black pr-4">
            <div
              className="size-2.5 rounded-full"
              style={{
                background:
                  "radial-gradient(farthest-corner at 20% 20%,#6074bf 0,transparent 40%),radial-gradient(farthest-corner at 80% 80%,#513785 0,#24555e 20%,transparent 50%)",
              }}
            />
          </div>
          <div className="block" />
          <div className="absolute left-[-2px] top-[115px] h-[32px] w-[3px] rounded-[2px] bg-[#1B1721]" />
          <div className="absolute right-[-2px] top-[200px] h-[100px] w-[3px] rounded-[2px] bg-[#1B1721]" />
          <div className="absolute left-[-2px] top-[180px] h-[70px] w-[3px] rounded-[2px] bg-[#1B1721]" />
          <div className="absolute left-[-2px] top-[270px] h-[70px] w-[3px] rounded-[2px] bg-[#1B1721]" />
          <div className="block" />
        </div>
      </div>
    </div>
  );
}
