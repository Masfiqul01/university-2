"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const LEADERS = [
  {
    role: "Principal",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp",
    href: "/administration/vice-chancellor",
    featured: true,
  },
  {
    role: "Vice-Chancellor",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707390/fac_1785751849.jpg",
    href: "/administration/vice-chancellor",
  },
  {
    role: "Pro Vice-Chancellor",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707395/faculty_1786563553_747.jpg",
    href: "/administration/pro-vice-chancellor",
  },
  {
    role: "Treasurer",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707399/faculty_1786173440_602.jpg",
    href: "/administration/treasurer",
  },
]

function LeadershipPhoto({
  src,
  alt,
  featured = false,
}: {
  src: string
  alt: string
  featured?: boolean
}) {
  return (
    <div
      className={`overflow-hidden bg-brand-dark/10 ${
        featured ? "aspect-[4/3] md:h-full md:min-h-[420px] md:aspect-auto" : "aspect-[4/3]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

export function AdministrationLeadership() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-leadership-card]",
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  const principal = LEADERS[0]
  const leadershipTeam = LEADERS.slice(1)

  return (
    <section ref={sectionRef} className="overflow-hidden bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">University Leadership</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">Guidance with purpose</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Meet the leadership team guiding the university&apos;s academic vision and administration.
          </p>
        </div>

        <Link
          data-leadership-card
          href={principal.href}
          className="group mx-auto mt-10 grid max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl md:grid-cols-[minmax(230px,0.75fr)_1fr]"
        >
          <LeadershipPhoto src={principal.image} alt="Principal" featured />
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
            <span className="w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">{principal.role}</span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">University Principal</h3>
            <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
              Leading the institution with academic commitment, responsible governance and a focus on student success.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              View office details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipTeam.map((leader) => (
            <Link
              key={leader.role}
              data-leadership-card
              href={leader.href}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
            >
              <LeadershipPhoto src={leader.image} alt={leader.role} />
              <div className="p-5 sm:p-6">
                <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">{leader.role}</span>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">View office details, responsibilities and contact information.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore office <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
