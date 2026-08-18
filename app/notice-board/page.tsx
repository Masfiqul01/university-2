"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Calendar, ChevronLeft, ChevronRight, ChevronDown,
  LayoutGrid, GraduationCap, Megaphone, FileText, ClipboardList, Flag,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { NOTICES_LIST, NOTICE_CATEGORIES, IMPORTANT_LINKS, NOTICE_ARCHIVE, type NoticeCategory } from "@/lib/data/notices"

// NOTICE_ARCHIVE labels look like "May 2025"; NOTICES_LIST dates look like
// "May 19, 2025". Matching on the first 3 letters of the month plus the
// year works for both full ("February") and abbreviated ("May") labels.
function noticeMatchesArchive(date: string, periodLabel: string) {
  const [month, year] = periodLabel.split(" ")
  if (!month || !year) return true
  return date.startsWith(month.slice(0, 3)) && date.endsWith(year)
}

const TABS: { key: "All" | NoticeCategory; label: string; icon: typeof LayoutGrid }[] = [
  { key: "All", label: "All Notices", icon: LayoutGrid },
  { key: "Academic", label: "Academic", icon: GraduationCap },
  { key: "Administrative", label: "Administrative", icon: Megaphone },
  { key: "Admission", label: "Admission", icon: FileText },
  { key: "Exam", label: "Exam", icon: ClipboardList },
  { key: "Others", label: "Others", icon: Flag },
]

const CATEGORY_ICON_BG: Record<NoticeCategory, string> = {
  Academic: "bg-brand-dark",
  Administrative: "bg-emerald-600",
  Admission: "bg-violet-600",
  Exam: "bg-amber-600",
  Others: "bg-red-600",
}

const CATEGORY_BADGE: Record<NoticeCategory, string> = {
  Academic: "bg-blue-50 text-blue-800",
  Administrative: "bg-emerald-50 text-emerald-700",
  Admission: "bg-violet-50 text-violet-700",
  Exam: "bg-amber-50 text-amber-700",
  Others: "bg-red-50 text-red-700",
}

const PER_PAGE = 6

export default function NoticeBoardPage() {
  const [activeTab, setActiveTab] = useState<"All" | NoticeCategory>("All")
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [archivePeriod, setArchivePeriod] = useState("All")
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: NOTICES_LIST.length }
    for (const cat of NOTICE_CATEGORIES) {
      map[cat] = NOTICES_LIST.filter((n) => n.category === cat).length
    }
    return map
  }, [])

  const filtered = useMemo(() => {
    return NOTICES_LIST.filter((n) => {
      const matchesTab = activeTab === "All" || n.category === activeTab
      const matchesQuery = (n.title + " " + n.description).toLowerCase().includes(query.toLowerCase())
      const matchesArchive = archivePeriod === "All" || noticeMatchesArchive(n.date, archivePeriod)
      return matchesTab && matchesQuery && matchesArchive
    })
  }, [activeTab, query, archivePeriod])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  function selectTab(key: "All" | NoticeCategory) {
    setActiveTab(key)
    setPage(1)
  }

  return (
    <PageShell>
      <PageHero
        title="Notice Board"
        subtitle="Stay informed with the latest notices, announcements and important updates from the college."
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Events", href: "/news" }, { label: "Notice Board" }]}
        image="/images/hero-campus.png"
      />

      <section className="notice-content-section w-full bg-(--notice-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-(--notice-heading)">
                <span className="h-6 w-1.5 rounded-full bg-brand-accent" />
                All Notices
              </h2>
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => selectTab(tab.key)}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-(--notice-btn-active-bg) text-white"
                        : "border border-(--notice-border) bg-white text-(--notice-heading) hover:bg-(--notice-btn-bg)"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {pageItems.length > 0 ? (
              <div className="overflow-hidden rounded-2xl border border-(--notice-border) bg-(--notice-card-bg) shadow-sm">
                {pageItems.map((notice, i) => {
                  const Icon = TABS.find((t) => t.key === notice.category)?.icon ?? FileText
                  return (
                    <article
                      key={notice.slug}
                      className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-start ${
                        i !== pageItems.length - 1 ? "border-b border-(--notice-border)" : ""
                      }`}
                    >
                      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${CATEGORY_ICON_BG[notice.category]}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className={`mb-1.5 inline-flex rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${CATEGORY_BADGE[notice.category]}`}>
                          {notice.category}
                        </span>
                        <h3 className="mb-1.5 font-serif text-base font-bold leading-snug text-balance text-(--notice-heading)">
                          {notice.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-(--notice-text-secondary)">{notice.description}</p>

                        {expandedSlug === notice.slug && (
                          <div className="mt-3 rounded-lg border border-(--notice-border) bg-(--notice-btn-bg) p-3.5">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-(--notice-text-meta)">
                              <span>
                                Category: <span className="font-semibold text-(--notice-heading)">{notice.category}</span>
                              </span>
                              <span>
                                Published: <span className="font-semibold text-(--notice-heading)">{notice.date}</span>
                              </span>
                              <span>
                                Reference: <span className="font-mono font-semibold text-(--notice-heading)">{notice.slug}</span>
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                        <p className="flex items-center gap-1.5 text-xs text-(--notice-text-meta)">
                          <Calendar className="h-3.5 w-3.5" />
                          {notice.date}
                        </p>
                        <button
                          type="button"
                          onClick={() => setExpandedSlug(expandedSlug === notice.slug ? null : notice.slug)}
                          aria-expanded={expandedSlug === notice.slug}
                          title={expandedSlug === notice.slug ? "Hide notice details" : "View notice details"}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--notice-border) text-(--notice-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSlug === notice.slug ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-(--notice-border) bg-(--notice-card-bg) py-16 text-center text-sm text-(--notice-text-secondary)">
                No notices found. Try adjusting your search or filters.
              </p>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--notice-border) text-(--notice-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
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
                        ? "bg-(--notice-btn-active-bg) text-white"
                        : "border border-(--notice-border) text-(--notice-text-meta) hover:border-brand-accent hover:text-brand-accent"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--notice-border) text-(--notice-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-(--notice-border) bg-(--notice-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--notice-heading)">Search Notice</h3>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setPage(1)
                }}
                placeholder="Search notices..."
                className="w-full rounded-lg border border-(--notice-border) bg-(--notice-btn-bg) px-4 py-2.5 text-sm text-(--notice-heading) outline-none transition-colors placeholder:text-(--notice-text-meta) focus:border-brand-accent"
              />
            </div>

            <div className="rounded-2xl border border-(--notice-border) bg-(--notice-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--notice-heading)">Categories</h3>
              <ul className="space-y-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon
                  const iconBg = tab.key === "All" ? "bg-brand-dark" : CATEGORY_ICON_BG[tab.key as NoticeCategory]
                  return (
                    <li key={tab.key}>
                      <button
                        onClick={() => selectTab(tab.key)}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-colors ${
                          activeTab === tab.key
                            ? "bg-(--notice-btn-active-bg) text-white"
                            : "text-(--notice-text-secondary) hover:bg-(--notice-btn-bg) hover:text-(--notice-heading)"
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
                            activeTab === tab.key ? "bg-white/20 text-white" : "bg-(--notice-btn-bg) text-(--notice-text-meta)"
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

            <div className="rounded-2xl border border-(--notice-border) bg-(--notice-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--notice-heading)">Important Links</h3>
              <ul className="space-y-1">
                {IMPORTANT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-2.5 py-2 text-sm text-(--notice-text-secondary) transition-colors hover:bg-(--notice-btn-bg) hover:text-(--notice-heading)"
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 text-brand-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-(--notice-border) bg-(--notice-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--notice-heading)">Notice Archive</h3>
              <div className="relative">
                <select
                  value={archivePeriod}
                  onChange={(e) => {
                    setArchivePeriod(e.target.value)
                    setPage(1)
                  }}
                  className="w-full appearance-none rounded-lg border border-(--notice-border) bg-(--notice-btn-bg) py-2.5 pl-10 pr-9 text-sm text-(--notice-heading) outline-none transition-colors focus:border-brand-accent"
                >
                  <option value="All">All Notices</option>
                  {NOTICE_ARCHIVE.map((a) => (
                    <option key={a.label} value={a.label}>
                      {a.label} ({a.count})
                    </option>
                  ))}
                </select>
                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--notice-text-meta)" />
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--notice-text-meta)" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
