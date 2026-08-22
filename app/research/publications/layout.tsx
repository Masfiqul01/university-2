import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Research Publications",
  description:
    "Browse research publications and scholarly output from the KACST academic community by year, department, research area and publication type.",
  path: "/research/publications",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
