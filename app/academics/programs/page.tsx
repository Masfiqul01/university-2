"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  GraduationCap,
  RotateCcw,
  Search,
} from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import {
  PROGRAMS,
  PROGRAM_LEVELS as LEVELS,
  PROGRAM_FACULTIES as FACULTIES,
  PROGRAM_DISCIPLINES as DISCIPLINES,
  type Program,
} from "@/lib/data/programs"

const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

function ProgramCard({ program }: { program: Program }) {
  const IconComponent = ICON_MAP[program.icon] ?? ICON_MAP.Code2

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div>
        <div
          className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${program.iconBg} ${program.iconColor}`}
        >
          <IconComponent className="h-5 w-5" />
        </div>

        <span className="mb-3 inline-block rounded-full bg-blue-50/80 px-3 py-1 text-[11px] font-medium text-blue-600">
          {program.level}
        </span>

        <h3 className="font-serif text-lg font-bold leading-snug text-[#17135f]">
          {program.title}
        </h3>

        <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
          {program.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
        <div className="text-slate-400">
          <span>{program.duration}</span>
          <span className="mx-1.5">•</span>
          <span>Full Time</span>
        </div>

        <Link
          href="#"
          className="flex items-center gap-1 font-semibold text-[#17135f] transition-colors hover:text-indigo-600"
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default function AcademicPrograms() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([
    "Undergraduate",
  ])
  const [faculty, setFaculty] = useState("All Faculties")
  const [discipline, setDiscipline] = useState("All Disciplines")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("Most Popular")
  const [page, setPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const perPage = 9

  const toggleLevel = (level: string) => {
    setSelectedLevels((current) =>
      current.includes(level)
        ? current.filter((item) => item !== level)
        : [...current, level],
    )
    setPage(1)
  }

  const resetFilters = () => {
    setSelectedLevels(["Undergraduate"])
    setFaculty("All Faculties")
    setDiscipline("All Disciplines")
    setSearch("")
    setSort("Most Popular")
    setPage(1)
  }

  const filteredPrograms = useMemo(() => {
    let result = [...PROGRAMS]

    if (selectedLevels.length > 0) {
      result = result.filter((program) =>
        selectedLevels.includes(program.level),
      )
    }

    if (faculty !== "All Faculties") {
      result = result.filter((program) => program.faculty === faculty)
    }

    if (discipline !== "All Disciplines") {
      result = result.filter(
        (program) => program.discipline === discipline,
      )
    }

    if (search.trim()) {
      const query = search.toLowerCase()

      result = result.filter(
        (program) =>
          program.title.toLowerCase().includes(query) ||
          program.description.toLowerCase().includes(query) ||
          program.discipline.toLowerCase().includes(query),
      )
    }

    if (sort === "A-Z") {
      result.sort((a, b) => a.title.localeCompare(b.title))
    }

    if (sort === "Z-A") {
      result.sort((a, b) => b.title.localeCompare(a.title))
    }

    return result
  }, [selectedLevels, faculty, discipline, search, sort])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPrograms.length / perPage),
  )

  const currentPage = Math.min(page, totalPages)

  const visiblePrograms = filteredPrograms.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  )

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fafafb] text-slate-800">
      {/* HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b075b] via-[#111064]/95 to-[#111064]/30" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-medium text-white/80">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>›</span>
              <Link href="/academics" className="transition hover:text-white">
                Academics
              </Link>
              <span>›</span>
              <span className="text-white">Academic Programs</span>
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              Academics
            </p>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Academic
              <br />
              Programs
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              Explore our wide range of undergraduate, postgraduate and
              doctoral programs designed to empower your future and make a
              meaningful impact in the world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#programs"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-400 px-6 text-xs font-bold text-[#17135f] shadow-md transition hover:bg-amber-300"
              >
                Explore Programs
              </Link>

              <Link
                href="/academics/calendar"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-xs font-bold text-[#17135f] transition hover:bg-slate-100"
              >
                <CalendarDays className="h-4 w-4" />
                Academic Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section id="programs" className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Mobile Filter Toggle Button */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#17135f] shadow-sm"
            >
              <Filter className="h-4 w-4" />
              {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
            <p className="text-xs text-slate-500">
              {filteredPrograms.length} Programs
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            {/* SIDEBAR FILTERS - EXACT MATCH TO IMAGE */}
            <aside
              className={`space-y-6 ${
                isMobileFilterOpen ? "block" : "hidden"
              } lg:block`}
            >
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                
                {/* Header */}
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-serif text-lg font-bold text-[#1a1464]">
                    Filter Programs
                  </h2>
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-[#1a1464]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    RESET
                  </button>
                </div>

                {/* Level of Study */}
                <div className="border-t border-slate-100 pt-5 pb-4">
                  <p className="mb-4 text-xs font-bold text-[#1a1464]">
                    Level of Study
                  </p>
                  <div className="space-y-3.5">
                    {LEVELS.map((level) => {
                      const isChecked = selectedLevels.includes(level)
                      return (
                        <label
                          key={level}
                          onClick={() => toggleLevel(level)}
                          className="flex cursor-pointer items-center gap-3 text-xs font-medium text-slate-600 hover:text-slate-900"
                        >
                          {/* Custom Checkbox Matching the Image */}
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded transition-colors ${
                              isChecked
                                ? "bg-[#3b82f6] text-white"
                                : "bg-[#334155]"
                            }`}
                          >
                            {isChecked && (
                              <svg
                                className="h-3 w-3 fill-current stroke-current stroke-2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-slate-600">{level}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Faculty Dropdown */}
                <div className="border-t border-slate-100 pt-5 pb-4">
                  <p className="mb-2.5 text-xs font-bold text-[#1a1464]">
                    Faculty
                  </p>
                  <div className="relative">
                    <select
                      value={faculty}
                      onChange={(e) => {
                        setFaculty(e.target.value)
                        setPage(1)
                      }}
                      className="h-11 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-10 text-xs font-medium text-slate-600 outline-none transition focus:border-indigo-500"
                    >
                      {FACULTIES.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Discipline Dropdown */}
                <div className="border-t border-slate-100 pt-5 pb-4">
                  <p className="mb-2.5 text-xs font-bold text-[#1a1464]">
                    Discipline
                  </p>
                  <div className="relative">
                    <select
                      value={discipline}
                      onChange={(e) => {
                        setDiscipline(e.target.value)
                        setPage(1)
                      }}
                      className="h-11 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-10 text-xs font-medium text-slate-600 outline-none transition focus:border-indigo-500"
                    >
                      {DISCIPLINES.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Search Input */}
                <div className="border-t border-slate-100 pt-5">
                  <p className="mb-2.5 text-xs font-bold text-[#1a1464]">
                    Search Program
                  </p>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value)
                        setPage(1)
                      }}
                      placeholder="Search programs..."
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-medium outline-none placeholder:text-slate-400 transition focus:border-indigo-500"
                    />
                  </div>
                </div>

              </div>

              {/* ADVISOR BANNER CARD */}
              <div className="rounded-2xl border border-slate-100 bg-[#f7f8fe] p-6 text-left">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#17135f] shadow-sm">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#17135f]">
                  Can’t find the right program?
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Our academic advisors are here to help you choose the best
                  path for your future.
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#110c59] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-opacity-90"
                >
                  Talk to an Advisor
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

            {/* MAIN PROGRAM DISPLAY */}
            <div>
              {/* Header Info & Sort */}
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-900">
                  EXPLORE OUR OFFERINGS
                </p>

                <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-[#17135f] sm:text-4xl">
                      Our Academic Programs
                    </h2>
                    <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
                      KKJSTU offers a diverse range of programs across various
                      disciplines. Choose a program to view details and admission
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <p className="text-xs text-slate-500">
                    Showing{" "}
                    <span className="font-semibold text-slate-800">
                      {filteredPrograms.length === 0
                        ? 0
                        : (currentPage - 1) * perPage + 1}
                      –
                      {Math.min(
                        currentPage * perPage,
                        filteredPrograms.length,
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-800">
                      {filteredPrograms.length}
                    </span>{" "}
                    programs
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Sort by:</span>
                    <div className="relative">
                      <select
                        value={sort}
                        onChange={(e) => {
                          setSort(e.target.value)
                          setPage(1)
                        }}
                        className="h-9 appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-8 text-xs font-medium text-slate-700 outline-none focus:border-indigo-500"
                      >
                        <option>Most Popular</option>
                        <option>A-Z</option>
                        <option>Z-A</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              {visiblePrograms.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {visiblePrograms.map((program, index) => (
                    <ProgramCard
                      key={`${program.title}-${index}`}
                      program={program}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
                  <Search className="mx-auto h-10 w-10 text-slate-300" />
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#17135f]">
                    No programs found
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Try changing your filters or search term.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 rounded-lg bg-[#17135f] px-4 py-2 text-xs font-semibold text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {filteredPrograms.length > 0 && (
                <div className="mt-10 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1)
                      .slice(0, 5)
                      .map((number) => (
                        <button
                          key={number}
                          onClick={() => setPage(number)}
                          className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition ${
                            currentPage === number
                              ? "bg-[#110c59] text-white"
                              : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {number}
                        </button>
                      ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#0d094d] px-6 py-10 shadow-lg sm:px-10 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:flex">
                <GraduationCap className="h-7 w-7 text-amber-400" />
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-serif text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                  Ready to start your academic
                  <br className="hidden sm:block" /> journey at KKJSTU?
                </h2>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                  Join a community of innovative thinkers and future leaders.
                </p>
              </div>
            </div>

            <Link
              href="/admission"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-bold text-[#17135f] transition hover:bg-slate-100 sm:text-sm"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  )
}
