"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/lib/types";

export function HeroRotator({ items }: { items: GalleryItem[] }) {
  const slides = useMemo(() => items.filter(Boolean).slice(0, 5), [items]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(t);
  }, [slides.length]);

  const active = slides[idx];
  if (!active) return null;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-100 dark:border-zinc-800/70 dark:bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={{ opacity: 0.0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.0, scale: 0.995 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="text-sm font-semibold text-white">{active.title}</div>
        <div className="mt-1 text-xs text-white/80">{active.category} • {active.year}</div>
        <div className="mt-3 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Show ${s.title}`}
              onClick={() => setIdx(i)}
              className={i === idx ? "h-1.5 w-6 rounded-full bg-white" : "h-1.5 w-6 rounded-full bg-white/40 hover:bg-white/60"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
