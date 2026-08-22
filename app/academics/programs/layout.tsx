import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Academic Programs",
  description:
    "Browse undergraduate, postgraduate and diploma programmes at KACST by faculty, discipline and degree level, with duration and admission details.",
  path: "/academics/programs",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
