export const site = {
  name: "Quill",
  tagline: "The AI writing studio for marketing teams",
  description:
    "Turn a one-line brief into on-brand blog posts, emails, and social copy in seconds.",
  author: "Michael Ojiemeke",
  year: new Date().getFullYear(),
};

export const features = [
  {
    title: "Brand-aware drafts",
    body: "Quill learns your tone, audience, and product so every draft sounds like you — not a generic robot.",
    icon: "sparkles",
  },
  {
    title: "Built for every channel",
    body: "Blog posts, newsletters, LinkedIn, ad copy, landing pages. One brief, formatted for where it ships.",
    icon: "layers",
  },
  {
    title: "Human-in-the-loop editing",
    body: "Inline rewrite, expand, shorten, and change-tone controls. You stay in control of every word.",
    icon: "wand",
  },
  {
    title: "Team workspaces",
    body: "Shared brand voices, draft history, and approvals so the whole team stays consistent.",
    icon: "users",
  },
  {
    title: "Reusable templates",
    body: "Save your best-performing structures as templates and reuse them across campaigns.",
    icon: "template",
  },
  {
    title: "Export anywhere",
    body: "Copy as Markdown, HTML, or plain text and drop straight into your CMS or ESP.",
    icon: "export",
  },
] as const;

export const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    blurb: "For trying Quill on your next campaign.",
    cta: "Start free",
    featured: false,
    perks: ["50 drafts / month", "3 brand voices", "Markdown & HTML export", "Community support"],
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    blurb: "For marketing teams shipping content weekly.",
    cta: "Start 14-day trial",
    featured: true,
    perks: [
      "Unlimited drafts",
      "Unlimited brand voices",
      "Shared workspaces & approvals",
      "Templates library",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    price: "$99",
    period: "/mo",
    blurb: "For agencies managing many clients.",
    cta: "Talk to sales",
    featured: false,
    perks: ["Everything in Team", "Client sub-workspaces", "SSO & audit log", "API access", "Dedicated manager"],
  },
] as const;
