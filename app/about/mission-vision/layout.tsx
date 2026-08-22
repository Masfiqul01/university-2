import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Mission & Vision",
  description:
    "The mission, vision and core values that shape teaching, research, student support and community engagement at Khanjahan Ali College, Khulna.",
  path: "/about/mission-vision",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
