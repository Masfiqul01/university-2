import type { MetadataRoute } from "next"

import { absoluteUrl, SITE_URL } from "@/lib/seo"

/*
  Public university content stays fully crawlable. Only authentication,
  payment and personal dashboard areas are disallowed.

  Nothing here blocks CSS, JS, fonts or images — Next.js serves those from
  /_next/static, which is intentionally left crawlable so Google can render
  pages properly.
*/

const PRIVATE_PATHS = [
  "/api/",
  "/login",
  "/hod-login",
  "/dashboard",
  "/student-portal",
  "/teacher-portal",
  "/result",
  "/track-status",
  "/pay-fees",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE_PATHS,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  }
}
