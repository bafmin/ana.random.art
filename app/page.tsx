import Link from "next/link";
import Image from "next/image";
import { GalleryGrid } from "@/components/gallery-grid";
import { HeroRotator } from "@/components/hero-rotator";
import { gallery, site } from "@/lib/site";

export default function Page() {
  const featured = [gallery[11], gallery[8], gallery[5], gallery[0], gallery[9], gallery[12]].filter(Boolean);

  return (
    <div className="relative space-y-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-70 dark:opacity-35" />
      <section className="grid items-start gap-10 pt-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">Character creation</span> and digital illustration
          </h1>
          <p className="max-w-prose text-base text-zinc-700 dark:text-zinc-300">
            Digital artist focused on character design. Original characters, portraits, and clean sheets for story-ready worlds.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="relative rounded-full btn-gradient px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              View work
            </a>
            <a href="#contact" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500">
              Contact for commissions
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
              <div className="text-sm font-semibold">Deliverables</div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Concept exploration, final render, or full character sheet.
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
              <div className="text-sm font-semibold">Best for</div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                OC design, portraits, comics, indie games, and gifts.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <Link className="hover:text-zinc-950 dark:hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <Link className="hover:text-zinc-950 dark:hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10">
            <div className="blob absolute left-0 top-6 h-56 w-56 rounded-full bg-pink-500/40 dark:bg-pink-500/25" />
            <div className="blob absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/35 dark:bg-blue-500/20" style={{ animationDelay: "1.2s" }} />
            <div className="blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-500/35 dark:bg-violet-500/20" style={{ animationDelay: "2.1s" }} />
          </div>
          <HeroRotator items={featured} />
        </div>
      </section>

      <section id="work" className="scroll-mt-28 space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Work</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Filter by category. Click any piece to open the full image.
          </p>
        </div>
        <GalleryGrid items={gallery} />
      </section>

      <section id="services" className="scroll-mt-28 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Character-focused work for personal and commercial projects.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Character concepts", d: "Multiple directions, quick iteration." },
            { t: "Turnarounds", d: "Front, back, and key details." },
            { t: "Expression sheets", d: "Emotion range for animation and comics." },
            { t: "Stylized portraits", d: "Characters, people, and OC portraits." }
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
              <div className="text-sm font-semibold">{c.t}</div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="scroll-mt-28 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Process</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Fast feedback loops. Clear milestones.</p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Brief", d: "Goals, references, and style targets." },
            { n: "02", t: "Sketch options", d: "2 to 4 directions, pick one." },
            { n: "03", t: "Refine", d: "Silhouette, shapes, and key details." },
            { n: "04", t: "Final", d: "Color, polish, and delivery." }
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/20">
              <div className="text-xs font-semibold text-zinc-500">{s.n}</div>
              <div className="mt-2 text-sm font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{s.d}</div>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="scroll-mt-28 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Digital character artist. Focused on expressive designs, clean silhouettes, and story-ready details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-pink-500/70 via-violet-500/60 to-cyan-500/70 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ana-900.webp"
                alt="Ana Hernandez"
                width={900}
                height={900}
                priority={false}
                sizes="(max-width: 640px) 90vw, 420px"
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 dark:opacity-80" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Ana creates original characters for personal projects, games, and stories. She works from quick exploration to polished final art, with a clear, client-friendly process.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold">Focus</div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Character concepts</li>
                  <li>Stylized portraits</li>
                  <li>Expression and pose studies</li>
                  <li>Character sheets</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold">Tools</div>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Procreate</li>
                  <li>Photoshop</li>
                  <li>Clip Studio Paint</li>
                  <li>Wacom / iPad</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                Instagram
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <div className="rounded-3xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800/70 dark:bg-zinc-900/20 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Send a short brief. Include references, intended use, deadline, and budget range.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href={`mailto:${site.email}?subject=Commission%20Request`} className="relative rounded-full btn-gradient px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                  Email commission request
                </Link>
                <Link href={site.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500">
                  Message on Instagram
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                <div className="font-semibold text-zinc-950 dark:text-zinc-100">Fast brief template</div>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Project type: portrait, character, or sheet</li>
                  <li>Style references: 2 to 5 links</li>
                  <li>Deliverables: poses, expressions, turnaround</li>
                  <li>Timeline and budget range</li>
                </ul>
              </div>
              <div className="text-xs text-zinc-500">No form by default. Email stays simplest and reliable.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}