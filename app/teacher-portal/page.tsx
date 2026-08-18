"use client"

import Link from "next/link"
import { useState } from "react"
import { PageShell } from "@/components/page-shell"
import {
  Bell, BookOpen, CheckCircle2, ChevronRight, ClipboardCheck,
  FileText, Lock, Mail, Menu, MessageSquare, Phone, Search,
  X, Clock3
} from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import {
  TEACHER, PORTAL_NAV, STAT_TILES, MY_CLASSES, TODAYS_ROUTINE,
  ATTENDANCE_OVERVIEW, ASSIGNMENT_QUEUE, STUDENT_SUPPORT, FACULTY_NOTICES,
} from "@/lib/data/teacher-portal"

const NAV = PORTAL_NAV.map(({ label, href, icon }) => [label, href, ICON_MAP[icon] ?? Bell] as const)

const NOTIF_PREF_LABELS: Record<string, string> = {
  email: "Email notifications",
  sms: "SMS alerts",
  assignments: "Assignment reminders",
  announcements: "Faculty announcements",
}

export default function TeacherPortalPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [showAllClasses, setShowAllClasses] = useState(false)
  const [settingsPanel, setSettingsPanel] = useState<"profile" | "notifications" | "security" | null>(null)
  const [notifPrefs, setNotifPrefs] = useState({
    email: true,
    sms: false,
    assignments: true,
    announcements: true,
  })

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-80px)] bg-secondary/40">
        <div className="mx-auto flex max-w-[1500px]">
          <aside className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 mt-0 w-72 border-r border-border bg-brand-dark p-5 text-white transition-transform lg:sticky lg:top-0 lg:h-[calc(100vh-0px)] lg:translate-x-0`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">KACST</p>
                <h2 className="mt-1 font-serif text-xl font-bold">Teacher Portal</h2>
              </div>
              <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"><X className="h-5 w-5" /></button>
            </div>

            <nav className="mt-6 space-y-1">
              {NAV.map(([label, href, Icon], index) => (
                <a key={label} href={href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${index === 0 ? "bg-white text-brand-dark" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/50">Quick access</p>
              <Link href="/student-portal" className="mt-3 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">Student Portal <ChevronRight className="h-4 w-4" /></Link>
              <Link href="/administration" className="mt-2 flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15">Administration <ChevronRight className="h-4 w-4" /></Link>
            </div>
          </aside>

          {mobileOpen && <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

          <main className="min-w-0 flex-1">
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-border p-2 lg:hidden"><Menu className="h-5 w-5" /></button>
                <div className="relative hidden max-w-md flex-1 sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input className="w-full rounded-xl border border-border bg-secondary/50 py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/20" placeholder="Search classes, students, notices..." />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="relative">
                    <button
                      onClick={() => setNotifOpen((v) => !v)}
                      aria-expanded={notifOpen}
                      aria-label="Notifications"
                      className="relative rounded-xl border border-border p-2.5 hover:bg-secondary"
                    >
                      <Bell className="h-4 w-4" />
                      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    </button>

                    {notifOpen && (
                      <>
                        <button
                          aria-label="Close notifications"
                          onClick={() => setNotifOpen(false)}
                          className="fixed inset-0 z-30 cursor-default"
                        />
                        <div className="absolute right-0 top-full z-40 mt-2 w-80 rounded-2xl border border-border bg-card p-4 shadow-lg">
                          <div className="flex items-center justify-between">
                            <p className="font-serif text-sm font-bold">Faculty Notices</p>
                            <button
                              onClick={() => setNotifOpen(false)}
                              aria-label="Close notifications"
                              className="rounded-lg p-1 text-muted-foreground hover:bg-secondary"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="mt-3 space-y-2">
                            {FACULTY_NOTICES.map((notice) => (
                              <div key={notice} className="flex gap-2.5 rounded-xl bg-secondary p-3 text-xs">
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
                                <p>{notice}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="hidden items-center gap-3 rounded-xl border border-border px-3 py-2 sm:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">{TEACHER.initials}</div>
                    <div><p className="text-xs font-semibold">{TEACHER.name}</p><p className="text-[11px] text-muted-foreground">{TEACHER.title}</p></div>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-6 lg:p-8">
              <section id="dashboard" className="rounded-3xl bg-brand-dark p-6 text-white shadow-sm sm:p-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">Teacher Dashboard</p>
                    <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">Good morning, {TEACHER.name}</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Manage your classes, attendance, assignments and student communication from one place.</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm"><p className="text-white/50">Today</p><p className="mt-1 font-semibold">{TEACHER.today}</p></div>
                </div>
              </section>

              <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {STAT_TILES.map(({ title, value, meta, icon }) => {
                  const Icon = ICON_MAP[icon] ?? ClipboardCheck
                  return (
                    <article key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="flex items-start justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand"><Icon className="h-5 w-5" /></span><span className="text-xs text-muted-foreground">{meta}</span></div>
                      <p className="mt-5 text-sm text-muted-foreground">{title}</p><p className="mt-1 font-serif text-3xl font-bold">{value}</p>
                    </article>
                  )
                })}
              </section>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <section id="classes" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Teaching</p><h2 className="mt-1 font-serif text-2xl font-bold">My Classes</h2></div><button onClick={() => setShowAllClasses((v) => !v)} className="text-sm font-semibold text-brand">{showAllClasses ? "Show less" : "View all"}</button></div>
                  <div className="mt-5 space-y-3">
                    {(showAllClasses ? MY_CLASSES : MY_CLASSES.slice(0, 4)).map((item, i) => (
                      <div key={item} className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold">{item}</p><p className="mt-1 text-xs text-muted-foreground">{32 + i * 8} students · Section {String.fromCharCode(65 + i)}</p></div><span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">{i === 0 ? "In progress" : "Active"}</span></div>
                    ))}
                  </div>
                </section>

                <section id="routine" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Schedule</p><h2 className="mt-1 font-serif text-2xl font-bold">Today’s Routine</h2>
                  <div className="mt-5 space-y-3">
                    {TODAYS_ROUTINE.map((item, i) => <div key={item} className="flex gap-3 rounded-xl bg-secondary p-4"><Clock3 className="mt-0.5 h-4 w-4 text-brand" /><div><p className="text-sm font-semibold">{item}</p><p className="mt-1 text-xs text-muted-foreground">Room {i + 201} · Academic Building</p></div></div>)}
                  </div>
                </section>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <section id="attendance" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Overview</p><h2 className="mt-1 font-serif text-2xl font-bold">Attendance</h2></div><span className="text-2xl font-bold text-brand">{ATTENDANCE_OVERVIEW.percent}</span></div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-brand" style={{ width: ATTENDANCE_OVERVIEW.percent }} /></div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center"><div><p className="text-lg font-bold">{ATTENDANCE_OVERVIEW.present}</p><p className="text-xs text-muted-foreground">Present</p></div><div><p className="text-lg font-bold">{ATTENDANCE_OVERVIEW.absent}</p><p className="text-xs text-muted-foreground">Absent</p></div><div><p className="text-lg font-bold">{ATTENDANCE_OVERVIEW.late}</p><p className="text-xs text-muted-foreground">Late</p></div></div>
                </section>
                <section id="assignments" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Tasks</p><h2 className="mt-1 font-serif text-2xl font-bold">Assignment Queue</h2>
                  <div className="mt-5 space-y-3">{ASSIGNMENT_QUEUE.map(([a,b]) => <div key={a} className="flex items-center gap-3 rounded-xl border border-border p-4"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand"><FileText className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{a}</p><p className="mt-1 text-xs text-muted-foreground">{b}</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div>)}</div>
                </section>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <section id="students" className="rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Students</p><h2 className="mt-1 font-serif text-2xl font-bold">Student Support</h2><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-secondary p-4"><p className="text-2xl font-bold">{STUDENT_SUPPORT.needAdvising}</p><p className="mt-1 text-xs text-muted-foreground">Need advising</p></div><div className="rounded-xl bg-secondary p-4"><p className="text-2xl font-bold">{STUDENT_SUPPORT.messages}</p><p className="mt-1 text-xs text-muted-foreground">Messages</p></div></div></section>
                <section id="notices" className="rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Notices</p><h2 className="mt-1 font-serif text-2xl font-bold">Latest Faculty Notices</h2><div className="mt-5 space-y-3">{FACULTY_NOTICES.map((x) => <div key={x} className="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /><p className="text-sm">{x}</p></div>)}</div></section>
              </div>

              <section id="messages" className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Communication</p><h2 className="mt-1 font-serif text-2xl font-bold">Messages</h2><div className="mt-5 flex items-center gap-4 rounded-xl bg-secondary p-4"><MessageSquare className="h-5 w-5 text-brand" /><div><p className="text-sm font-semibold">Student and department messages will appear here.</p><p className="mt-1 text-xs text-muted-foreground">Connect this section to the university backend when authentication and messaging are ready.</p></div></div></section>
              <section id="settings" className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Account</p>
                <h2 className="mt-1 font-serif text-2xl font-bold">Teacher Settings</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <button
                    onClick={() => setSettingsPanel(settingsPanel === "profile" ? null : "profile")}
                    aria-expanded={settingsPanel === "profile"}
                    className={`rounded-xl border p-4 text-left text-sm font-semibold transition-colors ${settingsPanel === "profile" ? "border-brand bg-brand/5 text-brand" : "border-border hover:bg-secondary"}`}
                  >
                    Profile &amp; contact
                  </button>
                  <button
                    onClick={() => setSettingsPanel(settingsPanel === "notifications" ? null : "notifications")}
                    aria-expanded={settingsPanel === "notifications"}
                    className={`rounded-xl border p-4 text-left text-sm font-semibold transition-colors ${settingsPanel === "notifications" ? "border-brand bg-brand/5 text-brand" : "border-border hover:bg-secondary"}`}
                  >
                    Notification preferences
                  </button>
                  <button
                    onClick={() => setSettingsPanel(settingsPanel === "security" ? null : "security")}
                    aria-expanded={settingsPanel === "security"}
                    className={`rounded-xl border p-4 text-left text-sm font-semibold transition-colors ${settingsPanel === "security" ? "border-brand bg-brand/5 text-brand" : "border-border hover:bg-secondary"}`}
                  >
                    Security
                  </button>
                </div>

                {settingsPanel === "profile" && (
                  <div className="mt-5 rounded-xl bg-secondary p-5">
                    <p className="text-sm font-semibold">Profile &amp; Contact</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Full Name</p>
                        <p className="mt-1 text-sm font-medium">{TEACHER.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Title</p>
                        <p className="mt-1 text-sm font-medium">{TEACHER.title}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-muted-foreground">Department</p>
                        <p className="mt-1 text-sm font-medium">{TEACHER.department}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium"><Mail className="h-3.5 w-3.5 text-brand" />{TEACHER.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium"><Phone className="h-3.5 w-3.5 text-brand" />{TEACHER.phone}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">Read-only demo information. Connect this panel to the university directory to manage real profile data.</p>
                  </div>
                )}

                {settingsPanel === "notifications" && (
                  <div className="mt-5 rounded-xl bg-secondary p-5">
                    <p className="text-sm font-semibold">Notification Preferences</p>
                    <div className="mt-4 space-y-2.5">
                      {Object.entries(notifPrefs).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between rounded-lg bg-card px-4 py-3">
                          <p className="text-sm">{NOTIF_PREF_LABELS[key]}</p>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={value}
                            aria-label={NOTIF_PREF_LABELS[key]}
                            onClick={() => setNotifPrefs((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
                            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${value ? "bg-brand" : "bg-border"}`}
                          >
                            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">Preferences are kept for this demo session only and are not saved to a server.</p>
                  </div>
                )}

                {settingsPanel === "security" && (
                  <div className="mt-5 rounded-xl bg-secondary p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold"><Lock className="h-4 w-4 text-brand" />Change Password</p>
                    <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3 sm:grid-cols-2">
                      <label className="text-xs text-muted-foreground sm:col-span-2">
                        Current Password
                        <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/20" />
                      </label>
                      <label className="text-xs text-muted-foreground">
                        New Password
                        <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/20" />
                      </label>
                      <label className="text-xs text-muted-foreground">
                        Confirm New Password
                        <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/20" />
                      </label>
                      <button type="submit" className="mt-1 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand/90 sm:col-span-2">Update Password</button>
                    </form>
                    <p className="mt-4 text-xs text-muted-foreground">This is a demo interface. Password changes are not submitted or persisted.</p>
                  </div>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  )
}
