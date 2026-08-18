import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock3, Globe, Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Khanjahan Ali College of Science & Technology for admissions, academic, research and general enquiries.",
}

const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

// Sourced from the institution details already published in the site footer.
const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "khanjahanali.kln@gmail.com",
    href: "mailto:khanjahanali.kln@gmail.com",
    icon: Mail,
  },
  {
    label: "Website",
    value: "www.khanjahanalicst.edu.bd",
    href: "https://www.khanjahanalicst.edu.bd",
    icon: Globe,
  },
  {
    label: "Location",
    value: "Khulna, Bangladesh",
    icon: MapPin,
  },
]

const ENQUIRY_ROUTES = [
  {
    title: "Admissions",
    description: "Programme eligibility, application process and requirements.",
    href: "/admissions",
  },
  {
    title: "Academic Offices",
    description: "Faculties, departments, results and the academic calendar.",
    href: "/academics",
  },
  {
    title: "Administration",
    description: "Registrar, examinations, finance and institutional offices.",
    href: "/administration",
  },
]

const OFFICE_HOURS = [
  { day: "Saturday – Wednesday", hours: "09:00 AM – 05:00 PM" },
  { day: "Thursday", hours: "09:00 AM – 01:00 PM" },
  { day: "Friday & Public Holidays", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[460px] overflow-hidden bg-[#082746]">
        <img
          src={HERO_IMAGE}
          alt="KACST campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/78 to-[#082746]/25" />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Get in Touch
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
              Contact KACST
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Connect with the university for admissions, academics, research
              and general enquiries. Our offices are here to help students,
              guardians and visitors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#message"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Send a Message
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:khanjahanali.kln@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Email the University
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Home
          </Link>

          <span className="mx-3 text-slate-300">/</span>

          <span className="text-xs font-semibold text-[#102c4c]">Contact</span>
        </div>
      </div>

      {/* =========================================================
          CONTACT DETAILS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              University Contact
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            How to reach us
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {CONTACT_DETAILS.map((item) => {
              const Icon = item.icon

              const inner = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-[#092c4d]">
                    {item.value}
                  </p>
                </>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="border border-slate-200 bg-white p-6 transition hover:border-[#cbd8e6] hover:shadow-[0_10px_28px_rgba(15,45,90,0.07)]"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="border border-slate-200 bg-white p-6"
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MESSAGE FORM + OFFICE HOURS
      ========================================================= */}
      <section
        id="message"
        className="border-y border-slate-200 bg-[#eaf3fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Send a Message
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                We would like to hear from you
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Complete the form below and our office will respond to your
                enquiry. Fields marked as required must be filled in before the
                message can be submitted.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-slate-200 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                  <Clock3 className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  Office Hours
                </h3>

                <div className="mt-5 space-y-3">
                  {OFFICE_HOURS.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-slate-600">{slot.day}</span>

                      <span className="shrink-0 text-sm font-semibold text-[#092c4d]">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-slate-200 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center bg-[#fff7df] text-[#b28718]">
                  <Phone className="h-5 w-5" strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  Enquiry Routing
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Looking for a specific department? These pages may answer your
                  question faster.
                </p>

                <div className="mt-5 space-y-3">
                  {ENQUIRY_ROUTES.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="group block border border-slate-200 p-4 transition hover:border-[#cbd8e6] hover:bg-[#f8fbfe]"
                    >
                      <p className="flex items-center justify-between gap-2 text-sm font-semibold text-[#092c4d]">
                        {route.title}

                        <ArrowRight className="h-4 w-4 shrink-0 text-[#175783] transition-transform group-hover:translate-x-1" />
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {route.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
