import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { ApplicationForm } from "./application-form"

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Start your online application to Khulna Khan Jahan Science and Technology University (KACST) — a simple, guided, multi-step admissions form.",
}

export default function ApplyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admissions"
        title="Apply to KACST"
        subtitle="Complete your application in a few guided steps — personal details, academic background, program selection and contact information."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Apply" }]}
        image="/images/campus-activities.png"
      />

      <Section>
        <ApplicationForm />
      </Section>
    </PageShell>
  )
}
