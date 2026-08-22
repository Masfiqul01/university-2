import type { Metadata } from "next"

import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Student Life",
  description:
    "Student life at KACST: activities, clubs, support services, events and the opportunities that help students grow beyond the classroom.",
  path: "/campus-life/student-life",
})

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
