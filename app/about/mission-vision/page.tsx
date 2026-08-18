"use client";

import { ArrowRight, Check } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { CtaButton } from "@/components/cta-button";
import {
  MISSION_VISION_HERO,
  MISSION_VISION_BREADCRUMB,
  MISSION,
  VISION,
  PRIORITIES_INTRO,
  PRIORITIES,
  CORE_VALUES_INTRO,
  CORE_VALUES,
  STUDENT_PROMISE_INTRO,
  STUDENT_PROMISE,
  COMMUNITY_IMPACT,
  MISSION_VISION_CTA,
} from "@/lib/data/mission-vision";

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#232771]">
        <img
          src={MISSION_VISION_HERO.image}
          alt={MISSION_VISION_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#232771]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/75 to-[#232771]/25" />

        <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e1b63b]">
                {MISSION_VISION_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
              {MISSION_VISION_HERO.titleLines[0]}
              <br />
              {MISSION_VISION_HERO.titleLines[1]}
              <br />
              <span className="text-[#f1f4f7]">
                {MISSION_VISION_HERO.titleLines[2]}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              {MISSION_VISION_HERO.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={MISSION_VISION_HERO.primary.href} variant="gold" radius={0}>
                {MISSION_VISION_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={MISSION_VISION_HERO.secondary.href} variant="ghost" radius={0}>
                {MISSION_VISION_HERO.secondary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-page-pattern">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          {MISSION_VISION_BREADCRUMB.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center">
              {index > 0 && <span className="mx-3 text-slate-300">/</span>}

              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-xs font-semibold text-[#102c4c]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* MISSION / VISION */}
      <section id="mission" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <article className="group overflow-hidden border border-slate-200 bg-white shadow-[0_12px_35px_rgba(35,39,113,0.07)]">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[300px]">
                  <img
                    src={MISSION.image}
                    alt={MISSION.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#232771]/25" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#cfe0eb] bg-[#edf5fb] text-[#175783]">
                    {(() => {
                      const Icon = ICON_MAP[MISSION.icon];
                      return <Icon className="h-6 w-6" strokeWidth={1.7} />;
                    })()}
                  </div>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    {MISSION.eyebrow}
                  </div>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#092c4d]">
                    {MISSION.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {MISSION.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {MISSION.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Vision */}
            <article className="overflow-hidden bg-[#232771] shadow-[0_12px_35px_rgba(35,39,113,0.12)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d9a82e]/35 bg-white/[0.06] text-[#e1b63b]">
                    {(() => {
                      const Icon = ICON_MAP[VISION.icon];
                      return <Icon className="h-6 w-6" strokeWidth={1.6} />;
                    })()}
                  </div>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    {VISION.eyebrow}
                  </div>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                    {VISION.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-blue-100/70">
                    {VISION.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {VISION.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-blue-100/75"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#d9a82e]/40 text-[#e1b63b]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <img
                    src={VISION.image}
                    alt={VISION.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#232771]/30" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STRATEGIC PRIORITIES */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {PRIORITIES_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {PRIORITIES_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {PRIORITIES_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRIORITIES.map((item) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 h-px w-7 bg-[#d9a82e] transition-all group-hover:w-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {CORE_VALUES_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {CORE_VALUES_INTRO.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {CORE_VALUES_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((item) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#cbdde9] hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="h-px w-8 bg-[#d9a82e] transition-all group-hover:w-12" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDENT PROMISE */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {STUDENT_PROMISE_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {STUDENT_PROMISE_INTRO.titleLines[0]}
                <br />
                {STUDENT_PROMISE_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {STUDENT_PROMISE_INTRO.description}
              </p>

              <div className="mt-8 space-y-3">
                {STUDENT_PROMISE.map((item) => {
                  const Icon = ICON_MAP[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 border border-slate-200 bg-white p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#092c4d]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src={STUDENT_PROMISE_INTRO.image}
                alt={STUDENT_PROMISE_INTRO.imageAlt}
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#232771]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    {STUDENT_PROMISE_INTRO.overlayEyebrow}
                  </span>
                </div>

                <h3 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {STUDENT_PROMISE_INTRO.overlayTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="relative overflow-hidden bg-[#232771]">
        <img
          src={COMMUNITY_IMPACT.image}
          alt={COMMUNITY_IMPACT.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#232771]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/80 to-[#232771]/45" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                {COMMUNITY_IMPACT.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              {COMMUNITY_IMPACT.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
              {COMMUNITY_IMPACT.description}
            </p>
          </div>

          <div className="mt-14 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {COMMUNITY_IMPACT.items.map((item) => {
              const ImpactIcon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="border-b border-white/10 px-6 py-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <ImpactIcon
                    className="h-5 w-5 text-[#e1b63b]"
                    strokeWidth={1.6}
                  />

                  <p className="mt-4 font-serif text-lg font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f5f8fc] px-5 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden bg-[#232771] shadow-[0_18px_55px_rgba(35,39,113,0.16)]">
          {/* subtle institutional line pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="pointer-events-none absolute -right-32 -top-40 h-[360px] w-[360px] rounded-full bg-[#175783] opacity-20 blur-3xl" />

          <div className="relative flex min-h-[290px] flex-col justify-center px-7 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center border border-[#d9a82e]/50 text-[#d9a82e]">
                  {(() => {
                    const Icon = ICON_MAP[MISSION_VISION_CTA.icon];
                    return <Icon className="h-3 w-3" />;
                  })()}
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {MISSION_VISION_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {MISSION_VISION_CTA.titleLines[0]}
                <br />
                {MISSION_VISION_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {MISSION_VISION_CTA.description}
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0">
              {MISSION_VISION_CTA.links.map((link, index) => (
                <CtaButton
                  key={link.href}
                  href={link.href}
                  variant={index === 0 ? "gold" : "ghost"}
                  radius={0}
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