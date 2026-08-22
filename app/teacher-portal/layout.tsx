import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Teacher Portal",
  description:
    "Secure portal for KACST faculty members to manage classes, attendance, assignments and student records.",
  path: "/teacher-portal",
  noIndex: true,
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
