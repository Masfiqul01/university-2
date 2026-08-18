import { PageShell } from "@/components/page-shell"
import { StudentPortal } from "@/components/student-portal"
import { STUDENT_PORTAL_METADATA } from "@/lib/data/student-portal"

export const metadata = STUDENT_PORTAL_METADATA

export default function StudentPortalPage() {
  return (
    <PageShell>
      <StudentPortal />
    </PageShell>
  )
}
