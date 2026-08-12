import Link from "next/link"
import { imageUrl } from "@/lib/site-assets"
import { ArrowRight, Calendar } from "lucide-react"
import { NEWS } from "@/lib/data"

export function NewsEvents() {
  const items = NEWS.slice(0, 4)
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            News &amp; Events
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Latest News &amp; Events
          </h2>
        </div>
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          View All News
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link key={item.slug} href={`/news/${item.slug}`} className="group flex flex-col">
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded bg-brand-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {item.category}
              </span>
            </div>
            <p className="mb-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {item.date}
            </p>
            <h3 className="mb-2 font-serif text-base font-bold leading-snug text-foreground text-balance">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
