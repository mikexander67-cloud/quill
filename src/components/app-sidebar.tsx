"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons";

const nav = [
  { href: "/dashboard", label: "Overview", icon: "M4 13h7V4H4v9zm0 7h7v-5H4v5zm9 0h7V11h-7v9zm0-16v5h7V4h-7z" },
  { href: "/dashboard/editor", label: "New draft", icon: "M12 5v14M5 12h14" },
  { href: "/dashboard/library", label: "Library", icon: "M4 6h16M4 12h16M4 18h10" },
  { href: "/dashboard/voices", label: "Brand voices", icon: "M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-surface md:flex md:flex-col">
      <div className="flex h-16 items-center gap-2 px-5 font-semibold">
        <Logo /> Quill
      </div>
      <nav className="flex-1 space-y-1 px-3 py-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active ? "bg-brand text-brand-foreground" : "text-muted hover:bg-card hover:text-foreground"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-3">
        <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-card hover:text-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/15 text-xs font-semibold text-brand">MO</span>
          <span className="flex flex-col leading-tight">
            <span className="text-foreground">Michael O.</span>
            <span className="text-xs text-muted">Team plan</span>
          </span>
        </Link>
      </div>
    </aside>
  );
}
