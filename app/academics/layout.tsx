import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Academics: Faculties & Departments",
  description:
    "Explore faculties, departments, disciplines and degree levels at KACST, with a searchable directory of academic units and contact details.",
  path: "/academics",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
