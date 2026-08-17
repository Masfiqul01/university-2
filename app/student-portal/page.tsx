import { PageShell } from "@/components/page-shell"
import { StudentPortal } from "@/components/student-portal"

export const metadata = {
  title: "Student Portal",
  description: "KACST student services portal for academic resources, registration, results, notices and support.",
}

export default function StudentPortalPage() {
  return (
    <PageShell>
      <StudentPortal />
    </PageShell>
  )
}
