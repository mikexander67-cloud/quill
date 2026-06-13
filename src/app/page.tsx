import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { FeatureIcon, Check } from "@/components/icons";
import { features, plans, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent_75%)]" />
          <div className="absolute inset-0 bg-radial-brand" />
          <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 text-center sm:pt-28">
            <div className="animate-fade-up mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              New: brand voices that actually sound like you
            </div>
            <h1 className="animate-fade-up mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              From one-line brief to{" "}
              <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                publish-ready copy
              </span>
            </h1>
            <p className="animate-fade-up mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
              {site.name} is the AI writing studio for marketing teams. Describe what you need —
              Quill drafts on-brand blog posts, emails, and social content you can ship today.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition hover:bg-brand-600 sm:w-auto"
              >
                Try the live demo →
              </Link>
              <a
                href="#how"
                className="w-full rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-surface sm:w-auto"
              >
                See how it works
              </a>
            </div>
            <p className="animate-fade-up mt-3 text-xs text-muted">No credit card · Works in your browser</p>

            {/* Product preview */}
            <div className="animate-fade-up mx-auto mt-14 max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-brand/10">
                <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs text-muted">quill.app / editor</span>
                </div>
                <div className="grid gap-px bg-border sm:grid-cols-[1fr_1.4fr]">
                  <div className="bg-card p-5 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">Brief</p>
                    <p className="mt-2 rounded-lg border border-border bg-surface p-3 text-sm">
                      Launch email for our new analytics dashboard. Audience: busy founders. Tone: confident, concise.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Email", "Confident", "Founders"].map((t) => (
                        <span key={t} className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-card p-5 text-left">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted">Draft</p>
                    <p className="mt-2 text-sm font-semibold">Stop guessing. Start seeing.</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Hey {`{first_name}`}, you didn&apos;t start your company to wrangle spreadsheets at midnight.
                      Pulse puts every number that matters on one screen — so the next move is obvious...
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Generated in 2.3s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 text-sm font-medium text-muted">
            <span className="text-xs uppercase tracking-widest">Built for teams at</span>
            {["Northwind", "Lumen", "Cedar", "Orbit", "Bloom"].map((b) => (
              <span key={b} className="text-foreground/70">{b}</span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything a content team needs</h2>
            <p className="mt-3 text-muted">
              Quill is more than a prompt box. It&apos;s a workflow built around how marketing teams actually write.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-lg hover:shadow-brand/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Three steps to publish</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { n: "01", t: "Describe it", d: "Write a one-line brief and pick a channel, tone, and brand voice." },
                { n: "02", t: "Quill drafts it", d: "The Claude API generates a structured, on-brand draft in seconds." },
                { n: "03", t: "Polish & ship", d: "Use inline rewrite tools, then export to your CMS, ESP, or socials." },
              ].map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-sm font-semibold text-brand">{s.n}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, honest pricing</h2>
            <p className="mt-3 text-muted">Start free. Upgrade when your team is shipping every week.</p>
          </div>
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-7 ${
                  p.featured ? "border-brand bg-card shadow-xl shadow-brand/10" : "border-border bg-card"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.blurb}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted">{p.period}</span>
                </div>
                <Link
                  href="/dashboard"
                  className={`mt-5 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition ${
                    p.featured
                      ? "bg-brand text-brand-foreground hover:bg-brand-600"
                      : "border border-border hover:bg-surface"
                  }`}
                >
                  {p.cta}
                </Link>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-accent"><Check /></span>
                      <span className="text-muted">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-600 px-8 py-16 text-center text-brand-foreground">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Write your next campaign in minutes</h2>
              <p className="mx-auto mt-3 max-w-md text-white/80">
                Open the live demo and generate your first on-brand draft right now.
              </p>
              <Link
                href="/dashboard"
                className="mt-7 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg transition hover:bg-white/90"
              >
                Open the Quill demo →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
