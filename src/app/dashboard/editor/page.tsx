"use client";

import { useState } from "react";
import { brandVoices, channels, tones } from "@/lib/demo-content";

const examples = [
  "Launch email for our new analytics dashboard. Audience: busy founders.",
  "LinkedIn post announcing we just hit 10,000 users.",
  "Blog intro: why most onboarding flows lose users in week one.",
];

export default function EditorPage() {
  const [brief, setBrief] = useState("");
  const [channel, setChannel] = useState(channels[0]);
  const [tone, setTone] = useState(tones[0]);
  const [voice, setVoice] = useState(brandVoices[0].name);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<"claude" | "demo" | null>(null);
  const [copied, setCopied] = useState(false);

  async function generate() {
    if (!brief.trim() || loading) return;
    setLoading(true);
    setDraft("");
    setSource(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brief, channel, tone, voice }),
      });
      const data = await res.json();
      setDraft(data.draft ?? "");
      setSource(data.source ?? "demo");
    } catch {
      setDraft("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function copy() {
    navigator.clipboard.writeText(draft);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[380px_1fr]">
      {/* Composer */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h1 className="text-lg font-semibold">New draft</h1>
        <p className="mt-1 text-sm text-muted">Describe what you need. Quill writes the first draft.</p>

        <label className="mt-5 block text-sm font-medium">Brief</label>
        <textarea
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          rows={4}
          placeholder="e.g. Launch email for our new pricing, aimed at existing customers…"
          className="mt-1.5 w-full resize-none rounded-xl border border-border bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
        />

        <div className="mt-2 flex flex-wrap gap-1.5">
          {examples.map((ex) => (
            <button
              key={ex}
              onClick={() => setBrief(ex)}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-left text-xs text-muted transition hover:border-brand/40 hover:text-foreground"
            >
              {ex.length > 38 ? ex.slice(0, 38) + "…" : ex}
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Select label="Channel" value={channel} onChange={setChannel} options={channels} />
          <Select label="Tone" value={tone} onChange={setTone} options={tones} />
        </div>
        <Select
          className="mt-3"
          label="Brand voice"
          value={voice}
          onChange={setVoice}
          options={brandVoices.map((v) => v.name)}
        />

        <button
          onClick={generate}
          disabled={!brief.trim() || loading}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Spinner /> Writing…
            </>
          ) : (
            <>✨ Generate draft</>
          )}
        </button>
      </div>

      {/* Output */}
      <div className="flex min-h-[420px] flex-col rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="font-medium text-foreground">Draft</span>
            {source && (
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${source === "claude" ? "bg-accent/10 text-accent" : "bg-surface text-muted"}`}>
                {source === "claude" ? "Claude API" : "Demo mode"}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted">
            {draft && <span>{words} words</span>}
            <button
              onClick={copy}
              disabled={!draft}
              className="rounded-lg border border-border px-2.5 py-1 font-medium transition hover:bg-surface disabled:opacity-40"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex-1 p-6">
          {!draft && !loading && (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">✨</div>
              <p className="mt-4 max-w-xs text-sm">
                Your draft will appear here. Write a brief and hit{" "}
                <span className="font-medium text-foreground">Generate</span>.
              </p>
            </div>
          )}
          {loading && (
            <div className="space-y-3">
              {[100, 92, 96, 70, 88, 60].map((w, i) => (
                <div key={i} className="h-3.5 animate-pulse rounded bg-surface" style={{ width: `${w}%` }} />
              ))}
            </div>
          )}
          {draft && !loading && (
            <article className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{draft}</article>
          )}
        </div>

        {draft && !loading && (
          <div className="flex flex-wrap gap-2 border-t border-border px-6 py-3">
            {["Make it shorter", "More casual", "Add a CTA", "Punchier headline"].map((a) => (
              <button
                key={a}
                onClick={generate}
                className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted transition hover:border-brand/40 hover:text-foreground"
              >
                {a}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-surface px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
