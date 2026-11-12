import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CLAUDE_UA =
  /claudebot|claude-user|claude-searchbot|claude-web|anthropic-ai/i;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host") ?? "";
  const ua = request.headers.get("user-agent") ?? "";
  if (host.endsWith(".netlify.app") && !CLAUDE_UA.test(ua)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|webp|avif|svg|mp4|pdf|woff2|ico)$).*)"],
};
