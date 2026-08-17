"use client";

import React, { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import {
  Atom,
  Award,
  Building2,
  Calculator,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  Microscope,
  Phone,
  Search,
  Settings,
  Users,
  X,
} from "lucide-react";

type Faculty = {
  name: string;
  dean: string;
  phone: string;
  email: string;
  departments: number;
  disciplines: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

type Department = {
  name: string;
  faculty: string;
  discipline: string;
  degrees: string;
  programs: string;
  phone: string;
  email: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

const faculties: Faculty[] = [
  {
    name: "Faculty of Engineering",
    dean: "Dean's Office",
    phone: "+88 041 7698461-101",
    email: "eng.dean@kkjstu.ac.bd",
    departments: 8,
    disciplines:
      "Civil, Mechanical, EEE, CSE, Industrial, Architecture, Marine, Textile",
    icon: Settings,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Faculty of Science",
    dean: "Dean's Office",
    phone: "+88 041 7698461-201",
    email: "science.dean@kkjstu.ac.bd",
    departments: 6,
    disciplines:
      "Physics, Chemistry, Mathematics, Statistics, Biotechnology, Environmental Science",
    icon: Atom,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    name: "Faculty of Business Studies",
    dean: "Dean's Office",
    phone: "+88 041 7698461-301",
    email: "business.dean@kkjstu.ac.bd",
    departments: 4,
    disciplines:
      "Accounting, Finance, Marketing, Management, Economics",
    icon: Calculator,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    name: "Faculty of Humanities & Social Science",
    dean: "Dean's Office",
    phone: "+88 041 7698461-401",
    email: "dean.hss@kkjstu.ac.bd",
    departments: 5,
    disciplines:
      "English, Economics, Sociology, History, Philosophy",
    icon: Building2,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    name: "Faculty of Technology",
    dean: "Dean's Office",
    phone: "+88 041 7698461-501",
    email: "dean.tech@kkjstu.ac.bd",
    departments: 7,
    disciplines:
      "Computer Science, IT, Software Engineering, Data Science, Telecommunication, Electronics",
    icon: Cpu,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const departments: Department[] = [
  {
    name: "Department of Computer Science & Engineering",
    faculty: "Faculty of Engineering",
    discipline: "Computer Science & Engineering",
    degrees: "BSc, MSc, PhD",
    programs: "6 Programs",
    phone: "+88 041 7698461-105",
    email: "cse@kkjstu.ac.bd",
    icon: Code2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Department of Physics",
    faculty: "Faculty of Science",
    discipline: "Physical Sciences",
    degrees: "BSc, MSc, PhD",
    programs: "4 Programs",
    phone: "+88 041 7698461-205",
    email: "physics@kkjstu.ac.bd",
    icon: Atom,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    name: "Department of Business Administration",
    faculty: "Faculty of Business Studies",
    discipline: "Business & Management",
    degrees: "BBA, MBA, PhD",
    programs: "5 Programs",
    phone: "+88 041 7698461-305",
    email: "ba@kkjstu.ac.bd",
    icon: Calculator,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    name: "Department of English",
    faculty: "Faculty of Humanities & Social Science",
    discipline: "Language & Literature",
    degrees: "BA, MA",
    programs: "3 Programs",
    phone: "+88 041 7698461-405",
    email: "english@kkjstu.ac.bd",
    icon: Building2,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    name: "Department of Information Technology",
    faculty: "Faculty of Technology",
    discipline: "Information Technology",
    degrees: "BSc, MSc",
    programs: "4 Programs",
    phone: "+88 041 7698461-505",
    email: "it@kkjstu.ac.bd",
    icon: CircuitBoard,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const stats = [
  {
    value: "5",
    label: "Faculties",
    icon: GraduationCap,
  },
  {
    value: "30+",
    label: "Departments",
    icon: Settings,
  },
  {
    value: "100+",
    label: "Academic Programs",
    icon: Calculator,
  },
  {
    value: "650+",
    label: "Faculty Members",
    icon: Building2,
  },
  {
    value: "8,000+",
    label: "Students",
    icon: Users,
  },
];

export default function FacultiesDepartmentsPage() {
  const [facultyFilter, setFacultyFilter] =
    useState("All Faculties");

  const [disciplineFilter, setDisciplineFilter] =
    useState("All Disciplines");

  const [degreeFilter, setDegreeFilter] =
    useState("All Degree Levels");

  const [search, setSearch] = useState("");

  const [mobileFilters, setMobileFilters] =
    useState(false);

  const filteredDepartments = useMemo(() => {
    return departments.filter((department) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        department.name.toLowerCase().includes(searchText) ||
        department.discipline.toLowerCase().includes(searchText);

      const matchesFaculty =
        facultyFilter === "All Faculties" ||
        department.faculty === facultyFilter;

      const matchesDiscipline =
        disciplineFilter === "All Disciplines" ||
        department.discipline === disciplineFilter;

      let matchesDegree = true;

      if (degreeFilter !== "All Degree Levels") {
        if (degreeFilter === "Undergraduate") {
          matchesDegree =
            department.degrees.includes("BSc") ||
            department.degrees.includes("BBA") ||
            department.degrees.includes("BA");
        }

        if (degreeFilter === "Postgraduate") {
          matchesDegree =
            department.degrees.includes("MSc") ||
            department.degrees.includes("MBA") ||
            department.degrees.includes("MA");
        }

        if (degreeFilter === "PhD") {
          matchesDegree = department.degrees.includes("PhD");
        }
      }

      return (
        matchesSearch &&
        matchesFaculty &&
        matchesDiscipline &&
        matchesDegree
      );
    });
  }, [
    search,
    facultyFilter,
    disciplineFilter,
    degreeFilter,
  ]);

  const clearFilters = () => {
    setSearch("");
    setFacultyFilter("All Faculties");
    setDisciplineFilter("All Disciplines");
    setDegreeFilter("All Degree Levels");
  };

  return (
    <>
      {/* =====================================================
          EXISTING KKJSTU HEADER
      ====================================================== */}
      <SiteHeader />

      <main className="min-h-screen bg-white text-[#071b49]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-[390px] overflow-hidden bg-[#061a46]">
          <img
            src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"
            alt="KACST campus"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#061a46]/95 via-[#061a46]/75 to-[#061a46]/30" />

          <div className="relative mx-auto flex min-h-[390px] max-w-[1180px] items-center px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-[650px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#f6b900]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f6b900]">
                  Our Faculties & Departments
                </span>
              </div>

              <h1 className="font-serif text-[40px] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-[48px] lg:text-[55px]">
                Diverse Disciplines.
                <br />
                Unlimited Possibilities.
              </h1>

              <p className="mt-5 max-w-[590px] text-[14px] leading-7 text-white/85 sm:text-[15px]">
                Explore our faculties, departments and
                programs designed to inspire learning,
                advance research and prepare you for a
                purpose-driven future.
              </p>

              <div className="mt-8 flex flex-wrap gap-7 sm:gap-9">
                <HeroStat
                  icon={GraduationCap}
                  value="5"
                  label="Faculties"
                />

                <HeroStat
                  icon={Settings}
                  value="30+"
                  label="Departments"
                />

                <HeroStat
                  icon={Building2}
                  value="100+"
                  label="Programs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACULTIES
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Our Faculties"
              title="Explore Our Faculties"
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {faculties.map((faculty) => (
                <FacultyCard
                  key={faculty.name}
                  faculty={faculty}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}
        <section className="pb-14 sm:pb-18 lg:pb-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <div className="grid overflow-hidden rounded-xl border border-[#dbe8f5] bg-[#edf6ff] sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={[
                      "flex items-center gap-4 px-5 py-5",
                      index !== stats.length - 1
                        ? "border-b border-[#d7e5f2] lg:border-b-0 lg:border-r"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#102b68] shadow-sm">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                      />
                    </div>

                    <div>
                      <div className="font-serif text-[25px] font-bold leading-none text-[#071b49]">
                        {stat.value}
                      </div>

                      <div className="mt-1 text-[11px] font-medium text-[#61708a]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            DEPARTMENT DIRECTORY
        ====================================================== */}
        <section className="bg-[#f5f9fd] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Department Directory"
              title="Find Departments & Programs"
            />

            {/* Desktop filter */}
            <div className="mt-9 hidden rounded-xl border border-[#dce7f1] bg-white p-4 shadow-[0_5px_24px_rgba(15,45,90,0.05)] lg:block">
              <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_auto_auto] gap-3">
                <SearchInput
                  value={search}
                  onChange={setSearch}
                />

                <SelectBox
                  value={facultyFilter}
                  onChange={setFacultyFilter}
                  options={[
                    "All Faculties",
                    ...faculties.map(
                      (faculty) => faculty.name
                    ),
                  ]}
                />

                <SelectBox
                  value={disciplineFilter}
                  onChange={setDisciplineFilter}
                  options={[
                    "All Disciplines",
                    "Computer Science & Engineering",
                    "Physical Sciences",
                    "Business & Management",
                    "Language & Literature",
                    "Information Technology",
                  ]}
                />

                <SelectBox
                  value={degreeFilter}
                  onChange={setDegreeFilter}
                  options={[
                    "All Degree Levels",
                    "Undergraduate",
                    "Postgraduate",
                    "PhD",
                  ]}
                />

                <button
                  type="button"
                  onClick={() => {}}
                  className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#071b49] px-5 text-[12px] font-semibold text-white transition hover:bg-[#102b68]"
                >
                  <Search size={15} />
                  Search
                </button>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center justify-center gap-1.5 whitespace-nowrap px-2 text-[11px] font-medium text-[#53627a] hover:text-[#071b49]"
                >
                  <span className="text-[16px]">
                    ↻
                  </span>
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Mobile filter */}
            <button
              type="button"
              onClick={() => setMobileFilters(true)}
              className="mt-8 flex w-full items-center justify-between rounded-xl border border-[#dce7f1] bg-white px-4 py-4 text-sm font-semibold shadow-sm lg:hidden"
            >
              <span className="flex items-center gap-2">
                <Search size={17} />
                Search & Filter Departments
              </span>

              <ChevronDown size={18} />
            </button>

            {/* Mobile filter drawer */}
            {mobileFilters && (
              <div className="fixed inset-0 z-[100] lg:hidden">
                <div
                  className="absolute inset-0 bg-[#071b49]/50"
                  onClick={() =>
                    setMobileFilters(false)
                  }
                />

                <div className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white p-5 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold">
                      Find a Department
                    </h3>

                    <button
                      type="button"
                      onClick={() =>
                        setMobileFilters(false)
                      }
                      className="rounded-full bg-[#f1f5f9] p-2"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <SearchInput
                      value={search}
                      onChange={setSearch}
                    />

                    <SelectBox
                      value={facultyFilter}
                      onChange={setFacultyFilter}
                      options={[
                        "All Faculties",
                        ...faculties.map(
                          (faculty) => faculty.name
                        ),
                      ]}
                    />

                    <SelectBox
                      value={disciplineFilter}
                      onChange={setDisciplineFilter}
                      options={[
                        "All Disciplines",
                        "Computer Science & Engineering",
                        "Physical Sciences",
                        "Business & Management",
                        "Language & Literature",
                        "Information Technology",
                      ]}
                    />

                    <SelectBox
                      value={degreeFilter}
                      onChange={setDegreeFilter}
                      options={[
                        "All Degree Levels",
                        "Undergraduate",
                        "Postgraduate",
                        "PhD",
                      ]}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setMobileFilters(false)
                      }
                      className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-[#071b49] font-semibold text-white"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Department table */}
            <div className="mt-9 overflow-hidden rounded-xl border border-[#dce7f1] bg-white shadow-[0_5px_24px_rgba(15,45,90,0.05)]">
              {/* Table header */}
              <div className="hidden grid-cols-[2.1fr_1.2fr_1.4fr_1fr_0.8fr_1.35fr] bg-[#071b49] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white md:grid">
                <div>Department</div>
                <div>Faculty</div>
                <div>Discipline</div>
                <div>Degree Levels</div>
                <div>Programs</div>
                <div>Contact</div>
              </div>

              {filteredDepartments.length > 0 ? (
                filteredDepartments.map(
                  (department) => (
                    <DepartmentRow
                      key={department.name}
                      department={department}
                    />
                  )
                )
              ) : (
                <div className="px-6 py-16 text-center">
                  <Search
                    className="mx-auto text-[#94a3b8]"
                    size={32}
                  />

                  <h3 className="mt-4 font-serif text-xl font-bold">
                    No departments found
                  </h3>

                  <p className="mt-2 text-sm text-[#64748b]">
                    Try changing your search or filter
                    options.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 pt-5 text-[11px] text-[#69788e] sm:flex-row sm:items-center sm:justify-between">
              <span>
                Showing {filteredDepartments.length} of
                30+ departments
              </span>

              <div className="flex items-center gap-1">
                <PaginationButton>
                  <ChevronLeft size={14} />
                </PaginationButton>

                <PaginationButton active>
                  1
                </PaginationButton>

                <PaginationButton>
                  2
                </PaginationButton>

                <PaginationButton>
                  3
                </PaginationButton>

                <PaginationButton>
                  ...
                </PaginationButton>

                <PaginationButton>
                  6
                </PaginationButton>

                <PaginationButton>
                  <ChevronRight size={14} />
                </PaginationButton>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACULTY SPOTLIGHT
        ====================================================== */}
        <section className="bg-[#edf6ff] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow>
                  Faculty Spotlight
                </Eyebrow>

                <h2 className="mt-3 max-w-[540px] font-serif text-[34px] font-bold leading-[1.08] text-[#071b49] sm:text-[42px]">
                  Advancing Knowledge.
                  <br />
                  Shaping the Future.
                </h2>

                <p className="mt-5 max-w-[530px] text-[13px] leading-7 text-[#58677d] sm:text-[14px]">
                  Our faculties are driven by a shared
                  commitment to academic excellence,
                  impactful research and innovation.
                  Together, they empower students to
                  think critically, solve real-world
                  problems and build a better tomorrow.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-3">
                  <SpotlightPoint
                    icon={GraduationCap}
                    title="Experienced Faculty"
                    text="Highly qualified and industry connected."
                  />

                  <SpotlightPoint
                    icon={Microscope}
                    title="Research & Innovation"
                    text="Driving discoveries that create real impact."
                  />

                  <SpotlightPoint
                    icon={Award}
                    title="Global Perspective"
                    text="Preparing graduates for a global future."
                  />
                </div>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#071b49] px-6 py-3 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#102b68]"
                >
                  Meet Our Faculty
                  <ChevronRight size={15} />
                </button>
              </div>

              <div className="overflow-hidden rounded-xl border border-white shadow-[0_15px_45px_rgba(15,45,90,0.10)]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="KACST faculty member teaching students"
                  className="h-[330px] w-full object-cover sm:h-[410px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#061a46] py-14 sm:py-18 lg:py-20">
          {/* subtle architectural background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <Building2 className="absolute -bottom-20 left-5 h-[350px] w-[350px]" />

            <Building2 className="absolute -bottom-20 right-5 h-[320px] w-[320px]" />
          </div>

          <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
            <div className="mx-auto mb-4 h-[2px] w-8 bg-[#f6b900]" />

            <h2 className="font-serif text-[34px] font-bold leading-tight text-white sm:text-[43px]">
              Your Journey Starts Here
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[13px] leading-6 text-white/75 sm:text-[14px]">
              Explore our programs, connect with our faculty
              and shape your future with KKJSTU.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f6b900] px-6 py-3.5 text-[12px] font-bold text-[#071b49] shadow-lg transition hover:bg-[#ffc928]"
              >
                Explore Academic Programs
                <ChevronRight size={15} />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 text-[12px] font-semibold text-white transition hover:bg-white/10"
              >
                Meet Our Faculty
                <ChevronRight size={15} />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-6 py-3.5 text-[12px] font-semibold text-white transition hover:bg-white/10"
              >
                Contact Department
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          EXISTING KKJSTU FOOTER
      ====================================================== */}
      <SiteFooter />
    </>
  );
}

/* =============================================================
   HERO STAT
============================================================= */

function HeroStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={25}
        strokeWidth={1.5}
        className="text-[#f6b900]"
      />

      <div>
        <div className="font-serif text-[24px] font-bold leading-none text-white">
          {value}
        </div>

        <div className="mt-1 text-[10px] text-white/70">
          {label}
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   SECTION HEADING
============================================================= */

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-2 font-serif text-[32px] font-bold leading-tight text-[#071b49] sm:text-[39px]">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-9 bg-[#f6b900]" />
    </div>
  );
}

/* =============================================================
   EYEBROW
============================================================= */

function Eyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#d79b00]">
      {children}
    </div>
  );
}

/* =============================================================
   FACULTY CARD
============================================================= */

function FacultyCard({
  faculty,
}: {
  faculty: Faculty;
}) {
  const Icon = faculty.icon;

  return (
    <article className="group flex min-h-[395px] flex-col rounded-lg border border-[#dfe7ef] bg-white p-5 shadow-[0_4px_18px_rgba(15,45,90,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#cbd8e6] hover:shadow-[0_12px_30px_rgba(15,45,90,0.08)]">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${faculty.iconBg} ${faculty.iconColor}`}
      >
        <Icon
          size={27}
          strokeWidth={1.5}
        />
      </div>

      <h3 className="mt-6 min-h-[54px] font-serif text-[18px] font-bold leading-[1.15] text-[#071b49]">
        {faculty.name}
      </h3>

      <div className="mt-5">
        <div className="text-[9px] font-bold uppercase tracking-wide text-[#071b49]">
          {faculty.dean}
        </div>

        <div className="mt-2 space-y-1 text-[9px] leading-4 text-[#64748b]">
          <div className="flex items-center gap-1.5">
            <Phone size={10} />
            {faculty.phone}
          </div>

          <div className="flex items-start gap-1.5 break-all">
            <Mail
              size={10}
              className="mt-0.5 shrink-0"
            />
            {faculty.email}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-[9px] font-bold uppercase tracking-wide text-[#071b49]">
          Departments
        </div>

        <p className="mt-1 text-[12px] font-semibold text-[#102b68]">
          {faculty.departments} Departments
        </p>
      </div>

      <div className="mt-4">
        <div className="text-[9px] font-bold uppercase tracking-wide text-[#071b49]">
          Key Disciplines
        </div>

        <p className="mt-1 line-clamp-3 text-[9px] leading-4 text-[#65748a]">
          {faculty.disciplines}
        </p>
      </div>

      <div className="mt-auto border-t border-[#edf1f5] pt-4">
        <button
          type="button"
          className="group/btn flex items-center gap-1 text-[10px] font-bold text-[#071b49]"
        >
          View Faculty

          <ChevronRight
            size={13}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}

/* =============================================================
   SEARCH INPUT
============================================================= */

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <Search
        size={15}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b99ac]"
      />

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search departments..."
        className="h-11 w-full rounded-lg border border-[#d9e2eb] bg-white pl-10 pr-4 text-[11px] outline-none transition placeholder:text-[#9aa6b6] focus:border-[#102b68] focus:ring-2 focus:ring-[#102b68]/10"
      />
    </div>
  );
}

/* =============================================================
   SELECT
============================================================= */

function SelectBox({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-11 w-full appearance-none rounded-lg border border-[#d9e2eb] bg-white px-3.5 pr-9 text-[11px] text-[#334155] outline-none focus:border-[#102b68] focus:ring-2 focus:ring-[#102b68]/10"
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#738196]"
      />
    </div>
  );
}

/* =============================================================
   DEPARTMENT ROW
============================================================= */

function DepartmentRow({
  department,
}: {
  department: Department;
}) {
  const Icon = department.icon;

  return (
    <div className="border-b border-[#edf1f5] last:border-b-0">
      {/* Desktop */}
      <div className="hidden min-h-[78px] grid-cols-[2.1fr_1.2fr_1.4fr_1fr_0.8fr_1.35fr] items-center gap-3 px-5 py-3 md:grid">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${department.iconBg} ${department.iconColor}`}
          >
            <Icon
              size={17}
              strokeWidth={1.6}
            />
          </div>

          <div className="text-[11px] font-bold leading-4 text-[#102b68]">
            {department.name}
          </div>
        </div>

        <div className="text-[10px] leading-4 text-[#64748b]">
          {department.faculty}
        </div>

        <div className="text-[10px] leading-4 text-[#64748b]">
          {department.discipline}
        </div>

        <div className="text-[10px] text-[#64748b]">
          {department.degrees}
        </div>

        <div className="text-[10px] font-semibold text-[#102b68]">
          {department.programs}
        </div>

        <div className="space-y-1 text-[8px] leading-3 text-[#64748b]">
          <div className="flex items-center gap-1">
            <Phone size={9} />
            {department.phone}
          </div>

          <div className="flex items-center gap-1">
            <Mail size={9} />
            {department.email}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="p-4 md:hidden">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${department.iconBg} ${department.iconColor}`}
          >
            <Icon
              size={19}
              strokeWidth={1.6}
            />
          </div>

          <div>
            <h3 className="text-[12px] font-bold leading-5 text-[#102b68]">
              {department.name}
            </h3>

            <p className="mt-1 text-[9px] text-[#64748b]">
              {department.faculty}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-[#f8fafc] p-3">
          <InfoItem
            label="Discipline"
            value={department.discipline}
          />

          <InfoItem
            label="Degree Levels"
            value={department.degrees}
          />

          <InfoItem
            label="Programs"
            value={department.programs}
          />

          <InfoItem
            label="Contact"
            value={department.email}
          />
        </div>
      </div>
    </div>
  );
}

/* =============================================================
   INFO ITEM
============================================================= */

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[8px] font-bold uppercase tracking-wide text-[#8b98a9]">
        {label}
      </div>

      <div className="mt-1 text-[9px] leading-4 text-[#334155]">
        {value}
      </div>
    </div>
  );
}

/* =============================================================
   PAGINATION
============================================================= */

function PaginationButton({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-[10px] font-semibold transition ${
        active
          ? "border-[#071b49] bg-[#071b49] text-white"
          : "border-[#dce4ec] bg-white text-[#64748b] hover:border-[#102b68] hover:text-[#071b49]"
      }`}
    >
      {children}
    </button>
  );
}

/* =============================================================
   SPOTLIGHT POINT
============================================================= */

function SpotlightPoint({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-2.5">
      <div className="mt-0.5 text-[#102b68]">
        <Icon
          size={19}
          strokeWidth={1.5}
        />
      </div>

      <div>
        <h4 className="text-[9px] font-bold leading-4 text-[#102b68]">
          {title}
        </h4>

        <p className="mt-0.5 text-[8px] leading-4 text-[#718096]">
          {text}
        </p>
      </div>
    </div>
  );
}