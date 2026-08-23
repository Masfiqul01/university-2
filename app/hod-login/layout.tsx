import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"
import { HOD_LOGIN_METADATA } from "@/lib/data/hod-portal"

export const metadata: Metadata = buildMetadata({
  ...HOD_LOGIN_METADATA,
  path: "/hod-login",
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
