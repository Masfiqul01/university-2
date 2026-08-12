"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen((v) => (v === i ? null : i))}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-foreground">{item.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
