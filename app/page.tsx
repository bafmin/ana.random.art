import Link from "next/link";
import Image from "next/image";
import { gallery } from "@/lib/site";

export default function Page() {
  const featured = [gallery[11], gallery[8], gallery[5], gallery[0], gallery[9], gallery[12]].filter(Boolean);
  const grid = gallery.slice(0, 12);

  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Character creation and digital illustration
          </h1>
          <p className="max-w-prose text-zinc-300">
            Original characters, portraits, and design sheets. Clean shapes. Clear mood. Ready for stories, games, and comics.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">
              View work
            </Link>
            <Link href="/contact" className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 hover:border-zinc-500">
              Contact for commissions
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-4">
              <div className="text-sm font-semibold">What you get</div>
              <div className="mt-2 text-sm text-zinc-300">Concept exploration, final render, or full character sheet.</div>
            </div>
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-4">
              <div className="text-sm font-semibold">Best for</div>
              <div className="mt-2 text-sm text-zinc-300">OC design, portraits, comics, indie games, and gifts.</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {featured.map((i) => (
            <a key={i.id} href={i.src} target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900">
              <Image src={i.src} alt={i.alt} fill className="object-cover" sizes="33vw" priority />
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Selected work</h2>
          <Link href="/work" className="text-sm text-zinc-300 hover:text-white">See all</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((i) => (
            <a key={i.id} href={i.src} target="_blank" rel="noreferrer" className="group rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-3 hover:border-zinc-700">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-900">
                <Image src={i.src} alt={i.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-zinc-200">{i.category}</div>
                <div className="text-xs text-zinc-500">{i.year}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
