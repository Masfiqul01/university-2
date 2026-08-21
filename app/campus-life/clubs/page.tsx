"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  Camera,
  ChevronRight,
  Filter,
  Globe2,
  HeartHandshake,
  Laptop2,
  Microscope,
  Music2,
  Palette,
  Search,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"

import { SiteHeader } from "../../../components/site-header"
import { SiteFooter } from "../../../components/site-footer"
import { ICON_MAP } from "@/lib/icon-map"
import { PageHeroBanner } from "@/components/page-hero-banner"
import { imageUrl } from "@/lib/site-assets"
import { CountUp } from "@/components/count-up"
import { ICON_MOTION, darkTileIcon, lightTileIcon } from "@/lib/icon-colors"
import { CtaButton } from "@/components/cta-button"
import {
  CLUBS_HERO,
  CLUB_STATS,
  CLUB_CATEGORIES,
  CLUB_LIST_INTRO,
  CLUBS,
  WHY_JOIN_INTRO,
  WHY_JOIN,
  CLUBS_CTA,
  type ClubCategory,
} from "@/lib/data/clubs"

function CategoryPill({
  category,
}: {
  category: ClubCategory
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#F6B900]/20 bg-[#F6B900]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#D79B00]">
      {category}
    </span>
  )
}

function ClubCard({
  club,
  index,
}: {
  club: (typeof CLUBS)[number]
  index: number
}) {
  const Icon = ICON_MAP[club.icon]
  const color = lightTileIcon(index)

  return (
    <article
      data-club-card
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[#DCE7F1]
        bg-white
        p-5
        shadow-[0_12px_40px_rgba(13,3,87,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#F6B900]/50
        hover:shadow-[0_20px_55px_rgba(13,3,87,0.12)]
        sm:p-6
      "
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: club.accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color.bg} ${color.text} ${color.hoverBg} transition-all duration-300 group-hover:scale-110 group-hover:text-white`}
        >
          <Icon
            className="h-5 w-5"
            strokeWidth={1.8}
          />
        </div>

        {club.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#F6B900]/25 bg-[#FFF5DB] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D79B00]">
            <Sparkles className="h-3 w-3" />
            {CLUB_LIST_INTRO.cardLabels.featured}
          </span>
        )}
      </div>

      <div className="mt-5">
        <CategoryPill category={club.category} />

        <h3 className="mt-3 text-base font-bold leading-6 text-[#0D0357] sm:text-lg">
          {club.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#64748B]">
          {club.description}
        </p>
      </div>

      <div className="mt-auto pt-6">
        <div className="grid grid-cols-2 gap-3 border-t border-[#DCE7F1] pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
              {CLUB_LIST_INTRO.cardLabels.members}
            </p>

            <p className="mt-1 text-xs font-semibold text-[#334155]">
              {club.members}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
              {CLUB_LIST_INTRO.cardLabels.meeting}
            </p>

            <p className="mt-1 text-xs font-semibold text-[#334155]">
              {club.meeting}
            </p>
          </div>
        </div>

        <Link
          href={`/clubs-organizations/${club.id}`}
          className="
            mt-5
            inline-flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#0D0357]
            transition-all
            duration-200
            hover:translate-x-1
            hover:text-[#D79B00]
          "
        >
          {CLUB_LIST_INTRO.cardLabels.link}

          <ArrowUpRight
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>
    </article>
  )
}

export default function ClubsOrganizationsPage() {
  const pageRef = useRef<HTMLElement>(null)

  const [activeCategory, setActiveCategory] =
    useState<(typeof CLUB_CATEGORIES)[number]>("All")

  const [query, setQuery] = useState("")

  const filteredClubs = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return CLUBS.filter((club) => {
      const categoryMatch =
        activeCategory === "All" ||
        club.category === activeCategory

      const searchMatch =
        !normalized ||
        club.name.toLowerCase().includes(normalized) ||
        club.shortName.toLowerCase().includes(normalized) ||
        club.description.toLowerCase().includes(normalized)

      return categoryMatch && searchMatch
    })
  }, [activeCategory, query])

  /*
   * IMPORTANT
   * ------------------------------
   * Do NOT create Lenis here.
   *
   * Your project already has Site/Header/PageMotion-level
   * smooth scrolling. Creating another Lenis instance on
   * this page causes scroll conflicts.
   *
   * We only use GSAP for harmless entrance motion.
   */

  useEffect(() => {
    const root = pageRef.current

    if (!root) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray<HTMLElement>(
        "[data-hero-content]",
      )

      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          {
            y: 22,
          },
          {
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform",
          },
        )
      }

      const floatingElements = gsap.utils.toArray<HTMLElement>(
        "[data-float]",
      )

      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: index % 2 === 0 ? -10 : 10,
          duration: 3.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    }, root)

    return () => {
      ctx.revert()
    }
  }, [])

  /*
   * Cards animate only with transform.
   * No opacity / visibility / autoAlpha.
   * Therefore they can NEVER disappear because of GSAP.
   */
  useEffect(() => {
    const root = pageRef.current

    if (!root) return

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(
        "[data-club-card]",
      ),
    )

    if (!cards.length) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (reduceMotion) return

    gsap.killTweensOf(cards)

    gsap.fromTo(
      cards,
      {
        y: 12,
      },
      {
        y: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
        clearProps: "transform",
      },
    )
  }, [filteredClubs])

  return (
    <>
      <SiteHeader />

      <main
        ref={pageRef}
        className="
          min-h-screen
          overflow-x-clip
          bg-[#F7F8FA]
        "
      >
        {/* =====================================================
            HERO
        ====================================================== */}

        <PageHeroBanner
          eyebrow={CLUBS_HERO.badge}
          titleLines={[CLUBS_HERO.title]}
          titleHighlight={CLUBS_HERO.titleHighlight}
          description={CLUBS_HERO.description}
          image={imageUrl("/images/campus-activities.png")}
          imageAlt="KACST students taking part in campus activities"
          primary={CLUBS_HERO.primary}
          secondary={CLUBS_HERO.secondary}
        />


        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-[#DCE7F1]
              bg-white
              shadow-[0_20px_60px_rgba(13,3,87,0.08)]
              sm:grid-cols-4
            "
          >
            {CLUB_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  px-4
                  py-5
                  text-center
                  sm:px-6
                  sm:py-6
                  ${
                    index < CLUB_STATS.length - 1
                      ? "border-b border-[#DCE7F1] sm:border-b-0 sm:border-r"
                      : ""
                  }
                  ${index === 2 ? "border-b sm:border-b-0" : ""}
                `}
              >
                <p className="text-2xl font-black tracking-tight text-[#0D0357] sm:text-3xl">
                  <CountUp value={stat.value} />
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CLUB LIST
        ====================================================== */}

        <section
          id="clubs"
          data-motion-ignore
          className="
            mx-auto
            max-w-7xl
            px-4
            py-16
            sm:px-6
            sm:py-20
            lg:px-8
            lg:py-24
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D79B00]">
                <span className="h-px w-7 bg-[#F6B900]" />
                {CLUB_LIST_INTRO.eyebrow}
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0D0357] sm:text-4xl">
                {CLUB_LIST_INTRO.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#64748B] sm:text-base">
                {CLUB_LIST_INTRO.description}
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={CLUB_LIST_INTRO.searchPlaceholder}
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#D9E2EB]
                  bg-white
                  pl-11
                  pr-11
                  text-sm
                  text-[#334155]
                  outline-none
                  transition-all
                  placeholder:text-[#94A3B8]
                  focus:border-[#F6B900]
                  focus:ring-4
                  focus:ring-[#F6B900]/10
                "
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-7
                    w-7
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    text-[#94A3B8]
                    transition-colors
                    hover:bg-[#F7F8FA]
                    hover:text-[#0D0357]
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="mt-7 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="mr-1 inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#64748B]">
              <Filter className="h-3.5 w-3.5" />
              {CLUB_LIST_INTRO.filterLabel}
            </div>

            {CLUB_CATEGORIES.map((category) => {
              const active = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    inline-flex
                    shrink-0
                    items-center
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      active
                        ? "border-[#0D0357] bg-[#0D0357] text-white shadow-md shadow-[#0D0357]/10"
                        : "border-[#D9E2EB] bg-white text-[#64748B] hover:border-[#F6B900]/50 hover:text-[#0D0357]"
                    }
                  `}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Result */}
          <div className="mt-7 flex items-center justify-between gap-4">
            <p className="text-xs text-[#94A3B8]">
              Showing{" "}
              <span className="font-bold text-[#334155]">
                {filteredClubs.length}
              </span>{" "}
              {filteredClubs.length === 1 ? "club" : "clubs"}
            </p>

            <div className="hidden items-center gap-1.5 text-xs text-[#94A3B8] sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#F6B900]" />
              {CLUB_LIST_INTRO.tagline}
            </div>
          </div>

          {/* Cards */}
          {filteredClubs.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredClubs.map((club, index) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-[#DCE7F1] bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0D0357]/5 text-[#0D0357]">
                <Search className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#0D0357]">
                {CLUB_LIST_INTRO.emptyState.title}
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                {CLUB_LIST_INTRO.emptyState.description}
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setActiveCategory("All")
                }}
                className="
                  mt-5
                  rounded-xl
                  bg-[#F6B900]
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-[#0D0357]
                  transition-colors
                  hover:bg-[#FFC928]
                "
              >
                {CLUB_LIST_INTRO.emptyState.resetLabel}
              </button>
            </div>
          )}
        </section>

        {/* =====================================================
            WHY JOIN
        ====================================================== */}

        <section className="bg-[#0D0357]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FCD34D]">
                  <span className="h-px w-7 bg-[#F6B900]" />
                  {WHY_JOIN_INTRO.eyebrow}
                </div>

                <h2 className="mt-4 max-w-lg text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {WHY_JOIN_INTRO.title}
                  <span className="text-[#F6B900]">
                    {" "}
                    {WHY_JOIN_INTRO.titleHighlight}
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  {WHY_JOIN_INTRO.description}
                </p>

                <CtaButton href={WHY_JOIN_INTRO.link.href} variant="gold" size="sm" radius={12}>
                  {WHY_JOIN_INTRO.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </CtaButton>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {WHY_JOIN.map((item, index) => {
                  const Icon = ICON_MAP[item.icon]

                  return (
                    <div
                      key={item.title}
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.045]
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#F6B900]/25
                        hover:bg-white/[0.07]
                      "
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ${darkTileIcon(index)} ${ICON_MOTION}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-sm font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#DCE7F1]
                bg-white
                px-6
                py-10
                shadow-[0_20px_60px_rgba(13,3,87,0.08)]
                sm:px-10
                sm:py-12
              "
            >
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#F6B900]/10
                  blur-3xl
                "
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D79B00]">
                    <span className="h-px w-7 bg-[#F6B900]" />
                    {CLUBS_CTA.eyebrow}
                  </div>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0D0357] sm:text-3xl">
                    {CLUBS_CTA.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {CLUBS_CTA.description}
                  </p>
                </div>

                <CtaButton href={CLUBS_CTA.link.href} variant="gold" size="sm" radius={12}>
                  {CLUBS_CTA.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}