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
import { PageHeroBanner } from "@/components/page-hero-banner";
import { imageUrl } from "@/lib/site-assets";
import { ICON_MOTION, lightTileIcon } from "@/lib/icon-colors";
import { CountUp } from "@/components/count-up";
import { CtaButton } from "@/components/cta-button";
import {
  PUBLICATIONS_HERO,
  PUBLICATIONS_INTRO,
  FEATURED_PUBLICATIONS_INTRO,
  PUBLICATIONS,
  PUBLICATION_YEARS,
  PUBLICATION_DEPARTMENTS,
  PUBLICATION_TYPES,
  PUBLICATION_AREAS,
  PUBLICATION_DIRECTORY,
  PUBLICATIONS_HELP,
  RESEARCH_REPORT,
  SUBMIT_PUBLICATION,
  PUBLICATIONS_CTA,
} from "@/lib/data/publications";

const featuredPublications = PUBLICATIONS.slice(0, 3);

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeroBanner
        eyebrow={PUBLICATIONS_HERO.eyebrow}
        titleLines={PUBLICATIONS_HERO.titleLines}
        description={PUBLICATIONS_HERO.description}
        image={imageUrl("/images/campus-library.png")}
        imageAlt="KACST library and study collection"
        primary={PUBLICATIONS_HERO.primary}
        secondary={PUBLICATIONS_HERO.secondary}
      />

      {/* =========================================================
          INTRO / STATS
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {PUBLICATIONS_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {PUBLICATIONS_INTRO.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {PUBLICATIONS_INTRO.description}
              </p>
            </div>

            <div className="grid grid-cols-3 border border-slate-200 bg-[#f5f8fc]">
              {PUBLICATIONS_INTRO.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-5 text-center ${
                    index < PUBLICATIONS_INTRO.stats.length - 1
                      ? "border-r border-slate-200"
                      : ""
                  }`}
                >
                  <p className="font-serif text-2xl font-semibold text-[#092c4d]">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
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
                {FEATURED_PUBLICATIONS_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {FEATURED_PUBLICATIONS_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {FEATURED_PUBLICATIONS_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredPublications.map((publication, index) => (
              <article
                key={publication.doi}
                className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${ICON_MOTION}`}
                  >
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
                      {FEATURED_PUBLICATIONS_INTRO.cardLinkLabel}
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
      <section id="publications" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {PUBLICATION_DIRECTORY.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {PUBLICATION_DIRECTORY.title}
            </h2>
          </div>

          <div className="border border-slate-200 bg-[#f5f8fc] p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <div className="flex h-10 w-10 items-center justify-center bg-[#175783] text-white">
                <SlidersHorizontal className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-[#092c4d]">
                  {PUBLICATION_DIRECTORY.filterTitle}
                </h3>

                <p className="text-xs text-slate-500">
                  {PUBLICATION_DIRECTORY.filterDescription}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="relative lg:col-span-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder={PUBLICATION_DIRECTORY.searchPlaceholder}
                  className="h-11 w-full border border-slate-200 bg-white pl-10 pr-3 text-sm text-[#092c4d] outline-none transition focus:border-[#175783]"
                />
              </div>

              {[
                { label: PUBLICATION_DIRECTORY.filterLabels[0], options: PUBLICATION_YEARS },
                { label: PUBLICATION_DIRECTORY.filterLabels[1], options: PUBLICATION_DEPARTMENTS },
                { label: PUBLICATION_DIRECTORY.filterLabels[2], options: PUBLICATION_TYPES },
                { label: PUBLICATION_DIRECTORY.filterLabels[3], options: PUBLICATION_AREAS },
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
                {PUBLICATION_DIRECTORY.applyLabel}
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
                    {PUBLICATION_DIRECTORY.tableHeaders.map((header, index) => (
                      <th
                        key={header}
                        className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 ${
                          index === PUBLICATION_DIRECTORY.tableHeaders.length - 1
                            ? "text-right"
                            : "text-left"
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {PUBLICATIONS.map((publication, index) => (
                    <tr
                      key={publication.doi}
                      className="group border-b border-slate-100 transition hover:bg-[#f8fbfd]"
                    >
                      <td className="max-w-[330px] px-6 py-6 align-top">
                        <div className="flex gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${ICON_MOTION}`}
                          >
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
            {PUBLICATIONS.map((publication, index) => (
              <article
                key={publication.doi}
                className="group border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center ${lightTileIcon(index).bg} ${lightTileIcon(index).text} ${ICON_MOTION}`}
                  >
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
                      {PUBLICATION_DIRECTORY.mobileLabels.department}
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {publication.department}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {PUBLICATION_DIRECTORY.mobileLabels.journal}
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      {publication.journal}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {PUBLICATION_DIRECTORY.mobileLabels.doi}
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
                    {PUBLICATION_DIRECTORY.mobileLabels.link}
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
            <div className="group border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div
                className={`flex h-12 w-12 items-center justify-center bg-teal-100 text-teal-600 ${ICON_MOTION}`}
              >
                <FileText className="h-5 w-5" />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d] sm:text-3xl">
                {PUBLICATIONS_HELP.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {PUBLICATIONS_HELP.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {PUBLICATIONS_HELP.points.map((item) => (
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
              <div
                className={`flex h-12 w-12 items-center justify-center bg-white text-rose-600 ${ICON_MOTION}`}
              >
                <CalendarDays className="h-5 w-5" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {RESEARCH_REPORT.eyebrow}
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#092c4d]">
                {RESEARCH_REPORT.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {RESEARCH_REPORT.description}
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
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="border border-slate-200 bg-[#232771]">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    {SUBMIT_PUBLICATION.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                  {SUBMIT_PUBLICATION.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/70">
                  {SUBMIT_PUBLICATION.description}
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-7 py-4 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
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
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#232771] shadow-[0_18px_55px_rgba(35,39,113,0.18)]">
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
                  {PUBLICATIONS_CTA.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {PUBLICATIONS_CTA.titleLines[0]}
                <br />
                {PUBLICATIONS_CTA.titleLines[1]}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                {PUBLICATIONS_CTA.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="#publications"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
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