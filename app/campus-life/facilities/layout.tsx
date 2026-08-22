import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Campus Facilities",
  description:
    "Explore KACST facilities — laboratories, library, technology-enabled classrooms, auditorium, sports areas and student support spaces.",
  path: "/campus-life/facilities",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
