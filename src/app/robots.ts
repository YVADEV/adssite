import type { MetadataRoute } from "next";

const AI_CRAWLERS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_CRAWLERS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
  };
}
