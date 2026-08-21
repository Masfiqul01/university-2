"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Clock, MapPin, Search, ArrowRight, ChevronLeft, ChevronRight,
  LayoutGrid, Mic2, Wrench, Trophy, Music, Shapes,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { imageUrl } from "@/lib/site-assets"
import { EVENTS_LIST, EVENT_CATEGORIES, type EventCategory } from "@/lib/data/events"

const TABS: { key: "All" | EventCategory; label: string; icon: typeof LayoutGrid }[] = [
  { key: "All", label: "All Events", icon: LayoutGrid },
  { key: "Seminar", label: "Seminar", icon: Mic2 },
  { key: "Workshop", label: "Workshop", icon: Wrench },
  { key: "Competition", label: "Competition", icon: Trophy },
  { key: "Cultural", label: "Cultural", icon: Music },
  { key: "Others", label: "Others", icon: Shapes },
]

const CATEGORY_COLOR: Record<EventCategory, string> = {
  Seminar: "bg-brand-dark",
  Workshop: "bg-emerald-600",
  Competition: "bg-amber-700",
  Cultural: "bg-blue-600",
  Others: "bg-violet-600",
}

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

const PER_PAGE = 6

function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"All" | EventCategory>("All")
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const firstEventDate = parseISO(EVENTS_LIST[0].date)
  const [viewYear, setViewYear] = useState(firstEventDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(firstEventDate.getMonth())

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: EVENTS_LIST.length }
    for (const cat of EVENT_CATEGORIES) {
      map[cat] = EVENTS_LIST.filter((e) => e.category === cat).length
    }
    return map
  }, [])

  const eventDatesInView = useMemo(() => {
    return new Set(
      EVENTS_LIST.filter((e) => {
        const d = parseISO(e.date)
        return d.getFullYear() === viewYear && d.getMonth() === viewMonth
      }).map((e) => e.date)
    )
  }, [viewYear, viewMonth])

  const filtered = useMemo(() => {
    return EVENTS_LIST.filter((e) => {
      const matchesTab = activeTab === "All" || e.category === activeTab
      const matchesQuery = (e.title + " " + e.description + " " + e.venue)
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesDate = !selectedDate || e.date === selectedDate
      return matchesTab && matchesQuery && matchesDate
    })
  }, [activeTab, query, selectedDate])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  function selectTab(key: "All" | EventCategory) {
    setActiveTab(key)
    setPage(1)
  }

  function changeMonth(delta: number) {
    let m = viewMonth + delta
    let y = viewYear
    if (m < 0) { m = 11; y -= 1 }
    if (m > 11) { m = 0; y += 1 }
    setViewMonth(m)
    setViewYear(y)
  }

  function toggleDate(iso: string) {
    setSelectedDate((prev) => (prev === iso ? null : iso))
    setPage(1)
  }

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
  const calendarCells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  return (
    <PageShell>
      <PageHero
        title="Events"
        subtitle="Join our exciting events, seminars, workshops and programs happening in and around our campus."
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Events", href: "/news" }, { label: "Events" }]}
        image="/images/hero-campus.png"
        tall
      />

      <section className="events-content-section w-full bg-(--events-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 id="upcoming-events" className="flex items-center gap-2 font-serif text-2xl font-bold text-(--events-heading)">
                <span className="h-6 w-1.5 rounded-full bg-brand-accent" />
                Upcoming Events
              </h2>
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => selectTab(tab.key)}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-(--events-btn-active-bg) text-white"
                        : "bg-(--events-btn-bg) text-(--events-text-secondary) hover:text-(--events-heading)"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {pageItems.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((item) => {
                  const d = parseISO(item.date)
                  return (
                    <article
                      key={item.slug}
                      className="group flex flex-col overflow-hidden rounded-xl border border-(--events-border) bg-(--events-card-bg) shadow-sm transition-shadow hover:shadow-md"
                    >
                      <Link href={`/events/${item.slug}`} className="relative block overflow-hidden">
                        <img
                          src={imageUrl(item.image) || "/placeholder.svg"}
                          alt={item.title}
                          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 flex w-14 flex-col items-center rounded-lg bg-brand-dark/90 py-1.5 text-white backdrop-blur-sm">
                          <span className="text-[10px] font-bold uppercase tracking-wide">
                            {MONTH_NAMES[d.getMonth()].slice(0, 3)}
                          </span>
                          <span className="text-lg font-bold leading-none">{d.getDate()}</span>
                          <span className="text-[9px] text-white/70">{d.getFullYear()}</span>
                        </span>
                      </Link>
                      <div className="flex flex-1 flex-col p-5">
                        <span
                          className={`mb-2 inline-flex w-fit rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${CATEGORY_COLOR[item.category]}`}
                        >
                          {item.category}
                        </span>
                        <h3 className="mb-2 font-serif text-base font-bold leading-snug text-balance text-(--events-heading)">
                          {item.title}
                        </h3>
                        <p className="mb-1 flex items-center gap-1.5 text-xs text-(--events-text-meta)">
                          <Clock className="h-3.5 w-3.5" />
                          {item.time}
                        </p>
                        <p className="mb-3 flex items-center gap-1.5 text-xs text-(--events-text-meta)">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.venue}
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-(--events-text-secondary)">{item.description}</p>
                        <Link
                          href={`/events/${item.slug}`}
                          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-(--events-border) bg-(--events-card-bg) py-16 text-center text-sm text-(--events-text-secondary)">
                No events found. Try adjusting your search or filters.
              </p>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--events-border) text-(--events-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                      n === currentPage
                        ? "bg-(--events-btn-active-bg) text-white"
                        : "border border-(--events-border) text-(--events-text-meta) hover:border-brand-accent hover:text-brand-accent"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--events-border) text-(--events-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-(--events-border) bg-(--events-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--events-heading)">Search Events</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--events-text-meta)" />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setPage(1)
                  }}
                  placeholder="Search events, seminars, workshops..."
                  className="w-full rounded-lg border border-(--events-border) bg-(--events-btn-bg) py-2.5 pl-10 pr-4 text-sm text-(--events-heading) outline-none transition-colors placeholder:text-(--events-text-meta) focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-(--events-border) bg-(--events-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--events-heading)">Categories</h3>
              <ul className="space-y-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon
                  const iconBg = tab.key === "All" ? "bg-brand-dark" : CATEGORY_COLOR[tab.key as EventCategory]
                  return (
                    <li key={tab.key}>
                      <button
                        onClick={() => selectTab(tab.key)}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-colors ${
                          activeTab === tab.key
                            ? "bg-(--events-btn-active-bg) text-white"
                            : "text-(--events-text-secondary) hover:bg-(--events-btn-bg) hover:text-(--events-heading)"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${
                              activeTab === tab.key ? "bg-white/15" : iconBg
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          {tab.label}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            activeTab === tab.key ? "bg-white/20 text-white" : "bg-(--events-btn-bg) text-(--events-text-meta)"
                          }`}
                        >
                          {counts[tab.key]}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-(--events-border) bg-(--events-panel-bg) p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <button
                  onClick={() => changeMonth(-1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-(--events-text-meta) transition-colors hover:bg-(--events-btn-bg) hover:text-(--events-heading)"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <h3 className="font-serif text-sm font-bold text-(--events-heading)">
                  {MONTH_NAMES[viewMonth]} {viewYear}
                </h3>
                <button
                  onClick={() => changeMonth(1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-(--events-text-meta) transition-colors hover:bg-(--events-btn-bg) hover:text-(--events-heading)"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-y-1 text-center text-[11px] font-semibold text-(--events-text-meta)">
                {WEEKDAYS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
                {calendarCells.map((day, i) => {
                  if (day === null) return <span key={`blank-${i}`} />
                  const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                  const hasEvent = eventDatesInView.has(iso)
                  const isSelected = selectedDate === iso
                  return (
                    <button
                      key={iso}
                      onClick={() => hasEvent && toggleDate(iso)}
                      disabled={!hasEvent}
                      className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
                        isSelected
                          ? "bg-(--events-btn-active-bg) font-bold text-white"
                          : hasEvent
                          ? "font-semibold text-brand-dark ring-1 ring-brand-accent/60 hover:bg-(--events-btn-bg)"
                          : "text-(--events-text-meta)"
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
              <Link
                href="#upcoming-events"
                onClick={() => setSelectedDate(null)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
              >
                View Full Calendar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
