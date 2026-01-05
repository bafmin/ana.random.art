"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories = ["All", "Character", "Portrait", "Character Sheet", "Sketch"] as const;

export function GalleryGrid({ items, initialCategory = "All" }: { items: GalleryItem[]; initialCategory?: typeof categories[number] }) {
  const [active, setActive] = useState<typeof categories[number]>(initialCategory);
  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter(i => i.category === active);
  }, [active, items]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm",
              active === c ? "border-white bg-white text-zinc-950" : "border-zinc-700 text-zinc-200 hover:border-zinc-500"
            )}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <a key={i.id} href={i.src} target="_blank" rel="noreferrer" className="group rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-3 hover:border-zinc-700">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-900">
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
              <div className="text-sm text-zinc-200">{i.category}</div>
              <div className="text-xs text-zinc-500">{i.year}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
