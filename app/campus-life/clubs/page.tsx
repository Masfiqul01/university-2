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

type ClubCategory =
  | "Academic"
  | "Cultural"
  | "Technology"
  | "Leadership"
  | "Sports"
  | "Social"

type Club = {
  id: number
  name: string
  shortName: string
  category: ClubCategory
  description: string
  members: string
  meeting: string
  icon: React.ElementType
  accent: string
  featured?: boolean
}

const CLUBS: Club[] = [
  {
    id: 1,
    name: "Science & Innovation Club",
    shortName: "Science & Innovation",
    category: "Academic",
    description:
      "A student-led platform for scientific thinking, innovation, project building, competitions and practical learning.",
    members: "120+ Members",
    meeting: "Every Wednesday",
    icon: Microscope,
    accent: "#F6B900",
    featured: true,
  },
  {
    id: 2,
    name: "Computer & Technology Club",
    shortName: "Computer & Technology",
    category: "Technology",
    description:
      "Explore programming, software development, digital tools, emerging technologies and hands-on technical workshops.",
    members: "95+ Members",
    meeting: "Every Thursday",
    icon: Laptop2,
    accent: "#FCD34D",
    featured: true,
  },
  {
    id: 3,
    name: "Cultural Club",
    shortName: "Cultural Club",
    category: "Cultural",
    description:
      "Celebrating creativity, literature, music, art, performance and the cultural diversity of our student community.",
    members: "150+ Members",
    meeting: "Every Tuesday",
    icon: Music2,
    accent: "#F8D87D",
    featured: true,
  },
  {
    id: 4,
    name: "Debate & Public Speaking Club",
    shortName: "Debate & Public Speaking",
    category: "Leadership",
    description:
      "Develop confidence, communication, critical thinking and leadership through debate and public speaking activities.",
    members: "80+ Members",
    meeting: "Every Monday",
    icon: Users,
    accent: "#F59E0B",
  },
  {
    id: 5,
    name: "Business & Leadership Club",
    shortName: "Business & Leadership",
    category: "Leadership",
    description:
      "Build entrepreneurial thinking, teamwork, presentation skills and practical leadership capabilities.",
    members: "70+ Members",
    meeting: "Twice a Month",
    icon: Trophy,
    accent: "#FFC928",
  },
  {
    id: 6,
    name: "Photography & Media Club",
    shortName: "Photography & Media",
    category: "Cultural",
    description:
      "A creative community for photography, videography, storytelling, event coverage and visual communication.",
    members: "60+ Members",
    meeting: "Every Friday",
    icon: Camera,
    accent: "#FDBA74",
  },
  {
    id: 7,
    name: "Sports & Fitness Club",
    shortName: "Sports & Fitness",
    category: "Sports",
    description:
      "Promoting teamwork, fitness, healthy competition and an active campus lifestyle through sports activities.",
    members: "130+ Members",
    meeting: "Weekly Practice",
    icon: Trophy,
    accent: "#F6B900",
  },
  {
    id: 8,
    name: "Social Service Club",
    shortName: "Social Service",
    category: "Social",
    description:
      "Connecting students with community initiatives, volunteering, awareness programs and meaningful social impact.",
    members: "90+ Members",
    meeting: "Monthly Activities",
    icon: HeartHandshake,
    accent: "#FDE68A",
  },
  {
    id: 9,
    name: "Art & Creative Club",
    shortName: "Art & Creative",
    category: "Cultural",
    description:
      "A space for drawing, design, illustration, creative writing and other forms of artistic expression.",
    members: "55+ Members",
    meeting: "Every Saturday",
    icon: Palette,
    accent: "#FFC14D",
  },
  {
    id: 10,
    name: "Language & Literature Club",
    shortName: "Language & Literature",
    category: "Academic",
    description:
      "Encouraging reading, writing, language development, literature discussions and knowledge sharing.",
    members: "65+ Members",
    meeting: "Every Sunday",
    icon: BookOpen,
    accent: "#F8D87D",
  },
  {
    id: 11,
    name: "Global Relations Club",
    shortName: "Global Relations",
    category: "Social",
    description:
      "Developing cultural awareness, global communication skills and opportunities for broader student engagement.",
    members: "45+ Members",
    meeting: "Monthly Sessions",
    icon: Globe2,
    accent: "#FCD34D",
  },
  {
    id: 12,
    name: "Community Volunteers",
    shortName: "Community Volunteers",
    category: "Social",
    description:
      "Student volunteers working together on campus support, awareness drives, outreach and community initiatives.",
    members: "100+ Members",
    meeting: "Monthly Drives",
    icon: HeartHandshake,
    accent: "#F6B900",
  },
]

const CATEGORIES = [
  "All",
  "Academic",
  "Cultural",
  "Technology",
  "Leadership",
  "Sports",
  "Social",
] as const

const STATS = [
  {
    value: "12+",
    label: "Active Clubs",
  },
  {
    value: "1,000+",
    label: "Student Members",
  },
  {
    value: "6",
    label: "Major Categories",
  },
  {
    value: "50+",
    label: "Activities / Year",
  },
]

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
}: {
  club: Club
}) {
  const Icon = club.icon

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
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#0D0357]
            text-[#F6B900]
            transition-transform
            duration-300
            group-hover:scale-105
          "
        >
          <Icon
            className="h-5 w-5"
            strokeWidth={1.8}
          />
        </div>

        {club.featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[#F6B900]/25 bg-[#FFF5DB] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#D79B00]">
            <Sparkles className="h-3 w-3" />
            Featured
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
              Community
            </p>

            <p className="mt-1 text-xs font-semibold text-[#334155]">
              {club.members}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
              Schedule
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
          Explore Club

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
    useState<(typeof CATEGORIES)[number]>("All")

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

        <section className="relative overflow-hidden bg-[#0D0357]">
          <div
            className="
              absolute
              -right-20
              top-10
              h-48
              w-48
              rounded-full
              bg-[#F6B900]/10
              blur-3xl
            "
            data-float
            aria-hidden="true"
          />

          <div
            className="
              absolute
              -left-20
              bottom-0
              h-56
              w-56
              rounded-full
              bg-[#120A80]
              blur-3xl
            "
            data-float
            aria-hidden="true"
          />

          <div
            className="absolute inset-0 opacity-80"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(246,185,0,0.10),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(18,10,128,0.55),transparent_35%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
            <div className="max-w-3xl">

              <div
                data-hero-content
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-3.5
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#FCD34D]
                "
              >
                <Users className="h-3.5 w-3.5" />
                Student Life
              </div>

              <h1
                data-hero-content
                className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Clubs &
                <span className="text-[#F6B900]">
                  {" "}
                  Organizations
                </span>
              </h1>

              <p
                data-hero-content
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/65
                  sm:text-base
                  sm:leading-8
                "
              >
                Discover student communities that help you learn beyond
                the classroom, build meaningful connections, develop
                leadership skills and turn ideas into action.
              </p>

              <div
                data-hero-content
                className="mt-7 flex flex-wrap gap-3"
              >
                <a
                  href="#clubs"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#F6B900]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-[#0D0357]
                    shadow-lg
                    shadow-[#F6B900]/10
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#FFC928]
                  "
                >
                  Explore Clubs
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-200
                    hover:border-[#F6B900]/40
                    hover:bg-white/[0.08]
                  "
                >
                  Start a Club
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

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
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  px-4
                  py-5
                  text-center
                  sm:px-6
                  sm:py-6
                  ${
                    index < STATS.length - 1
                      ? "border-b border-[#DCE7F1] sm:border-b-0 sm:border-r"
                      : ""
                  }
                  ${index === 2 ? "border-b sm:border-b-0" : ""}
                `}
              >
                <p className="text-2xl font-black tracking-tight text-[#0D0357] sm:text-3xl">
                  {stat.value}
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
                Student Communities
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0D0357] sm:text-4xl">
                Find your community
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#64748B] sm:text-base">
                Choose a club based on your interests, skills and the
                kind of student experience you want to build.
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search clubs or interests..."
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
              Filter:
            </div>

            {CATEGORIES.map((category) => {
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
              Explore • Connect • Grow
            </div>
          </div>

          {/* Cards */}
          {filteredClubs.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-[#DCE7F1] bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0D0357]/5 text-[#0D0357]">
                <Search className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#0D0357]">
                No clubs found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                Try another keyword or choose a different category.
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
                Reset Filters
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
                  Beyond the Classroom
                </div>

                <h2 className="mt-4 max-w-lg text-3xl font-black tracking-tight text-white sm:text-4xl">
                  More than a club.
                  <span className="text-[#F6B900]">
                    {" "}
                    It is your campus community.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Student organizations create space to meet new people,
                  discover hidden strengths, build leadership experience
                  and contribute to campus life in meaningful ways.
                </p>

                <Link
                  href="/contact"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-[#F6B900]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-[#0D0357]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#FFC928]
                  "
                >
                  Connect With Student Affairs
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Users,
                    title: "Build Connections",
                    description:
                      "Meet students with similar interests and create lasting friendships.",
                  },
                  {
                    icon: Trophy,
                    title: "Grow Leadership",
                    description:
                      "Take responsibility, organize activities and practice leadership in real situations.",
                  },
                  {
                    icon: BookOpen,
                    title: "Learn by Doing",
                    description:
                      "Turn academic knowledge into practical projects, workshops and events.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Make an Impact",
                    description:
                      "Contribute to the campus and wider community through meaningful initiatives.",
                  },
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6B900]/10 text-[#F6B900]">
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
                    Start Something Meaningful
                  </div>

                  <h2 className="mt-3 text-2xl font-black tracking-tight text-[#0D0357] sm:text-3xl">
                    Have an idea for a new student organization?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    Bring your idea, gather interested students and connect
                    with the appropriate campus office to explore the next
                    steps.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#0D0357]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#120A80]
                  "
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4 text-[#F6B900]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}