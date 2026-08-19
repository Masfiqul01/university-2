"use client";

import { useState } from "react";

import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  IdCard,
  Printer,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import {
  ICON_MOTION,
  ICON_MOTION_FILL,
  lightTileIcon,
  plainIcon,
} from "@/lib/icon-colors";
import { CtaButton } from "@/components/cta-button";
import {
  REQUIREMENTS_HERO,
  QUICK_ELIGIBILITY_INTRO,
  QUICK_ELIGIBILITY,
  REQUIREMENTS_SECTION,
  UNDERGRADUATE_REQUIREMENTS,
  POSTGRADUATE_REQUIREMENTS,
  INTERNATIONAL_APPLICANTS,
  TRANSFER_APPLICANTS,
  DOCUMENT_CHECKLIST_INTRO,
  DOCUMENT_CHECKLIST,
  DEADLINE_NOTE,
  REQUIREMENTS_FAQ_INTRO,
  REQUIREMENTS_FAQS,
  REQUIREMENTS_CTA,
  type RequirementType,
} from "@/lib/data/admission-requirements";

export default function AdmissionRequirementsPage() {
  const [activeTab, setActiveTab] =
    useState<RequirementType>("undergraduate");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const requirements =
    activeTab === "undergraduate"
      ? UNDERGRADUATE_REQUIREMENTS
      : POSTGRADUATE_REQUIREMENTS;

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border-[70px] border-[#d9a82e]" />

          <div className="absolute -bottom-56 left-[5%] h-[500px] w-[500px] rounded-full border border-white" />

          <div className="absolute right-[25%] top-[40%] h-32 w-32 border border-[#d9a82e]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2b83b]">
                {REQUIREMENTS_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              {REQUIREMENTS_HERO.titleLines[0]}
              <br />
              {REQUIREMENTS_HERO.titleLines[1]}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              {REQUIREMENTS_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={REQUIREMENTS_HERO.primary.href} variant="gold" radius={0}>
                {REQUIREMENTS_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={REQUIREMENTS_HERO.secondary.href} variant="ghost" radius={0}>
                {REQUIREMENTS_HERO.secondary.label}
                <Download className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK ELIGIBILITY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              {QUICK_ELIGIBILITY_INTRO.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            {QUICK_ELIGIBILITY_INTRO.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {QUICK_ELIGIBILITY_INTRO.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ELIGIBILITY.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            const color = lightTileIcon(index);

            return (
              <div
                key={item.title}
                className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS
      ========================================================= */}
      <section
        id="requirements"
        className="border-y border-slate-200 bg-[#eaf3fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {REQUIREMENTS_SECTION.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {REQUIREMENTS_SECTION.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {REQUIREMENTS_SECTION.description}
            </p>
          </div>

          {/* TABS */}
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-max border-b border-slate-300">
              <button
                type="button"
                onClick={() => setActiveTab("undergraduate")}
                className={`inline-flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-bold transition ${
                  activeTab === "undergraduate"
                    ? "border-[#d9a82e] bg-white text-[#092c4d]"
                    : "border-transparent text-slate-500 hover:text-[#175783]"
                }`}
              >
                {(() => {
                  const Icon = ICON_MAP[REQUIREMENTS_SECTION.tabs[0].icon];
                  return <Icon className="h-4 w-4" />;
                })()}
                {REQUIREMENTS_SECTION.tabs[0].label}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("postgraduate")}
                className={`inline-flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-bold transition ${
                  activeTab === "postgraduate"
                    ? "border-[#d9a82e] bg-white text-[#092c4d]"
                    : "border-transparent text-slate-500 hover:text-[#175783]"
                }`}
              >
                {(() => {
                  const Icon = ICON_MAP[REQUIREMENTS_SECTION.tabs[1].icon];
                  return <Icon className="h-4 w-4" />;
                })()}
                {REQUIREMENTS_SECTION.tabs[1].label}
              </button>
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-6 hidden overflow-hidden border border-slate-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#f7fafc] text-left">
                    {REQUIREMENTS_SECTION.tableHeaders.map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {requirements.map((item) => (
                    <tr
                      key={item.criterion}
                      className="border-b border-slate-100 last:border-0 hover:bg-[#fbfdff]"
                    >
                      <td className="px-6 py-5 align-top font-semibold text-[#173752]">
                        {item.criterion}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-600">
                        {item.minimum}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-600">
                        {item.document}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-500">
                        {item.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE REQUIREMENT CARDS */}
          <div className="mt-6 space-y-4 md:hidden">
            {requirements.map((item, index) => (
              <div
                key={item.criterion}
                className="group border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${ICON_MOTION}`}
                  >
                    <FileCheck2 className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-[#173752]">
                      {item.criterion}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {REQUIREMENTS_SECTION.mobileLabels.minimum}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.minimum}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {REQUIREMENTS_SECTION.mobileLabels.document}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {item.document}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {REQUIREMENTS_SECTION.mobileLabels.notes}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IMPORTANT NOTE */}
          <div className="mt-6 flex gap-4 border border-[#ead89d] bg-[#fff9e7] p-5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#b28718]" />

            <div>
              <p className="font-semibold text-[#6e5414]">
                {REQUIREMENTS_SECTION.note.title}
              </p>

              <p className="mt-1 text-sm leading-6 text-[#75653b]">
                {REQUIREMENTS_SECTION.note.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNATIONAL / TRANSFER
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div
              className={`flex h-11 w-11 items-center justify-center bg-cyan-100 text-cyan-700 ${ICON_MOTION}`}
            >
              {(() => {
                const Icon = ICON_MAP[INTERNATIONAL_APPLICANTS.icon];
                return <Icon className="h-5 w-5" />;
              })()}
            </div>

            <h2 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              {INTERNATIONAL_APPLICANTS.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {INTERNATIONAL_APPLICANTS.description}
            </p>

            <div className="mt-6 space-y-3">
              {INTERNATIONAL_APPLICANTS.points.map((item, index) => (
                <div
                  key={item}
                  className="group/point flex items-start gap-3 text-sm text-slate-600"
                >
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${plainIcon(index)} transition-transform duration-300 group-hover/point:scale-125`}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div
              className={`flex h-11 w-11 items-center justify-center bg-fuchsia-100 text-fuchsia-600 ${ICON_MOTION}`}
            >
              {(() => {
                const Icon = ICON_MAP[TRANSFER_APPLICANTS.icon];
                return <Icon className="h-5 w-5" />;
              })()}
            </div>

            <h2 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              {TRANSFER_APPLICANTS.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {TRANSFER_APPLICANTS.description}
            </p>

            <div className="mt-6 space-y-3">
              {TRANSFER_APPLICANTS.points.map((item, index) => (
                <div
                  key={item}
                  className="group/point flex items-start gap-3 text-sm text-slate-600"
                >
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${plainIcon(index + 4)} transition-transform duration-300 group-hover/point:scale-125`}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENT CHECKLIST
      ========================================================= */}
      <section
        id="documents"
        className="border-y border-slate-200 bg-[#eaf3fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {DOCUMENT_CHECKLIST_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {DOCUMENT_CHECKLIST_INTRO.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {DOCUMENT_CHECKLIST_INTRO.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 border border-[#175783] bg-white px-5 py-3 text-sm font-bold text-[#175783] transition hover:bg-[#175783] hover:text-white"
              >
                <Download className="h-4 w-4" />
                {DOCUMENT_CHECKLIST_INTRO.downloadLabel}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#173752] transition hover:border-[#175783]"
              >
                <Printer className="h-4 w-4" />
                {DOCUMENT_CHECKLIST_INTRO.printLabel}
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOCUMENT_CHECKLIST.map((item, index) => {
              const Icon = ICON_MAP[item.icon];

              return (
                <div
                  key={item.title}
                  className="border border-[#cfe0ec] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${lightTileIcon(index).hoverBg} ${ICON_MOTION_FILL}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold text-[#b28718]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
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
          DEADLINE NOTE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="border border-[#ead89d] bg-[#fff9e7] p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center bg-white text-[#b28718]">
              <CalendarDays className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a17a16]">
                {DEADLINE_NOTE.eyebrow}
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-[#092c4d]">
                {DEADLINE_NOTE.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {DEADLINE_NOTE.description}
              </p>
            </div>

            <a
              href="/notice-board"
              className="inline-flex items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123d63]"
            >
              View Notices
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-y border-slate-200 bg-page-pattern">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {REQUIREMENTS_FAQ_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {REQUIREMENTS_FAQ_INTRO.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {REQUIREMENTS_FAQ_INTRO.description}
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {REQUIREMENTS_FAQS.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-slate-200 bg-[#f9fbfd]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-[#173752]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          Same text + same CTA buttons
          Screenshot-inspired design
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">

          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-[45%] h-[300px] w-[300px] rounded-full bg-[#6650d9] opacity-10 blur-3xl" />

          {/* Main content */}
          <div className="relative flex min-h-[210px] flex-col justify-center px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">

            {/* LEFT */}
            <div className="max-w-[700px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <span className="text-[11px] font-medium leading-none">
                    +
                  </span>
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  {REQUIREMENTS_CTA.eyebrow}
                </span>
              </div>

              {/* TEXT UNCHANGED */}
              <h2 className="font-sans text-[34px] font-bold leading-[0.96] tracking-[-0.035em] text-white sm:text-[42px] lg:text-[48px]">
                {REQUIREMENTS_CTA.titleLines[0]}
                <br />
                <span className="text-white">
                  {REQUIREMENTS_CTA.titleLines[1]}
                </span>
              </h2>
            </div>

            {/* RIGHT CTA BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:mr-8">

              <CtaButton href={REQUIREMENTS_CTA.links[0].href} variant="light">
                {REQUIREMENTS_CTA.links[0].label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={REQUIREMENTS_CTA.links[1].href} variant="ghost">
                {REQUIREMENTS_CTA.links[1].label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>
            </div>

            {/* TOP RIGHT ICON */}
            <div className="absolute right-5 top-5 hidden h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.045] sm:flex">
              <GraduationCap
                className="h-6 w-6 text-[#d9a82e]"
                strokeWidth={1.5}
              />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d9a82e]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <SiteFooter />

      {/* =========================================================
          MOBILE STICKY APPLY
      ========================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-5px_25px_rgba(35,39,113,0.12)] md:hidden">
        <a
          href={REQUIREMENTS_CTA.stickyMobile.href}
          className="flex w-full items-center justify-center gap-2 bg-[#d9a82e] px-5 py-3.5 text-sm font-bold text-[#092c4d]"
        >
          {REQUIREMENTS_CTA.stickyMobile.label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}