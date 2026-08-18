import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, CheckList, InfoTable } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import {
  GENERAL_ELIGIBILITY,
  REQUIRED_DOCUMENTS,
  REQUIREMENTS_TABLE_HEADERS,
  REQUIREMENTS_TABLE_ROWS,
  ADMISSIONS_FAQ,
} from "@/lib/data/admissions"

export const metadata: Metadata = {
  title: "Admission Requirements",
  description:
    "General eligibility, required documents and program-level requirements for admission to Khulna Khan Jahan Science and Technology University (KACST).",
}

export default function AdmissionRequirementsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admission Requirements"
        title="What You Need to Apply"
        subtitle="A clear checklist of eligibility criteria and documents so you can prepare your application with confidence."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Requirements" }]}
        image="/images/campus-green.png"
      />

      <Section>
        <SectionHeading
          eyebrow="General Eligibility"
          title="Baseline Requirements for Every Applicant"
          description="These criteria apply broadly across undergraduate, postgraduate and doctoral admissions. Program-specific requirements are listed further below."
        />
        <CheckList items={GENERAL_ELIGIBILITY} />
      </Section>

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Required Documents"
              title="Documents to Prepare"
              description="Have these ready, scanned and legible, before you start your online application."
            />
            <CheckList items={REQUIRED_DOCUMENTS} />
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <FileText className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-bold text-foreground">Document Tips</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Scan documents clearly in PDF or JPG format, under 5MB each.</li>
              <li>Ensure your name matches across all submitted documents.</li>
              <li>Keep physical originals ready for verification at enrollment.</li>
              <li>Foreign documents should include an official English translation.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Program-Level Requirements"
          title="Minimum Requirements by Program Level"
          description="A quick reference for the minimum academic requirement, application fee and deadline for each program level."
        />
        <InfoTable headers={REQUIREMENTS_TABLE_HEADERS} rows={REQUIREMENTS_TABLE_ROWS} />
        <EditableNote>Fees and deadlines shown are editable placeholders — replace with official KACST figures.</EditableNote>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" description="Common questions about admission requirements and the application process." center />
        <FAQ items={ADMISSIONS_FAQ} />
      </Section>

      <CTASection secondary={{ label: "Explore Programs", href: "/academics/programs" }} />
    </PageShell>
  )
}
