"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react"

import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { AdministrationLeadership } from "@/components/administration-leadership"
import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
import { OFFICES } from "@/lib/data/administration"

export default function AdministrationPage() {
  const pageRef = useRef<main>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      /* -----------------------------------------------
         Generic section reveal
      ----------------------------------------------- */
      gsap.utils
        .toArray<HTMLElement>("[data-admin-reveal]")
        .forEach((section) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 38,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            },
          )
        })

      /* -----------------------------------------------
         Office cards stagger
      ----------------------------------------------- */
      gsap.fromTo(
        "[data-office-card]",
        {
          opacity: 0,
          y: 34,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-office-grid]",
            start: "top 84%",
            once: true,
          },
        },
      )

      /* -----------------------------------------------
         Office icons subtle entrance
      ----------------------------------------------- */
      gsap.fromTo(
        "[data-office-icon]",
        {
          opacity: 0,
          scale: 0.75,
          rotate: -8,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "[data-office-grid]",
            start: "top 84%",
            once: true,
          },
        },
      )

      /* -----------------------------------------------
         Services content
      ----------------------------------------------- */
      gsap.fromTo(
        "[data-service-card]",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-service-grid]",
            start: "top 85%",
            once: true,
          },
        },
      )

      /* -----------------------------------------------
         Floating decorative circles
      ----------------------------------------------- */
      gsap.to("[data-float-decoration]", {
        y: -14,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <PageShell>
      <main
        ref={pageRef}
        className="overflow-hidden bg-white text-slate-950"
      >
        {/* =====================================================
            HERO
        ====================================================== */}
        <PageHero
          eyebrow="University Administration"
          title="Administration & Leadership"
          subtitle="Explore the university leadership, administrative offices and key services that support academic excellence and responsible governance."
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Administration" },
          ]}
          
          image="/images/hero-campus.png"
        />
<<<<<<< HEAD
=======
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map(({ title, href, icon }, index) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Users
            const color = lightTileIcon(index)
            return (
              <Link key={href} href={href} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">View the office overview, responsibilities and editable contact information.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            )
          })}
        </div>
      </Section>
>>>>>>> 096292349b17742e65105f191b3023acb8d77d36

        {/* =====================================================
            LEADERSHIP
        ====================================================== */}
        <AdministrationLeadership />

        {/* =====================================================
            ADMINISTRATION OFFICES
        ====================================================== */}
        <Section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          {/* Soft background decoration */}
          <div
            aria-hidden="true"
            data-float-decoration
            className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-brand/[0.035] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-slate-100/80 blur-3xl"
          />

          <div
            data-admin-reveal
            className="relative mx-auto max-w-7xl"
          >
            <SectionHeading
              eyebrow="Leadership"
              title="University administration at a glance"
              description="The Administration menu in the main navigation opens directly to this full page. Individual offices can be edited with official names, profiles and contact details."
            />

            <div
              data-office-grid
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {OFFICES.map(({ title, href, icon }, index) => {
                const Icon = ICON_MAP[icon] ?? ICON_MAP.Users

                return (
                  <Link
                    key={href}
                    data-office-card
                    href={href}
                    className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-2 shadow-[0_10px_40px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-brand/25 hover:shadow-[0_24px_65px_rgba(15,23,42,0.10)]"
                  >
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[21px] px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand/[0.04] blur-2xl transition-transform duration-700 group-hover:scale-150" />

                      {/* Decorative line */}
                      <div className="absolute left-0 top-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" />

                      {/* Number */}
                      <div className="absolute right-5 top-5">
                        <span className="text-[10px] font-bold tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:text-brand/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        data-office-icon
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/15 bg-brand/[0.06] text-brand shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-lg"
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Text */}
                      <div className="relative mt-6">
                        <h3 className="font-serif text-xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[22px]">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                          View the office overview, responsibilities and
                          editable contact information.
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto pt-7">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-300 group-hover:text-brand">
                          View details
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-6 right-6 h-px bg-slate-100 transition-colors duration-300 group-hover:bg-brand/25" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Section>

        {/* =====================================================
            SERVICES / QUICK ACCESS
        ====================================================== */}
        <Section className="relative overflow-hidden bg-white pb-20 pt-0 sm:pb-24 lg:pb-28">
          <div
            data-service-grid
            data-admin-reveal
            className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            {/* Administrative Offices */}
            <div
              data-service-card
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.055)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.04] via-transparent to-transparent" />

              <div className="relative p-7 sm:p-9 lg:p-11">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/10 bg-brand/[0.06] text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <Sparkles className="h-4 w-4" />
                  </span>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                    Administrative Offices
                  </p>
                </div>

                <h2 className="mt-6 max-w-xl font-serif text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
                  Coordinated university services
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Add official offices such as Finance, Planning, ICT, Student
                  Affairs, Library, Transport and other administrative units
                  here.
                </p>

                <Link
                  href="/administration/offices"
                  className="group/btn mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand hover:shadow-lg"
                >
                  Explore offices

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover/btn:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              {/* Decorative circles */}
              <div
                data-float-decoration
                className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full border border-brand/10 transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full border border-brand/10" />
            </div>

            {/* Quick Access */}
            <div
              data-service-card
              className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_45px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/15 hover:shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:p-9 lg:p-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                Quick Access
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                University portals
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                Quickly reach the most frequently used university services.
              </p>

              <div className="mt-7 grid gap-3">
                <Link
                  href="/student-portal"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-brand/[0.025] hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold text-slate-950">
                      Student Portal
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Access student services
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/teacher-portal"
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-brand/[0.025] hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold text-slate-950">
                      Teacher Portal
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Access academic services
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <ExternalLink className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </PageShell>
  )
}