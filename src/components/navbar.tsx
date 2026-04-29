"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: "#hero", label: t.navbar_home },
    { href: "#work", label: t.work_title },
    { href: "#projects", label: t.projects_title },
    { href: "#contact", label: t.contact_title },
  ];

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-8 z-40 hidden justify-center px-6 md:flex">
        <nav className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-foreground/10 bg-background/85 px-4 py-3 shadow-lg shadow-foreground/5 backdrop-blur-xl">
          <Link
            href="#hero"
            className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-muted/50 border border-foreground/10 transition-transform hover:scale-105"
            aria-label={DATA.name}
          >
            <Image
              src="/memoji.png"
              alt={DATA.name}
              width={44}
              height={44}
              className="object-cover"
            />
          </Link>

          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-9 rounded-full"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            <LanguageToggle />
            <ModeToggle />
          </div>
        </nav>
      </header>

      <header className="fixed inset-x-0 top-4 z-40 px-4 md:hidden">
        <nav className="mx-auto flex max-w-sm items-center justify-between rounded-full border border-foreground/10 bg-background/90 px-3 py-2 shadow-lg shadow-foreground/5 backdrop-blur-xl">
          <Link
            href="#hero"
            className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-foreground/10 bg-muted/50"
            aria-label={DATA.name}
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/memoji.png"
              alt={DATA.name}
              width={40}
              height={40}
              className="object-cover"
            />
          </Link>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-10 rounded-full"
            )}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mx-auto mt-2 max-w-sm rounded-2xl border border-foreground/10 bg-background/95 p-3 shadow-xl shadow-foreground/10 backdrop-blur-xl">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-foreground/10 pt-3">
              <div className="flex items-center gap-1">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      target="_blank"
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 rounded-full"
                      )}
                      aria-label={name}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  ))}
              </div>
              <div className="flex items-center gap-1">
                <LanguageToggle />
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
