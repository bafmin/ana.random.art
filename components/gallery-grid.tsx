"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories = ["All", "Character", "Portrait", "Character Sheet", "Sketch"] as const;

export function GalleryGrid({ items, initialCategory = "All" }: { items: GalleryItem[]; initialCategory?: typeof categories[number] }) {
  const [active, setActive] = useState<typeof categories[number]>(initialCategory);
  const [open, setOpen] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter(i => i.category === active);
  }, [active, items]);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    items.forEach((i) => m.set(i.category, (m.get(i.category) ?? 0) + 1));
    return m;
  }, [items]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm",
              active === c
                ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                : "border-zinc-300 text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
            )}
            type="button"
          >
            <span>{c}</span>
            <span className={cn("ml-2 text-xs", active === c ? "text-white/80 dark:text-zinc-950/70" : "text-zinc-500 dark:text-zinc-400")}>
              {c === "All" ? items.length : (counts.get(c) ?? 0)}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <motion.button
            key={i.id}
            type="button"
            onClick={() => setOpen(i)}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="group relative rounded-2xl border border-zinc-200/70 bg-white/60 p-2 text-left shadow-sm transition dark:border-zinc-800/70 dark:bg-zinc-900/20 card-glow shine hover:shadow-md"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={i.src}
                alt={i.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={i.id === "art-12"}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-zinc-800 dark:text-zinc-200">{i.category}</div>
              <div className="text-xs text-zinc-500">{i.year}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(null)}
          >
            <motion.div
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-950"
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                <div>
                  <div className="text-sm font-semibold">{open.title}</div>
                  <div className="text-xs text-zinc-500">{open.category} • {open.year}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
                >
                  Close
                </button>
              </div>
              <div className="relative max-h-[75vh] w-full bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={open.src}
                  alt={open.alt}
                  width={open.width}
                  height={open.height}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
