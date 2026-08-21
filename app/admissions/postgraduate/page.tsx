"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  FlaskConical,
  GraduationCap,
  HelpCircle,
  Microscope,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { PageHeroBanner } from "@/components/page-hero-banner";
import {
  ICON_MOTION,
  ICON_MOTION_FILL,
  lightTileIcon,
} from "@/lib/icon-colors";
import { CtaButton } from "@/components/cta-button";
import {
  POSTGRADUATE_HERO,
  QUICK_FACTS,
  POSTGRADUATE_INTRO,
  DEGREE_TYPES_INTRO,
  DEGREE_TYPES,
  RESEARCH_AREAS_INTRO,
  RESEARCH_AREAS,
  SUPERVISOR_INTRO,
  SUPERVISOR_AREAS,
  APPLICATION_PROCESS_INTRO,
  APPLICATION_STEPS,
  ENTRY_REQUIREMENTS,
  PREPARE_DOCUMENTS,
  FUNDING_INTRO,
  FUNDING_OPTIONS,
  POSTGRADUATE_DEADLINE,
  FUNDING_FAQ_INTRO,
  FUNDING_FAQS,
  POSTGRADUATE_CTA,
} from "@/lib/data/postgraduate";

export default function PostgraduateAdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeroBanner
        eyebrow={POSTGRADUATE_HERO.eyebrow}
        titleLines={POSTGRADUATE_HERO.titleLines}
        description={POSTGRADUATE_HERO.description}
        image={POSTGRADUATE_HERO.image}
        imageAlt={POSTGRADUATE_HERO.imageAlt}
        primary={POSTGRADUATE_HERO.primary}
        secondary={POSTGRADUATE_HERO.secondary}
      />

      {/* =========================================================
          QUICK INTRO
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_FACTS.map((item, index) => {
              const Icon = ICON_MAP[item.icon];
              const color = lightTileIcon(index);

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center border border-[#d5e5ef] ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
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
      </section>

      {/* =========================================================
          INTRO / RESEARCH ORIENTATION
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {POSTGRADUATE_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {POSTGRADUATE_INTRO.titleLines[0]}
                <br />
                {POSTGRADUATE_INTRO.titleLines[1]}
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                {POSTGRADUATE_INTRO.paragraphs[0]}
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {POSTGRADUATE_INTRO.paragraphs[1]}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {POSTGRADUATE_INTRO.tags.map((item) => (
                  <span
                    key={item}
                    className="border border-[#d5e5ef] bg-white px-4 py-2 text-xs font-semibold text-[#175783]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}
      <section id="programs" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {DEGREE_TYPES_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {DEGREE_TYPES_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {DEGREE_TYPES_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {DEGREE_TYPES.map((program, index) => {
              const Icon = ICON_MAP[program.icon];
              const color = lightTileIcon(index);

              return (
                <div
                  key={program.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border border-[#d5e5ef] ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#b28718]">
                      {DEGREE_TYPES_INTRO.badgeLabel}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {program.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-semibold text-[#092c4d]">
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Credits</span>
                      <span className="font-semibold text-[#092c4d]">
                        {program.credit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Thesis</span>
                      <span className="text-right font-semibold text-[#092c4d]">
                        {program.thesis}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Intake</span>
                      <span className="text-right font-semibold text-[#092c4d]">
                        {program.intake}
                      </span>
                    </div>
                  </div>

                  <a
                    href={DEGREE_TYPES_INTRO.cardLink.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
                  >
                    {DEGREE_TYPES_INTRO.cardLink.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH AREAS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {RESEARCH_AREAS_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {RESEARCH_AREAS_INTRO.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {RESEARCH_AREAS_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_AREAS.map((area, index) => {
              const Icon = ICON_MAP[area.icon];
              const color = lightTileIcon(index);

              return (
                <div
                  key={area.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
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
          SUPERVISOR MATCHING
      ========================================================= */}
      <section id="supervisors" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {SUPERVISOR_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {SUPERVISOR_INTRO.titleLines[0]}
                <br />
                {SUPERVISOR_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {SUPERVISOR_INTRO.description}
              </p>

              <a
                href={SUPERVISOR_INTRO.link.href}
                className="mt-7 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
              >
                {SUPERVISOR_INTRO.link.label}
                <Search className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {SUPERVISOR_AREAS.map((area, index) => {
                const Icon = ICON_MAP[area.icon];
                const color = lightTileIcon(index);

                return (
                  <div
                    key={area.name}
                    className="group border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center border border-[#d5e5ef] ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                      {area.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {area.description}
                    </p>

                    <a
                      href={SUPERVISOR_INTRO.cardLink.href}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                    >
                      {SUPERVISOR_INTRO.cardLink.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION PROCESS
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {APPLICATION_PROCESS_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {APPLICATION_PROCESS_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {APPLICATION_PROCESS_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {APPLICATION_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="font-serif text-3xl font-semibold text-[#d9a82e]">
                  {step.number}
                </span>

                <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {step.number !== "05" && (
                  <ArrowRight className="mt-5 hidden h-4 w-4 text-[#175783] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS / DOCUMENTS
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group border border-slate-200 bg-white p-8 shadow-sm">
              <div
                className={`flex h-12 w-12 items-center justify-center bg-teal-100 text-teal-600 ${ICON_MOTION}`}
              >
                <ShieldCheck className="h-6 w-6" strokeWidth={1.7} />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                {ENTRY_REQUIREMENTS.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {ENTRY_REQUIREMENTS.description}
              </p>

              <div className="mt-7 space-y-4">
                {ENTRY_REQUIREMENTS.points.map((item, index) => (
                  <div key={item} className="group/point flex gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} transition-all duration-300 group-hover/point:scale-125`}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={ENTRY_REQUIREMENTS.link.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                {ENTRY_REQUIREMENTS.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border border-slate-200 bg-[#f5f8fc] p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-white text-[#175783] shadow-sm">
                <FileText className="h-6 w-6" strokeWidth={1.7} />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                {PREPARE_DOCUMENTS.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {PREPARE_DOCUMENTS.description}
              </p>

              <div className="mt-7 space-y-3">
                {PREPARE_DOCUMENTS.points.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-slate-200 bg-white p-4"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#b28718]" />

                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={PREPARE_DOCUMENTS.link.href}
                className="mt-8 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
              >
                {PREPARE_DOCUMENTS.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUNDING
      ========================================================= */}
      <section className="bg-[#f1eefb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {FUNDING_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {FUNDING_INTRO.titleLines[0]}
                <br />
                {FUNDING_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {FUNDING_INTRO.description}
              </p>

              <a
                href={FUNDING_INTRO.link.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                {FUNDING_INTRO.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {FUNDING_OPTIONS.map((item) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.title}
                    className="border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <Icon
                      className="h-6 w-6 text-[#175783]"
                      strokeWidth={1.7}
                    />

                    <h3 className="mt-4 font-serif text-lg font-semibold text-[#092c4d]">
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
          DEADLINE
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="border border-[#ead9a4] bg-[#fff9e8] p-7 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8e8b2] text-[#a4770d]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#092c4d]">
                    {POSTGRADUATE_DEADLINE.title}
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    {POSTGRADUATE_DEADLINE.description}
                  </p>
                </div>
              </div>

              <a
                href={POSTGRADUATE_DEADLINE.link.href}
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#175783] px-5 py-3 text-sm font-bold text-[#175783] transition hover:bg-[#175783] hover:text-white"
              >
                {POSTGRADUATE_DEADLINE.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {FUNDING_FAQ_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {FUNDING_FAQ_INTRO.title}
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {FUNDING_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-center gap-3 font-semibold text-[#092c4d]">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#175783]" />
                    {faq.question}
                  </span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
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
                  <GraduationCap className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {POSTGRADUATE_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {POSTGRADUATE_CTA.titleLines[0]}
                <br />
                {POSTGRADUATE_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {POSTGRADUATE_CTA.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              {POSTGRADUATE_CTA.links.map((link, index) => (
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