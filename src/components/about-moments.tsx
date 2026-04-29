import { CircularGallery } from "@/components/circular-gallery";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Moment = {
  title: string;
  dates: string;
  location: string;
  description: string;
  logoUrl?: string;
  galleryImages?: readonly {
    src: string;
    alt: string;
  }[];
};

type AboutMomentsProps = {
  title: string;
  subtitle: string;
  description: string;
  moments: readonly Moment[];
};

export function AboutMoments({
  title,
  subtitle,
  description,
  moments,
}: AboutMomentsProps) {
  return (
    <div className="relative left-1/2 w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 space-y-12 pb-12 pt-0">
      <header className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <div className="inline-flex rounded-full border border-foreground/10 bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-background">
          {title}
        </div>
        <h2 className="text-4xl font-black tracking-normal sm:text-6xl">
          {subtitle}
        </h2>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </header>

      <div className="space-y-24">
        {moments.map((moment, index) => (
          <article key={`${moment.title}-${moment.dates}`} className="space-y-8">
            <div className="grid gap-5 border-t border-dashed border-foreground/20 pt-8 md:grid-cols-[0.45fr_1fr] md:items-start">
              <div className="space-y-3">
                <Badge variant="secondary" className="rounded-sm px-2 py-1">
                  Hackathon {index + 1}
                </Badge>
                <div className="flex items-center gap-3">
                  {moment.logoUrl && (
                    <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-foreground/10 bg-white p-2 shadow-sm sm:size-14">
                      <Image
                        src={moment.logoUrl}
                        alt={`${moment.title} logo`}
                        fill
                        sizes="56px"
                        className="object-contain p-1"
                        quality={100}
                      />
                    </div>
                  )}
                  <h3 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">
                    {moment.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{moment.dates}</span>
                  <span>/</span>
                  <span>{moment.location}</span>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  {moment.description}
                </p>
              </div>
            </div>

            <CircularGallery items={moment.galleryImages ?? []} />
          </article>
        ))}
      </div>
    </div>
  );
}
