import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Undergraduate Admission",
  description:
    "Undergraduate admission at KACST: eligibility, required documents, programme conditions and how to prepare a complete honours application.",
  path: "/admissions/undergraduate",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
