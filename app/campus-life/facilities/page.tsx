"use client";

import {
  ArrowRight,
  CalendarClock,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { CtaButton } from "@/components/cta-button";
import {
  FACILITIES_HERO,
  FACILITIES_INTRO,
  FACILITY_STATS,
  FACILITY_DIRECTORY_INTRO,
  FACILITIES,
  QUICK_SERVICES_INTRO,
  QUICK_LINKS,
  CAMPUS_EXPERIENCE_FEATURE,
  ACCESSIBILITY_SECTION,
  FACILITIES_CTA,
} from "@/lib/data/facilities";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[540px] overflow-hidden bg-[#232771]">
        <img
          src={FACILITIES_HERO.image}
          alt={FACILITIES_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#232771]/72" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/78 to-[#232771]/20" />

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {FACILITIES_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              {FACILITIES_HERO.titleLines[0]}
              <br />
              <span className="text-[#f1f4f8]">
                {FACILITIES_HERO.titleLines[1]}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {FACILITIES_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={FACILITIES_HERO.primary.href} variant="gold" radius={0}>
                {FACILITIES_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={FACILITIES_HERO.secondary.href} variant="ghost" radius={0}>
                {FACILITIES_HERO.secondary.label}
                <MapPin className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {FACILITIES_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {FACILITIES_INTRO.titleLines[0]}
                <br />
                {FACILITIES_INTRO.titleLines[1]}
              </h2>
            </div>

            <div>
              {FACILITIES_INTRO.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-slate-600 ${
                    index > 0 ? "mt-5" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-[#d9e5ef] bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="grid divide-y divide-[#cdddea] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {FACILITY_STATS.map((item) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-5 py-5 first:pl-0 last:pr-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c8dcea] bg-white text-[#175783]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="font-serif text-2xl font-bold text-[#092c4d]">
                      {item.number}
                    </p>

                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITY DIRECTORY
      ========================================================= */}
      <section
        id="facilities"
        className="bg-[#f5f8fc] border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {FACILITY_DIRECTORY_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {FACILITY_DIRECTORY_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {FACILITY_DIRECTORY_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((facility) => {
              const Icon = ICON_MAP[facility.icon];

              return (
                <article
                  key={facility.title}
                  className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#232771]/15 transition group-hover:bg-[#232771]/30" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#232771]/75 text-[#e1b63b] backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="absolute bottom-4 left-5 bg-[#d9a82e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#232771]">
                      {facility.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#092c4d]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {facility.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      <div className="flex items-start gap-3">
                        <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {FACILITY_DIRECTORY_INTRO.cardLabels.hours}
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-slate-600">
                            {facility.hours}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {FACILITY_DIRECTORY_INTRO.cardLabels.location}
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-slate-600">
                            {facility.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {FACILITY_DIRECTORY_INTRO.cardLabels.contact}
                          </p>

                          <p className="mt-0.5 break-all text-xs font-medium text-slate-600">
                            {facility.contact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {FACILITY_DIRECTORY_INTRO.cardLabels.services}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {facility.services.map((service) => (
                          <span
                            key={service}
                            className="border border-[#d9e6ef] bg-[#f5f9fc] px-2.5 py-1.5 text-[11px] font-medium text-[#175783]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783] transition hover:text-[#b28718]"
                    >
                      {FACILITY_DIRECTORY_INTRO.cardLabels.link}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK SERVICES
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {QUICK_SERVICES_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {QUICK_SERVICES_INTRO.titleLines[0]}
                <br />
                {QUICK_SERVICES_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {QUICK_SERVICES_INTRO.description}
              </p>

              <a
                href={QUICK_SERVICES_INTRO.link.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                {QUICK_SERVICES_INTRO.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {QUICK_LINKS.map((item) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.title}
                    className="group border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS EXPERIENCE FEATURE
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid overflow-hidden border border-[#cbddea] bg-[#232771] lg:grid-cols-2">
            <div className="relative min-h-[430px]">
              <img
                src={CAMPUS_EXPERIENCE_FEATURE.image}
                alt={CAMPUS_EXPERIENCE_FEATURE.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#232771]/20" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-8 pt-32">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  {CAMPUS_EXPERIENCE_FEATURE.overlayEyebrow}
                </span>

                <p className="mt-2 max-w-lg font-serif text-2xl font-semibold text-white">
                  {CAMPUS_EXPERIENCE_FEATURE.overlayTitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                {(() => {
                  const Icon = ICON_MAP[CAMPUS_EXPERIENCE_FEATURE.icon];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                {CAMPUS_EXPERIENCE_FEATURE.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                {CAMPUS_EXPERIENCE_FEATURE.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {CAMPUS_EXPERIENCE_FEATURE.items.map((item) => {
                  const ItemIcon = ICON_MAP[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="border border-white/10 bg-white/[0.045] p-4"
                    >
                      <ItemIcon className="h-5 w-5 text-[#d9a82e]" />

                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <a
                id="campus-map"
                href={CAMPUS_EXPERIENCE_FEATURE.link.href}
                className="mt-8 inline-flex w-fit items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                {CAMPUS_EXPERIENCE_FEATURE.link.label}
                <MapPin className="h-4 w-4 text-[#d9a82e]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCESSIBILITY
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[390px] overflow-hidden bg-[#232771]">
              <img
                src={ACCESSIBILITY_SECTION.image}
                alt={ACCESSIBILITY_SECTION.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#232771]/30" />

              <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center bg-[#d9a82e] text-[#232771]">
                {(() => {
                  const Icon = ICON_MAP[ACCESSIBILITY_SECTION.icon];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {ACCESSIBILITY_SECTION.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {ACCESSIBILITY_SECTION.titleLines[0]}
                <br />
                {ACCESSIBILITY_SECTION.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {ACCESSIBILITY_SECTION.description}
              </p>

              <div className="mt-7 space-y-4">
                {ACCESSIBILITY_SECTION.points.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-100 pb-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>

                    <p className="text-sm font-medium text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — SAME STYLE AS PREVIOUS KKJSTU CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          {/* subtle architectural/grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="relative flex min-h-[270px] flex-col justify-center px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  {(() => {
                    const Icon = ICON_MAP[FACILITIES_CTA.icon];
                    return <Icon className="h-3 w-3" />;
                  })()}
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {FACILITIES_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {FACILITIES_CTA.titleLines[0]}
                <br />
                {FACILITIES_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {FACILITIES_CTA.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              {FACILITIES_CTA.links.map((link, index) => (
                <CtaButton
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "gold" : "ghost"}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}