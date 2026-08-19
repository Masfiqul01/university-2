import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION, ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
import { CtaButton } from "@/components/cta-button";
import {
  CONTACT_METADATA,
  CONTACT_HERO,
  CONTACT_BREADCRUMB,
  CONTACT_DETAILS_INTRO,
  CONTACT_DETAILS,
  CONTACT_FORM_INTRO,
  OFFICE_HOURS_CARD,
  OFFICE_HOURS,
  ENQUIRY_ROUTES_CARD,
  ENQUIRY_ROUTES,
} from "@/lib/data/contact"

export const metadata: Metadata = CONTACT_METADATA

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[460px] overflow-hidden bg-brand-dark">
        <img
          src={CONTACT_HERO.image}
          alt={CONTACT_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {CONTACT_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
              {CONTACT_HERO.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {CONTACT_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={CONTACT_HERO.primary.href} variant="gold" radius={0}>
                {CONTACT_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={CONTACT_HERO.secondary.href} variant="ghost" radius={0}>
                {CONTACT_HERO.secondary.label}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-page-pattern">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          {CONTACT_BREADCRUMB.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center">
              {index > 0 && <span className="mx-3 text-slate-300">/</span>}

              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-xs font-semibold text-[#102c4c]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================
          CONTACT DETAILS
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              {CONTACT_DETAILS_INTRO.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            {CONTACT_DETAILS_INTRO.title}
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {CONTACT_DETAILS.map((item, index) => {
              const Icon = ICON_MAP[item.icon]
              const color = lightTileIcon(index)

              const inner = (
                <>
                  <div
                    className={`flex h-11 w-11 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
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
                  {CONTACT_FORM_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {CONTACT_FORM_INTRO.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {CONTACT_FORM_INTRO.description}
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-4">
              <div className="group border border-slate-200 bg-white p-7">
                <div
                  className={`flex h-11 w-11 items-center justify-center bg-violet-100 text-violet-600 ${ICON_MOTION}`}
                >
                  {(() => {
                    const Icon = ICON_MAP[OFFICE_HOURS_CARD.icon]
                    return <Icon className="h-5 w-5" strokeWidth={1.7} />
                  })()}
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  {OFFICE_HOURS_CARD.title}
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
                  {(() => {
                    const Icon = ICON_MAP[ENQUIRY_ROUTES_CARD.icon]
                    return <Icon className="h-5 w-5" strokeWidth={1.7} />
                  })()}
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  {ENQUIRY_ROUTES_CARD.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {ENQUIRY_ROUTES_CARD.description}
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
