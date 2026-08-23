import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"
import { STUDENT_PORTAL_METADATA } from "@/lib/data/student-portal"

export const metadata: Metadata = buildMetadata({
  ...STUDENT_PORTAL_METADATA,
  path: "/student-portal",
  // Personal student area: reachable, but not indexed.
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
