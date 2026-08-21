"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { CtaButton } from "@/components/cta-button"

gsap.registerPlugin(ScrollTrigger)

/*
  ============================================================
  PAGE HERO BANNER
  ============================================================

  The About page hero is the reference for every interior page hero, so
  this component reproduces its structure, type scale, overlay and motion
  in one place instead of each route re-deriving them.

  Why it owns its animation:
  `PageMotion` already animates a hero exactly like this, but only when the
  page wraps its content in <main> — and most interior pages do not. Adding
  <main> to them would sweep every section below the hero into the global
  reveal system, which is well outside a hero-only change. So the timeline
  below mirrors PageMotion's hero recipe (same clip-path wipe, scale, fade,
  stagger, easing and parallax) and stays scoped to this section.

  `data-hero-image` / `data-hero-content` are PageMotion's self-animated
  markers. On the few pages that do have <main>, they stop the global engine
  from animating these nodes a second time.
*/

const WIPE_CLOSED = "inset(0% 100% 0% 0%)"
const WIPE_OPEN = "inset(0% 0% 0% 0%)"
const RISE_CLOSED = "inset(0% 0% 100% 0%)"
const RISE_OPEN = "inset(0% 0% 0% 0%)"

type Action = { label: string; href: string }
type Crumb = { label: string; href?: string }

export function PageHeroBanner({
  eyebrow,
  titleLines,
  titleHighlight,
  description,
  image,
  imageAlt = "",
  primary,
  secondary,
  stats,
  crumbs,
}: {
  eyebrow: string
  /** One entry per rendered line, matching how the page data stores it. */
  titleLines: string[]
  /** Optional trailing fragment picked out in the accent colour. */
  titleHighlight?: string
  description: string
  image: string
  imageAlt?: string
  primary?: Action
  secondary?: Action
  /** Optional figures rendered as a strip under the actions. */
  stats?: { value: string; label: string }[]
  /** Only for pages that already carried a breadcrumb inside the hero. */
  crumbs?: Crumb[]
}) {
  const section = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionEl = section.current
    const imageEl = imageRef.current
    const copyEl = copyRef.current
    if (!sectionEl || !imageEl || !copyEl) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const context = gsap.context(() => {
      const overlays = sectionEl.querySelectorAll("[data-hero-overlay]")
      const lines = Array.from(copyEl.children)

      const intro = gsap.timeline({ defaults: { ease: "expo.out" } })

      intro.fromTo(
        imageEl,
        { clipPath: WIPE_CLOSED, scale: 1.12 },
        { clipPath: WIPE_OPEN, scale: 1, duration: 1.5 },
      )

      if (overlays.length) {
        intro.fromTo(
          overlays,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.9 },
          "-=1.1",
        )
      }

      if (lines.length) {
        intro.fromTo(
          lines,
          { clipPath: RISE_CLOSED, y: 34, autoAlpha: 0 },
          {
            clipPath: RISE_OPEN,
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.09,
            clearProps: "clipPath",
          },
          "-=0.95",
        )
      }

      gsap.to(imageEl, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
    }, sectionEl)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={section}
      className="relative min-h-[65vh] overflow-hidden bg-brand-dark"
    >
      <img
        ref={imageRef}
        data-hero-image
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        data-hero-overlay
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30"
      />

      <div
        data-hero-content
        className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-20 sm:py-24 lg:px-8"
      >
        <div ref={copyRef} className="max-w-4xl text-white">
          {crumbs && crumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/60"
            >
              {crumbs.map((crumb, index) => (
                <span key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight className="h-3.5 w-3.5 text-white/35" />
                  )}

                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9cc9ff] sm:text-sm">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {titleLines.map((line, index) => (
              <span key={line} className="block">
                {line}
                {titleHighlight && index === titleLines.length - 1 ? (
                  <>
                    {" "}
                    <span className="text-[#f6b900]">{titleHighlight}</span>
                  </>
                ) : null}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg md:text-xl">
            {description}
          </p>

          {(primary || secondary) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <CtaButton href={primary.href} variant="light">
                  {primary.label}
                  <ArrowRight size={18} />
                </CtaButton>
              )}

              {secondary && (
                <CtaButton href={secondary.href} variant="ghost">
                  {secondary.label}
                </CtaButton>
              )}
            </div>
          )}

          {stats && stats.length > 0 && (
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-7 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  )
}
