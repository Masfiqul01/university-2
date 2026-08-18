import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, CheckList, InfoTable } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { DEANS_HEADS_OFFICE } from "@/lib/data/administration"
import { FACULTIES } from "@/lib/data/academics"

export const metadata: Metadata = {
  title: "Deans & Heads",
  description: "Faculty and departmental academic leadership at KACST — mandate, responsibilities, faculty contacts and services.",
}

export default function DeansHeadsPage() {
  const { contact } = DEANS_HEADS_OFFICE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Deans & Heads"
        subtitle="Faculty and departmental leadership supporting teaching, research and student development."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Deans & Heads" },
        ]}
        image="/images/campus-green.png"
      />

      <Section>
        <SectionHeading eyebrow="Mandate" title="Academic Leadership" description={DEANS_HEADS_OFFICE.mandate} />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Core Responsibilities</h3>
            <CheckList items={DEANS_HEADS_OFFICE.responsibilities} />
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Services Offered</h3>
            <CheckList items={DEANS_HEADS_OFFICE.services} />
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Faculty Directory"
          title="Deans' Offices by Faculty"
          description="Each faculty is led by its Dean's Office, the first point of contact for academic leadership within that faculty."
        />
        <InfoTable
          headers={["Faculty", "Dean's Office", "Phone", "Email"]}
          rows={FACULTIES.map((f) => [f.name, f.dean, f.phone, f.email])}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Deans' Secretariat" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Looking for a Specific Faculty?"
        description="Visit the Faculties & Departments page for full academic details, or explore other university administrative offices."
        primary={{ label: "Back to Administration", href: "/administration" }}
        secondary={{ label: "View Faculties", href: "/academics/faculties" }}
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
