"use client";

import { Badge } from "@/components/ui/badge";
import { IPhoneMockup, MacbookMockup } from "@/components/device-mockups";
import { LandingGallery } from "@/components/landing-gallery";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type WorkLink = {
  icon: React.ReactNode;
  type: string;
  href: string;
};

type WebWork = {
  title: string;
  href?: string;
  dates: string;
  description: string;
  technologies: readonly string[];
  video?: string;
  links?: readonly WorkLink[];
};

type AppWork = {
  title: string;
  category: string;
  description: string;
  screenshots: readonly string[];
  accent: string;
  logo?: string;
};

type LandingWork = {
  title: string;
  category: string;
  description: string;
  screenshots: readonly string[];
  href?: string;
};

type FeaturedWorksProps = {
  webWorks: readonly WebWork[];
  appWorks: readonly AppWork[];
  landingWorks: readonly LandingWork[];
  labels: {
    eyebrow: string;
    webTitle: string;
    appTitle: string;
    appEyebrow: string;
    landingTitle: string;
    landingEyebrow: string;
    webWorkLabel: string;
    landingPlaceholder: string;
    description: string;
  };
};

/* ─────────────────────────────────────────────────────────────
   Scroll-driven stack effect for a single web-work card
   Each card is sticky; as the NEXT card starts entering the
   viewport the current card scales down + dims, giving the
   "stack" illusion exactly like cuicui's stack components.
───────────────────────────────────────────────────────────── */
function StackCard({
  project,
  index,
  total,
  children,
}: {
  project: WebWork;
  index: number;
  total: number;
  children: React.ReactNode;
}) {
  const articleRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const TOP_OFFSET = 80; // px from top when stuck
  const STEP = 14;       // px between stacked cards

  useEffect(() => {
    const article = articleRef.current;
    const card = cardRef.current;
    if (!article || !card) return;

    const handleScroll = () => {
      const articleRect = article.getBoundingClientRect();
      const cardHeight = card.offsetHeight;

      // How far the article has been scrolled past (0 = just arrived, 1 = fully gone)
      // We only want to scale/dim when a *later* card is pushing this one
      const scrolled = Math.max(0, -articleRect.top + TOP_OFFSET + index * STEP);
      // Normalize to article's scroll range
      const range = articleRect.height - cardHeight;
      const progress = Math.min(1, scrolled / (range || 1));

      const scale = 1 - progress * 0.04;          // max 4% smaller
      const opacity = 1 - progress * 0.25;        // max 25% dimmer
      const translateY = -progress * 8;            // subtle float up

      card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      card.style.opacity = `${Math.max(0.6, opacity)}`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  return (
    <article
      ref={articleRef}
      className="min-h-[90vh] lg:min-h-[96vh]"
    >
      <div
        ref={cardRef}
        className="sticky grid min-h-[600px] overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-2xl shadow-foreground/5 will-change-transform lg:min-h-[560px] lg:grid-cols-[0.66fr_1.34fr] xl:min-h-[580px]"
        style={{
          top: `${TOP_OFFSET + index * STEP}px`,
          zIndex: 10 + index,
          transition: "opacity 80ms linear",
        }}
      >
        {children}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   Auto-scrolling infinite carousel for app screenshots
───────────────────────────────────────────────────────────── */
function AppCarousel({ app }: { app: AppWork }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.55;

  const items =
    app.screenshots.length > 0
      ? [...app.screenshots, ...app.screenshots]
      : Array.from({ length: 10 }, () => "");

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    const container = track.parentElement?.parentElement;
    container?.addEventListener("mouseenter", pause);
    container?.addEventListener("mouseleave", resume);
    container?.addEventListener("touchstart", pause, { passive: true });
    container?.addEventListener("touchend", resume);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      container?.removeEventListener("mouseenter", pause);
      container?.removeEventListener("mouseleave", resume);
      container?.removeEventListener("touchstart", pause);
      container?.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      <div className="overflow-hidden py-0">
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((screenshot, index) => (
            <div
              key={`${app.title}-${screenshot}-${index}`}
              className="flex w-[220px] shrink-0 justify-center [--iphone-card-width:220] sm:w-[260px] sm:[--iphone-card-width:260] md:w-[280px] md:[--iphone-card-width:280]"
              style={{
                '--iphone-scale': "calc(var(--iphone-card-width) / 428)",
              } as React.CSSProperties}
            >
              <IPhoneMockup
                image={screenshot || undefined}
                title={app.title}
                index={index % (items.length / 2)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main FeaturedWorks component
───────────────────────────────────────────────────────────── */
export function FeaturedWorks({
  webWorks,
  appWorks,
  landingWorks,
  labels,
}: FeaturedWorksProps) {
  return (
    <div className="relative left-1/2 w-[min(1240px,calc(100vw-2rem))] -translate-x-1/2 space-y-8 pb-0 pt-8">

      {/* ── Section Header ── */}
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <div className="inline-flex rounded-full border border-foreground/10 bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-background">
          {labels.eyebrow}
        </div>
        <h2 className="text-4xl font-black tracking-normal sm:text-6xl">
          {labels.webTitle}
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          {labels.description}
        </p>
      </header>

      {/* ── Web Works — scroll-driven stacking ── */}
      <div className="space-y-[6vh]">
        {webWorks.map((project, index) => (
          <StackCard
            key={project.title}
            project={project}
            index={index}
            total={webWorks.length}
          >
            {/* Info panel */}
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-9">
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    0{index + 1} / {labels.webWorkLabel}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black leading-none tracking-normal sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 14).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-sm px-2 py-1 text-[11px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Link key={link.href} href={link.href} target="_blank">
                        <Badge className="gap-2 rounded-sm px-3 py-1.5 text-xs">
                          {link.icon}
                          {link.type}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* MacBook mockup panel */}
            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-muted lg:min-h-0"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative w-full px-6">
                  <MacbookMockup video={project.video} title={project.title} />
                </div>
              </Link>
            ) : (
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-muted lg:min-h-0">
              {/* Dot-grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                {/* O componente escala internamente via ResizeObserver */}
                <div className="relative w-full px-6">
                  <MacbookMockup video={project.video} title={project.title} />
                </div>
              </div>
            )}
          </StackCard>
        ))}
      </div>

      {/* ── App Works — auto-carousel ── */}
      <section className="pt-4">
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          {labels.appEyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {labels.appEyebrow}
            </p>
          )}
          <h2 className="text-4xl font-black tracking-normal sm:text-6xl">
            {labels.appTitle}
          </h2>
        </header>

        <div className="mt-20 space-y-12 sm:mt-24">
          {appWorks.map((app) => (
            <article key={app.title} className="space-y-6">
              <div className="mx-auto max-w-xl space-y-2 text-center">
                <h3 className="flex items-center justify-center gap-3 text-3xl font-black tracking-normal sm:text-5xl">
                  {app.logo && (
                    <Image
                      src={app.logo}
                      alt={`${app.title} logo`}
                      width={48}
                      height={48}
                      className="size-10 rounded-xl sm:size-12"
                    />
                  )}
                  {app.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {app.description}
                </p>
              </div>

              <AppCarousel app={app} />
            </article>
          ))}
        </div>
      </section>

      <section className="pt-20">
        <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          {labels.landingEyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {labels.landingEyebrow}
            </p>
          )}
          <h2 className="text-4xl font-black tracking-normal sm:text-6xl">
            {labels.landingTitle}
          </h2>
        </header>

        <div className="mt-5">
          <LandingGallery
            items={landingWorks}
            placeholderLabel={labels.landingPlaceholder}
          />
        </div>
      </section>
    </div>
  );
}
