import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import MotionProvider from "@/components/MotionProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bricolage = localFont({ src: "./fonts/bricolage.woff2", variable: "--font-bricolage", weight: "200 800", display: "swap" });
const inter = localFont({ src: "./fonts/inter.woff2", variable: "--font-inter", weight: "100 900", display: "swap" });
const plex = localFont({
  src: [
    { path: "./fonts/plexmono-400.woff2", weight: "400" },
    { path: "./fonts/plexmono-500.woff2", weight: "500" },
  ],
  variable: "--font-plex", display: "swap", preload: false,
});

const title = "Akash Kulkarni | Full Stack Software Engineer";
const description = "Akash Kulkarni is a full stack software engineer with 3.5+ years in React, TypeScript and AWS. He shipped voice software to 5 million cars and built a maintenance platform for VR simulators.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title, description,
  authors: [{ name: "Akash Kulkarni" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile", siteName: "Akash Kulkarni", title, url: "/",
    description: "I build web apps, voice software for cars, and the tools that keep VR simulators running.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Akash Kulkarni, Full Stack Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title, description: "I build web apps, voice software for cars, and the tools that keep VR simulators running.", images: ["/og.jpg"] },
  icons: { icon: [{ url: "/favicon.svg?v=3", type: "image/svg+xml" }, { url: "/favicon.ico?v=3", sizes: "32x32" }], apple: "/icons/apple-touch-icon.png?v=3" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#12110e", colorScheme: "dark light" };

// Runs before paint: dark by default, light only if the visitor chose it.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark");if(t==="light"){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#f3f0e8")}}catch(e){}})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="en" data-theme="dark" data-motion="on" className={`${bricolage.variable} ${inter.variable} ${plex.variable}`} suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* suppressHydrationWarning: browser extensions like Grammarly add attributes to <body> */}
      <body suppressHydrationWarning>
        <a className="skip" href="#main">Skip to content</a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
