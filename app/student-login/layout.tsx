import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"
import { STUDENT_LOGIN_METADATA } from "@/lib/data/student-portal"

export const metadata: Metadata = buildMetadata({
  ...STUDENT_LOGIN_METADATA,
  path: "/student-login",
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
