import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Campus Life",
  description:
    "Campus life at KACST: student community, facilities, clubs, support services and the everyday experience of studying in Khulna.",
  path: "/campus-life",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
