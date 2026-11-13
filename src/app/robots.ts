import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { PRODUCTION_ORIGIN, isStagingHost } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("x-forwarded-host") || (await headers()).get("host") || "";

  if (isStagingHost(host)) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRODUCTION_ORIGIN}/sitemap.xml`,
    host: PRODUCTION_ORIGIN.replace(/^https:\/\//, ""),
  };
}
