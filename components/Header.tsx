"use client";
import { useEffect, useState } from "react";
import { RESUME } from "@/lib/site";
import ScrollProgress from "./ScrollProgress";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

type Theme = "dark" | "light";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setCurrent(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => { const el = document.getElementById(l.href.slice(1)); if (el) spy.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); spy.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".nav-toggle")?.focus(); }
    };
    const onClick = (e: MouseEvent) => { if (!(e.target as Element).closest(".nav")) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [open]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#12110e" : "#f3f0e8");
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="wrap header-inner">
        <a className="mark" href="#top">
          <span className="mark-box" aria-hidden="true">AK</span>
          <span className="mark-name">Akash Kulkarni</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-list" onClick={() => setOpen(!open)}>
            <span className="nav-toggle-bars" aria-hidden="true" />
            <span className="nav-toggle-label">Menu</span>
          </button>
          <ul className={`nav-list${open ? " is-open" : ""}`} id="nav-list">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={current === l.href.slice(1) ? "true" : undefined} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="cmdk-btn" type="button" title="Command menu"
            onClick={() => window.dispatchEvent(new Event("open-palette"))}>
            <span className="sr-only">Open command menu, shortcut </span><kbd>⌘K</kbd>
          </button>
          <button className="theme-toggle" type="button" onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Switch theme">
            <svg className="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            <svg className="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
          </button>
          <a className="btn btn-small" href={RESUME} target="_blank" rel="noopener noreferrer">Resume <span className="sr-only">(PDF, opens in a new tab)</span></a>
        </div>
      </div>
      <ScrollProgress />
    </header>
  );
}
