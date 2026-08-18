import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { ArrowRight } from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { ADMIN_DIRECTORY } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Administrative Offices",
  description: "A directory of KACST's leadership offices and administrative units, from the Chancellor's office to Finance, ICT and Student Affairs.",
}

export default function OfficesPage() {
  const leadershipOffices = ADMIN_DIRECTORY.filter((office) => office.href?.startsWith("/administration/"))
  const adminUnits = ADMIN_DIRECTORY.filter((office) => !office.href?.startsWith("/administration/"))

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Administrative Offices"
        subtitle="Explore the university offices and support units that keep campus services running effectively."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Administrative Offices" },
        ]}
        image="/images/campus-library.png"
      />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership Offices"
          description="The university's leadership offices, each with a dedicated profile covering responsibilities and contact details."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipOffices.map((office) => (
            <OfficeCard key={office.title} office={office} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Support Units"
          title="Administrative Units"
          description="Additional offices and units supporting the day-to-day running of the university. Units without a dedicated page yet can be reached through the university's general contact channels."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adminUnits.map((office) => (
            <OfficeCard key={office.title} office={office} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Can't Find What You're Looking For?"
        description="Reach out to the university directly and we'll connect you with the right office."
        primary={{ label: "Back to Administration", href: "/administration" }}
        secondary={{ label: "Contact the University", href: "/contact" }}
      />
    </PageShell>
  )
}

function OfficeCard({
  office,
}: {
  office: { title: string; description: string; icon: string; href?: string }
}) {
  const Icon = ICON_MAP[office.icon] ?? ICON_MAP.Building2
  const content = (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{office.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{office.description}</p>
      {office.href ? (
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
          View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : (
        <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Contact administration for details
        </span>
      )}
    </>
  )

  if (office.href) {
    return (
      <Link
        href={office.href}
        className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        {content}
      </Link>
    )
  }

  return <div className="rounded-2xl border border-border bg-card p-6">{content}</div>
}
