import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"
import { TEACHER_LOGIN_METADATA } from "@/lib/data/teacher-portal"

export const metadata: Metadata = buildMetadata({
  ...TEACHER_LOGIN_METADATA,
  path: "/teacher-login",
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
