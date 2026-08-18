import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, ImageSplit, CheckList, FeatureGrid } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { LEADERS } from "@/lib/data/leadership"
import { TREASURER_PROFILE } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Treasurer",
  description: "The Treasurer of KACST — financial administration and accountability, responsibilities, and contact information.",
}

export default function TreasurerPage() {
  const leader = LEADERS.find((l) => l.role === "Treasurer")!
  const { contact } = TREASURER_PROFILE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Treasurer's Office"
        subtitle="Financial administration, budgeting and responsible resource management."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Treasurer" },
        ]}
        image="/images/campus-library.png"
      />

      <Section>
        <ImageSplit image={leader.image} alt={leader.name} eyebrow={leader.role} title={leader.name}>
          <p>{leader.description}</p>
          <p>{TREASURER_PROFILE.message}</p>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Mandate"
          title="Responsibilities of the Treasurer"
          description="As the university's chief financial officer, the Treasurer holds the following core responsibilities."
        />
        <div className="max-w-2xl">
          <CheckList items={TREASURER_PROFILE.responsibilities} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Financial Governance" title="Guiding Pillars" center />
        <FeatureGrid
          items={TREASURER_PROFILE.pillars.map((p) => ({ ...p, icon: ICON_MAP[p.icon] ?? ICON_MAP.Wallet }))}
        />
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Treasurer's Office" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Connect with University Leadership"
        description="Reach out to the Treasurer's Office, or explore other university leaders and administrative offices."
        primary={{ label: "Back to Administration", href: "/administration" }}
        secondary={{ label: "Contact the University", href: "/contact" }}
      />
    </PageShell>
  )
}

function ContactGrid({
  contact,
}: {
  contact: { office: string; phone: string; email: string; hours: string }
}) {
  const items = [
    { icon: MapPin, label: "Office", value: contact.office },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock3, label: "Office Hours", value: contact.hours },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
            {href ? (
              <a href={href} className="wrap-break-word text-sm font-medium text-foreground transition-colors hover:text-brand">
                {value}
              </a>
            ) : (
              <p className="wrap-break-word text-sm font-medium text-foreground">{value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
