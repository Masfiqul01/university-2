import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Administration & Leadership",
  description:
    "University administration at KACST: leadership offices, administrative units and the services that support academic and institutional governance.",
  path: "/administration",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
