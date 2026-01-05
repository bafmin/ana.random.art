import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Karan Ana Hernández | Character Design",
  description: "Digital artist focused on character creation. Portfolio and commissions.",
  openGraph: {
    title: "Karan Ana Hernández | Character Design",
    description: "Digital artist focused on character creation. Portfolio and commissions.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
