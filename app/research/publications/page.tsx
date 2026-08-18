"use client";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Filter,
  Search,
  Send,
  SlidersHorizontal,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const publications = [
  {
    title: "Data-Driven Approaches for Sustainable Development",
    authors: "Dr. A. Rahman, M. Hasan, S. Ahmed",
    year: "2025",
    department: "Computer Science & Engineering",
    type: "Journal Article",
    area: "AI & Data Science",
    journal: "International Journal of Applied Computing",
    doi: "10.0000/kkjstu.2025.001",
    abstract:
      "This study explores data-driven methods for identifying practical approaches to sustainable development and evidence-based decision making.",
  },
  {
    title: "Smart Engineering Solutions for Modern Infrastructure",
    authors: "Dr. M. Karim, T. Islam",
    year: "2025",
    department: "Engineering",
    type: "Conference Paper",
    area: "Engineering",
    journal: "International Engineering Conference",
    doi: "10.0000/kkjstu.2025.002",
    abstract:
      "The research investigates innovative engineering approaches designed to improve infrastructure efficiency, resilience and sustainability.",
  },
  {
    title: "Environmental Monitoring and Sustainable Resource Management",
    authors: "N. Sultana, Dr. F. Hossain",
    year: "2024",
    department: "Environmental Science",
    type: "Journal Article",
    area: "Environment",
    journal: "Journal of Environmental Research",
    doi: "10.0000/kkjstu.2024.003",
    abstract:
      "A research framework for environmental monitoring and responsible resource management with a focus on sustainable development.",
  },
  {
    title: "Mathematical Modelling for Complex Systems",
    authors: "Dr. R. Ahmed, M. Chowdhury",
    year: "2024",
    department: "Mathematics",
    type: "Research Article",
    area: "Mathematics",
    journal: "Applied Mathematical Studies",
    doi: "10.0000/kkjstu.2024.004",
    abstract:
      "This publication presents mathematical modelling techniques for analysing complex systems and improving predictive understanding.",
  },
  {
    title: "Innovation and Entrepreneurship in Emerging Economies",
    authors: "Dr. S. Islam, F. Kabir",
    year: "2023",
    department: "Business Administration",
    type: "Journal Article",
    area: "Social & Business Innovation",
    journal: "Business & Innovation Review",
    doi: "10.0000/kkjstu.2023.005",
    abstract:
      "The paper examines innovation, entrepreneurship and institutional factors influencing emerging business ecosystems.",
  },
  {
    title: "Biotechnology Applications in Sustainable Agriculture",
    authors: "Dr. T. Akter, M. Rahman",
    year: "2023",
    department: "Biotechnology",
    type: "Research Article",
    area: "Biotechnology",
    journal: "Asian Biotechnology Research",
    doi: "10.0000/kkjstu.2023.006",
    abstract:
      "An overview of biotechnology-based approaches that can support sustainable agricultural practices and resource efficiency.",
  },
];

const featuredPublications = publications.slice(0, 3);

const years = ["All Years", "2025", "2024", "2023"];
const departments = [
  "All Departments",
  "Computer Science & Engineering",
  "Engineering",
  "Environmental Science",
  "Mathematics",
  "Business Administration",
  "Biotechnology",
];

const types = [
  "All Types",
  "Journal Article",
  "Conference Paper",
  "Research Article",
];

const areas = [
  "All Research Areas",
  "AI & Data Science",
  "Engineering",
  "Environment",
  "Mathematics",
  "Social & Business Innovation",
  "Biotechnology",
];

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#082746]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#d9a82e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Research / Publications
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Discover Research,
              <br />
              <span className="text-[#e1b63b]">
                Ideas & Knowledge
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Explore research publications, scholarly work and academic
              contributions from the KKJSTU research community.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#publications"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Search Publications
                <Search className="h-4 w-4" />
              </a>

              <a
                href="#report"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Download Research Report
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / STATS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Research Knowledge
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Publications at KKJSTU
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Browse scholarly publications by year, department, research
                area and publication type. The directory is designed to make
                research outputs easier to discover and explore.
              </p>
            </div>

            <div className="grid grid-cols-3 border border-slate-200 bg-[#f5f8fc]">
              <div className="border-r border-slate-200 px-5 py-5 text-center">
                <p className="font-serif text-2xl font-semibold text-[#092c4d]">
                  06
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                  Publications
                </p>
              </div>

              <div className="border-r border-slate-200 px-5 py-5 text-center">
                <p className="font-serif text-2xl font-semibold text-[#092c4d]">
                  06
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                  Research Areas
                </p>
              </div>

              <div className="px-5 py-5 text-center">
                <p className="font-serif text-2xl font-semibold text-[#092c4d]">
                  03
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                  Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PUBLICATIONS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#edf5fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Featured Publications
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Selected Research Contributions
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              A selection of research publications representing different
              academic disciplines and areas of inquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredPublications.map((publication) => (
              <article
                key={publication.doi}
                className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <FileText className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold text-[#b28718]">
                    {publication.year}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#175783]">
                    {publication.area}
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-[#092c4d]">
                    {publication.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {publication.authors}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {publication.abstract}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">
                      {publication.journal}
                    </span>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#175783]"
                    >
                      View
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH & FILTER
      ========================================================= */}
      <section id="publications" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Publication Directory
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Search Research Publications
            </h2>
          </div>

          <div className="border border-slate-200 bg-[#f5f8fc] p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <div className="flex h-10 w-10 items-center justify-center bg-[#175783] text-white">
                <SlidersHorizontal className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-[#092c4d]">
                  Filter Publications
                </h3>

                <p className="text-xs text-slate-500">
                  Refine results by academic criteria.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="relative lg:col-span-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search title or author"
                  className="h-11 w-full border border-slate-200 bg-white pl-10 pr-3 text-sm text-[#092c4d] outline-none transition focus:border-[#175783]"
                />
              </div>

              {[
                { label: "Year", options: years },
                { label: "Department", options: departments },
                { label: "Type", options: types },
                { label: "Research Area", options: areas },
              ].map((filter) => (
                <div key={filter.label} className="relative">
                  <select className="h-11 w-full appearance-none border border-slate-200 bg-white px-3 pr-9 text-sm text-slate-600 outline-none transition focus:border-[#175783]">
                    {filter.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Showing <span className="font-bold text-[#092c4d]">6</span>{" "}
                research publications
              </p>

              <button className="inline-flex items-center justify-center gap-2 bg-[#175783] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#0e466c]">
                <Filter className="h-4 w-4" />
                Apply Filters
              </button>
            </div>
          </div>

          {/* =====================================================
              DESKTOP TABLE
          ===================================================== */}
          <div className="mt-8 hidden overflow-hidden border border-slate-200 bg-white shadow-sm lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#f5f8fc] text-left">
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      Publication
                    </th>

                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      Author / Department
                    </th>

                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      Type
                    </th>

                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      Year
                    </th>

                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      DOI
                    </th>

                    <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#092c4d]">
                      Link
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {publications.map((publication) => (
                    <tr
                      key={publication.doi}
                      className="border-b border-slate-100 transition hover:bg-[#f8fbfd]"
                    >
                      <td className="max-w-[330px] px-6 py-6 align-top">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                            <BookOpen className="h-4 w-4" />
                          </div>

                          <div>
                            <h3 className="font-serif text-base font-semibold leading-6 text-[#092c4d]">
                              {publication.title}
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                              {publication.journal}
                            </p>

                            <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-wider text-[#b28718]">
                              {publication.area}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-6 align-top">
                        <p className="max-w-[210px] text-xs leading-5 text-slate-600">
                          {publication.authors}
                        </p>

                        <p className="mt-2 text-[11px] text-slate-400">
                          {publication.department}
                        </p>
                      </td>

                      <td className="px-6 py-6 align-top">
                        <span className="inline-flex border border-[#d5e5ef] bg-[#edf5fb] px-3 py-1.5 text-[10px] font-bold text-[#175783]">
                          {publication.type}
                        </span>
                      </td>

                      <td className="px-6 py-6 align-top">
                        <span className="text-sm font-semibold text-[#092c4d]">
                          {publication.year}
                        </span>
                      </td>

                      <td className="px-6 py-6 align-top">
                        <span className="font-mono text-[10px] text-slate-500">
                          {publication.doi}
                        </span>
                      </td>

                      <td className="px-6 py-6 text-right align-top">
                        <a
                          href="#"
                          className="inline-flex h-9 w-9 items-center justify-center border border-slate-200 text-[#175783] transition hover:border-[#175783] hover:bg-[#175783] hover:text-white"
                          aria-label={`View ${publication.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* =====================================================
              MOBILE CARDS
          ===================================================== */}
          <div className="mt-8 grid gap-4 lg:hidden">
            {publications.map((publication) => (
              <article
                key={publication.doi}
                className="border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <BookOpen className="h-4 w-4" />
                  </div>

                  <span className="text-xs font-bold text-[#b28718]">
                    {publication.year}
                  </span>
                </div>

                <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-wider text-[#175783]">
                  {publication.area}
                </span>

                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-[#092c4d]">
                  {publication.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {publication.authors}
                </p>

                <div className="mt-4 grid gap-3 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Department
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {publication.department}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Journal / Conference
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {publication.journal}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      DOI
                    </p>

                    <p className="mt-1 break-all font-mono text-[10px] text-slate-500">
                      {publication.doi}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-2 bg-[#175783] px-4 py-3 text-xs font-bold text-white"
                  >
                    View Publication
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABSTRACT / HELP SECTION
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <FileText className="h-5 w-5" />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d] sm:text-3xl">
                Explore Research in Detail
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Each publication provides information about its authors,
                department, research area, publication venue and DOI. Use the
                directory to identify research relevant to your academic or
                professional interests.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Search by research area",
                  "Browse by academic year",
                  "Explore department outputs",
                  "Find publication links",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-slate-100 bg-[#f8fbfd] px-4 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d9a82e]" />
                    <span className="text-xs font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="report"
              className="border border-[#d5e5ef] bg-[#eaf3fa] p-8 sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-white text-[#175783]">
                <CalendarDays className="h-5 w-5" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Annual Research Report
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#092c4d]">
                Research at a Glance
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Download the annual research report to explore institutional
                research activities, publications, projects and broader
                research contributions.
              </p>

              <a
                href="/research/publications"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
              >
                Download Research Report
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUBMIT PUBLICATION
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="border border-slate-200 bg-[#082746]">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    Research Community
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                  Have a Publication to Share?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/70">
                  Help build the university's research knowledge base by
                  submitting your latest scholarly publication for inclusion in
                  the research directory.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-7 py-4 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Submit a Publication
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#082746] shadow-[0_18px_55px_rgba(8,39,70,0.18)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#175783] opacity-30 blur-3xl" />

          <div className="relative flex min-h-[270px] flex-col justify-center px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <BookOpen className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  RESEARCH & PUBLICATIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Discover Knowledge.
                <br />
                Shape the Future.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Explore the research, publications and academic ideas shaping
                the future of KKJSTU and its wider community.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="#publications"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                Search Publications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#report"
                className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Download Research Report
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="/contact"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Submit a Publication
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}