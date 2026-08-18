import type { Metadata } from "next"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, ImageSplit, CheckList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Mail } from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { RESEARCH_AREAS } from "@/lib/data"
import { RESEARCH_CENTERS } from "@/lib/data/research"

export const metadata: Metadata = {
  title: "Research Centers",
  description:
    "KACST's specialized research centers — Artificial Intelligence & Data Science, Renewable Energy, Biotechnology, Materials & Nanotechnology, Water Resources, and Business Analytics.",
}

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
}

function CenterCard({ center, tagline }: { center: (typeof RESEARCH_CENTERS)[number]; tagline: string }) {
  const Icon = ICON_MAP[center.icon] ?? ICON_MAP.FlaskConical
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mb-1.5 font-serif text-xl font-bold leading-snug text-foreground text-balance">
        {center.name}
      </h3>
      <p className="mb-4 text-sm font-medium text-brand">{tagline}</p>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{center.description}</p>

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">Focus Areas</p>
      <CheckList items={center.focusAreas} />

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 font-serif text-sm font-bold text-brand">
          {initials(center.lead.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{center.lead.name}</p>
          <p className="truncate text-xs text-muted-foreground">{center.lead.designation} · Lead Researcher</p>
        </div>
        <a
          href={`mailto:${center.lead.email}`}
          aria-label={`Email ${center.lead.name}`}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}

export default function ResearchCentersPage() {
  const centers = RESEARCH_CENTERS.map((center) => ({
    center,
    tagline: RESEARCH_AREAS.find((a) => a.title === center.areaTitle)?.description ?? "",
  }))

  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Research Centers"
        subtitle="Six specialized centers where KACST faculty and students turn focused inquiry into published research, prototypes, and community impact."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Centers" },
        ]}
        image="/images/hero-campus.png"
      />

      <Section>
        <ImageSplit
          image="/images/campus-activities.png"
          alt="KACST research collaboration"
          eyebrow="Centers of Excellence"
          title="Specialized Hubs for Focused Discovery"
        >
          <p>
            Each research center brings together faculty, postgraduate students, and shared laboratory
            or computing infrastructure around one of KACST&apos;s six priority research areas. Centers
            coordinate funding applications, publications, and partnerships with government and industry.
          </p>
          <p>
            Interested in collaborating with a center, or joining one as a student researcher? Reach out
            to the lead researcher listed on each center below.
          </p>
          <EditableNote>Center details below are editable placeholder content.</EditableNote>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Our Centers"
          title="Six Centers, One Research Mission"
          description="Every center pairs a KACST research area with a longer mandate, core focus areas, and a faculty lead."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {centers.map(({ center, tagline }) => (
            <CenterCard key={center.slug} center={center} tagline={tagline} />
          ))}
        </div>
      </Section>

      <CTASection
        title="See What Our Research Produces"
        description="Browse recent journal articles and conference papers from across all six KACST research centers."
        primary={{ label: "View Publications", href: "/research/publications" }}
        secondary={{ label: "Research Overview", href: "/research" }}
      />
    </PageShell>
  )
}
