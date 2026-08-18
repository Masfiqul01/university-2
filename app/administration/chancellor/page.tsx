import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, ImageSplit, CheckList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { CHANCELLOR, CHANCELLOR_IMAGE } from "@/lib/data/leadership"
import { CHANCELLOR_PROFILE } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Chancellor",
  description: "The Chancellor of KACST — ceremonial head of the university, responsibilities, and contact information.",
}

export default function ChancellorPage() {
  const { contact } = CHANCELLOR_PROFILE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Office of the Chancellor"
        subtitle="The ceremonial head of the university and custodian of its charter and academic integrity."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Chancellor" },
        ]}
        image="/images/hero-campus.png"
      />

      <Section>
        <ImageSplit image={CHANCELLOR_IMAGE} alt={CHANCELLOR.name} eyebrow={CHANCELLOR.role} title={CHANCELLOR.name}>
          <p className="font-semibold text-foreground">{CHANCELLOR.title}</p>
          <p>{CHANCELLOR.description}</p>
          <p>{CHANCELLOR_PROFILE.message}</p>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Mandate"
          title="Responsibilities of the Chancellor"
          description="As set out in the university's founding charter and statutes, the Chancellor's office carries the following core responsibilities."
        />
        <div className="max-w-2xl">
          <CheckList items={CHANCELLOR_PROFILE.responsibilities} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Chancellor's Secretariat" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Explore University Leadership"
        description="Meet the Vice-Chancellor, Pro Vice-Chancellor and Treasurer, or browse the full administration directory."
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
