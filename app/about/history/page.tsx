import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react"

import { SiteHeader } from "../../../components/site-header"
import { SiteFooter } from "../../../components/site-footer"
import { ICON_MAP } from "@/lib/icon-map"
import { CtaButton } from "@/components/cta-button";
import {
  HISTORY_HERO,
  HISTORY_BREADCRUMB,
  HISTORY_HERO_CARD,
  HISTORY_STATS,
  HISTORY_INTRO,
  INSTITUTIONAL_FACTS,
  JOURNEY_INTRO,
  JOURNEY,
  PRINCIPAL_MESSAGE,
  ACHIEVEMENTS_INTRO,
  ACHIEVEMENTS,
  EDUCATIONAL_PHILOSOPHY,
  FACILITIES_INTRO,
  FACILITIES,
  HISTORY_CTA,
} from "@/lib/data/history"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0D0357]">
      <SiteHeader />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative isolate overflow-hidden bg-[#0D0357]">
          {/* Background image overlay */}
          <div className="absolute inset-0 -z-10 select-none">
            <img
              src={HISTORY_HERO.image}
              alt={HISTORY_HERO.imageAlt}
              className="h-full w-full object-cover"
            />
            {/* dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-[#0D0357]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0357] via-transparent to-[#0D0357]/70" />
          </div>

          {/* Decorative layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#F6B900]/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#F8D87D]/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-white/55">
              {HISTORY_BREADCRUMB.map((crumb, index) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-white/30" />
                  )}

                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-200 hover:text-[#FCD34D]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>

            <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_.95fr]">
              {/* Hero copy */}
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#F6B900]" />
                  {HISTORY_HERO.badge}
                </div>

                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  {HISTORY_HERO.title}{" "}
                  <span className="text-[#F6B900]">
                    {HISTORY_HERO.titleHighlight}
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  {HISTORY_HERO.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href={HISTORY_HERO.primary.href} variant="gold" radius={12}>
                    {HISTORY_HERO.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </CtaButton>

                  <CtaButton href={HISTORY_HERO.secondary.href} variant="ghost" radius={12}>
                    {HISTORY_HERO.secondary.label}
                  </CtaButton>
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_100px_rgba(0,0,0,.24)] backdrop-blur">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0B0754] px-7 py-8 sm:px-10 sm:py-10">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#F6B900]/10 blur-3xl" />

                    <div className="relative">
                      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#F8D87D]">
                        {HISTORY_HERO_CARD.eyebrow}
                      </p>

                      <div className="mt-5 flex items-end gap-4">
                        <span className="text-8xl font-semibold leading-none tracking-[-0.08em] text-white sm:text-9xl">
                          {HISTORY_HERO_CARD.bigNumber}
                        </span>

                        <div className="pb-3">
                          <div className="text-sm uppercase tracking-[0.2em] text-white/45">
                            {HISTORY_HERO_CARD.bigNumberCaption}
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {HISTORY_HERO_CARD.bigNumberTitle}
                          </div>
                        </div>
                      </div>

                      <div className="my-8 h-px bg-white/10" />

                      <p className="max-w-md text-sm leading-7 text-white/60">
                        {HISTORY_HERO_CARD.description}
                      </p>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        {HISTORY_HERO_CARD.miniStats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                          >
                            <div className="text-2xl font-semibold text-[#F6B900]">
                              {stat.value}
                            </div>
                            <div className="mt-1 text-xs text-white/50">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#F6B900]/25 bg-[#0D0357] px-5 py-4 shadow-[0_20px_50px_rgba(5,3,43,.35)] sm:block">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F6B900] text-[#0D0357]">
                      {(() => {
                        const Icon = ICON_MAP[HISTORY_HERO_CARD.badge.icon]
                        return <Icon className="h-5 w-5" />
                      })()}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {HISTORY_HERO_CARD.badge.title}
                      </p>
                      <p className="text-xs text-white/45">
                        {HISTORY_HERO_CARD.badge.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================== */}
        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[#DCE7F1] bg-white shadow-[0_20px_60px_rgba(13,3,87,.08)] sm:grid-cols-2 lg:grid-cols-4">
            {HISTORY_STATS.map((stat, index) => {
              const Icon = ICON_MAP[stat.icon]

              return (
                <div
                  key={stat.label}
                  className={`group relative p-6 sm:p-7 ${index < HISTORY_STATS.length - 1
                      ? "border-b border-[#DCE7F1] lg:border-b-0 lg:border-r"
                      : ""
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#0D0357]">
                        {stat.value}
                      </div>

                      <div className="mt-1 text-sm text-[#64748B]">
                        {stat.label}
                      </div>
                    </div>

                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF4D8] text-[#D79B00] transition-transform duration-200 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* =========================================================
            INTRO / INSTITUTIONAL STORY
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  {HISTORY_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                {HISTORY_INTRO.title}
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B]">
                {HISTORY_INTRO.description}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#0D0357]">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF4D8] text-[#D79B00]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                {HISTORY_INTRO.note}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {INSTITUTIONAL_FACTS.map((item) => {
                const Icon = ICON_MAP[item.icon]

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.5rem] border border-[#DCE7F1] bg-white p-6 shadow-[0_12px_40px_rgba(7,27,73,.045)] transition-all duration-200 hover:-translate-y-1 hover:border-[#F6B900]/50 hover:shadow-[0_18px_50px_rgba(13,3,87,.08)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0D0357] text-[#F6B900] transition-colors duration-200 group-hover:bg-[#120A80]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[#0D0357]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            TIMELINE
        ========================================================== */}
        <section className="overflow-hidden bg-page-pattern">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  {JOURNEY_INTRO.eyebrow}
                </span>
                <span className="h-px w-10 bg-[#F6B900]" />
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                {JOURNEY_INTRO.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                {JOURNEY_INTRO.description}
              </p>
            </div>

            <div className="relative mt-16">
              {/* central line */}
              <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-[#DCE7F1] lg:left-1/2 lg:block" />

              <div className="space-y-12 lg:space-y-16">
                {JOURNEY.map((item, index) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`relative grid gap-8 lg:grid-cols-2 lg:gap-20 ${index % 2 === 0 ? "" : "lg:text-right"
                      }`}
                  >
                    {/* desktop year */}
                    <div
                      className={`hidden lg:block ${index % 2 === 0
                          ? "lg:pr-20"
                          : "lg:order-2 lg:pl-20"
                        }`}
                    >
                      <div className="inline-flex rounded-full border border-[#F6B900]/30 bg-[#FFF5DB] px-4 py-2 text-sm font-semibold text-[#D79B00]">
                        {item.year}
                      </div>

                      <div
                        className={`mt-4 h-1 w-16 rounded-full bg-[#F6B900] ${index % 2 === 0 ? "" : "ml-auto"
                          }`}
                      />
                    </div>

                    {/* content */}
                    <div
                      className={`relative rounded-[1.5rem] border border-[#DCE7F1] bg-[#F7F8FA] p-7 shadow-[0_10px_35px_rgba(13,3,87,.035)] lg:p-8 ${index % 2 === 0
                          ? "lg:pl-10"
                          : "lg:order-1 lg:pr-10"
                        }`}
                    >
                      {/* connector */}
                      <span className="absolute -left-[7px] top-10 hidden h-3.5 w-3.5 rounded-full border-4 border-white bg-[#F6B900] shadow-[0_0_0_1px_#E3B100] lg:block lg:left-auto lg:right-[-27px]" />

                      <div className="mb-4 flex items-center gap-3 lg:hidden">
                        <span className="rounded-full bg-[#FFF5DB] px-3 py-1.5 text-xs font-semibold text-[#D79B00]">
                          {item.year}
                        </span>
                      </div>

                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#738196]">
                        {item.eyebrow}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D0357]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRINCIPAL MESSAGE
        ========================================================== */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white p-8 shadow-[0_24px_70px_rgba(13,3,87,0.04)] sm:p-12 lg:p-16">
              {/* Decorative glows inside card */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFF5DB]/50 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#E2E8F0]/40 blur-3xl" />

              <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                {/* Principal image & details */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative group">
                    {/* Ring decoration */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#F6B900] to-[#0D0357] opacity-20 blur-md transition-all duration-300 group-hover:scale-105" />
                    
                    <div className="relative h-48 w-48 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-[0_16px_40px_rgba(13,3,87,0.12)] sm:h-56 sm:w-56">
                      <img
                        src={PRINCIPAL_MESSAGE.image}
                        alt={PRINCIPAL_MESSAGE.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5DB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D79B00]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F6B900] animate-pulse" />
                      {PRINCIPAL_MESSAGE.badge}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#0D0357] sm:text-3xl">
                      {PRINCIPAL_MESSAGE.name}
                    </h3>

                    <p className="mt-2 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] sm:text-xs">
                      {PRINCIPAL_MESSAGE.role}
                    </p>
                  </div>
                </div>

                {/* Quote content */}
                <div className="relative border-t border-[#E2E8F0] pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  <span className="absolute -top-6 left-0 text-7xl font-serif text-[#F6B900]/25 lg:-left-2 lg:-top-12 lg:text-8xl">
                    “
                  </span>

                  <blockquote className="relative text-xl font-medium leading-relaxed tracking-tight text-[#0D0357] sm:text-2xl lg:text-3xl">
                    {PRINCIPAL_MESSAGE.quote}
                  </blockquote>

                  <p className="mt-6 text-sm leading-relaxed text-[#64748B] sm:text-base">
                    {PRINCIPAL_MESSAGE.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ACHIEVEMENTS
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  {ACHIEVEMENTS_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                {ACHIEVEMENTS_INTRO.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                {ACHIEVEMENTS_INTRO.description}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <ShieldCheck className="h-4 w-4 text-[#F59E0B]" />
                {ACHIEVEMENTS_INTRO.note}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {ACHIEVEMENTS.map((item) => {
              const Icon = ICON_MAP[item.icon]

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#DCE7F1] bg-white p-7 shadow-[0_12px_40px_rgba(7,27,73,.045)]"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FFF5DB] blur-2xl transition-transform duration-300 group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="text-3xl font-semibold tracking-[-0.045em] text-[#0D0357]">
                          {item.number}
                        </div>

                        <h3 className="mt-2 text-lg font-semibold text-[#0D0357]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0D0357] text-[#F6B900]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* =========================================================
            FACILITIES / PHILOSOPHY
        ========================================================== */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
              <div>
                <div className="rounded-[2rem] bg-[#0D0357] p-8 shadow-[0_25px_70px_rgba(13,3,87,.16)] sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6B900] text-[#0D0357]">
                    {(() => {
                      const Icon = ICON_MAP[EDUCATIONAL_PHILOSOPHY.icon]
                      return <Icon className="h-5 w-5" />
                    })()}
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8D87D]">
                    {EDUCATIONAL_PHILOSOPHY.eyebrow}
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                    {EDUCATIONAL_PHILOSOPHY.title}
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/60">
                    {EDUCATIONAL_PHILOSOPHY.description}
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#F6B900]/15" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {EDUCATIONAL_PHILOSOPHY.footerTitle}
                      </p>
                      <p className="text-xs text-white/45">
                        {EDUCATIONAL_PHILOSOPHY.footerSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F6B900]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                    {FACILITIES_INTRO.eyebrow}
                  </span>
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                  {FACILITIES_INTRO.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B]">
                  {FACILITIES_INTRO.description}
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {FACILITIES.map((facility) => (
                    <div
                      key={facility}
                      className="flex items-start gap-3 rounded-xl border border-[#DCE7F1] bg-white p-4"
                    >
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FFF5DB] text-[#D79B00]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-sm leading-6 text-[#334155]">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0D0357] to-[#1E1B4B] p-10 shadow-[0_30px_80px_rgba(13,3,87,0.18)] sm:p-14 text-center">
              {/* Glow accents */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F6B900]/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#120A80]/50 blur-3xl" />

              <div className="relative flex flex-col items-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FCD34D] backdrop-blur-sm">
                  {HISTORY_CTA.badge}
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {HISTORY_CTA.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                  {HISTORY_CTA.description}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <CtaButton href={HISTORY_CTA.primary.href} variant="gold" size="lg" radius={12}>
                    {HISTORY_CTA.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </CtaButton>

                  <CtaButton href={HISTORY_CTA.secondary.href} variant="ghost" size="lg" radius={12}>
                    {HISTORY_CTA.secondary.label}
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}