"use client"

import Link from "next/link"
import { useState } from "react"
import { PageShell } from "@/components/page-shell"
import {
  Bell, CheckCircle2, ChevronRight,
  FileText, Menu, MessageSquare, Search,
  X, Clock3
} from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
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

export default function TeacherPortalPage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <PageShell>
      <div className="min-h-[calc(100vh-80px)] bg-secondary/40">
        <div className="mx-auto flex max-w-[1500px]">
          <aside className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 mt-0 w-72 border-r border-border bg-brand-dark p-5 text-white transition-transform lg:sticky lg:top-0 lg:h-[calc(100vh-0px)] lg:translate-x-0`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{TEACHER_PORTAL_BRAND.eyebrow}</p>
                <h2 className="mt-1 font-serif text-xl font-bold">{TEACHER_PORTAL_BRAND.title}</h2>
              </div>
              <button onClick={() => setMobileOpen(false)} className="rounded-lg p-2 text-white/70 hover:bg-white/10 lg:hidden"><X className="h-5 w-5" /></button>
            </div>

            <nav className="mt-6 space-y-1">
              {TEACHER_NAV.map((item, index) => {
                const Icon = ICON_MAP[item.icon]

                return (
                  <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${index === 0 ? "bg-white text-brand-dark" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="mt-8 rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/50">{TEACHER_QUICK_ACCESS.label}</p>
              {TEACHER_QUICK_ACCESS.links.map((link, index) => (
                <Link key={link.href} href={link.href} className={`${index === 0 ? "mt-3" : "mt-2"} flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/15`}>{link.label} <ChevronRight className="h-4 w-4" /></Link>
              ))}
            </div>
          </aside>

          {mobileOpen && <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-black/40 lg:hidden" />}

          <main className="min-w-0 flex-1">
            <header className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileOpen(true)} className="rounded-xl border border-border p-2 lg:hidden"><Menu className="h-5 w-5" /></button>
                <div className="relative hidden max-w-md flex-1 sm:block">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input className="w-full rounded-xl border border-border bg-secondary/50 py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-brand/20" placeholder={TEACHER_TOPBAR.searchPlaceholder} />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button className="relative rounded-xl border border-border p-2.5 hover:bg-secondary"><Bell className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" /></button>
                  <div className="hidden items-center gap-3 rounded-xl border border-border px-3 py-2 sm:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">{TEACHER_TOPBAR.userInitials}</div>
                    <div><p className="text-xs font-semibold">{TEACHER_TOPBAR.userName}</p><p className="text-[11px] text-muted-foreground">{TEACHER_TOPBAR.userRole}</p></div>
                  </div>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-6 lg:p-8">
              <section id="dashboard" className="rounded-3xl bg-brand-dark p-6 text-white shadow-sm sm:p-8">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{TEACHER_DASHBOARD.eyebrow}</p>
                    <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">{TEACHER_DASHBOARD.title}</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{TEACHER_DASHBOARD.description}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm"><p className="text-white/50">{TEACHER_DASHBOARD.dateLabel}</p><p className="mt-1 font-semibold">{TEACHER_DASHBOARD.dateValue}</p></div>
                </div>
              </section>

              <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {TEACHER_STATS.map((stat, index) => {
                  const Icon = ICON_MAP[stat.icon]
                  const color = lightTileIcon(index)

                  return (
                    <article key={stat.title} className="group rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <div className="flex items-start justify-between"><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}><Icon className="h-5 w-5" /></span><span className="text-xs text-muted-foreground">{stat.meta}</span></div>
                      <p className="mt-5 text-sm text-muted-foreground">{stat.title}</p><p className="mt-1 font-serif text-3xl font-bold"><CountUp value={String(stat.value)} /></p>
                    </article>
                  )
                })}
              </section>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <section id="classes" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_CLASSES.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_CLASSES.title}</h2></div><button className="text-sm font-semibold text-brand">{TEACHER_CLASSES.viewAllLabel}</button></div>
                  <div className="mt-5 space-y-3">
                    {TEACHER_CLASSES.items.map((item, i) => (
                      <div key={item} className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold">{item}</p><p className="mt-1 text-xs text-muted-foreground">{32 + i * 8} students · Section {String.fromCharCode(65 + i)}</p></div><span className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">{i === 0 ? "In progress" : "Active"}</span></div>
                    ))}
                  </div>
                </section>

                <section id="routine" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_ROUTINE.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_ROUTINE.title}</h2>
                  <div className="mt-5 space-y-3">
                    {TEACHER_ROUTINE.items.map((item, i) => <div key={item} className="flex gap-3 rounded-xl bg-secondary p-4"><Clock3 className="mt-0.5 h-4 w-4 text-brand" /><div><p className="text-sm font-semibold">{item}</p><p className="mt-1 text-xs text-muted-foreground">Room {i + 201} · Academic Building</p></div></div>)}
                  </div>
                </section>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <section id="attendance" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_ATTENDANCE.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_ATTENDANCE.title}</h2></div><span className="text-2xl font-bold text-brand">{TEACHER_ATTENDANCE.rate}</span></div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-secondary"><div className="h-full w-[92.4%] rounded-full bg-brand" /></div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">{TEACHER_ATTENDANCE.breakdown.map((item) => (<div key={item.label}><p className="text-lg font-bold"><CountUp value={String(item.value)} /></p><p className="text-xs text-muted-foreground">{item.label}</p></div>))}</div>
                </section>
                <section id="assignments" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_ASSIGNMENTS.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_ASSIGNMENTS.title}</h2>
                  <div className="mt-5 space-y-3">{TEACHER_ASSIGNMENTS.items.map((item, index) => <div key={item.title} className="flex items-center gap-3 rounded-xl border border-border p-4"><span className={`flex h-9 w-9 items-center justify-center rounded-lg ${lightTileIcon(index + 4).bg} ${lightTileIcon(index + 4).text}`}><FileText className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.meta}</p></div><ChevronRight className="h-4 w-4 text-muted-foreground" /></div>)}</div>
                </section>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <section id="students" className="rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_STUDENTS.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_STUDENTS.title}</h2><div className="mt-5 grid grid-cols-2 gap-3">{TEACHER_STUDENTS.stats.map((stat) => (<div key={stat.label} className="rounded-xl bg-secondary p-4"><p className="text-2xl font-bold"><CountUp value={String(stat.value)} /></p><p className="mt-1 text-xs text-muted-foreground">{stat.label}</p></div>))}</div></section>
                <section id="notices" className="rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_NOTICES.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_NOTICES.title}</h2><div className="mt-5 space-y-3">{TEACHER_NOTICES.items.map((x) => <div key={x} className="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /><p className="text-sm">{x}</p></div>)}</div></section>
              </div>

              <section id="messages" className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_MESSAGES.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_MESSAGES.title}</h2><div className="mt-5 flex items-center gap-4 rounded-xl bg-secondary p-4"><MessageSquare className="h-5 w-5 text-brand" /><div><p className="text-sm font-semibold">{TEACHER_MESSAGES.primaryText}</p><p className="mt-1 text-xs text-muted-foreground">{TEACHER_MESSAGES.secondaryText}</p></div></div></section>
              <section id="settings" className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{TEACHER_SETTINGS.eyebrow}</p><h2 className="mt-1 font-serif text-2xl font-bold">{TEACHER_SETTINGS.title}</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{TEACHER_SETTINGS.items.map((item) => (<button key={item} className="rounded-xl border border-border p-4 text-left text-sm font-semibold hover:bg-secondary">{item}</button>))}</div></section>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  )
}
