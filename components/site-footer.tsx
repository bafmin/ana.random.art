import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-zinc-800/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} {site.artist}</div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">Instagram</Link>
          <Link className="hover:text-white" href={`mailto:${site.email}`}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
