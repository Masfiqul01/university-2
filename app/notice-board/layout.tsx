import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Notice Board",
  description:
    "Official notices, academic announcements, examination updates and important circulars from Khanjahan Ali College of Science & Technology.",
  path: "/notice-board",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
