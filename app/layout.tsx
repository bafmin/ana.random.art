import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const siteName = "Ana Hernández | Character Artist";
const description = "Digital character artist specializing in expressive, original character creation.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteName,
  description,
  applicationName: siteName,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  },
  openGraph: {
    title: siteName,
    description,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ana Hernández"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
