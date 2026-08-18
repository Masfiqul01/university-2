import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, CheckList, StepList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { REGISTRAR_OFFICE } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Registrar",
  description: "The Office of the Registrar at KACST — academic records, admissions processing, official correspondence and services.",
}

export default function RegistrarPage() {
  const { contact } = REGISTRAR_OFFICE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title={REGISTRAR_OFFICE.title}
        subtitle="Academic records, registration, official correspondence and administrative services."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Registrar" },
        ]}
        image="/images/admissions-building.png"
      />

      <Section>
        <SectionHeading eyebrow="Mandate" title="About the Registrar's Office" description={REGISTRAR_OFFICE.mandate} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Core Responsibilities</h3>
            <CheckList items={REGISTRAR_OFFICE.responsibilities} />
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Services Offered</h3>
            <CheckList items={REGISTRAR_OFFICE.services} />
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How It Works"
          title="Requesting an Official Document"
          description="A typical transcript, certificate or verification request follows these steps."
        />
        <StepList steps={REGISTRAR_OFFICE.process} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Registrar's Office" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Need a Record or Document?"
        description="Reach out to the Registrar's Office directly, or explore other university leaders and administrative offices."
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
