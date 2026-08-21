"use client";

import { useState } from "react";
import {
  CalendarDays,
  BookOpen,
  Download,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  CalendarCheck2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { ICON_MOTION, ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors";
import {
  CALENDAR_HERO,
  CALENDAR_SELECTOR,
  KEY_DATES_INTRO,
  SUMMARY_CARDS,
  SCHEDULE_INTRO,
  CALENDAR_EVENTS,
  EVENT_TYPE_ICONS,
  MONTHS,
  CALENDAR_DOWNLOAD,
  CALENDAR_STAY_UPDATED,
  CALENDAR_HELP_CTA,
} from "@/lib/data/academic-calendar";

function getEventIcon(type: string) {
  const Icon = ICON_MAP[EVENT_TYPE_ICONS[type] ?? EVENT_TYPE_ICONS.default];
  return <Icon className="h-4 w-4" />;
}

export default function AcademicCalendarPage() {
  const [academicYear, setAcademicYear] = useState("2026");
  const [semester, setSemester] = useState("Spring Semester");
  const [month, setMonth] = useState("All Months");
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  const filteredEvents =
    month === "All Months"
      ? CALENDAR_EVENTS
      : CALENDAR_EVENTS.filter((item) =>
          item.start.toLowerCase().includes(month.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[65vh] overflow-hidden bg-brand-dark">
        <img
          src={CALENDAR_HERO.image}
          alt={CALENDAR_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Same overlay gradient as the About page hero. */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[60px] border-[#d9a82e]" />
          <div className="absolute -bottom-32 left-20 h-96 w-96 rounded-full border border-white" />
        </div>

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2b83b]">
                {CALENDAR_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              {CALENDAR_HERO.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              {CALENDAR_HERO.description}
            </p>
          </div>
        </div>
      </section>

      {/* SELECTOR */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(35,39,113,0.10)]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#183957]">
                  {CALENDAR_SELECTOR.yearLabel}
                </label>

                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1c5d8f]" />

                  <select
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    className="w-full appearance-none border border-slate-200 bg-[#f8fbfe] py-3.5 pl-12 pr-10 text-sm font-medium outline-none transition focus:border-[#1c5d8f]"
                  >
                    {CALENDAR_SELECTOR.years.map((year) => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#183957]">
                  {CALENDAR_SELECTOR.semesterLabel}
                </label>

                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1c5d8f]" />

                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full appearance-none border border-slate-200 bg-[#f8fbfe] py-3.5 pl-12 pr-10 text-sm font-medium outline-none transition focus:border-[#1c5d8f]"
                  >
                    {CALENDAR_SELECTOR.semesters.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex w-full items-center gap-3 border border-[#d9a82e]/30 bg-[#fffaf0] px-4 py-3">
                  <AlertCircle className="h-5 w-5 text-[#c89516]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9b7313]">
                      {CALENDAR_SELECTOR.noticeLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#173752]">
                      {academicYear} · {semester}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY DATES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              {KEY_DATES_INTRO.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            {KEY_DATES_INTRO.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {KEY_DATES_INTRO.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUMMARY_CARDS.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            const color = lightTileIcon(index);

            return (
              <div
                key={item.title}
                className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <CalendarCheck2 className="h-4 w-4 text-slate-300 transition group-hover:text-[#d9a82e]" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-1 font-serif text-2xl font-semibold text-[#092c4d]">
                  {item.date}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CALENDAR */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {SCHEDULE_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {SCHEDULE_INTRO.title}
              </h2>
            </div>

            <div className="relative w-full sm:w-52">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-[#173752] outline-none"
              >
                <option>{SCHEDULE_INTRO.monthFilterAll}</option>
                {MONTHS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-10 hidden overflow-hidden border border-slate-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#f7fafc] text-left">
                    {SCHEDULE_INTRO.tableHeaders.map((header, index) => (
                      <th
                        key={header}
                        className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 ${
                          index === SCHEDULE_INTRO.tableHeaders.length - 1
                            ? "text-right"
                            : ""
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredEvents.map((item, index) => (
                    <tr
                      key={item.event}
                      className="border-b border-slate-100 last:border-0 hover:bg-[#f9fbfd]"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center ${
                              item.type === "exam"
                                ? "bg-[#f6edf6] text-[#8a4b87]"
                                : item.type === "registration"
                                  ? "bg-[#fff7df] text-[#b28315]"
                                  : "bg-[#edf5fb] text-[#175783]"
                            }`}
                          >
                            {getEventIcon(item.type)}
                          </div>

                          <span className="font-semibold text-[#173752]">
                            {item.event}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {item.start}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {item.end}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {item.audience}
                      </td>

                      <td className="px-6 py-5 text-right">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#175783] transition hover:text-[#b28718]"
                        >
                          <Download className="h-4 w-4" />
                          {SCHEDULE_INTRO.downloadLabel}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE ACCORDION */}
          <div className="mt-8 space-y-3 md:hidden">
            {filteredEvents.map((item, index) => (
              <div
                key={item.event}
                className="border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenEvent(openEvent === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="group flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${ICON_MOTION}`}
                    >
                      {getEventIcon(item.type)}
                    </div>

                    <div>
                      <p className="font-semibold text-[#173752]">
                        {item.event}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.start}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition ${
                      openEvent === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openEvent === index && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          {SCHEDULE_INTRO.detailLabels.start}
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.start}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          {SCHEDULE_INTRO.detailLabels.end}
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.end}
                        </p>
                      </div>

                      <div className="col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          {SCHEDULE_INTRO.detailLabels.audience}
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.audience}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[#175783] px-4 py-3 text-sm font-semibold text-[#175783]"
                    >
                      <Download className="h-4 w-4" />
                      {SCHEDULE_INTRO.downloadNoticeLabel}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="border border-[#cfe1ee] bg-[#eaf4fb] p-8 sm:p-10">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="group">
                <div
                  className={`mb-3 flex h-11 w-11 items-center justify-center bg-white text-emerald-600 ${ICON_MOTION}`}
                >
                  {(() => {
                    const Icon = ICON_MAP[CALENDAR_DOWNLOAD.icon];
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#092c4d]">
                  {CALENDAR_DOWNLOAD.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  {CALENDAR_DOWNLOAD.description}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12476d]"
              >
                <Download className="h-4 w-4" />
                {CALENDAR_DOWNLOAD.buttonLabel}
              </button>
            </div>
          </div>

          <div className="group border border-slate-200 bg-white p-8">
            <div
              className={`flex h-11 w-11 items-center justify-center bg-fuchsia-100 text-fuchsia-600 ${ICON_MOTION}`}
            >
              {(() => {
                const Icon = ICON_MAP[CALENDAR_STAY_UPDATED.icon];
                return <Icon className="h-5 w-5" />;
              })()}
            </div>

            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              {CALENDAR_STAY_UPDATED.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {CALENDAR_STAY_UPDATED.description}
            </p>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
            >
              {CALENDAR_STAY_UPDATED.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="bg-[#f5f8fc] px-5 py-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-[#180a70] via-[#0D0357] to-[#080238] px-7 py-12 shadow-[0_24px_70px_rgba(13,3,87,0.14)] sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/[0.08] blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-white/[0.05] blur-[90px]"
          />

          {/* Corner badge icon */}
          <div
            aria-hidden="true"
            className="absolute right-6 top-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] text-amber-200 backdrop-blur-md sm:flex"
          >
            <GraduationCap className="h-6 w-6" strokeWidth={1.7} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-200/85">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/[0.08]">
                  <Sparkles className="h-3 w-3" />
                </span>
                {CALENDAR_HELP_CTA.eyebrow}
              </div>

              <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                {CALENDAR_HELP_CTA.title}
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                {CALENDAR_HELP_CTA.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#092c4d] transition hover:bg-[#edc85b]"
              >
                {(() => {
                  const Icon = ICON_MAP[CALENDAR_HELP_CTA.primary.icon];
                  return <Icon className="h-4 w-4" />;
                })()}
                {CALENDAR_HELP_CTA.primary.label}
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                {(() => {
                  const Icon = ICON_MAP[CALENDAR_HELP_CTA.secondary.icon];
                  return <Icon className="h-4 w-4" />;
                })()}
                {CALENDAR_HELP_CTA.secondary.label}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}