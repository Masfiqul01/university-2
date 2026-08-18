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
import { POSTGRADUATE_ELIGIBILITY, POSTGRADUATE_APPLICATION_STEPS } from "@/lib/data/admissions"

export const metadata: Metadata = {
  title: "Postgraduate Admissions",
  description:
    "Eligibility, programs and the application process for postgraduate and doctoral admissions at Khulna Khan Jahan Science and Technology University (KACST).",
}

export default function PostgraduateAdmissionsPage() {
  const postgraduatePrograms = PROGRAMS.filter(
    (p) => p.level === "Postgraduate" || p.level === "PhD / Doctoral"
  )

  return (
    <PageShell>
      <PageHero
        eyebrow="Postgraduate Admissions"
        title="Postgraduate & Doctoral Programs at KACST"
        subtitle="Deepen your expertise with research-driven MSc, MA, MBA and PhD programs guided by experienced faculty."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions", href: "/admissions" }, { label: "Postgraduate" }]}
        image="/images/campus-library.png"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Eligibility"
              title="Who Can Apply"
              description="General eligibility for postgraduate (Master's) and doctoral programs at KACST."
            />
            <CheckList items={POSTGRADUATE_ELIGIBILITY} />
          </div>
          <div className="rounded-3xl bg-brand-dark p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">At a Glance</p>
            <h3 className="mt-3 font-serif text-2xl font-bold">Postgraduate Admissions</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Programs offered</dt>
                <dd className="font-semibold">{postgraduatePrograms.length} programs</dd>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Typical duration</dt>
                <dd className="font-semibold">2–5 years</dd>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <dt className="text-white/70">Intakes</dt>
                <dd className="font-semibold">Spring &amp; Fall</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/70">Study mode</dt>
                <dd className="font-semibold">Full-time &amp; research-based</dd>
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
          title="Postgraduate & Doctoral Programs"
          description="Explore Master's and PhD programs available across our faculties."
        />
        <FeatureGrid
          items={postgraduatePrograms.map((p) => ({
            icon: ICON_MAP[p.icon] ?? ICON_MAP.Award,
            title: p.title,
            description: `${p.faculty} · ${p.duration}. ${p.description}`,
          }))}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Application Process"
          title="How to Apply as a Postgraduate"
          description="From application to registration, here's what to expect."
        />
        <StepList steps={POSTGRADUATE_APPLICATION_STEPS} />
      </Section>

      <CTASection
        title="Advance Your Career with a Postgraduate Degree"
        description="Take the next step in your academic and professional journey at KACST."
        secondary={{ label: "View Requirements", href: "/admissions/requirements" }}
      />
    </PageShell>
  )
}
