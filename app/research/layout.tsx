import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Research & Innovation",
  description:
    "Research at KACST: focus areas, laboratories, student research opportunities and collaborations that connect enquiry with real-world problems.",
  path: "/research",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
