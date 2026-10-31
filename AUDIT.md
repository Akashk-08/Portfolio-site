# Audit results

Checked on 31 October 2026 against a local production build (`npm run build` and `npm run start`).
Tools: Lighthouse 12, axe core 4, npm audit, and a script that checks every bit of visible text for dashes.

## Scores

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Mobile (throttled 4G) | 100 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Mobile: first paint 1.1 s, largest paint 1.1 s, blocking time 70 ms, layout shift 0.
Desktop: first paint 0.3 s, largest paint 0.7 s, blocking time 0 ms, layout shift 0.

## Pulseworks CMMS security checklist, applied to this site

The portfolio has no backend, database, login or file uploads, so several items do not apply. Everything that does apply is done.

| # | Check | Result | Status |
|---|---|---|---|
| 1 | Row level security | No database. | N/A |
| 2 | Auth on every API route | No API routes. The only server code is the page itself, robots.txt and sitemap.xml. | N/A |
| 3 | Never trust the frontend | No user input reaches the server. | N/A |
| 4 | Rate limiting | Nothing to limit. No forms, no API. | N/A |
| 5 | Sanitize user input | The site takes no input. The only interactive pieces are the menu, theme toggle and copy email button. | Pass |
| 6 | Parameterized queries | No database. | N/A |
| 7 | Lock down CORS | No API, and no CORS headers are sent, so other sites cannot read anything. | Pass |
| 8 | HTTPS everywhere | Strict-Transport-Security with preload. upgrade-insecure-requests is added automatically when served over HTTPS. | Pass |
| 9 | Verify webhook signatures | No webhooks. | N/A |
| 10 | No commands from the chat | No chat or AI features on the site. | N/A |
| 11 | Debug mode off in production | `productionBrowserSourceMaps: false`, `poweredByHeader: false`, no console logging. | Pass |
| 12 | Claude security review | Done as part of this build: headers, scripts, dependencies and secrets reviewed. | Pass |
| 13 | Private storage buckets | No cloud storage. All files are served from `public/`. | N/A |
| 14 | Lock dangerous tools | No admin tools. | N/A |
| 15 | Hide admin pages properly | No admin pages. | N/A |
| 16 | Update vulnerable packages | `npm audit`: 0 vulnerabilities on Next.js 16.4.3. Moved off Next.js 15 because its bundled PostCSS had a high advisory. | Pass |
| 17 | Security headers | Content-Security-Policy with a fresh nonce per request and `strict-dynamic` (fixes the "no CSP yet" gap from the CMMS audit), HSTS, X-Content-Type-Options, X-Frame-Options DENY, frame-ancestors none, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy, Cross-Origin-Resource-Policy. | Pass |
| 18 | Check file upload types | No uploads. | N/A |
| 19 | Stop IDOR bugs, log admin actions | No records or accounts. | N/A |

Also from the CMMS report:
- **Secrets in git (F-001).** None in the project. `.env` and `.env*.local` are in `.gitignore`, along with `.agents/`, `.claude/` and `skills-lock.json`.
- **XSS and unsafe HTML.** The only `dangerouslySetInnerHTML` uses are the fixed theme script (nonce protected) and the JSON-LD block built from constants. Neither takes any input.
- **Tokens in localStorage.** localStorage holds one value, the visitor's theme choice.
- **Old site's Firebase key.** The old site had a Firebase config in script.js. That file is gone and nothing here talks to Firebase.

## Accessibility (WCAG 2.2 AA)
- axe core: 0 violations in dark and light themes at 1440px and 375px.
- Lowest text contrast is 5.06:1. Control borders meet 3:1.
- Skip to content link is the first Tab stop. Visible focus ring everywhere.
- Mobile menu has aria-expanded and aria-controls, closes on Escape and returns focus, and closes on outside click.
- Every tap target is at least 44 by 44 px.
- Links that open a new tab say so to screen readers.
- Animated counters give screen readers the final number straight away.
- Framer Motion respects "reduce motion" through `MotionConfig reducedMotion="user"`. Scroll reveals, the counters and the rotating badge all stop.

## Performance
- Framer Motion loads through `LazyMotion` with only the `domAnimation` features.
- The hero text animates position only, never opacity, so the largest paint happens on the first frame.
- Fonts are self hosted through `next/font/local` and preloaded, with no layout shift.
- Photos go through `next/image`, which serves AVIF or WebP at the right size, with the hero photo marked priority.

## SEO
- Title, description, canonical, Open Graph and Twitter tags, plus a 1200x630 preview image.
- `htmlLimitedBots` makes Next.js put every meta tag in the `<head>` for all crawlers.
- JSON-LD Person schema. robots.txt and sitemap.xml are generated from `NEXT_PUBLIC_SITE_URL`.
- The 404 page is marked noindex.

## Responsive
- Checked at 320, 375, 390, 768, 1024 and 1440 px with no horizontal scroll.

## Copy
- Automated check of all visible text, alt text, labels and meta tags: no hyphens or dashes.
