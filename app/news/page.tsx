"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Search, Newspaper, Megaphone, Trophy, CalendarDays, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { imageUrl } from "@/lib/site-assets"
import { NEWS_ARTICLES } from "@/lib/data/news"

const TABS = [
  { key: "All", label: "All News", icon: Newspaper },
  { key: "Announcement", label: "Announcements", icon: Megaphone },
  { key: "Achievement", label: "Achievements", icon: Trophy },
  { key: "Event", label: "Events", icon: CalendarDays },
  { key: "Notice", label: "Notices", icon: FileText },
]

const CATEGORY_BADGE: Record<string, string> = {
  Achievement: "bg-amber-800",
  Announcement: "bg-blue-600",
  Event: "bg-emerald-600",
  Notice: "bg-violet-600",
}

const CATEGORY_ICON_BG: Record<string, string> = {
  All: "bg-brand-dark",
  Announcement: "bg-blue-600",
  Achievement: "bg-emerald-600",
  Event: "bg-amber-700",
  Notice: "bg-violet-600",
}

const PER_PAGE = 6

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: NEWS_ARTICLES.length }
    for (const tab of TABS.slice(1)) {
      map[tab.key] = NEWS_ARTICLES.filter((a) => a.category === tab.key).length
    }
    return map
  }, [])

  const filtered = useMemo(() => {
    return NEWS_ARTICLES.filter((a) => {
      const matchesTab = activeTab === "All" || a.category === activeTab
      const matchesQuery = (a.title + " " + a.excerpt).toLowerCase().includes(query.toLowerCase())
      return matchesTab && matchesQuery
    })
  }, [activeTab, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
  const recent = NEWS_ARTICLES.slice(0, 3)

  function selectTab(key: string) {
    setActiveTab(key)
    setPage(1)
  }

  return (
    <PageShell>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest news, announcements and events happening in our college community."
        crumbs={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
        image="/images/hero-campus.png"
      />

      <section className="news-content-section w-full bg-(--news-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 id="latest-news" className="flex items-center gap-2 font-serif text-2xl font-bold text-(--news-heading)">
                <span className="h-6 w-1.5 rounded-full bg-brand-accent" />
                Latest News
              </h2>
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => selectTab(tab.key)}
                    className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? "bg-(--news-btn-active-bg) text-white"
                        : "bg-(--news-btn-bg) text-(--news-text-secondary) hover:text-(--news-heading)"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {pageItems.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {pageItems.map((item) => (
                  <article
                    key={item.slug}
                    className="group flex flex-col overflow-hidden rounded-xl border border-(--news-border) bg-(--news-card-bg) shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Link href={`/news/${item.slug}`} className="relative block overflow-hidden">
                      <img
                        src={imageUrl(item.image) || "/placeholder.svg"}
                        alt={item.title}
                        className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span
                        className={`absolute left-3 top-3 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
                          CATEGORY_BADGE[item.category] ?? "bg-brand-dark"
                        }`}
                      >
                        {item.category}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="mb-1.5 flex items-center gap-1.5 text-xs text-(--news-text-meta)">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </p>
                      <h3 className="mb-2 font-serif text-base font-bold leading-snug text-balance text-(--news-heading)">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-(--news-text-secondary)">{item.excerpt}</p>
                      <Link
                        href={`/news/${item.slug}`}
                        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-(--news-border) bg-(--news-card-bg) py-16 text-center text-sm text-(--news-text-secondary)">
                No results found. Try adjusting your search or filters.
              </p>
            )}

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--news-border) text-(--news-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
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
                        ? "bg-(--news-btn-active-bg) text-white"
                        : "border border-(--news-border) text-(--news-text-meta) hover:border-brand-accent hover:text-brand-accent"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--news-border) text-(--news-text-meta) transition-colors hover:border-brand-accent hover:text-brand-accent disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-(--news-border) bg-(--news-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--news-heading)">Search News</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--news-text-meta)" />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setPage(1)
                  }}
                  placeholder="Search news, events, notices..."
                  className="w-full rounded-lg border border-(--news-border) bg-(--news-btn-bg) py-2.5 pl-10 pr-4 text-sm text-(--news-heading) outline-none transition-colors placeholder:text-(--news-text-meta) focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-(--news-border) bg-(--news-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--news-heading)">Categories</h3>
              <ul className="space-y-1">
                {TABS.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <li key={tab.key}>
                      <button
                        onClick={() => selectTab(tab.key)}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm transition-colors ${
                          activeTab === tab.key
                            ? "bg-(--news-btn-active-bg) text-white"
                            : "text-(--news-text-secondary) hover:bg-(--news-btn-bg) hover:text-(--news-heading)"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${
                              activeTab === tab.key ? "bg-white/15" : CATEGORY_ICON_BG[tab.key]
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          {tab.label}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            activeTab === tab.key ? "bg-white/20 text-white" : "bg-(--news-btn-bg) text-(--news-text-meta)"
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

            <div className="rounded-2xl border border-(--news-border) bg-(--news-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--news-heading)">Recent News</h3>
              <ul className="space-y-4">
                {recent.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/news/${item.slug}`} className="group flex gap-3">
                      <img
                        src={imageUrl(item.image) || "/placeholder.svg"}
                        alt={item.title}
                        className="h-14 w-14 shrink-0 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold leading-snug text-(--news-heading) group-hover:text-brand-accent">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-(--news-text-meta)">{item.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#latest-news"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
              >
                View All News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
