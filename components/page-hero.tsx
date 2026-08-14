import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { imageUrl } from "@/lib/site-assets"

export type Crumb = { label: string; href?: string }

export function PageHero({
  title,
  subtitle,
  eyebrow,
  crumbs,
  image = "/images/campus-green.png",
}: {
  title: string
  subtitle?: string
  eyebrow?: string
  crumbs: Crumb[]
  image?: string
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={imageUrl(image)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-white/70">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/50" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{subtitle}</p>}
      </div>
    </section>
  )
}
