import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Research Centers",
  description:
    "Specialised research centres at KACST bringing together researchers, students, facilities and interdisciplinary expertise across disciplines.",
  path: "/research/centers",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
