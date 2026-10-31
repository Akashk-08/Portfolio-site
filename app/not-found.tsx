import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found | Akash Kulkarni", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="wrap section not-found">
      <p className="kicker">Error 404</p>
      <h1 className="hero-title">Wrong turn.</h1>
      <p className="section-intro">This page does not exist, or it moved. The good stuff is all on the home page.</p>
      <p><a className="btn" href="/">Go to the home page</a></p>
    </main>
  );
}
