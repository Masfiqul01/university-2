"use client"

import { useMemo, useState, type ReactNode } from "react"
import { Search } from "lucide-react"

export function FilterableList<T>({
  items,
  categories,
  getCategory,
  getSearchText,
  renderItem,
  containerClass = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  searchPlaceholder = "Search...",
}: {
  items: T[]
  categories: string[]
  getCategory: (item: T) => string
  getSearchText: (item: T) => string
  renderItem: (item: T) => ReactNode
  containerClass?: string
  searchPlaceholder?: string
}) {
  const [query, setQuery] = useState("")
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesCat = active === "All" || getCategory(item) === active
      const matchesQuery = getSearchText(item).toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [items, active, query, getCategory, getSearchText])

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-brand text-white"
                  : "border border-border bg-card text-muted-foreground hover:border-brand hover:text-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-brand"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className={containerClass}>{filtered.map((item, i) => <div key={i}>{renderItem(item)}</div>)}</div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
          No results found. Try adjusting your search or filters.
        </p>
      )}
    </div>
  )
}
