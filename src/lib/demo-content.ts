export type Draft = {
  id: string;
  title: string;
  channel: string;
  tone: string;
  updated: string;
  excerpt: string;
  words: number;
};

export const recentDrafts: Draft[] = [
  {
    id: "d1",
    title: "Launch email: Pulse analytics dashboard",
    channel: "Email",
    tone: "Confident",
    updated: "2 hours ago",
    excerpt: "Stop guessing. Start seeing. Pulse puts every number that matters on one screen…",
    words: 312,
  },
  {
    id: "d2",
    title: "Blog: 7 metrics every SaaS founder ignores",
    channel: "Blog post",
    tone: "Authoritative",
    updated: "Yesterday",
    excerpt: "Revenue is a lagging indicator. Here are the seven leading signals that actually predict…",
    words: 1180,
  },
  {
    id: "d3",
    title: "LinkedIn: hiring our first designer",
    channel: "Social",
    tone: "Warm",
    updated: "2 days ago",
    excerpt: "We're a team of engineers who finally admitted we need taste in the room. We're hiring…",
    words: 168,
  },
  {
    id: "d4",
    title: "Landing hero: spring pricing refresh",
    channel: "Landing page",
    tone: "Punchy",
    updated: "4 days ago",
    excerpt: "One plan. Every feature. Half the price of the tools you're stitching together today.",
    words: 96,
  },
];

export const brandVoices = [
  { id: "v1", name: "Pulse — product", desc: "Confident, concise, founder-to-founder." },
  { id: "v2", name: "Cedar — agency", desc: "Polished, warm, consultative." },
  { id: "v3", name: "Default", desc: "Clear, friendly, neutral." },
];

export const channels = ["Email", "Blog post", "Social", "Landing page", "Ad copy", "Newsletter"];
export const tones = ["Confident", "Warm", "Punchy", "Authoritative", "Playful", "Formal"];

export const usage = {
  draftsThisMonth: 38,
  draftsLimit: 100,
  words: 14820,
  timeSaved: "11.5 hrs",
};

/**
 * Deterministic local generator used when no ANTHROPIC_API_KEY is configured,
 * so the demo always works for anyone who opens it.
 */
export function demoDraft({
  brief,
  channel,
  tone,
}: {
  brief: string;
  channel: string;
  tone: string;
}): string {
  const topic = brief.trim() || "your announcement";
  const opener: Record<string, string> = {
    Email: `Subject: A quick update worth your time\n\nHi {first_name},`,
    "Blog post": `# ${capitalize(topic)}\n`,
    Social: ``,
    "Landing page": `## ${capitalize(topic)}\n`,
    "Ad copy": ``,
    Newsletter: `## This week\n`,
  };

  const body = [
    `Here's the short version: ${topic}. We built it because the old way cost you time you'll never get back.`,
    `In a ${tone.toLowerCase()} voice, the point lands fast — no filler, no buzzwords, just the outcome you actually care about.`,
    `What you get: a clear result, set up in minutes, that keeps working while you focus on the work only you can do.`,
  ].join("\n\n");

  const closer: Record<string, string> = {
    Email: `\n\nWant the 2-minute walkthrough? Just reply "yes".\n\n— The team`,
    "Blog post": `\n\n**The takeaway:** small changes compound. Start with one.`,
    Social: `\n\nSave this for your next campaign.`,
    "Landing page": `\n\n[ Start free → ]`,
    "Ad copy": `\n\nTry it free — no card required.`,
    Newsletter: `\n\nThat's it for this week. Forward it to a friend who needs it.`,
  };

  return `${opener[channel] ?? ""}\n${body}${closer[channel] ?? ""}`.trim();
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
