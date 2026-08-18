"use client";

import { ArrowRight, Check, ChevronRight, UsersRound } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { CtaButton } from "@/components/cta-button";
import {
  STUDENT_LIFE_HERO,
  STUDENT_LIFE_INTRO,
  JOURNEY_STAGES_INTRO,
  JOURNEY_STAGES,
  STUDENT_SUPPORT_SECTION,
  STUDENT_SUPPORT,
  ACTIVITIES_INTRO,
  ACTIVITIES,
  CAREER_SECTION,
  CAREER_FEATURES,
  EVENTS_INTRO,
  EVENT_CARDS,
  STUDENT_VOICES,
  STUDENT_LIFE_CTA,
} from "@/lib/data/student-life";

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#232771]">
        <div className="absolute inset-0">
          <img
            src={STUDENT_LIFE_HERO.image}
            alt={STUDENT_LIFE_HERO.imageAlt}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#232771]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/75 to-[#232771]/35" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {STUDENT_LIFE_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              {STUDENT_LIFE_HERO.titleLines[0]}
              <br />
              <span className="text-white">
                {STUDENT_LIFE_HERO.titleLines[1]}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {STUDENT_LIFE_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={STUDENT_LIFE_HERO.primary.href} variant="gold" radius={0}>
                {STUDENT_LIFE_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={STUDENT_LIFE_HERO.secondary.href} variant="ghost" radius={0}>
                {STUDENT_LIFE_HERO.secondary.label}
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {STUDENT_LIFE_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {STUDENT_LIFE_INTRO.titleLines[0]}
                <br />
                {STUDENT_LIFE_INTRO.titleLines[1]}
              </h2>
            </div>

            <div>
              {STUDENT_LIFE_INTRO.paragraphs.map((paragraph, index) => (
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
          STUDENT JOURNEY
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {JOURNEY_STAGES_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {JOURNEY_STAGES_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {JOURNEY_STAGES_INTRO.description}
            </p>
          </div>

          <div className="relative mt-12">
            {/* Desktop connector */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#bfd1df] lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {JOURNEY_STAGES.map((stage) => {
                const Icon = ICON_MAP[stage.icon];

                return (
                  <div
                    key={stage.title}
                    className="relative border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#c7dce9] bg-white text-[#175783]">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>

                    <div className="mt-5 text-xs font-bold tracking-[0.16em] text-[#b28718]">
                      {stage.number}
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#092c4d]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {stage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================= */}
      <section id="support" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative overflow-hidden">
              <img
                src={STUDENT_SUPPORT_SECTION.image}
                alt={STUDENT_SUPPORT_SECTION.imageAlt}
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-7 pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  {STUDENT_SUPPORT_SECTION.overlayEyebrow}
                </p>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  {STUDENT_SUPPORT_SECTION.overlayTitle}
                </p>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {STUDENT_SUPPORT_SECTION.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {STUDENT_SUPPORT_SECTION.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {STUDENT_SUPPORT_SECTION.description}
              </p>

              <div className="mt-8 space-y-4">
                {STUDENT_SUPPORT.map((item) => {
                  const Icon = ICON_MAP[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-slate-200 pb-5 last:border-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[#092c4d]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href={STUDENT_SUPPORT_SECTION.link.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                {STUDENT_SUPPORT_SECTION.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACTIVITIES
      ========================================================= */}
      <section id="activities" className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {ACTIVITIES_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {ACTIVITIES_INTRO.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {ACTIVITIES_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((item) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                  >
                    {ACTIVITIES_INTRO.cardLinkLabel}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER DEVELOPMENT
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden bg-[#232771]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px]">
                <img
                  src={CAREER_SECTION.image}
                  alt={CAREER_SECTION.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#232771]/40" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-8 pt-28">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                    {CAREER_SECTION.overlayEyebrow}
                  </span>

                  <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                    {CAREER_SECTION.overlayTitle}
                  </h3>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                  {(() => {
                    const Icon = ICON_MAP[CAREER_SECTION.icon];
                    return <Icon className="h-6 w-6" />;
                  })()}
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold text-white">
                  {CAREER_SECTION.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-blue-100/70">
                  {CAREER_SECTION.description}
                </p>

                <div className="mt-7 space-y-4">
                  {CAREER_FEATURES.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-blue-100/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#d9a82e]/40 text-[#d9a82e]">
                        <Check className="h-3 w-3" />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={CAREER_SECTION.link.href}
                  className="mt-8 inline-flex items-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
                >
                  {CAREER_SECTION.link.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {EVENTS_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {EVENTS_INTRO.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {EVENTS_INTRO.description}
              </p>
            </div>

            <a
              href={EVENTS_INTRO.link.href}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
            >
              {EVENTS_INTRO.link.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {EVENT_CARDS.map((item) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL / AUTHENTICITY NOTE
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
            {(() => {
              const Icon = ICON_MAP[STUDENT_VOICES.icon];
              return <Icon className="h-5 w-5" />;
            })()}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              {STUDENT_VOICES.eyebrow}
            </span>

            <span className="h-px w-8 bg-[#d9a82e]" />
          </div>

          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            {STUDENT_VOICES.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            {STUDENT_VOICES.description}
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* background glow */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-[45%] h-[300px] w-[300px] rounded-full bg-[#6650d9] opacity-10 blur-3xl" />

          <div className="relative flex min-h-[250px] flex-col justify-center px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <span className="text-[11px]">+</span>
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {STUDENT_LIFE_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {STUDENT_LIFE_CTA.titleLines[0]}
                <br />
                {STUDENT_LIFE_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {STUDENT_LIFE_CTA.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              {STUDENT_LIFE_CTA.links.map((link, index) => (
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

            <div className="absolute right-5 top-5 hidden h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.045] sm:flex">
              <UsersRound
                className="h-6 w-6 text-[#d9a82e]"
                strokeWidth={1.5}
              />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d9a82e]" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}