"use client"

import Link from "next/link"
import { useState } from "react"
import { PageShell } from "@/components/page-shell"
import {
  ArrowUpRight, Bell, CheckCircle2, ChevronRight,
  FileText, Menu, MessageSquare, Search,
  X, Clock3
} from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { CountUp } from "@/components/count-up"
import {
  TEACHER_PORTAL_BRAND,
  TEACHER_NAV,
  TEACHER_QUICK_ACCESS,
  TEACHER_TOPBAR,
  TEACHER_DASHBOARD,
  TEACHER_STATS,
  TEACHER_CLASSES,
  TEACHER_ROUTINE,
  TEACHER_ATTENDANCE,
  TEACHER_ASSIGNMENTS,
  TEACHER_STUDENTS,
  TEACHER_NOTICES,
  TEACHER_MESSAGES,
  TEACHER_SETTINGS,
} from "@/lib/data/teacher-portal"

/*
  ============================================================
  TEACHER PORTAL
  ============================================================

  Surface palette: white cards on a near-white page, with the site's existing
  brand blue (--brand #120a80) carried as the only accent — chips, active nav,
  rules, figures and focus rings. No second hue is introduced, so the portal
  reads as one calm workspace rather than a colour-coded dashboard.

  Shared building blocks live at the bottom of this file (Panel, SectionHead,
  StatCard) so every card keeps the same radius, border, padding and shadow.
*/

/** One shared card shell: white surface, hairline border, soft lift. */
const CARD =
  "rounded-2xl border border-brand/10 bg-white shadow-[0_1px_2px_rgba(18,10,128,0.04),0_12px_32px_-18px_rgba(18,10,128,0.28)]"

/** Blue chip behind a small icon. */
const CHIP =
  "flex items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-inset ring-brand/10"

export default function TeacherPortalPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(TEACHER_NAV[0].label)

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-80px)] bg-[#f7f8fc]">
        <div className="mx-auto flex max-w-[1500px]">
          {/* ---------------------------------------------- SIDEBAR */}
          <aside
            className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-brand/10 bg-white p-5 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0`}
          >
            <div className="flex items-center justify-between border-b border-brand/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand font-serif text-lg font-bold text-white">
                  {TEACHER_PORTAL_BRAND.eyebrow.slice(0, 1)}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand/60">
                    {TEACHER_PORTAL_BRAND.eyebrow}
                  </p>
                  <h2 className="font-serif text-lg font-bold text-brand-dark">
                    {TEACHER_PORTAL_BRAND.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-brand/50 transition-colors hover:bg-brand/5 hover:text-brand lg:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-6 space-y-1 overflow-y-auto">
              {TEACHER_NAV.map((item) => {
                const Icon = ICON_MAP[item.icon]
                const isActive = activeNav === item.label

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveNav(item.label)
                      setMobileOpen(false)
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-brand text-white shadow-[0_10px_24px_-12px_rgba(18,10,128,0.75)]"
                        : "text-slate-600 hover:bg-brand/5 hover:text-brand"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-white" : "text-brand/70"}`}
                    />
                    {item.label}
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    )}
                  </a>
                )
              })}
            </nav>

            <div className="mt-auto rounded-2xl border border-brand/10 bg-brand/[0.04] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/60">
                {TEACHER_QUICK_ACCESS.label}
              </p>

              {TEACHER_QUICK_ACCESS.links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${index === 0 ? "mt-3" : "mt-2"} group flex items-center justify-between rounded-lg border border-brand/10 bg-white px-3 py-2 text-sm font-medium text-brand-dark transition-colors hover:border-brand/25 hover:bg-brand/5`}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-brand/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
                </Link>
              ))}
            </div>
          </aside>

          {mobileOpen && (
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-brand-dark/40 backdrop-blur-sm lg:hidden"
            />
          )}

          {/* ---------------------------------------------- MAIN */}
          <main className="min-w-0 flex-1">
            <header className="sticky top-0 z-30 border-b border-brand/10 bg-white/85 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileOpen(true)}
                  aria-label="Open menu"
                  className="rounded-xl border border-brand/15 p-2 text-brand transition-colors hover:bg-brand/5 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div className="relative hidden max-w-md flex-1 sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand/40" />
                  <input
                    className="w-full rounded-xl border border-brand/12 bg-[#f7f8fc] py-2.5 pl-10 pr-4 text-sm text-brand-dark outline-none transition-shadow placeholder:text-slate-400 focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/10"
                    placeholder={TEACHER_TOPBAR.searchPlaceholder}
                  />
                </div>

                <div className="ml-auto flex items-center gap-2">
                  <button
                    aria-label="Notifications"
                    className="relative rounded-xl border border-brand/12 p-2.5 text-brand transition-colors hover:bg-brand/5"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  </button>

                  <div className="hidden items-center gap-3 rounded-xl border border-brand/12 bg-white px-3 py-2 sm:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {TEACHER_TOPBAR.userInitials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark">{TEACHER_TOPBAR.userName}</p>
                      <p className="text-[11px] text-slate-500">{TEACHER_TOPBAR.userRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-6 lg:p-8">
              {/* -------------------------------------- DASHBOARD */}
              <section
                id="dashboard"
                className={`${CARD} relative overflow-hidden p-6 sm:p-8`}
              >
                {/* Blue wash + ring motif, kept faint so text stays on white. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/[0.07] via-brand/[0.03] to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[36px] border-brand/[0.05]"
                />

                <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-brand-accent" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
                        {TEACHER_DASHBOARD.eyebrow}
                      </p>
                    </div>

                    <h1 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                      {TEACHER_DASHBOARD.title}
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {TEACHER_DASHBOARD.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-brand/10 bg-brand/[0.04] px-5 py-4 text-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand/60">
                      {TEACHER_DASHBOARD.dateLabel}
                    </p>
                    <p className="mt-1 font-semibold text-brand-dark">{TEACHER_DASHBOARD.dateValue}</p>
                  </div>
                </div>
              </section>

              {/* -------------------------------------- STATS */}
              <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {TEACHER_STATS.map((stat) => {
                  const Icon = ICON_MAP[stat.icon]

                  return (
                    <article
                      key={stat.title}
                      className={`${CARD} group relative overflow-hidden p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_1px_2px_rgba(18,10,128,0.05),0_20px_44px_-20px_rgba(18,10,128,0.4)]`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                      />

                      <div className="flex items-start justify-between">
                        <span
                          className={`${CHIP} h-10 w-10 transition-colors duration-300 group-hover:bg-brand group-hover:text-white`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-xs text-slate-500">{stat.meta}</span>
                      </div>

                      <p className="mt-5 text-sm text-slate-500">{stat.title}</p>
                      <p className="mt-1 font-serif text-3xl font-bold text-brand-dark">
                        <CountUp value={String(stat.value)} />
                      </p>
                    </article>
                  )
                })}
              </section>

              {/* -------------------------------------- CLASSES + ROUTINE */}
              <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <section id="classes" className={`${CARD} p-5 sm:p-6`}>
                  <div className="flex items-center justify-between gap-4">
                    <SectionHead eyebrow={TEACHER_CLASSES.eyebrow} title={TEACHER_CLASSES.title} />
                    <button className="group inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {TEACHER_CLASSES.viewAllLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <div className="mt-5 space-y-3">
                    {TEACHER_CLASSES.items.map((item, i) => (
                      <div
                        key={item}
                        className="flex flex-col gap-3 rounded-xl border border-brand/10 p-4 transition-colors hover:border-brand/25 hover:bg-brand/[0.03] sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-semibold text-brand-dark">{item}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {32 + i * 8} students · Section {String.fromCharCode(65 + i)}
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                            i === 0
                              ? "bg-brand text-white"
                              : "bg-brand/8 text-brand ring-1 ring-inset ring-brand/15"
                          }`}
                        >
                          {i === 0 ? "In progress" : "Active"}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="routine" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={TEACHER_ROUTINE.eyebrow} title={TEACHER_ROUTINE.title} />

                  {/* Timeline rail so the day reads in order at a glance. */}
                  <div className="relative mt-5 space-y-3 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-[7px] top-2 bottom-2 w-px bg-brand/15"
                    />

                    {TEACHER_ROUTINE.items.map((item, i) => (
                      <div key={item} className="relative rounded-xl bg-brand/[0.04] p-4">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 top-5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand ring-2 ring-brand/20"
                        />

                        <div className="flex gap-3">
                          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <div>
                            <p className="text-sm font-semibold text-brand-dark">{item}</p>
                            <p className="mt-1 text-xs text-slate-500">
                              Room {i + 201} · Academic Building
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* -------------------------------------- ATTENDANCE + ASSIGNMENTS */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
                <section id="attendance" className={`${CARD} p-5 sm:p-6`}>
                  <div className="flex items-center justify-between">
                    <SectionHead
                      eyebrow={TEACHER_ATTENDANCE.eyebrow}
                      title={TEACHER_ATTENDANCE.title}
                    />
                    <span className="font-serif text-3xl font-bold text-brand">
                      {TEACHER_ATTENDANCE.rate}
                    </span>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-brand/8">
                    <div className="h-full w-[92.4%] rounded-full bg-gradient-to-r from-brand-dark to-brand" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {TEACHER_ATTENDANCE.breakdown.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-brand/10 py-3 transition-colors hover:border-brand/25 hover:bg-brand/[0.03]"
                      >
                        <p className="text-lg font-bold text-brand-dark">
                          <CountUp value={String(item.value)} />
                        </p>
                        <p className="text-xs text-slate-500">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="assignments" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead
                    eyebrow={TEACHER_ASSIGNMENTS.eyebrow}
                    title={TEACHER_ASSIGNMENTS.title}
                  />

                  <div className="mt-5 space-y-3">
                    {TEACHER_ASSIGNMENTS.items.map((item) => (
                      <div
                        key={item.title}
                        className="group flex items-center gap-3 rounded-xl border border-brand/10 p-4 transition-colors hover:border-brand/25 hover:bg-brand/[0.03]"
                      >
                        <span
                          className={`${CHIP} h-9 w-9 transition-colors duration-300 group-hover:bg-brand group-hover:text-white`}
                        >
                          <FileText className="h-4 w-4" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-brand-dark">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                        </div>

                        <ChevronRight className="h-4 w-4 text-brand/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* -------------------------------------- STUDENTS + NOTICES */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
                <section id="students" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={TEACHER_STUDENTS.eyebrow} title={TEACHER_STUDENTS.title} />

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {TEACHER_STUDENTS.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-brand/10 bg-brand/[0.04] p-4"
                      >
                        <p className="font-serif text-2xl font-bold text-brand-dark">
                          <CountUp value={String(stat.value)} />
                        </p>
                        <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="notices" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={TEACHER_NOTICES.eyebrow} title={TEACHER_NOTICES.title} />

                  <div className="mt-5 space-y-3">
                    {TEACHER_NOTICES.items.map((notice) => (
                      <div
                        key={notice}
                        className="flex gap-3 border-b border-brand/10 pb-3 last:border-0 last:pb-0"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <p className="text-sm text-slate-700">{notice}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* -------------------------------------- MESSAGES */}
              <section id="messages" className={`${CARD} mt-6 p-5 sm:p-6`}>
                <SectionHead eyebrow={TEACHER_MESSAGES.eyebrow} title={TEACHER_MESSAGES.title} />

                <div className="mt-5 flex items-center gap-4 rounded-xl border border-brand/10 bg-brand/[0.04] p-4">
                  <span className={`${CHIP} h-10 w-10 shrink-0`}>
                    <MessageSquare className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-brand-dark">
                      {TEACHER_MESSAGES.primaryText}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{TEACHER_MESSAGES.secondaryText}</p>
                  </div>
                </div>
              </section>

              {/* -------------------------------------- SETTINGS */}
              <section id="settings" className={`${CARD} mt-6 p-5 sm:p-6`}>
                <SectionHead eyebrow={TEACHER_SETTINGS.eyebrow} title={TEACHER_SETTINGS.title} />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {TEACHER_SETTINGS.items.map((item) => (
                    <button
                      key={item}
                      className="group flex items-center justify-between rounded-xl border border-brand/10 p-4 text-left text-sm font-semibold text-brand-dark transition-colors hover:border-brand/25 hover:bg-brand/[0.03]"
                    >
                      {item}
                      <ChevronRight className="h-4 w-4 text-brand/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  )
}

/** Eyebrow + title pair shared by every card so headings stay identical. */
function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className="mt-1 font-serif text-2xl font-bold text-brand-dark">{title}</h2>
    </div>
  )
}
