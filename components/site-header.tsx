"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; id?: string };

export function SiteHeader() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "Work", href: "#work", id: "work" },
      { label: "Services", href: "#services", id: "services" },
      { label: "Process", href: "#process", id: "process" },
      { label: "About", href: "#about", id: "about" },
      { label: "Contact", href: "#contact", id: "contact" }
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = items.map(i => i.id).filter(Boolean) as string[];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { root: null, rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl",
        scrolled ? "border-zinc-200/70 bg-white/70 dark:border-zinc-800/70 dark:bg-zinc-950/50" : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight gradient-text">
          Karan Ana Hernández
        </Link>

        <nav className="hidden items-center gap-5 text-sm sm:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={cn(
                "relative px-1 py-1 transition hover:text-zinc-950 dark:hover:text-white",
                activeId === i.id ? "text-zinc-950 dark:text-white" : "text-zinc-600 dark:text-zinc-300"
              )}
            >
              {i.label}
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500 transition-transform duration-300",
                  activeId === i.id && "scale-x-100"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Commission
          </a>
        </div>
      </div>
    </header>
  );
}
