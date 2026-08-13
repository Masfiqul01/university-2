import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { CheckCircle2 } from "lucide-react"
import { imageUrl } from "@/lib/site-assets"

export function Section({
  children,
  className = "",
  muted = false,
}: {
  children: ReactNode
  className?: string
  muted?: boolean
}) {
  return (
    <section className={muted ? "bg-secondary" : ""}>
      <div className={`mx-auto max-w-7xl px-4 py-16 lg:px-8 ${className}`}>{children}</div>
    </section>
  )
}

export function FeatureGrid({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: { icon: LucideIcon; title: string; description: string }[]
  columns?: string
}) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map(({ icon: Icon, title, description }) => (
        <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Icon className="h-6 w-6" />
          </span>
          <h3 className="mb-2 font-serif text-lg font-bold text-foreground text-balance">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  )
}

export function ImageSplit({
  image,
  alt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: string
  alt: string
  eyebrow?: string
  title: string
  children: ReactNode
  reverse?: boolean
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>
        <img
          src={imageUrl(image)}
          alt={alt}
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">{eyebrow}</p>
        )}
        <h2 className="mb-4 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">{title}</h2>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function StepList({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-border pl-8">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {i + 1}
          </span>
          <h3 className="mb-1 font-serif text-lg font-bold text-foreground">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function InfoTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-brand text-white">
            {headers.map((h) => (
              <th key={h} className="px-5 py-3.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row, i) => (
            <tr key={i} className="bg-card even:bg-secondary/40">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 text-foreground/85">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Gallery({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div key={img.label} className="group relative overflow-hidden rounded-2xl">
          <img
            src={imageUrl(img.src)}
            alt={img.label}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">{img.label}</span>
        </div>
      ))}
    </div>
  )
}
