import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "University Leadership",
  description:
    "Meet the Chancellor, Vice-Chancellor, Pro Vice-Chancellor and Treasurer who guide academic direction and governance at KACST, Khulna.",
  path: "/about/leadership",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
