import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid, ImageSplit, StepList, InfoTable } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import {
  ADMISSIONS_HIGHLIGHTS,
  ADMISSIONS_LINKS,
  ADMISSION_PROCESS_STEPS,
  KEY_DATES_HEADERS,
  KEY_DATES_ROWS,
} from "@/lib/data/admissions"

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Start your journey at Khulna Khan Jahan Science and Technology University (KACST) — explore undergraduate and postgraduate admissions, requirements, key dates, and how to apply.",
}

export default function AdmissionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admissions"
        title="Begin Your Journey at KACST"
        subtitle="Everything you need to apply to Khulna Khan Jahan Science and Technology University — programs, requirements, key dates, and a simple online application."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
        image="/images/hero-campus.png"
      />

      <Section>
        <ImageSplit
          image="/images/campus-sports.png"
          alt="Students at KACST campus"
          eyebrow="Who We Welcome"
          title="A Community Built for Ambitious Minds"
        >
          <p>
            Every year, KACST welcomes students who are curious, driven and ready to grow — from
            recent HSC graduates starting their first degree to working professionals returning
            for a master&apos;s or doctoral program.
          </p>
          <p>
            Our admissions process is designed to be straightforward: explore your options, check
            what&apos;s required, and apply online in a few guided steps. Admissions counsellors
            are also available to help you choose the right program.
          </p>
          <EditableNote>Admissions figures and dates on this page are editable placeholders — replace with official KACST admissions data.</EditableNote>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Why KACST"
          title="A Future-Focused Place to Study"
          description="Here's what makes a KACST education worth pursuing."
          center
        />
        <FeatureGrid items={ADMISSIONS_HIGHLIGHTS.map((h) => ({ ...h, icon: ICON_MAP[h.icon] ?? ICON_MAP.Target }))} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Explore"
          title="Find the Right Admissions Path"
          description="Jump straight to the information that matters most to you."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADMISSIONS_LINKS.map(({ title, description, href, icon }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.GraduationCap
            return (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How to Apply"
              title="Your Path to Admission"
              description="Follow these steps from application to enrollment."
            />
            <StepList steps={ADMISSION_PROCESS_STEPS} />
          </div>
          <div>
            <SectionHeading
              eyebrow="Key Dates"
              title="Upcoming Intake Timeline"
              description="Mark your calendar for the next admission cycles."
            />
            <InfoTable headers={KEY_DATES_HEADERS} rows={KEY_DATES_ROWS} />
            <EditableNote>Intake dates shown are editable placeholders — replace with official KACST admissions dates.</EditableNote>
          </div>
        </div>
      </Section>

      <CTASection secondary={{ label: "View Requirements", href: "/admissions/requirements" }} />
    </PageShell>
  )
}
