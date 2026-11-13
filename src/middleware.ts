import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isStagingHost } from "@/lib/site";

export function middleware(request: NextRequest) {
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  const url = request.nextUrl;

  if (host.split(":")[0].toLowerCase() === "www.alvernadental.com") {
    const target = url.clone();
    target.hostname = "alvernadental.com";
    target.protocol = "https:";
    target.port = "";
    return NextResponse.redirect(target, 301);
  }

  const response = NextResponse.next();
  if (isStagingHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|webp|avif|svg|mp4|pdf|woff2|ico)$).*)"],
};
