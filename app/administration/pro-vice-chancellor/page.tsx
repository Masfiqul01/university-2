import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, ImageSplit, CheckList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { LEADERS } from "@/lib/data/leadership"
import { PRO_VICE_CHANCELLOR_PROFILE } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Pro Vice-Chancellor",
  description: "The Pro Vice-Chancellor of KACST — academic coordination and quality assurance, responsibilities, and contact information.",
}

export default function ProViceChancellorPage() {
  const leader = LEADERS.find((l) => l.role === "Pro Vice-Chancellor")!
  const { contact } = PRO_VICE_CHANCELLOR_PROFILE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Office of the Pro Vice-Chancellor"
        subtitle="Academic coordination, quality and institutional development."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Pro Vice-Chancellor" },
        ]}
        image="/images/hero-campus.png"
      />

      <Section>
        <ImageSplit image={leader.image} alt={leader.name} eyebrow={leader.role} title={leader.name}>
          <p>{leader.description}</p>
          <p>{PRO_VICE_CHANCELLOR_PROFILE.message}</p>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Mandate"
          title="Responsibilities of the Pro Vice-Chancellor"
          description="Supporting the Vice-Chancellor, this office holds the following core responsibilities."
        />
        <div className="max-w-2xl">
          <CheckList items={PRO_VICE_CHANCELLOR_PROFILE.responsibilities} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Pro Vice-Chancellor's Office" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Connect with University Leadership"
        description="Reach out to the Pro Vice-Chancellor's Office, or explore other university leaders and administrative offices."
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
