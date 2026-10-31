"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { EMAIL, GITHUB, LINKEDIN, RESUME } from "@/lib/site";

type Cmd = { label: string; hint: string; run: () => void };

function go(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const opener = useRef<Element | null>(null);

  const cmds: Cmd[] = useMemo(() => [
    { label: "Experience", hint: "Jump to section", run: () => go("work") },
    { label: "Projects", hint: "Jump to section", run: () => go("projects") },
    { label: "Skills", hint: "Jump to section", run: () => go("skills") },
    { label: "How I work", hint: "Jump to section", run: () => go("approach") },
    { label: "About", hint: "Jump to section", run: () => go("about") },
    { label: "Contact", hint: "Jump to section", run: () => go("contact") },
    { label: "Open resume", hint: "PDF", run: () => window.open(RESUME, "_blank", "noopener") },
    { label: "Email Akash", hint: EMAIL, run: () => { window.location.href = `mailto:${EMAIL}`; } },
    { label: "Open GitHub", hint: "New tab", run: () => window.open(GITHUB, "_blank", "noopener") },
    { label: "Open LinkedIn", hint: "New tab", run: () => window.open(LINKEDIN, "_blank", "noopener") },
    { label: "Toggle theme", hint: "Dark or light", run: () => document.querySelector<HTMLButtonElement>(".theme-toggle")?.click() },
  ], []);

  const list = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); toggle(); }
    };
    const onOpen = () => toggle(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("open-palette", onOpen); };
  });

  function toggle(force?: boolean) {
    const next = force ?? !open;
    if (next) { opener.current = document.activeElement; setQ(""); setSel(0); }
    else (opener.current as HTMLElement | null)?.focus?.();
    setOpen(next);
  }

  useEffect(() => { if (open) setTimeout(() => input.current?.focus(), 10); }, [open]);

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(list.length - 1, s + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
    else if (e.key === "Enter" && list[sel]) { e.preventDefault(); const c = list[sel]; toggle(false); setTimeout(c.run, 50); }
    else if (e.key === "Escape") { e.preventDefault(); toggle(false); }
    else if (e.key === "Tab") { e.preventDefault(); }
  }

  return (
    <AnimatePresence>
      {open && (
        <m.div className="palette-backdrop" onClick={() => toggle(false)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <m.div className="palette" role="dialog" aria-modal="true" aria-label="Command menu" onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18 }}>
            <div className="palette-input">
              <span aria-hidden="true">›</span>
              <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setSel(0); }} onKeyDown={onInputKey}
                placeholder="Type a command or section" aria-label="Search commands"
                role="combobox" aria-expanded="true" aria-controls="palette-list"
                aria-activedescendant={list[sel] ? `cmd-${sel}` : undefined} autoComplete="off" spellCheck={false} />
              <kbd>esc</kbd>
            </div>
            <ul id="palette-list" role="listbox" aria-label="Commands">
              {list.map((c, i) => (
                <li key={c.label} id={`cmd-${i}`} role="option" aria-selected={i === sel}
                  className={i === sel ? "is-sel" : undefined}
                  onMouseEnter={() => setSel(i)} onClick={() => { toggle(false); setTimeout(c.run, 50); }}>
                  <span>{c.label}</span><span className="cmd-hint">{c.hint}</span>
                </li>
              ))}
              {list.length === 0 && <li className="empty" role="option" aria-selected="false">No matching command</li>}
            </ul>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
