"use client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Atom,
  Building2,
  Check,
  ChevronRight,
  Search,
  Users,
} from "lucide-react";
import { ICON_MAP } from "@/lib/icon-map";
import {
  FACULTIES_LIST as faculties,
  DEPARTMENTS_LIST as departments,
  DEPARTMENT_FILTERS as filters,
} from "@/lib/data/faculties";

const HERO_BG =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp";

export default function FacultiesDepartmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All Departments");
  const [search, setSearch] = useState("");

  const filteredDepartments = useMemo(() => {
    return departments.filter((department) => {
      const matchesFilter =
        activeFilter === "All Departments" ||
        department.faculty === activeFilter;

      const matchesSearch =
        department.name.toLowerCase().includes(search.toLowerCase()) ||
        department.faculty.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b1f3a]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `
         linear-gradient(
  90deg,
  rgba(13, 3, 87, 0.98) 0%,
  rgba(13, 3, 87, 0.92) 45%,
  rgba(13, 3, 87, 0.72) 100%
),
            url(${HERO_BG})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
          <SiteHeader overlay />
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#dcae38]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20">
          {/* Breadcrumb */}
          <div className="mb-14 flex items-center gap-2 text-sm text-white/60">
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Academics</span>
            <ChevronRight size={14} />
            <span className="text-[#e7b94c]">
              Faculties & Departments
            </span>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Hero content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#e3b23c]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3b23c]">
                  Academic Excellence
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Faculties &
                <span className="block text-[#e8b943]">
                  Departments
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Explore our diverse academic faculties and departments
                driving excellence, innovation, research and meaningful
                impact at KKJSTU.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="group flex items-center gap-2 rounded-full bg-[#e5b33e] px-6 py-3 text-sm font-semibold text-[#071b36] transition hover:bg-white">
                  Explore Departments
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
                  Academic Programs
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {[
                ["05", "Faculties", Atom],
                ["22+", "Departments", Building2],
                ["300+", "Faculty Members", Users],
                ["8,000+", "Students", Users],
              ].map(([value, label, Icon]) => (
                <div
                  key={String(label)}
                  className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-center backdrop-blur-xl"
                >
                  <Icon
                    size={25}
                    className="mx-auto mb-4 text-[#e6b53f]"
                  />

                  <div className="text-2xl font-bold text-white sm:text-3xl">
                    {value as string}
                  </div>

                  <div className="mt-1 text-xs text-white/60 sm:text-sm">
                    {label as string}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FACULTIES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#dcae38]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a47715]">
                Academic Structure
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Faculties
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Five distinct faculties shaping future leaders, innovators
              and researchers through world-class education.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:border-[#dcae38] hover:text-[#a47715]">
            View All Faculties
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Faculty cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {faculties.map((faculty) => {
            const Icon = ICON_MAP[faculty.icon] ?? ICON_MAP.Atom;

            return (
              <article
                key={faculty.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 border-b-4 ${faculty.accent} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Background decoration */}
                <Building2
                  size={100}
                  className="pointer-events-none absolute -right-5 top-20 text-slate-100"
                />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#071f43] text-[#e7b83f] shadow-lg">
                    <Icon size={23} />
                  </div>

                  <h3 className="min-h-[58px] text-lg font-bold leading-6">
                    {faculty.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {faculty.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-sm font-semibold text-[#b08018]">
                      {faculty.departments} Departments
                    </span>

                    <ArrowRight
                      size={17}
                      className="text-[#b08018] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          DEPARTMENTS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#dcae38]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a47715]">
                Find Your Department
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Departments
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Explore all academic departments and discover the
                  programs, research and opportunities available to you.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-[360px]">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search department..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c99927] focus:bg-white focus:ring-4 focus:ring-[#dcae38]/10"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-7 lg:grid-cols-[250px_1fr]">
            {/* Filter sidebar */}
            <aside className="h-fit overflow-hidden rounded-2xl bg-[#061c3b] shadow-xl">
              <div className="border-b border-white/10 px-5 py-5">
                <div className="text-sm font-semibold text-white">
                  Browse Faculties
                </div>

                <div className="mt-1 text-xs text-white/45">
                  {filteredDepartments.length} departments found
                </div>
              </div>

              <div className="p-2">
                {filters.map((filter, index) => {
                  const active = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                        active
                          ? "bg-[#e0ae38] font-semibold text-[#071b36]"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {active && <Check size={15} />}
                        {filter}
                      </span>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          active
                            ? "bg-black/10"
                            : "bg-white/10 text-white/50"
                        }`}
                      >
                        {index === 0
                          ? "22+"
                          : String(
                              faculties.find(
                                (f) => f.title === `Faculty of ${filter}`
                              )?.departments || ""
                            )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="m-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs leading-5 text-white/50">
                  Looking for a specific academic program? Browse our
                  complete academic catalog.
                </p>

                <button className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#e5b33e]">
                  Academic Catalog
                  <ArrowRight size={13} />
                </button>
              </div>
            </aside>

            {/* Department grid */}
            <div>
              {filteredDepartments.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredDepartments.map((department) => {
                    const Icon = ICON_MAP[department.icon] ?? ICON_MAP.Building2;

                    return (
                      <article
                        key={department.name}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d8b04c]/60 hover:shadow-xl"
                      >
                        {/* Decorative dots */}
                        <div className="pointer-events-none absolute right-4 top-4 grid grid-cols-3 gap-1 opacity-40">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <span
                              key={i}
                              className="h-1 w-1 rounded-full bg-slate-300"
                            />
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#071f43] text-[#e6b43e]">
                            <Icon size={22} />
                          </div>

                          <div className="min-w-0">
                            <h3 className="pr-5 text-base font-bold leading-6 text-[#0b1f3a]">
                              {department.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              {department.description}
                            </p>

                            <button className="group/btn mt-4 flex items-center gap-2 text-xs font-bold text-[#b17e13]">
                              View Details
                              <ArrowRight
                                size={14}
                                className="transition-transform group-hover/btn:translate-x-1"
                              />
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50">
                  <div className="text-center">
                    <Search
                      size={30}
                      className="mx-auto mb-3 text-slate-300"
                    />

                    <h3 className="font-semibold">
                      No departments found
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Try another search or faculty.
                    </p>
                  </div>
                </div>
              )}

              {/* View all */}
              <div className="mt-8 flex justify-center">
                <button className="group flex items-center gap-2 rounded-xl bg-[#071f43] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d315e]">
                  View All Departments
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#0D0357]">
        <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8">
          <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#e0af3b]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
<section className="bg-[#0D0357]">
  <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8">
    <div className="pointer-events-none absolute -right-20 -top-40 h-96 w-96 rounded-full bg-[#e0af3b]/10 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

    <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
      <div>
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#e3b23c]">
          Start Your Journey
        </div>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Find the right academic path for your future.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Explore our faculties, discover your department and take
          the next step toward building a successful future at
          KKJSTU.
        </p>
      </div>

      <button className="group flex w-fit items-center gap-3 rounded-full bg-[#e5b33e] px-7 py-4 text-sm font-bold text-[#071b36] shadow-xl transition hover:bg-white">
        Explore Admissions

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  </div>
</section>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}