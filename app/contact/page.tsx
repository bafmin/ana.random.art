    import Link from "next/link";
    import { site } from "@/lib/site";

    export default function ContactPage() {
      return (
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p className="max-w-prose text-zinc-300">
              For commissions, include project type, deadline, and references. Email is fastest.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-5">
              <div className="text-sm font-semibold">Email</div>
              <div className="mt-2 text-sm text-zinc-300">{site.email}</div>
              <Link className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200" href={`mailto:${site.email}`}>
                Send email
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-5">
              <div className="text-sm font-semibold">Instagram</div>
              <div className="mt-2 text-sm text-zinc-300">DM for quick questions.</div>
              <Link className="mt-4 inline-block rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 hover:border-zinc-500" href={site.instagram} target="_blank" rel="noreferrer">
                Open Instagram
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/20 p-5">
            <div className="text-sm font-semibold">Commission email template</div>
            <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-zinc-950 p-4 text-sm text-zinc-200">Name:
Project type:
Usage: personal / commercial
Deadline:
Budget range:
References links:
Notes:</pre>
          </div>
        </div>
      );
    }
