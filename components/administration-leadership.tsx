"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowUpRight, Crown,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"


const LEADERS = [
  {
    role: "Principal",
    image:
      "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp",
    href: "/administration/vice-chancellor",
    featured: true,
  },
  {
    role: "Vice-Chancellor",
    image:
      "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707390/fac_1785751849.jpg",
    href: "/administration/vice-chancellor",
  },
  {
    role: "Pro Vice-Chancellor",
    image:
      "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707395/faculty_1786563553_747.jpg",
    href: "/administration/pro-vice-chancellor",
  },
  {
    role: "Treasurer",
    image:
      "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707399/faculty_1786173440_602.jpg",
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
      className={`relative overflow-hidden rounded-[24px] bg-slate-100 ring-1 ring-slate-200 ${featured
          ? "aspect-[4/3] md:aspect-auto md:h-full"
          : "aspect-[4/3]"
        }`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />

      {/* Very subtle image treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent" />
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
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
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
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand/15 bg-brand/[0.045] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
            University Leadership
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Guidance with purpose
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Meet the leadership team guiding the university&apos;s academic
            vision, institutional growth and administration.
          </p>
        </div>

        {/* Principal — Featured Leadership Profile */}
        <Link
          data-leadership-card
          href={principal.href}
          className="group relative mx-auto mt-12 block max-w-6xl lg:mt-14"
        >
          {/* Soft outer glow */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[42px] bg-brand/[0.025] blur-2xl transition-all duration-700 group-hover:bg-brand/[0.05]" />

          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] transition-all duration-700 group-hover:-translate-y-1 group-hover:border-brand/20 group-hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)]">

            {/* Decorative oversized number */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-12 select-none font-serif text-[180px] font-bold leading-none text-slate-100 transition-all duration-700 group-hover:text-brand/[0.055] sm:text-[220px]"
            >
              01
            </div>

            <div className="relative grid lg:grid-cols-[1.02fr_0.98fr]">

              {/* =====================================================
          IMAGE SIDE
      ====================================================== */}
              <div className="relative p-2.5 sm:p-3">
                <div className="relative h-[360px] overflow-hidden rounded-[28px] bg-slate-100 sm:h-[470px] lg:h-[570px]">

                  <img
                    src={principal.image}
                    alt="University Principal"
                    className="h-full w-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Image gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

                  {/* Top floating role */}
                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/92 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
                        <Crown className="h-3.5 w-3.5" />
                      </span>

                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950">
                        {principal.role}
                      </span>
                    </div>
                  </div>

                  {/* Bottom profile identity */}
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-slate-950/80 p-3.5 shadow-xl backdrop-blur-md">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
                        <GraduationCap className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/60">
                          Institutional Leadership
                        </p>

                        <p className="mt-1 truncate font-semibold text-white">
                          Office of the Principal
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image corner decoration */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-5 top-5 h-16 w-16 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
              </div>

              {/* =====================================================
          CONTENT SIDE
      ====================================================== */}
              <div className="relative flex flex-col justify-center px-6 py-9 sm:px-9 sm:py-11 lg:px-12 xl:px-14">

                {/* Small identity row */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                    <GraduationCap className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand">
                      University Leadership
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-400">
                      {principal.role}
                    </p>
                  </div>
                </div>

                {/* Main heading */}
                <h3 className="mt-7 max-w-xl font-serif text-3xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-4xl lg:text-[48px]">
                  University
                  <span className="block text-brand">
                    Principal
                  </span>
                </h3>

                {/* Accent divider */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-1 w-12 rounded-full bg-brand" />
                  <span className="h-1 w-2 rounded-full bg-brand/25" />
                  <span className="h-1 w-2 rounded-full bg-brand/10" />
                </div>

                {/* Description */}
                <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
                  Leading the institution with academic commitment, responsible
                  governance and a strong focus on student success.
                </p>

                {/* Information grid */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 group-hover:border-brand/10 group-hover:bg-brand/[0.025]">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Role
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-slate-950">
                      {principal.role}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 group-hover:border-brand/10 group-hover:bg-brand/[0.025]">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Office
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-slate-950">
                      Principal&apos;s Office
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 group-hover:bg-brand group-hover:shadow-brand/20">
                    View office details

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-500 group-hover:bg-white/15">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </div>

                {/* Bottom micro-detail */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Strategic academic leadership
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Other Leadership */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Leadership Team
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold text-slate-950 sm:text-3xl">
                University Administration
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((leader) => (
              <Link
                key={leader.role}
                data-leadership-card
                href={leader.href}
                className="group relative flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-2 shadow-[0_8px_35px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)]"
              >
                {/* Image */}
                <div className="relative">
                  <LeadershipPhoto
                    src={leader.image}
                    alt={leader.role}
                  />

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex rounded-full border border-white/50 bg-white/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand shadow-sm backdrop-blur">
                      {leader.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-4 pb-5 pt-5 sm:px-5 sm:pb-6">
                  <h4 className="font-serif text-xl font-bold leading-tight text-slate-950 sm:text-[22px]">
                    {leader.role}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    View office details, responsibilities and contact
                    information.
                  </p>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-300 group-hover:text-brand">
                      Explore office
                      <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}