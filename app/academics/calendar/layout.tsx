import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Academic Calendar",
  description:
    "Semester schedules, registration windows, examination dates, results and academic deadlines for the current academic year at KACST, Khulna.",
  path: "/academics/calendar",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
