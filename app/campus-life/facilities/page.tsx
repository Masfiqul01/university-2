import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, ImageSplit } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import { FACILITIES } from "@/lib/data/campus-life"

export const metadata: Metadata = {
  title: "Campus Facilities",
  description:
    "Explore the facilities that support learning and daily life at KACST — library, labs, sports complex, hostel, cafeteria, medical center and transport.",
}

export default function CampusFacilitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Campus Life"
        title="Campus Facilities"
        subtitle="Explore the learning, research, recreation and student-support spaces that make campus feel like home."
        crumbs={[{ label: "Home", href: "/" }, { label: "Campus Life", href: "/campus-life" }, { label: "Facilities" }]}
        image="/images/campus-library.png"
      />

      <Section>
        <ImageSplit
          image="/images/campus-sports.png"
          alt="Students using campus facilities at KACST"
          eyebrow="Built for Learning & Living"
          title="Everything a Student Needs, on One Campus"
        >
          <p>
            From the library and research labs to the sports complex and residence halls, KACST facilities are
            designed to support students academically, physically and socially — all within walking distance.
          </p>
          <p>
            Every space below is maintained for students and staff alike, and the Central Library already has a
            dedicated page with hours, catalogue access and digital resources.
          </p>
          <EditableNote>Facility details below are editable placeholder content.</EditableNote>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="On Campus"
          title="Spaces That Support Student Life"
          description="Nine core facilities keep academic work, daily living and downtime all close at hand."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map(({ icon, title, description, href }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Building2
            const cardBody = (
              <>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-foreground text-balance">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                {href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </>
            )
            return href ? (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {cardBody}
              </Link>
            ) : (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                {cardBody}
              </div>
            )
          })}
        </div>
      </Section>

      <CTASection secondary={{ label: "Explore Student Life", href: "/campus-life/student-life" }} />
    </PageShell>
  )
}
