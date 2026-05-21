"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type Testimonial = {
  authorName: string;
  authorPosition: string;
  company: string;
  quote: string;
  rating: number;
};

type TestimonialsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  testimonials: Testimonial[];
  cta: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    successTitle: string;
    successMessage: string;
    ratingLabel: string;
  };
};

function StarRating({
  value,
  onChange,
  readOnly = false,
  size = "md",
}: {
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
  size?: "sm" | "md";
}) {
  const [hovered, setHovered] = useState(0);
  const active = readOnly ? value : hovered || value;
  const starSize = size === "sm" ? "size-4" : "size-5";

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readOnly && setHovered(star)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          className={cn(
            "transition-transform",
            !readOnly && "cursor-pointer hover:scale-110 focus:outline-none",
            readOnly && "cursor-default"
          )}
          aria-label={`${star} star`}
        >
          <Star
            className={cn(
              starSize,
              active >= star
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-foreground/20"
            )}
          />
        </button>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-card p-6 shadow-sm">
      <StarRating value={t.rating} readOnly size="sm" />
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-foreground/8 pt-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-foreground/8 text-xs font-bold uppercase text-foreground/60">
          {t.authorName
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{t.authorName}</p>
          <p className="truncate text-xs text-muted-foreground">
            {t.authorPosition}
            {t.company ? ` · ${t.company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialForm({ cta }: { cta: TestimonialsSectionProps["cta"] }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Required";
    if (!message.trim()) e.message = "Required";
    if (rating === 0) e.rating = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-foreground/8 text-2xl">
          🙏
        </div>
        <h3 className="text-lg font-bold">{cta.successTitle}</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {cta.successMessage}
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder={cta.namePlaceholder}
            className={cn(inputBase, errors.name && "border-red-400/60")}
          />
          {errors.name && (
            <span className="text-xs text-red-400">{errors.name}</span>
          )}
        </div>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={cta.companyPlaceholder}
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors((prev) => ({ ...prev, message: "" }));
          }}
          placeholder={cta.messagePlaceholder}
          rows={4}
          className={cn(
            inputBase,
            "resize-none",
            errors.message && "border-red-400/60"
          )}
        />
        {errors.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{cta.ratingLabel}</span>
          <StarRating value={rating} onChange={(v) => {
            setRating(v);
            setErrors((prev) => ({ ...prev, rating: "" }));
          }} />
        </div>
        {errors.rating && (
          <span className="text-xs text-red-400">{errors.rating}</span>
        )}
      </div>

      <Button type="submit" className="self-start rounded-xl px-6">
        {cta.submitLabel}
      </Button>
    </form>
  );
}

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  testimonials,
  cta,
}: TestimonialsSectionProps) {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-12">
      {/* Header */}
      <header className="flex flex-col gap-3">
        <div className="inline-flex w-fit rounded-full border border-foreground/10 bg-foreground px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-background">
          {eyebrow}
        </div>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      </header>

      {/* Testimonial cards */}
      {testimonials.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      )}

      {/* CTA form */}
      <div className="rounded-2xl border border-foreground/10 bg-card p-6 sm:p-8">
        <div className="mb-6 space-y-1">
          <h3 className="text-lg font-bold">{cta.title}</h3>
          <p className="text-sm text-muted-foreground">{cta.subtitle}</p>
        </div>
        <TestimonialForm cta={cta} />
      </div>
    </div>
  );
}
