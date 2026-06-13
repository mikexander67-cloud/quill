import Link from "next/link";
import { recentDrafts, usage } from "@/lib/demo-content";

export default function DashboardOverview() {
  const pct = Math.round((usage.draftsThisMonth / usage.draftsLimit) * 100);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Good morning, Michael 👋</h1>
          <p className="mt-1 text-sm text-muted">Here&apos;s what&apos;s happening in your workspace.</p>
        </div>
        <Link
          href="/dashboard/editor"
          className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600"
        >
          Write something new →
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Drafts this month" value={String(usage.draftsThisMonth)} hint={`${pct}% of plan`} />
        <Stat label="Words generated" value={usage.words.toLocaleString()} hint="across 6 channels" />
        <Stat label="Est. time saved" value={usage.timeSaved} hint="vs. writing manually" />
        <Stat label="Brand voices" value="3" hint="active" />
      </div>

      {/* Usage bar */}
      <div className="mt-4 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Monthly usage</span>
          <span className="text-muted">{usage.draftsThisMonth} / {usage.draftsLimit} drafts</span>
        </div>
        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-surface">
          <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Recent drafts */}
      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent drafts</h2>
        <Link href="/dashboard/library" className="text-sm font-medium text-brand hover:underline">
          View all
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {recentDrafts.map((d) => (
          <Link
            key={d.id}
            href="/dashboard/editor"
            className="group rounded-2xl border border-border bg-card p-5 transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">{d.channel}</span>
              <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted">{d.tone}</span>
            </div>
            <h3 className="mt-3 font-semibold leading-snug group-hover:text-brand">{d.title}</h3>
            <p className="mt-1.5 line-clamp-2 text-sm text-muted">{d.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted">
              <span>{d.words} words</span>
              <span>{d.updated}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-0.5 text-xs text-muted">{hint}</p>
    </div>
  );
}
