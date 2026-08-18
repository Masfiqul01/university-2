import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { OfficePage } from "@/components/office-page"
import { getOfficeProfile } from "@/lib/data/administration"

const profile = getOfficeProfile("treasurer")

export const metadata: Metadata = {
  title: profile?.role,
  description: profile?.intro,
}

export default function Page() {
  if (!profile) notFound()

  return <OfficePage profile={profile} />
}
