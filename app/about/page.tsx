import Link from "next/link";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="max-w-prose text-zinc-300">
          Ana Hernández is a digital artist focused on character creation, portraits, and design sheets.
          She works with strong silhouettes, expressive faces, and clean color.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-5">
          <div className="text-sm font-semibold">Tools</div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            <li>Procreate, Photoshop, Clip Studio, Krita (edit this)</li>
            <li>Sketch, line, color, final render</li>
            <li>Character sheets and turnarounds</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-5">
          <div className="text-sm font-semibold">Links</div>
          <div className="mt-3 space-y-2 text-sm">
            <Link className="block text-zinc-200 hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <Link className="block text-zinc-200 hover:text-white" href={`mailto:${site.email}`}>
              Email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
