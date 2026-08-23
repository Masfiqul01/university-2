"use client"

import Link from "next/link"
import { useEffect, useLayoutEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowUpRight, Bell, Check, CheckCircle2, ChevronRight,
  Loader2, LogOut, Menu, Search, X, Clock3, BookOpen,
} from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { ICON_MAP } from "@/lib/icon-map"
import { CountUp } from "@/components/count-up"
import { HOD_SESSION_KEY, type HodSession } from "@/lib/hod-session"
import {
  HOD_PORTAL_BRAND,
  HOD_NAV,
  HOD_QUICK_ACCESS,
  HOD_TOPBAR,
  HOD_DASHBOARD,
  HOD_STATS,
  HOD_FACULTY,
  HOD_APPROVALS,
  HOD_COURSES,
  HOD_MEETINGS,
  HOD_STUDENTS,
  HOD_NOTICES,
  HOD_REPORTS,
  HOD_SETTINGS,
} from "@/lib/data/hod-portal"

/*
  ============================================================
  HOD PORTAL
  ============================================================

  Same design language as the Teacher Portal (white cards on a near-white
  page, brand blue as the only accent) so the two portals read as one
  product. Shared building blocks (Panel, SectionHead) live at the bottom.

  No backend yet: the sign-in check reads the session /hod-login wrote to
  sessionStorage, and the Approvals queue is resolved locally in React
  state rather than through an API.
*/

const CARD =
  "rounded-2xl border border-brand/10 bg-white shadow-[0_1px_2px_rgba(18,10,128,0.04),0_12px_32px_-18px_rgba(18,10,128,0.28)]"

const CHIP =
  "flex items-center justify-center rounded-xl bg-brand/8 text-brand ring-1 ring-inset ring-brand/10"

export default function HodPortalPage() {
  const router = useRouter()
  const [session, setSession] = useState<HodSession | null>(null)
  const [checked, setChecked] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState(HOD_NAV[0].label)
  const [approvals, setApprovals] = useState(HOD_APPROVALS.items)

  /*
    The site header is `position: fixed`, so it sits outside normal flow and
    overlays whatever is at the top of the page rather than pushing it down.
    Pages built around a tall PageHero never notice, but this portal's own
    topbar starts at the very top — without this offset the site header
    covers it and swallows clicks (Sign Out, search, notifications). The
    site header's height also varies by breakpoint (the utility bar above
    it wraps to more lines on narrow screens), so it's measured rather than
    hard-coded.
  */
  const [headerOffset, setHeaderOffset] = useState(80)

  useLayoutEffect(() => {
    const headerEl = document.querySelector("header")
    if (!headerEl) return
    const update = () => setHeaderOffset(headerEl.getBoundingClientRect().height)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(headerEl)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(HOD_SESSION_KEY)
      if (saved) setSession(JSON.parse(saved))
      else router.replace("/hod-login")
    } catch {
      router.replace("/hod-login")
    }
    setChecked(true)
  }, [router])

  const initials = useMemo(() => {
    if (!session) return ""
    return session.name
      .replace(/^Dr\.\s*/i, "")
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase()
  }, [session])

  function resolveApproval(index: number) {
    setApprovals((prev) => prev.filter((_, i) => i !== index))
  }

  function handleSignOut() {
    try {
      sessionStorage.removeItem(HOD_SESSION_KEY)
    } catch {
      /* ignore */
    }
    router.push("/hod-login")
  }

  if (!checked || !session) {
    return (
      <PageShell>
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#f7f8fc]">
          <Loader2 className="h-6 w-6 animate-spin text-brand" />
        </div>
      </PageShell>
    )
  }

  const stats = [
    ...HOD_STATS,
    {
      title: "Pending Approvals",
      // Not zero-padded: CountUp's tween formats from the numeric target, so
      // a leading zero (e.g. "04") would be dropped once the count finishes.
      value: String(approvals.length),
      meta: approvals.length ? "Need your review" : "All caught up",
      icon: "ClipboardCheck",
    },
  ]

  return (
    <PageShell>
      <div className="bg-[#f7f8fc]" style={{ paddingTop: headerOffset, minHeight: `calc(100vh - ${headerOffset}px)` }}>
        <div className="mx-auto flex max-w-[1500px]">
          {/* ---------------------------------------------- SIDEBAR */}
          <aside
            style={{ top: headerOffset, height: `calc(100vh - ${headerOffset}px)` }}
            className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed left-0 z-50 flex w-72 flex-col border-r border-brand/10 bg-white p-5 transition-transform duration-300 lg:sticky lg:translate-x-0`}
          >
            <div className="flex items-center justify-between border-b border-brand/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand font-serif text-lg font-bold text-white">
                  {HOD_PORTAL_BRAND.eyebrow.slice(0, 1)}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand/60">
                    {HOD_PORTAL_BRAND.eyebrow}
                  </p>
                  <h2 className="font-serif text-lg font-bold text-brand-dark">
                    {HOD_PORTAL_BRAND.title}
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
              {HOD_NAV.map((item) => {
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

            <div className="mt-auto space-y-4">
              <div className="rounded-2xl border border-brand/10 bg-brand/[0.04] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand/60">
                  {HOD_QUICK_ACCESS.label}
                </p>

                {HOD_QUICK_ACCESS.links.map((link, index) => (
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

              <button
                onClick={handleSignOut}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
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
            <header
              style={{ top: headerOffset }}
              className="sticky z-30 border-b border-brand/10 bg-white/85 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8"
            >
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
                    placeholder={HOD_TOPBAR.searchPlaceholder}
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

                  <button
                    onClick={handleSignOut}
                    aria-label="Sign out"
                    className="hidden rounded-xl border border-brand/12 p-2.5 text-brand transition-colors hover:bg-brand/5 sm:block"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>

                  <div className="hidden items-center gap-3 rounded-xl border border-brand/12 bg-white px-3 py-2 sm:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-brand-dark">{session.name}</p>
                      <p className="truncate text-[11px] text-slate-500">{session.department}</p>
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
                        {HOD_DASHBOARD.eyebrow}
                      </p>
                    </div>

                    <h1 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
                      Welcome back, {session.name}
                    </h1>

                    <p className="mt-2 text-sm font-semibold text-brand">
                      {session.department} · {session.faculty}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {HOD_DASHBOARD.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-brand/10 bg-brand/[0.04] px-5 py-4 text-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand/60">
                      {HOD_DASHBOARD.dateLabel}
                    </p>
                    <p className="mt-1 font-semibold text-brand-dark">{HOD_DASHBOARD.dateValue}</p>
                  </div>
                </div>
              </section>

              {/* -------------------------------------- STATS */}
              <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => {
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

              {/* -------------------------------------- FACULTY + APPROVALS */}
              <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <section id="faculty" className={`${CARD} p-5 sm:p-6`}>
                  <div className="flex items-center justify-between gap-4">
                    <SectionHead eyebrow={HOD_FACULTY.eyebrow} title={HOD_FACULTY.title} />
                    <button className="group inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      {HOD_FACULTY.viewAllLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <div className="mt-5 space-y-3">
                    {HOD_FACULTY.items.map((f) => (
                      <div
                        key={f.name}
                        className="flex flex-col gap-3 rounded-xl border border-brand/10 p-4 transition-colors hover:border-brand/25 hover:bg-brand/[0.03] sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-semibold text-brand-dark">{f.name}</p>
                          <p className="mt-1 text-xs text-slate-500">
                            {f.designation} · {f.courses} courses
                          </p>
                        </div>

                        <span
                          className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ${
                            f.status === "Active"
                              ? "bg-brand/8 text-brand ring-1 ring-inset ring-brand/15"
                              : "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-200"
                          }`}
                        >
                          {f.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="approvals" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={HOD_APPROVALS.eyebrow} title={HOD_APPROVALS.title} />

                  {approvals.length === 0 ? (
                    <div className="mt-8 flex flex-col items-center gap-2 py-6 text-center">
                      <CheckCircle2 className="h-8 w-8 text-brand" />
                      <p className="text-sm font-semibold text-brand-dark">All caught up</p>
                      <p className="text-xs text-slate-500">No pending approvals right now.</p>
                    </div>
                  ) : (
                    <div className="mt-5 space-y-3">
                      {approvals.map((item, i) => (
                        <div key={item.title} className="rounded-xl bg-brand/[0.04] p-4">
                          <p className="text-sm font-semibold text-brand-dark">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-500">{item.meta}</p>

                          <div className="mt-3 flex gap-2">
                            <button
                              onClick={() => resolveApproval(i)}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
                            >
                              <Check className="h-3.5 w-3.5" />
                              Approve
                            </button>
                            <button
                              onClick={() => resolveApproval(i)}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-brand/15 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-brand/5"
                            >
                              <X className="h-3.5 w-3.5" />
                              Decline
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              </div>

              {/* -------------------------------------- COURSES + MEETINGS */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
                <section id="courses" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={HOD_COURSES.eyebrow} title={HOD_COURSES.title} />

                  <div className="mt-5 space-y-3">
                    {HOD_COURSES.items.map((c) => (
                      <div
                        key={c.code}
                        className="group flex items-center gap-3 rounded-xl border border-brand/10 p-4 transition-colors hover:border-brand/25 hover:bg-brand/[0.03]"
                      >
                        <span
                          className={`${CHIP} h-9 w-9 shrink-0 transition-colors duration-300 group-hover:bg-brand group-hover:text-white`}
                        >
                          <BookOpen className="h-4 w-4" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-brand-dark">
                            {c.code} · {c.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {c.teacher} · {c.students} students
                          </p>
                        </div>

                        <ChevronRight className="h-4 w-4 text-brand/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </div>
                    ))}
                  </div>
                </section>

                <section id="meetings" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={HOD_MEETINGS.eyebrow} title={HOD_MEETINGS.title} />

                  <div className="relative mt-5 space-y-3 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute left-[7px] top-2 bottom-2 w-px bg-brand/15"
                    />

                    {HOD_MEETINGS.items.map((item) => (
                      <div key={item} className="relative rounded-xl bg-brand/[0.04] p-4">
                        <span
                          aria-hidden="true"
                          className="absolute -left-6 top-5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand ring-2 ring-brand/20"
                        />

                        <div className="flex gap-3">
                          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <div>
                            <p className="text-sm font-semibold text-brand-dark">{item}</p>
                            <p className="mt-1 text-xs text-slate-500">Department Conference Room</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* -------------------------------------- STUDENTS + NOTICES */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
                <section id="students" className={`${CARD} p-5 sm:p-6`}>
                  <SectionHead eyebrow={HOD_STUDENTS.eyebrow} title={HOD_STUDENTS.title} />

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {HOD_STUDENTS.stats.map((stat) => (
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
                  <SectionHead eyebrow={HOD_NOTICES.eyebrow} title={HOD_NOTICES.title} />

                  <div className="mt-5 space-y-3">
                    {HOD_NOTICES.items.map((notice) => (
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

              {/* -------------------------------------- REPORTS */}
              <section id="reports" className={`${CARD} mt-6 p-5 sm:p-6`}>
                <SectionHead eyebrow={HOD_REPORTS.eyebrow} title={HOD_REPORTS.title} />

                <div className="mt-5 flex items-center gap-4 rounded-xl border border-brand/10 bg-brand/[0.04] p-4">
                  <span className={`${CHIP} h-10 w-10 shrink-0`}>
                    <ICON_MAP.BarChart3 className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-brand-dark">{HOD_REPORTS.primaryText}</p>
                    <p className="mt-1 text-xs text-slate-500">{HOD_REPORTS.secondaryText}</p>
                  </div>
                </div>
              </section>

              {/* -------------------------------------- SETTINGS */}
              <section id="settings" className={`${CARD} mt-6 p-5 sm:p-6`}>
                <SectionHead eyebrow={HOD_SETTINGS.eyebrow} title={HOD_SETTINGS.title} />

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {HOD_SETTINGS.items.map((item) => (
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
