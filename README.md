# Akash Kulkarni, portfolio

My personal portfolio, built with **Next.js 16**, **React 19**, **TypeScript** and **Framer Motion**.
Dark theme by default, with a light theme one click away.

Live at **https://akaskulkarni-portfolio.vercel.app**

## Run it on your computer

You need Node.js 20 or newer. Check with `node -v`.

```bash
cd portfolio-site
npm install          # first time only
npm run dev          # live reloading while you edit
```

Open http://localhost:3000. Edits to any file show up in the browser right away.

To see the real production version (faster, and with all security headers on):

```bash
npm run build
npm run start
```

Then open http://localhost:3000 again. Press Ctrl+C in the terminal to stop the server.

## Where to change things

| What | File |
|---|---|
| Jobs, projects, skills, education, the numbers at the top | `lib/content.ts` |
| Email, GitHub, LinkedIn, resume path, site address | `lib/site.ts` |
| Page layout and section order | `app/page.tsx` |
| Top section with photo and badge | `components/Hero.tsx` |
| Menu and theme toggle | `components/Header.tsx` |
| Colors, fonts, spacing, dark and light themes | `app/globals.css` (colors are at the top) |
| Page title, description, link preview | `app/layout.tsx` |
| Security headers | `next.config.ts` and `proxy.ts` |
| Photos | `public/img/` (keep a 3:4 crop) |
| Resume | `public/resume/Akash_Kulkarni_Resume.pdf` (keep the same name) |

Technology logos come from the `simple-icons` package. To add one, import it at the top of `lib/content.ts`, for example `siKubernetes`, and add `{ name: "Kubernetes", icon: siKubernetes }` to a skill group.

House style for all text on the site: no hyphens and no dashes. Write "full stack", "real time", "2022 to 2024".

## Before each release

1. The public address is set in `lib/site.ts`. To use a custom domain, set `NEXT_PUBLIC_SITE_URL` in your hosting settings and redeploy.
2. Run `npm run build` and fix anything it reports.
3. Run `npm audit --omit=dev` and make sure it says 0 vulnerabilities.

## Project layout

```
app/
  layout.tsx        fonts, metadata, theme script, motion settings
  page.tsx          every section of the page
  globals.css       all styles and both themes
  not-found.tsx     404 page
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
  fonts/            self hosted Bricolage Grotesque, Inter, IBM Plex Mono
components/         Header, Hero, Reveal, CountUp, CopyEmail, ProjectArt, TechLogo
lib/
  content.ts        all the words on the site
  site.ts           links and the site address
public/             photos, resume, icons, link preview image
proxy.ts            per request Content Security Policy with a nonce
next.config.ts      security headers and image settings
AUDIT.md            audit results
```
