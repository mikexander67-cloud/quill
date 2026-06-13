# Deploying Quill (free, ~5 minutes)

Quill is a standard Next.js app and deploys to **Vercel** with zero configuration.

## Option A — One-click via GitHub (recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Quill: AI writing studio"
   git branch -M main
   git remote add origin https://github.com/<you>/quill.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Pick your `quill` repo → **Deploy** (Vercel auto-detects Next.js).
   - You'll get a live URL like `https://quill-<you>.vercel.app`.

3. **(Optional) Turn on live Claude generation**
   - In Vercel → Project → **Settings → Environment Variables**
   - Add `ANTHROPIC_API_KEY` = your key from https://console.anthropic.com
   - Redeploy. The editor now shows the **"Claude API"** badge.

> Leave the key off and the app stays in **demo mode** — perfect for a public portfolio link
> you don't want burning API credits.

## Option B — Vercel CLI

```bash
pnpm i -g vercel
vercel            # follow prompts → preview URL
vercel --prod     # production URL
```

## Custom domain

In Vercel → **Settings → Domains**, add e.g. `quill.yourdomain.com` and point the DNS record
Vercel shows you. Great for linking from your Upwork profile and portfolio site.

## Notes

- No database required — the demo uses in-app seed content.
- The `ANTHROPIC_API_KEY` is read **server-side only** (in the API route); it is never exposed
  to the browser.
