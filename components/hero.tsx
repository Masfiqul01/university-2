"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { imageUrl } from "@/lib/site-assets"
import { ArrowRight, Compass, GraduationCap, UserRound, FlaskConical } from "lucide-react"

const SIDE_LINKS = [
  { label: "Virtual Tour", icon: Compass, href: "/campus-life" },
  { label: "Apply Now", icon: GraduationCap, href: "/admissions/apply" },
  { label: "Student Portal", icon: UserRound, href: "/student-portal" },
  { label: "Research", icon: FlaskConical, href: "/research" },
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      })

      timeline
        .from("[data-hero-image]", { duration: 1.4, scale: 1.08, opacity: 0.75 })
        .from("[data-hero-eyebrow]", { duration: 0.5, y: 16, autoAlpha: 0 }, "-=0.9")
        .from("[data-hero-title]", { duration: 0.75, y: 28, autoAlpha: 0 }, "-=0.25")
        .from("[data-hero-description]", { duration: 0.55, y: 18, autoAlpha: 0 }, "-=0.4")
        .from("[data-hero-actions]", { duration: 0.5, y: 16, autoAlpha: 0 }, "-=0.3")
        .from("[data-hero-progress]", { duration: 0.4, x: -16, autoAlpha: 0 }, "-=0.25")
        .from("[data-hero-links]", { duration: 0.6, x: 28, autoAlpha: 0 }, "-=0.5")

      gsap.to("[data-hero-image]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })

      gsap.to("[data-hero-content]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative isolate overflow-hidden">
      <img
        src={imageUrl("/images/hero-campus.png")}
        alt="Aerial view of the KACST campus"
        data-hero-image
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

      <div data-hero-content className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col justify-center px-4 pb-28 pt-36 lg:px-8">
        <div className="max-w-2xl">
          <div data-hero-eyebrow className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/60" />
            Khulna, Bangladesh
          </div>
          <h1 data-hero-title className="font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-6xl">
            Excellence in Science &amp; Technology
          </h1>
          <p data-hero-description className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            KACST is committed to developing competent professionals and ethical leaders through
            quality education, research and innovation in an inspiring environment.
          </p>

          <div data-hero-actions className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Explore Our Campus
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
            >
              Learn More About KACST
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div data-hero-progress className="mt-10 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-white" />
            <span className="h-1 w-4 rounded-full bg-white/40" />
            <span className="h-1 w-4 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      <div data-hero-links className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-xl bg-brand-dark/80 backdrop-blur lg:flex">
        {SIDE_LINKS.map(({ label, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex w-24 flex-col items-center gap-1.5 border-b border-white/10 px-3 py-4 text-center text-[10px] font-medium text-white/90 transition-colors last:border-none hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </div>
    </section>
  )
}
