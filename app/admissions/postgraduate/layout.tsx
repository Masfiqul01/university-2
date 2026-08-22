import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Postgraduate Admission",
  description:
    "Postgraduate study at KACST — advanced programmes, research orientation, supervisor areas and the application process for graduate applicants.",
  path: "/admissions/postgraduate",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
