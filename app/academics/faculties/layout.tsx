import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Faculties & Academic Facilities",
  description:
    "Discover KACST faculties, smart classrooms, laboratories, library resources and the campus facilities that support practical, hands-on learning.",
  path: "/academics/faculties",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
