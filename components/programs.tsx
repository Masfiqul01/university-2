import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FACULTIES } from "@/lib/data"
import { ICON_MAP } from "@/lib/icon-map"

export function Programs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Academics
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Our Faculties</h2>
        </div>
        <Link
          href="/academics/programs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          View All Programs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {FACULTIES.map((faculty) => {
          const Icon = ICON_MAP[faculty.icon] ?? ICON_MAP.Cpu
          return (
            <article
              key={faculty.slug}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground text-balance">
                {faculty.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{faculty.description}</p>
              <Link
                href="/academics/faculties"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
