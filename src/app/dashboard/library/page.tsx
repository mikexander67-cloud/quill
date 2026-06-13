import Link from "next/link";
import { recentDrafts } from "@/lib/demo-content";

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold tracking-tight">Library</h1>
      <p className="mt-1 text-sm text-muted">Every draft your team has created.</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-surface text-left text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Channel</th>
              <th className="hidden px-5 py-3 font-medium sm:table-cell">Words</th>
              <th className="px-5 py-3 font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {[...recentDrafts, ...recentDrafts].map((d, i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-surface">
                <td className="px-5 py-3">
                  <Link href="/dashboard/editor" className="font-medium hover:text-brand">
                    {d.title}
                  </Link>
                </td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">{d.channel}</span>
                </td>
                <td className="hidden px-5 py-3 text-muted sm:table-cell">{d.words}</td>
                <td className="px-5 py-3 text-muted">{d.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
