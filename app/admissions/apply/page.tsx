import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowRight, ClipboardCheck } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ApplicationForm } from "./application-form"
import { ICON_MAP } from "@/lib/icon-map"
import { PageHeroBanner } from "@/components/page-hero-banner"
import { imageUrl } from "@/lib/site-assets"
import { ICON_MOTION } from "@/lib/icon-colors"
import { CtaButton } from "@/components/cta-button";
import {
  APPLY_METADATA,
  APPLY_HERO,
  APPLY_BREADCRUMB,
  BEFORE_YOU_START,
  APPLY_HELP,
} from "@/lib/data/apply"

export const metadata: Metadata = buildMetadata({
  ...APPLY_METADATA,
  path: "/admissions/apply",
})

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeroBanner
        eyebrow={APPLY_HERO.eyebrow}
        titleLines={[APPLY_HERO.title]}
        description={APPLY_HERO.description}
        image={imageUrl("/images/admissions-building.png")}
        imageAlt="KACST admissions building"
        primary={APPLY_HERO.primary}
        secondary={APPLY_HERO.secondary}
      />

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-page-pattern">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          {APPLY_BREADCRUMB.map((crumb, index) => (
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
          FORM + SIDEBAR
      ========================================================= */}
      <section id="application-form" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.4fr]">
          <ApplicationForm />

          <aside className="space-y-4">
            <div className="group border border-slate-200 bg-white p-6">
              <div
                className={`flex h-11 w-11 items-center justify-center bg-blue-100 text-blue-600 ${ICON_MOTION}`}
              >
                {(() => {
                  const Icon = ICON_MAP[BEFORE_YOU_START.icon]
                  return <Icon className="h-5 w-5" strokeWidth={1.7} />
                })()}
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                {BEFORE_YOU_START.title}
              </h3>

              <div className="mt-4 space-y-3">
                {BEFORE_YOU_START.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-6 text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d9a82e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="group border border-[#cfe1ee] bg-[#eaf4fb] p-6">
              <div
                className={`flex h-11 w-11 items-center justify-center bg-white text-emerald-600 ${ICON_MOTION}`}
              >
                {(() => {
                  const Icon = ICON_MAP[APPLY_HELP.icon]
                  return <Icon className="h-5 w-5" strokeWidth={1.7} />
                })()}
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                {APPLY_HELP.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                {APPLY_HELP.description}
              </p>

              <Link
                href={APPLY_HELP.link.href}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#092c4d] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#12476d]"
              >
                {APPLY_HELP.link.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
