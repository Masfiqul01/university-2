"use client"

// Client-only piece of /research/publications: filter chips + list.
// Kept separate from page.tsx so that file can stay a Server Component and export metadata.

import { useMemo, useState } from "react"
import { RESEARCH_AREAS } from "@/lib/data"
import { PUBLICATIONS } from "@/lib/data/research"

const ALL_AREAS = "All Areas"

export function PublicationsExplorer() {
  const [selectedArea, setSelectedArea] = useState<string>(ALL_AREAS)

  const filters = [ALL_AREAS, ...RESEARCH_AREAS.map((a) => a.title)]

  const filtered = useMemo(() => {
    if (selectedArea === ALL_AREAS) return PUBLICATIONS
    return PUBLICATIONS.filter((p) => p.area === selectedArea)
  }, [selectedArea])

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((area) => {
          const isActive = area === selectedArea
          return (
            <button
              key={area}
              type="button"
              onClick={() => setSelectedArea(area)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-brand"
              }`}
            >
              {area}
            </button>
          )
        })}
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
        <span className="font-semibold text-foreground">{PUBLICATIONS.length}</span> publications
      </p>

      {filtered.length > 0 ? (
        <div className="space-y-4">
          {filtered.map((pub) => (
            <article
              key={`${pub.title}-${pub.year}`}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <span className="mb-2 inline-block rounded bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand">
                  {pub.area}
                </span>
                <h3 className="font-serif text-base font-bold leading-snug text-foreground text-balance">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="text-sm font-semibold text-foreground">{pub.venue}</p>
                <p className="text-xs text-muted-foreground">{pub.year}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
          <p className="font-serif text-lg font-bold text-foreground">No publications found</p>
          <p className="mt-1 text-sm text-muted-foreground">Try a different research area.</p>
        </div>
      )}
    </div>
  )
}
