import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "HOD Portal",
  description:
    "Department dashboard for KACST heads of department to manage faculty, courses, approvals and reports.",
  path: "/hod-portal",
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
