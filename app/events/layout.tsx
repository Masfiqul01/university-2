import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "University Events",
  description:
    "Upcoming seminars, workshops, competitions and cultural programmes at KACST, with dates, venues and details for students and visitors.",
  path: "/events",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
