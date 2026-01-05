import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-800/70">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Karan Ana Hernández
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/work" className="hover:text-white">Work</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
