import type { Metadata } from "next"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid, ImageSplit } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { FacultyMemberCard } from "@/components/cards"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import { RESEARCH_AREAS, FACULTY_MEMBERS } from "@/lib/data"
import { RESEARCH_STATS, RESEARCH_CENTERS } from "@/lib/data/research"

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore research at Khulna Khan Jahan Science and Technology University (KACST) — our focus areas, research centers, faculty researchers, and scholarly publications.",
}

// Mirrors the visual treatment of components/stats-bar.tsx (hero-overlap card)
// but surfaces research-specific figures instead of the site-wide stats.
function ResearchStatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-4 sm:-mt-10 lg:-mt-16 lg:px-8">
      <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-white px-6 py-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] sm:grid-cols-4 lg:gap-y-0">
        {RESEARCH_STATS.map(({ icon, value, label }) => {
          const Icon = ICON_MAP[icon] ?? ICON_MAP.FlaskConical
          return (
            <div key={label} className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold text-black">{value}</p>
                <p className="text-xs font-bold text-black">{label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// A handful of center leads, pulled from the shared FACULTY_MEMBERS list, to
// give the overview page a "meet our researchers" moment.
const FEATURED_RESEARCHER_EMAILS = [
  "a.rahman@kacst.edu.bd",
  "f.sultana@kacst.edu.bd",
  "j.begum@kacst.edu.bd",
  "m.hasan@kacst.edu.bd",
]

export default function ResearchPage() {
  const areaItems = RESEARCH_AREAS.map((area) => {
    const center = RESEARCH_CENTERS.find((c) => c.areaTitle === area.title)
    return { ...area, icon: ICON_MAP[center?.icon ?? "FlaskConical"] ?? ICON_MAP.FlaskConical }
  })

  const featuredResearchers = FACULTY_MEMBERS.filter((m) => FEATURED_RESEARCHER_EMAILS.includes(m.email))

  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Research at KACST"
        subtitle="Discovering knowledge and building solutions for Bangladesh and beyond — across artificial intelligence, sustainability, health, materials, water, and business."
        crumbs={[{ label: "Home", href: "/" }, { label: "Research" }]}
        image="/images/hero-campus.png"
      />

      <div className="relative pb-4">
        <ResearchStatsBar />
      </div>

      <Section>
        <ImageSplit
          image="/images/campus-library.png"
          alt="KACST research and library facilities"
          eyebrow="Research at KACST"
          title="Advancing Knowledge Through Discovery"
        >
          <p>
            Research at Khulna Khan Jahan Science and Technology University spans engineering, science,
            life sciences, business, and the social sciences. Our faculty and students pursue work that
            is both academically rigorous and directly relevant to the challenges facing Bangladesh&apos;s
            coastal communities and economy.
          </p>
          <p>
            From dedicated laboratories to interdisciplinary centers, KACST supports researchers at every
            stage — from undergraduate thesis projects to faculty-led, externally funded studies.
          </p>
          <EditableNote>This overview is editable placeholder content.</EditableNote>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Focus Areas"
          title="Our Research Areas"
          description="Six priority areas guide our research investment, laboratories, and center-building efforts."
          center
        />
        <FeatureGrid items={areaItems} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Researchers"
          title="Meet Our Research Leaders"
          description="A few of the faculty members guiding research programs and mentoring student researchers across KACST."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredResearchers.map((member) => (
            <FacultyMemberCard key={member.email} member={member} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Explore Our Research Ecosystem"
        description="Discover our specialized research centers and browse recent scholarly publications from KACST faculty."
        primary={{ label: "Research Centers", href: "/research/centers" }}
        secondary={{ label: "Publications", href: "/research/publications" }}
      />
    </PageShell>
  )
}
