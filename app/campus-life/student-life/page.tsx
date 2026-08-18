import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid, ImageSplit, CheckList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import { STUDENT_LIFE_HIGHLIGHTS, SUPPORT_SERVICES, CAMPUS_LIFE_LINKS } from "@/lib/data/campus-life"

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "What daily student life looks like at KACST — activities, events, clubs, wellness and the support services behind every student.",
}

export default function StudentLifePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Campus Life"
        title="Student Life"
        subtitle="Learning extends beyond the classroom through community, culture, leadership and everyday activity."
        crumbs={[{ label: "Home", href: "/" }, { label: "Campus Life", href: "/campus-life" }, { label: "Student Life" }]}
        image="/images/campus-activities.png"
      />

      <Section>
        <ImageSplit
          image="/images/campus-green.png"
          alt="Students spending time on the KACST campus"
          eyebrow="Beyond the Classroom"
          title="A Day in the Life of a KACST Student"
        >
          <p>
            Between classes, most students are at a club meeting, practicing for an upcoming tournament, rehearsing
            for a cultural show, or simply catching up with friends on the green. Campus life at KACST is built
            around that mix of study, activity and community.
          </p>
          <p>
            Whatever a student is into — technology, sport, the arts or service to the community — there is a
            regular rhythm of activities and a group of people already doing it.
          </p>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Always Something On"
          title="What Fills Student Life"
          description="A steady calendar of activity keeps campus lively well outside of class hours."
        />
        <FeatureGrid items={STUDENT_LIFE_HIGHLIGHTS.map((item) => ({ ...item, icon: ICON_MAP[item.icon] ?? ICON_MAP.Users }))} />
      </Section>

      <Section>
        <ImageSplit
          image="/images/admissions-building.png"
          alt="Student support services at KACST"
          eyebrow="Student Support"
          title="Support Services That Have Your Back"
          reverse
        >
          <p>
            Academics are only part of the picture. A network of advisors, counselors and support offices helps
            students navigate university life — from choosing courses to looking after their wellbeing.
          </p>
          <CheckList items={SUPPORT_SERVICES} />
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Stay Connected"
          title="Keep Up With Campus"
          description="Events, clubs and official notices — three places to stay in the loop."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPUS_LIFE_LINKS.map(({ icon, title, description, href }) => {
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
                  View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </Section>

      <CTASection secondary={{ label: "Browse Clubs & Organizations", href: "/campus-life/clubs" }} />
    </PageShell>
  )
}
