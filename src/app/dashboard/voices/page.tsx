import { brandVoices } from "@/lib/demo-content";

export default function VoicesPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Brand voices</h1>
          <p className="mt-1 text-sm text-muted">Teach Quill how each brand should sound.</p>
        </div>
        <button className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600">
          + New voice
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {brandVoices.map((v) => (
          <div key={v.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{v.name}</h3>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <p className="mt-2 text-sm text-muted">{v.desc}</p>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-surface">Edit</button>
              <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-surface">Duplicate</button>
            </div>
          </div>
        ))}
        <button className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-border text-sm font-medium text-muted transition hover:border-brand/40 hover:text-foreground">
          + Add a brand voice
        </button>
      </div>
    </div>
  );
}
