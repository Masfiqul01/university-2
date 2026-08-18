import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { CampusLife } from "@/components/campus-life"
import { ICON_MAP } from "@/lib/icon-map"
import { CAMPUS_OFFERINGS, CAMPUS_LIFE_EXTRA_STATS, FACILITIES, CLUBS } from "@/lib/data/campus-life"

export const metadata: Metadata = {
  title: "Campus Life",
  description:
    "Explore campus life at Khulna Khan Jahan Science and Technology University (KACST) — facilities, student activities, clubs and the community that make campus feel like home.",
}

const EXPLORE_LINKS = [
  {
    title: "Facilities",
    href: "/campus-life/facilities",
    description: "Library, labs, sports complex, hostel, medical center and every space that supports student life.",
    icon: "Building2",
  },
  {
    title: "Student Life",
    href: "/campus-life/student-life",
    description: "A look at daily campus life — activities, events, wellness and student support services.",
    icon: "PartyPopper",
  },
  {
    title: "Clubs & Organizations",
    href: "/campus-life/clubs",
    description: "Browse and filter student-run clubs across technology, culture, sports and community service.",
    icon: "Users",
  },
]

export default function CampusLifePage() {
  const stats = [
    { value: `${CLUBS.length}+`, label: "Student Clubs" },
    { value: `${FACILITIES.length}`, label: "Core Facilities" },
    ...CAMPUS_LIFE_EXTRA_STATS,
  ]

  return (
    <PageShell>
      <PageHero
        eyebrow="Campus Life"
        title="Life at KACST"
        subtitle="A welcoming campus where learning, friendship, creativity and leadership grow together — in and out of the classroom."
        crumbs={[{ label: "Home", href: "/" }, { label: "Campus Life" }]}
        image="/images/campus-green.png"
      />

      <CampusLife />

      <Section>
        <SectionHeading
          eyebrow="Beyond Academics"
          title="Everything Campus Life Offers"
          description="From daily meals and residence to sport, wellness and a green campus to enjoy it all in — campus life at KACST is built around the whole student, not just the classroom."
        />
        <FeatureGrid items={CAMPUS_OFFERINGS.map((item) => ({ ...item, icon: ICON_MAP[item.icon] ?? ICON_MAP.Users }))} />
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Take a Closer Look"
          title="Explore Campus Life"
          description="Three places to start — facilities, everyday student life, and the clubs where students find their community."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE_LINKS.map(({ title, href, description, icon }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Users
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
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the Numbers" title="Campus Life at a Glance" center />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-serif text-3xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <EditableNote>These figures are editable placeholders — replace with official KACST numbers.</EditableNote>
        </div>
      </Section>

      <CTASection secondary={{ label: "Meet Our Clubs", href: "/campus-life/clubs" }} />
    </PageShell>
  )
}
