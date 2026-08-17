import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection({
  title = "Join KACST, Shape Your Future",
  description = "Take the next step towards a rewarding academic journey at Khanjahan Ali College of Science & Technology",
  primary = { label: "Apply Now", href: "/admissions/apply" },
  secondary,
}: {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-brand-dark px-8 py-14 text-center md:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-white text-balance md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
              >
                {secondary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}