"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  BookOpen,
  FileText,
  Bell,
  ChevronDown,
  ArrowRight,
  ClipboardCheck,
  CalendarCheck2,
  Plane,
  Trophy,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { CALENDAR_EVENTS, CALENDAR_SUMMARY, CALENDAR_MONTHS } from "@/lib/data/calendar";
import { CONTACT_INFO } from "@/lib/data/slug-pages";

// tel: hrefs can't carry the " (editable)" human-readable hint that lives on
// the shared placeholder value, so strip it down to a dialable number here.
const ASSISTANCE_PHONE = CONTACT_INFO.phone
  .replace(/\s*\(editable\)\s*$/i, "")
  .replace(/\s+/g, "");

const calendarEvents = CALENDAR_EVENTS;
const summaryCards = CALENDAR_SUMMARY.map((card) => ({
  ...card,
  icon: ICON_MAP[card.icon] ?? ClipboardCheck,
}));
const months = CALENDAR_MONTHS;

function getEventIcon(type: string) {
  switch (type) {
    case "registration":
      return <ClipboardCheck className="h-4 w-4" />;
    case "class":
      return <BookOpen className="h-4 w-4" />;
    case "exam":
      return <FileText className="h-4 w-4" />;
    case "result":
      return <Trophy className="h-4 w-4" />;
    case "vacation":
      return <Plane className="h-4 w-4" />;
    default:
      return <CalendarDays className="h-4 w-4" />;
  }
}

export default function AcademicCalendarPage() {
  const [academicYear, setAcademicYear] = useState("2026");
  const [semester, setSemester] = useState("Spring Semester");
  const [month, setMonth] = useState("All Months");
  const [openEvent, setOpenEvent] = useState<number | null>(null);

  const filteredEvents =
    month === "All Months"
      ? calendarEvents
      : calendarEvents.filter((item) =>
          item.start.toLowerCase().includes(month.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#f4f8fc] text-[#102c4c]">
      <SiteHeader overlay />

      <main>
      <Hero
        eyebrow="Academic Calendar"
        title="Plan Your Academic Journey With Confidence"
        description="Stay informed about semester schedules, registration, examinations, results, vacations and important academic deadlines at KKJSTU."
        showActions={false}
        showSideLinks={false}
      />

      {/* SELECTOR */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(8,39,70,0.10)]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#183957]">
                  Academic Year
                </label>

                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1c5d8f]" />

                  <select
                    value={academicYear}
                    onChange={(e) => setAcademicYear(e.target.value)}
                    className="w-full appearance-none border border-slate-200 bg-[#f8fbfe] py-3.5 pl-12 pr-10 text-sm font-medium outline-none transition focus:border-[#1c5d8f]"
                  >
                    <option>2026</option>
                    <option>2025</option>
                    <option>2024</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#183957]">
                  Semester
                </label>

                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#1c5d8f]" />

                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full appearance-none border border-slate-200 bg-[#f8fbfe] py-3.5 pl-12 pr-10 text-sm font-medium outline-none transition focus:border-[#1c5d8f]"
                  >
                    <option>Spring Semester</option>
                    <option>Summer Semester</option>
                    <option>Fall Semester</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex w-full items-center gap-3 border border-[#d9a82e]/30 bg-[#fffaf0] px-4 py-3">
                  <AlertCircle className="h-5 w-5 text-[#c89516]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#9b7313]">
                      Current Academic Year
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
              Key Academic Dates
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            Important Dates at a Glance
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Keep track of the major academic milestones throughout the
            semester.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
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
                  Semester Calendar
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Academic Schedule
              </h2>
            </div>

            <div className="relative w-full sm:w-52">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full appearance-none border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-[#173752] outline-none"
              >
                <option>All Months</option>
                {months.map((item) => (
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
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Event
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Start Date
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      End Date
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Audience
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                      Details
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredEvents.map((item, index) => (
                    <Fragment key={item.event}>
                      <tr className="border-b border-slate-100 last:border-0 hover:bg-[#f9fbfd]">
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
                            onClick={() =>
                              setOpenEvent(openEvent === index ? null : index)
                            }
                            aria-expanded={openEvent === index}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#175783] transition hover:text-[#b28718]"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openEvent === index ? "rotate-180" : ""
                              }`}
                            />
                            {openEvent === index ? "Hide Details" : "View Details"}
                          </button>
                        </td>
                      </tr>

                      {openEvent === index && (
                        <tr className="border-b border-slate-100 bg-[#f9fbfd] last:border-0">
                          <td colSpan={5} className="px-6 py-5">
                            <div className="grid gap-4 sm:grid-cols-3">
                              <div>
                                <p className="text-xs uppercase tracking-wide text-slate-400">
                                  Start Date
                                </p>
                                <p className="mt-1 font-medium text-[#173752]">
                                  {item.start}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-wide text-slate-400">
                                  End Date
                                </p>
                                <p className="mt-1 font-medium text-[#173752]">
                                  {item.end}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-wide text-slate-400">
                                  Audience
                                </p>
                                <p className="mt-1 font-medium text-[#173752]">
                                  {item.audience}
                                </p>
                              </div>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-slate-600">
                              Full notice details for this event are published on
                              the university notice board closer to the date.
                            </p>

                            <Link
                              href="/notice-board"
                              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#175783] hover:text-[#b28718]"
                            >
                              <ArrowRight className="h-4 w-4" />
                              View on Notice Board
                            </Link>
                          </td>
                        </tr>
                      )}
                    </Fragment>
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
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
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
                          Start
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.start}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          End
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.end}
                        </p>
                      </div>

                      <div className="col-span-2">
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          Audience
                        </p>
                        <p className="mt-1 font-medium text-[#173752]">
                          {item.audience}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/notice-board"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[#175783] px-4 py-3 text-sm font-semibold text-[#175783]"
                    >
                      <ArrowRight className="h-4 w-4" />
                      View on Notice Board
                    </Link>
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
              <div>
                <div className="mb-3 flex h-11 w-11 items-center justify-center bg-white text-[#175783]">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#092c4d]">
                  Academic Calendar &amp; Notices
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  The complete academic calendar and related schedule notices
                  for the current academic year are published on the
                  university notice board.
                </p>
              </div>

              <Link
                href="/notice-board"
                className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12476d]"
              >
                <ArrowRight className="h-4 w-4" />
                View on Notice Board
              </Link>
            </div>
          </div>

          <div className="border border-slate-200 bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center bg-[#fff7df] text-[#b28718]">
              <Bell className="h-5 w-5" />
            </div>

            <h3 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              Stay Updated
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Check the university notice board regularly for schedule changes
              and important academic announcements.
            </p>

            <Link
              href="/notice-board"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
            >
              View Notices
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
                  Academic Support
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                Need Help With the Academic Schedule?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Our Academic Office is available to help students, faculty and
                guardians with questions about registration, examinations,
                results and important academic deadlines.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent px-6 py-3.5 text-sm font-bold text-brand-dark transition hover:bg-brand-accent/90"
              >
                <Mail className="h-4 w-4" />
                Contact Academic Office
              </Link>

              <a
                href={`tel:${ASSISTANCE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                <Phone className="h-4 w-4" />
                Get Assistance
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}