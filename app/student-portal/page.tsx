import { buildMetadata } from "@/lib/seo"
import { PageShell } from "@/components/page-shell"
import { StudentPortal } from "@/components/student-portal"
import { STUDENT_PORTAL_METADATA } from "@/lib/data/student-portal"

export const metadata = buildMetadata({
  ...STUDENT_PORTAL_METADATA,
  path: "/student-portal",
  // Personal student area: reachable, but not indexed.
  noIndex: true,
})

export default function StudentPortalPage() {
  return (
    <PageShell>
      <StudentPortal />
    </PageShell>
  )
}
