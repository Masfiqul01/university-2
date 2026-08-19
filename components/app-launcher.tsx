"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Building,
  Building2,
  CalendarDays,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Newspaper,
  Search,
  Users,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react"

/*
  ============================================================
  APP LAUNCHER PANEL (9-dot menu)
  ============================================================

  Header-এর 9-dot button-এর ভিতরের panel।

  এখানে শুধু secondary quick-access services আছে।
  Main navbar-এ যেসব item আছে (Home, About, Academics,
  Admissions, Administration, Research, Campus Life,
  News & Events, Contact, portals) সেগুলো ইচ্ছাকৃতভাবে বাদ —
  panel যেন navbar-এর duplicate না হয়।
*/

type Service = {
  label: string
  href: string
  icon: LucideIcon
  description: string
}

type ServiceGroup = {
  heading: string
  items: Service[]
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    heading: "Academic",
    items: [
      {
        label: "Academic Programs",
        href: "/academics/programs",
        icon: GraduationCap,
        description: "Explore academic programs and study opportunities.",
      },
      {
        label: "Faculties & Departments",
        href: "/academics/faculties",
        icon: Building2,
        description: "Explore faculties, departments and academic disciplines.",
      },
      {
        label: "Academic Calendar",
        href: "/academics/calendar",
        icon: CalendarDays,
        description: "View important academic dates and schedules.",
      },
    ],
  },
  {
    heading: "Campus Life",
    items: [
      {
        label: "Campus Facilities",
        href: "/campus-life/facilities",
        icon: Building,
        description: "Explore university facilities and campus resources.",
      },
      {
        label: "Student Life",
        href: "/campus-life/student-life",
        icon: Users,
        description: "Discover student activities and campus experiences.",
      },
      {
        label: "Clubs & Organizations",
        href: "/campus-life/clubs",
        icon: UsersRound,
        description: "Explore student clubs and organizations.",
      },
    ],
  },
  {
    heading: "Research",
    items: [
      {
        label: "Research Centers",
        href: "/research/centers",
        icon: FlaskConical,
        description: "Explore research centers and innovation activities.",
      },
      {
        label: "Publications",
        href: "/research/publications",
        icon: BookOpen,
        description: "Browse university research publications.",
      },
    ],
  },
  {
    heading: "Quick Access",
    items: [
      {
        label: "Notice Board",
        href: "/notice-board",
        icon: Megaphone,
        description: "View important university notices and announcements.",
      },
      {
        label: "News",
        href: "/news",
        icon: Newspaper,
        description: "Read the latest university news and updates.",
      },
      {
        label: "Events",
        href: "/events",
        icon: CalendarDays,
        description: "Discover upcoming university events and activities.",
      },
      {
        label: "Admission Requirements",
        href: "/admissions/requirements",
        icon: ClipboardCheck,
        description:
          "Check admission requirements and eligibility information.",
      },
    ],
  },
]

/** Per-service icon colours, cycled so each tile reads distinctly. */
const ICON_COLORS = [
  "bg-blue-50 text-blue-600",
  "bg-emerald-50 text-emerald-600",
  "bg-violet-50 text-violet-600",
  "bg-orange-50 text-orange-600",
  "bg-rose-50 text-rose-600",
  "bg-cyan-50 text-cyan-700",
  "bg-fuchsia-50 text-fuchsia-600",
  "bg-teal-50 text-teal-600",
  "bg-amber-50 text-amber-700",
  "bg-indigo-50 text-indigo-600",
  "bg-lime-50 text-lime-700",
  "bg-sky-50 text-sky-600",
]

export function AppLauncher({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState("")
  const panelRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  /* Clear the search each time the panel is reopened. */
  useEffect(() => {
    if (!open) return
    setQuery("")
    const id = window.setTimeout(() => searchRef.current?.focus(), 60)
    return () => window.clearTimeout(id)
  }, [open])

  /* Escape closes. */
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  /*
    Outside click closes. The 9-dot button lives outside this panel and
    toggles `open` itself, so clicks on it are ignored here — otherwise the
    button would close and reopen the panel in the same gesture.
  */
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!target) return
      if (panelRef.current?.contains(target)) return
      if ((target as HTMLElement).closest?.("[data-app-launcher-trigger]")) return
      onClose()
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [open, onClose])

  /*
    Freeze the page behind the panel.

    `body { overflow: hidden }` alone is not enough here: the site runs Lenis
    smooth scrolling, which drives the page from its own wheel listener and
    ignores the body's overflow. So we also swallow wheel/touch events in the
    capture phase before Lenis can see them — except inside the panel, which
    scrolls natively (see `data-lenis-prevent` on the scroll area).
  */
  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const blockOutside = (event: WheelEvent | TouchEvent) => {
      const target = event.target as Node | null
      if (target && panelRef.current?.contains(target)) return
      event.preventDefault()
      event.stopPropagation()
    }

    const opts = { passive: false, capture: true } as const
    document.addEventListener("wheel", blockOutside, opts)
    document.addEventListener("touchmove", blockOutside, opts)

    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("wheel", blockOutside, opts)
      document.removeEventListener("touchmove", blockOutside, opts)
    }
  }, [open])

  const groups = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return SERVICE_GROUPS

    return SERVICE_GROUPS.map((group) => ({
      heading: group.heading,
      items: group.items.filter(
        (item) =>
          item.label.toLowerCase().includes(normalized) ||
          item.description.toLowerCase().includes(normalized) ||
          group.heading.toLowerCase().includes(normalized),
      ),
    })).filter((group) => group.items.length > 0)
  }, [query])

  const isEmpty = groups.length === 0

  /* Colour index runs across the whole list so no two tiles repeat. */
  let colorIndex = -1

  return (
    <>
      {/*
        Backdrop — purely decorative dimming. It stays `pointer-events-none`
        so it never covers the 9-dot trigger (which would break toggling the
        panel shut). Closing on an outside click is handled by the document
        mousedown listener above instead.
      */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[110] bg-[#0D0357]/30 backdrop-blur-[2px] transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="University services"
        className={`absolute right-2 top-full z-[120] mt-2 w-[min(calc(100vw-1rem),620px)] transition-all duration-200 ease-out sm:right-4 lg:right-8 lg:w-[720px] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="relative flex max-h-[calc(100vh-8rem)] flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_24px_70px_rgba(13,3,87,0.15)]">
          {/* Brand accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0D0357] via-amber-400 to-[#0D0357]"
          />

          {/* Ambient decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-400/[0.055] blur-3xl"
          />

          {/* ================= HEADER ================= */}
          <div className="relative flex items-start justify-between gap-4 px-5 pb-4 pt-5 xl:px-6">
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#0D0357]">
                University Services
              </p>
              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                Quick access to academic, campus, research and university
                resources.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close services menu"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors duration-200 hover:bg-amber-400 hover:text-[#0D0357]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* ================= SEARCH ================= */}
          <div className="relative px-5 pb-4 xl:px-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services..."
                className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-9 pr-3 text-[13px] text-[#0D0357] outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-400 focus:bg-white"
              />
            </div>
          </div>

          {/* ================= SERVICE GRID ================= */}
          <div
            data-lenis-prevent
            className="relative flex-1 overflow-y-auto overscroll-contain px-5 pb-5 xl:px-6"
          >
            {isEmpty ? (
              <div className="py-10 text-center">
                <p className="text-sm font-semibold text-[#0D0357]">
                  No services found
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Try a different search term.
                </p>
              </div>
            ) : (
              groups.map((group) => (
                <div key={group.heading} className="mb-5 last:mb-0">
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {group.heading}
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => {
                      colorIndex += 1
                      const color =
                        ICON_COLORS[colorIndex % ICON_COLORS.length]
                      const Icon = item.icon

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="group/service flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3 transition-all duration-200 hover:border-amber-400/60 hover:bg-slate-50/80"
                        >
                          <span
                            aria-hidden="true"
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color} transition-transform duration-200 group-hover/service:scale-110`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-[12px] font-semibold leading-4 text-[#0D0357]">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">
                              {item.description}
                            </span>
                          </span>

                          <span
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[11px] font-medium text-amber-500 opacity-0 transition-all duration-200 group-hover/service:translate-x-0.5 group-hover/service:opacity-100"
                          >
                            →
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}
