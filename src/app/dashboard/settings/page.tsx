export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
      <p className="mt-1 text-sm text-muted">Manage your workspace and plan.</p>

      <div className="mt-6 space-y-4">
        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">Profile</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Name" value="Michael O." />
            <Field label="Email" value="michael@pulse.app" />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Plan</h2>
              <p className="mt-1 text-sm text-muted">You&apos;re on the Team plan — unlimited drafts.</p>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">Team</span>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">API key (Claude)</h2>
          <p className="mt-1 text-sm text-muted">
            Add an <code className="rounded bg-surface px-1.5 py-0.5 text-xs">ANTHROPIC_API_KEY</code> in your
            environment to switch generation from demo mode to live Claude output.
          </p>
          <input
            disabled
            placeholder="sk-ant-•••• (configured via environment)"
            className="mt-3 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-muted"
          />
        </section>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        defaultValue={value}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
