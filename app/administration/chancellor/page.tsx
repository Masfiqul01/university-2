import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { notFound } from "next/navigation"
import { OfficePage } from "@/components/office-page"
import { getOfficeProfile } from "@/lib/data/administration"

const profile = getOfficeProfile("chancellor")

export const metadata: Metadata = buildMetadata({
  title: profile?.role ?? "University Administration",
  description:
    profile?.intro ??
    "Office information and responsibilities at Khanjahan Ali College of Science & Technology.",
  path: "/administration/chancellor",
})

export default function Page() {
  if (!profile) notFound()

  return <OfficePage profile={profile} />
}
