"use client";

import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { CtaButton } from "@/components/cta-button";
import {
  RESEARCH_HERO,
  RESEARCH_INTRO,
  RESEARCH_STATS,
  RESEARCH_AREAS_INTRO,
  RESEARCH_AREAS,
  FEATURED_RESEARCH_INTRO,
  FEATURED_PROJECTS,
  RESEARCH_LAB_FEATURE,
  RESEARCH_OPPORTUNITIES_INTRO,
  RESEARCH_OPPORTUNITIES,
  COLLABORATION,
  RESEARCH_CTA,
} from "@/lib/data/research";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#232771]">
        <img
          src={RESEARCH_HERO.image}
          alt={RESEARCH_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#232771]/76" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/78 to-[#232771]/25" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {RESEARCH_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              {RESEARCH_HERO.titleLines[0]}
              <br />
              <span className="text-[#f1f4f8]">
                {RESEARCH_HERO.titleLines[1]}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {RESEARCH_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={RESEARCH_HERO.primary.href} variant="gold" radius={0}>
                {RESEARCH_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={RESEARCH_HERO.secondary.href} variant="ghost" radius={0}>
                {RESEARCH_HERO.secondary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / RESEARCH AT A GLANCE
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {RESEARCH_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {RESEARCH_INTRO.titleLines[0]}
                <br />
                {RESEARCH_INTRO.titleLines[1]}
              </h2>
            </div>

            <div>
              {RESEARCH_INTRO.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-slate-600 ${
                    index > 0 ? "mt-5" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-7 flex flex-wrap gap-3">
                {RESEARCH_INTRO.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#d8e5ee] bg-[#f5f9fc] px-4 py-2 text-xs font-semibold text-[#175783]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH STATS
      ========================================================= */}
      <section className="border-y border-[#d9e5ef] bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="grid divide-y divide-[#cdddea] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {RESEARCH_STATS.map((item) => {
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
                      {item.value}
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
          RESEARCH FOCUS AREAS
      ========================================================= */}
      <section id="research-areas" className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {RESEARCH_AREAS_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {RESEARCH_AREAS_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {RESEARCH_AREAS_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_AREAS.map((area) => {
              const Icon = ICON_MAP[area.icon];

              return (
                <div
                  key={area.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {area.description}
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#d9a82e] transition-all group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED RESEARCH
      ========================================================= */}
      <section className="bg-[#f0effb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {FEATURED_RESEARCH_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {FEATURED_RESEARCH_INTRO.titleLines[0]}
                <br />
                {FEATURED_RESEARCH_INTRO.titleLines[1]}
              </h2>
            </div>

            <a
              href={FEATURED_RESEARCH_INTRO.link.href}
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
            >
              {FEATURED_RESEARCH_INTRO.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((project) => {
              const Icon = ICON_MAP[project.icon];

              return (
                <article
                  key={project.title}
                  className="overflow-hidden border border-[#dddcef] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#232771]/25" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#232771]/75 text-[#e1b63b] backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="absolute bottom-4 left-5 bg-[#d9a82e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#232771]">
                      {project.area}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                      {project.title}
                    </h3>

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          {FEATURED_RESEARCH_INTRO.cardLabels.problem}
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          {FEATURED_RESEARCH_INTRO.cardLabels.method}
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.method}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          {FEATURED_RESEARCH_INTRO.cardLabels.impact}
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {FEATURED_RESEARCH_INTRO.cardLabels.researcher}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#175783]">
                        {project.researcher}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH LAB FEATURE
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid overflow-hidden border border-slate-200 bg-[#232771] lg:grid-cols-2">
            <div className="relative min-h-[440px]">
              <img
                src={RESEARCH_LAB_FEATURE.image}
                alt={RESEARCH_LAB_FEATURE.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#232771]/25" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-8 pt-32">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  {RESEARCH_LAB_FEATURE.overlayEyebrow}
                </span>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  {RESEARCH_LAB_FEATURE.overlayTitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                {(() => {
                  const Icon = ICON_MAP[RESEARCH_LAB_FEATURE.icon];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                {RESEARCH_LAB_FEATURE.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                {RESEARCH_LAB_FEATURE.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {RESEARCH_LAB_FEATURE.items.map((item) => {
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
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH OPPORTUNITIES
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {RESEARCH_OPPORTUNITIES_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {RESEARCH_OPPORTUNITIES_INTRO.titleLines[0]}
                <br />
                {RESEARCH_OPPORTUNITIES_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {RESEARCH_OPPORTUNITIES_INTRO.description}
              </p>

              <a
                href={RESEARCH_OPPORTUNITIES_INTRO.link.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                {RESEARCH_OPPORTUNITIES_INTRO.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH_OPPORTUNITIES.map((item) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.title}
                    className="group border border-[#d7e4ed] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                    >
                      {RESEARCH_OPPORTUNITIES_INTRO.cardLinkLabel}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION
      ========================================================= */}
      <section id="collaborate" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden border border-[#d9e5ef] bg-[#f5f9fc]">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d9a82e]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    {COLLABORATION.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                  {COLLABORATION.titleLines[0]}
                  <br />
                  {COLLABORATION.titleLines[1]}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  {COLLABORATION.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {COLLABORATION.tags.map((item) => (
                    <span
                      key={item}
                      className="border border-[#d5e2eb] bg-white px-3 py-2 text-xs font-semibold text-[#175783]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[270px] overflow-hidden bg-[#232771]">
                <img
                  src={COLLABORATION.image}
                  alt={COLLABORATION.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-[#232771]/45" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center border border-white/35 bg-white/10 text-white backdrop-blur-sm">
                    {(() => {
                      const Icon = ICON_MAP[COLLABORATION.icon];
                      return <Icon className="h-7 w-7 text-[#d9a82e]" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — SAME KKJSTU STYLE
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
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
                    const Icon = ICON_MAP[RESEARCH_CTA.icon];
                    return <Icon className="h-3 w-3" />;
                  })()}
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {RESEARCH_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {RESEARCH_CTA.titleLines[0]}
                <br />
                {RESEARCH_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {RESEARCH_CTA.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              {RESEARCH_CTA.links.map((link, index) => (
                <CtaButton
                  key={link.label}
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