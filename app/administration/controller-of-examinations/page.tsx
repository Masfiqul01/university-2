import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, CheckList, StepList } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { CONTROLLER_OF_EXAMINATIONS_OFFICE } from "@/lib/data/administration"

export const metadata: Metadata = {
  title: "Controller of Examinations",
  description: "The Office of the Controller of Examinations at KACST — examination scheduling, results and academic assessment integrity.",
}

export default function ControllerOfExaminationsPage() {
  const { contact } = CONTROLLER_OF_EXAMINATIONS_OFFICE

  return (
    <PageShell>
      <PageHero
        eyebrow="Administration"
        title="Controller of Examinations"
        subtitle="Examination schedules, results, academic assessment and examination services."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Controller of Examinations" },
        ]}
        image="/images/news-2.png"
      />

      <Section>
        <SectionHeading
          eyebrow="Mandate"
          title="About the Office"
          description={CONTROLLER_OF_EXAMINATIONS_OFFICE.mandate}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Core Responsibilities</h3>
            <CheckList items={CONTROLLER_OF_EXAMINATIONS_OFFICE.responsibilities} />
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Services Offered</h3>
            <CheckList items={CONTROLLER_OF_EXAMINATIONS_OFFICE.services} />
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How It Works"
          title="From Examination to Result"
          description="Every examination cycle moves through the following stages before results are published."
        />
        <StepList steps={CONTROLLER_OF_EXAMINATIONS_OFFICE.process} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Get in Touch" title="Contact the Examinations Office" />
        <ContactGrid contact={contact} />
      </Section>

      <CTASection
        title="Have an Examination or Result Query?"
        description="Reach out to the Controller of Examinations directly, or explore other university leaders and administrative offices."
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
