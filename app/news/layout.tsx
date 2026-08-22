import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "News & Events",
  description:
    "Latest news, announcements, achievements and events from Khanjahan Ali College of Science & Technology, Khulna.",
  path: "/news",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
