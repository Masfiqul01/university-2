import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid, CheckList, StepList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import { PROGRAMS } from "@/lib/data/programs"
import { UNDERGRADUATE_ELIGIBILITY, UNDERGRADUATE_APPLICATION_STEPS } from "@/lib/data/admissions"

export const metadata: Metadata = {
  title: "Undergraduate Admissions",
  description:
    "Eligibility, programs and the application process for undergraduate admissions at Khulna Khan Jahan Science and Technology University (KACST).",
}

export default function UndergraduateAdmissionsPage() {
  const undergraduatePrograms = PROGRAMS.filter((p) => p.level === "Undergraduate")

  return (
    <PageShell>
      <PageHero
        eyebrow="Undergraduate Admissions"
        title="Undergraduate Programs at KACST"
        subtitle="Start your first degree with a curriculum that blends strong fundamentals with practical, career-ready skills."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Undergraduate" }]}
        image="/images/admissions-building.png"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Eligibility"
              title="Who Can Apply"
              description="General eligibility for undergraduate (Bachelor's) programs at KACST."
            />
            <CheckList items={UNDERGRADUATE_ELIGIBILITY} />
          </div>
          <div className="rounded-3xl bg-brand-dark p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">At a Glance</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">Undergraduate Admissions</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Programs offered</dt>
                <dd className="font-semibold">{undergraduatePrograms.length} programs</dd>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Typical duration</dt>
                <dd className="font-semibold">4 years</dd>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Intakes</dt>
                <dd className="font-semibold">Spring &amp; Fall</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/70">Study mode</dt>
                <dd className="font-semibold">Full-time, on campus</dd>
              </div>
            </dl>
            <Link
              href="/admissions/apply"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-dark"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Programs"
          title="Undergraduate Programs"
          description="Explore the Bachelor's degree programs available across our faculties."
        />
        <FeatureGrid
          items={undergraduatePrograms.map((p) => ({
            icon: ICON_MAP[p.icon] ?? ICON_MAP.GraduationCap,
            title: p.title,
            description: `${p.faculty} · ${p.duration}. ${p.description}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Application Process"
          title="How to Apply as an Undergraduate"
          description="From application to enrollment, here's what to expect."
        />
        <StepList steps={UNDERGRADUATE_APPLICATION_STEPS} />
      </Section>

      <CTASection
        title="Ready to Begin Your Undergraduate Journey?"
        description="Take the first step towards your Bachelor's degree at KACST."
        secondary={{ label: "View Requirements", href: "/admissions/requirements" }}
      />
    </PageShell>
  )
}
