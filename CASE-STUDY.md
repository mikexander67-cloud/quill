# Case Study — Quill: an AI Writing Studio for Marketing Teams

**Role:** Product design & full-stack development
**Built with:** Claude Code · Next.js 16 · React 19 · TypeScript · Tailwind v4 · Claude API
**Type:** Demo SaaS product (built to production standard)
**Live demo:** https://quill-rosy-ten.vercel.app · **Source:** https://github.com/mikexander67-cloud/quill

---

## The problem this product solves

Marketing teams spend hours every week turning the same brief — *"we need a launch email,"
"write the LinkedIn post," "draft the blog intro"* — into finished, on-brand copy. Generic AI
chat tools help, but they forget the brand voice, don't fit a team workflow, and produce a wall
of text instead of channel-ready drafts.

**Quill** is a focused SaaS answer: describe what you need, pick the channel, tone, and saved
brand voice, and get a publish-ready draft in seconds — inside an app a team can actually
organize work in.

> I built Quill as a portfolio product to show the full arc of shipping an AI SaaS MVP. The
> scenario is realistic — it's the exact kind of tool a content team buys, and the exact kind
> of MVP I build for clients.

## What I built

A complete SaaS application, front to back:

- **Marketing site** that sells the product: hero with a live product preview, feature grid,
  "how it works," pricing tiers, and conversion CTAs.
- **Authentication screens** (sign in / sign up) with social + email flows.
- **App dashboard** with usage analytics, a monthly quota meter, and a recent-drafts workspace.
- **The AI editor** — the core: a brief composer with channel/tone/brand-voice controls, a
  streaming-style generation experience, inline refinement actions ("make it shorter,"
  "punchier headline," "add a CTA"), live word count, and one-click copy.
- **Supporting screens** a real product needs: content library (table view), brand-voice
  manager, and settings/billing.

## How Claude Code accelerated the build

- **Architecture in one pass.** I used Claude Code to lay out the App Router structure, the
  marketing/app split, and a typed design system before writing feature code.
- **Component generation with consistency.** Tailwind components were generated against a shared
  token set, so the whole app shares one visual language instead of drifting.
- **A robust AI integration.** The `/api/generate` route calls the Claude API server-side, and —
  importantly — falls back to a deterministic local generator when no API key is present or the
  call fails. That design decision means the public demo **never breaks** in front of a client,
  and no API credits are spent on a portfolio link.
- **Ship-ready quality.** Strict TypeScript, a clean production build, and a one-click Vercel
  deploy path.

## A key engineering decision: never show a broken demo

A portfolio app gets opened by strangers on flaky networks with no API key configured. So the
generation endpoint is designed to degrade gracefully:

```
POST /api/generate
  ├── ANTHROPIC_API_KEY present? → Claude API → real draft  ("Claude API" badge)
  └── missing / error           → local generator → draft   ("Demo mode" badge)
```

Same UX either way. This is the kind of production thinking — *what happens when the dependency
is down?* — that separates a demo that survives real users from one that 500s on the first click.

## The outcome

- A polished, **deployable** SaaS MVP that looks and behaves like a real product.
- A clean, typed, well-structured codebase that another developer could extend.
- A live link a prospective client can click, plus source they can inspect.
- Built in a fraction of the usual time by pairing senior engineering judgement with Claude Code.

## What this demonstrates for clients

If you're hiring me to build a SaaS MVP or add AI features to an existing product, Quill shows
I can take a fuzzy idea to a working, attractive, deployable application — with the integration
discipline (fallbacks, server-side keys, typed boundaries) that keeps it stable in production.

---

*Quill is a demonstration product designed and built by Michael Ojiemeke. Brand names shown in
the app (Pulse, Cedar, etc.) are illustrative examples, not real customers.*
