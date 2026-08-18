import type { Metadata } from "next"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { GENERIC_PAGE_MAP, CONTACT_INFO } from "@/lib/data/slug-pages"
import { MapPin, Phone, Mail, Clock3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Khulna Khan Jahan Science and Technology University (KACST) for admissions, academics, research and general enquiries.",
}

// Real contact details sourced from the site footer (components/site-footer.tsx),
// which carries verified address/phone/email — more complete than the generic
// CONTACT_INFO placeholders in lib/data/slug-pages.ts.
const ADDRESS = "Mujgunni R/A, Boyra Main Road, Khulna-9000, Bangladesh"
const PHONES = [
  { label: "Helpline", tel: "+8801711042194", display: "+880 1711-042194" },
  { label: "Phone 2", tel: "+8801717803684", display: "+880 1717-803684" },
]
const EMAIL = "info@khanjahanalicst.edu.bd"

const OFFICE_HOURS = [
  { day: "Sunday – Thursday", hours: "9:00 AM – 5:00 PM" },
  { day: "Friday – Saturday", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero {...GENERIC_PAGE_MAP.contact} />

      <Section>
        <SectionHeading
          eyebrow="Contact Us"
          title="We're here to help"
          description="Reach out with questions about admissions, academics, research or campus life — our team will get back to you as soon as possible."
        />

        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-brand-dark p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Get In Touch
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold">Contact Information</h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Address</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    {PHONES.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block break-all text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Clock3 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">Office Hours</h3>
              <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {OFFICE_HOURS.map((o) => (
                  <div key={o.day} className="flex items-center justify-between gap-3">
                    <span>{o.day}</span>
                    <span className="font-medium text-foreground">{o.hours}</span>
                  </div>
                ))}
              </div>
              <EditableNote>Office hours are editable placeholder content.</EditableNote>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Find Us" title="Our Location" center />
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="KACST campus location"
            src={CONTACT_INFO.mapsUrl}
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </PageShell>
  )
}
