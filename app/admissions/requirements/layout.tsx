import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Admission Requirements",
  description:
    "Check admission eligibility, required documents, programme conditions and important information before applying to Khanjahan Ali College, Khulna.",
  path: "/admissions/requirements",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
