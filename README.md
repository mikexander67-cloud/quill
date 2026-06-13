# Quill — AI Writing Studio for Marketing Teams

Quill turns a one-line brief into on-brand blog posts, emails, and social copy in seconds.
It's a full SaaS front-to-back: marketing site, auth screens, an app dashboard, and an AI
editor backed by the **Claude API** — with a graceful demo mode so it works for anyone the
moment they open it.

> Designed & built by **Michael Ojiemeke** with Claude Code. Next.js 16 · React 19 · Tailwind v4 · Claude API.

---

## Why this project exists

This is a portfolio build that demonstrates how I ship a production-grade AI SaaS MVP end to
end: information architecture, a polished marketing site, an authenticated app shell, a real
LLM integration with sensible fallbacks, and a clean, typed codebase that deploys in one click.

It mirrors the kind of product a content/marketing team would actually pay for — and the kind
of MVP I build for clients.

## Features

- **Marketing site** — hero, product preview, features, "how it works", pricing, and CTA.
- **Auth screens** — sign in / sign up UI with social + email flows.
- **App dashboard** — usage stats, monthly quota meter, and a recent-drafts grid.
- **AI editor** — write a brief, pick channel / tone / brand voice, and generate a draft.
  - Inline "make it shorter / punchier / add a CTA" refinement actions.
  - Copy-to-clipboard, live word count, and a source badge (Claude vs. demo).
- **Library, Brand Voices, Settings** — the supporting screens a real app needs.
- **Claude API integration** with a deterministic **demo fallback** so the live demo never breaks.

## Tech stack

| Layer       | Choice                                  |
|-------------|------------------------------------------|
| Framework   | Next.js 16 (App Router, RSC, Turbopack)  |
| Language    | TypeScript (strict)                      |
| UI          | Tailwind CSS v4, hand-built components    |
| AI          | `@anthropic-ai/sdk` → Claude API          |
| Deploy      | Vercel (zero-config)                      |

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

The app runs out of the box in **demo mode** — no API key required.

### Enable live Claude generation (optional)

```bash
cp .env.example .env.local
# then set:
# ANTHROPIC_API_KEY=sk-ant-...
```

With a key set, the editor calls Claude (`claude-opus-4-8`) for real generation and shows a
"Claude API" badge. Without it, a local templated generator produces a draft and shows a
"Demo mode" badge. Either way the UX is identical.

## How it works

```
Brief + channel + tone + brand voice
        │
        ▼
  POST /api/generate
        │
        ├── ANTHROPIC_API_KEY set?  ── yes ──▶ Claude API ──▶ draft
        │
        └── no / error ───────────────────────▶ demoDraft() ─▶ draft
```

The route (`src/app/api/generate/route.ts`) lazy-imports the SDK so the app builds and runs
even without it, and falls back to the local generator on any error — the demo is never a dead
end in front of a client.

## Project structure

```
src/
├── app/
│   ├── page.tsx                 # marketing site
│   ├── login / signup           # auth screens
│   ├── dashboard/               # authenticated app shell
│   │   ├── page.tsx             # overview + stats
│   │   ├── editor/              # AI editor (client)
│   │   ├── library / voices / settings
│   └── api/generate/route.ts    # Claude integration + fallback
├── components/                  # sidebar, chrome, icons, auth card
└── lib/                         # site config + demo content/generator
```

## Deploy

See [DEPLOY.md](DEPLOY.md) for the one-click Vercel walkthrough.

---

© Quill — a demo SaaS product by Michael Ojiemeke.
