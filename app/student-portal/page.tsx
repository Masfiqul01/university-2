"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { StudentPortal } from "@/components/student-portal"
import { STUDENT_SESSION_KEY, type StudentSession } from "@/lib/student-session"

export default function StudentPortalPage() {
  const router = useRouter()
  const [session, setSession] = useState<StudentSession | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STUDENT_SESSION_KEY)
      if (saved) setSession(JSON.parse(saved))
      else router.replace("/student-login")
    } catch {
      router.replace("/student-login")
    }
    setChecked(true)
  }, [router])

  function handleSignOut() {
    try {
      sessionStorage.removeItem(STUDENT_SESSION_KEY)
    } catch {
      /* ignore */
    }
    router.push("/student-login")
  }

  if (!checked || !session) {
    return (
      <PageShell>
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-brand" />
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <StudentPortal session={session} onSignOut={handleSignOut} />
    </PageShell>
  )
}
