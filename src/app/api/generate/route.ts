import { NextRequest, NextResponse } from "next/server";
import { demoDraft } from "@/lib/demo-content";

export const runtime = "nodejs";

type Body = {
  brief?: string;
  channel?: string;
  tone?: string;
  voice?: string;
};

export async function POST(req: NextRequest) {
  const { brief = "", channel = "Email", tone = "Confident", voice = "Default" }: Body =
    await req.json().catch(() => ({}));

  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No key configured → deterministic local draft so the demo always works.
  if (!apiKey) {
    return NextResponse.json({
      draft: demoDraft({ brief, channel, tone }),
      source: "demo",
    });
  }

  try {
    // Imported lazily so the app builds/runs even if the SDK isn't installed.
    const { default: Anthropic } = await import("@anthropic-ai/sdk");
    const client = new Anthropic({ apiKey });

    const system = [
      "You are Quill, an expert marketing copywriter.",
      `Write ${channel} content in a ${tone} tone.`,
      `Brand voice: ${voice}.`,
      "Return only the copy itself — no preamble, no explanations.",
    ].join(" ");

    const msg = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      system,
      messages: [{ role: "user", content: brief || "Write a short announcement." }],
    });

    const draft = msg.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("\n")
      .trim();

    return NextResponse.json({ draft, source: "claude" });
  } catch (err) {
    // On any API error, fall back to the local draft rather than failing the demo.
    console.error("Claude generation failed, using demo fallback:", err);
    return NextResponse.json({
      draft: demoDraft({ brief, channel, tone }),
      source: "demo",
    });
  }
}
