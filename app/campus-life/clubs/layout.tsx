import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Clubs & Organizations",
  description:
    "Student clubs and organizations at KACST — academic, cultural, technical and community groups where students build skills and leadership.",
  path: "/campus-life/clubs",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
