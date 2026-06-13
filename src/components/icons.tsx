type IconProps = { className?: string };

export function Logo({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect width="32" height="32" rx="8" fill="url(#qg)" />
      <path
        d="M21.5 9.5c-5 0-9 4-9 8.5 0 1 .2 1.9.5 2.7l-2 2.8 3.4-1c1 .6 2.2 1 3.6 1 5 0 9-4 9-8.5s-4-5.5-5.5-5.5Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path d="M14 18.5c1.8-3 4.6-5 7.8-5.8" stroke="#6d4aff" strokeWidth="1.3" strokeLinecap="round" />
      <defs>
        <linearGradient id="qg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d4aff" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const paths: Record<string, React.ReactNode> = {
  sparkles: (
    <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
  ),
  layers: <path d="M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18 4l-9 5-9-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  wand: <path d="M15 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM4 20l9-9 1.5 1.5-9 9L4 20z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  users: <path d="M16 19v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1M9 11a4 4 0 100-8 4 4 0 000 8zm13 8v-1a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  template: <path d="M4 5h16v14H4V5zm0 5h16M9 10v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  export: <path d="M12 3v12m0-12l-4 4m4-4l4 4M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
};

export function FeatureIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {paths[name] ?? paths.sparkles}
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
