import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { PRODUCTION_ORIGIN, isStagingHost, requestPublicOrigin } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("x-forwarded-host") || (await headers()).get("host") || "";
  const allowAll = [
    { userAgent: "*", allow: "/" },
    { userAgent: "AhrefsBot", allow: "/" },
    { userAgent: "AhrefsSiteAudit", allow: "/" },
    { userAgent: "AhrefsSiteCrawler", allow: "/" },
    { userAgent: "Screaming Frog SEO Spider", allow: "/" },
  ];

  if (isStagingHost(host)) {
    const origin = await requestPublicOrigin();
    return {
      rules: allowAll,
      sitemap: `${origin}/sitemap.xml`,
    };
  }

  return {
    rules: allowAll,
    sitemap: `${PRODUCTION_ORIGIN}/sitemap.xml`,
    host: PRODUCTION_ORIGIN.replace(/^https:\/\//, ""),
  };
}
