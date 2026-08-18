import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Landmark,
  Library,
  Monitor,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react"

import { SiteHeader } from "../../../components/site-header"
import { SiteFooter } from "../../../components/site-footer"

const stats = [
  {
    value: "2003",
    label: "Established",
    icon: Landmark,
  },
  {
    value: "20+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    value: "3,000+",
    label: "Students",
    icon: Users,
  },
  {
    value: "15+",
    label: "Academic Programs",
    icon: GraduationCap,
  },
]

const institutionalFacts = [
  {
    title: "National University Affiliation",
    description:
      "KACST offers four-year Honours programs under National University affiliation, including BBA, CSE and ECE.",
    icon: GraduationCap,
  },
  {
    title: "Technical Education",
    description:
      "The institution also provides four-year Diploma programs affiliated with the Bangladesh Technical Education Board.",
    icon: Wrench,
  },
  {
    title: "Practical Learning",
    description:
      "The college places strong emphasis on practical learning through laboratories, workshops, technology-enabled classrooms and industrial training.",
    icon: Monitor,
  },
  {
    title: "Student Development",
    description:
      "Academic learning is supported by seminars, cultural activities, sports, study tours and other co-curricular opportunities.",
    icon: Sparkles,
  },
]

const journey = [
  {
    year: "2003",
    eyebrow: "The Beginning",
    title: "KACST begins its educational journey",
    description:
      "Khanjahan Ali College of Science & Technology was established in Khulna with an emphasis on modern education, practical skills and technology-oriented learning.",
  },
  {
    year: "A Growing Institution",
    eyebrow: "Expansion & Learning",
    title: "Academic and technical education grows together",
    description:
      "Over time, KACST developed a broader academic ecosystem combining Honours education, Diploma programs, HSC (BM), and certificate-level learning opportunities.",
  },
  {
    year: "Modern Campus",
    eyebrow: "Infrastructure",
    title: "Facilities built around practical education",
    description:
      "The institution developed laboratories, workshops, classrooms, auditorium and playground facilities through its Technical Training and Research Center.",
  },
  {
    year: "2003–2025",
    eyebrow: "Achievement Era",
    title: "A continuing record of academic and professional development",
    description:
      "According to the college's official information, the institution has strengthened industry collaboration, job-placement initiatives, technology-enabled teaching and opportunities for further study.",
  },
]

const achievements = [
  {
    number: "BDT 15 Cr",
    title: "Modern infrastructure investment",
    description:
      "The official About page states that modern labs, workshops, auditorium and playground facilities were developed at the Technical Training and Research Center at a cost of nearly BDT 15 crore.",
    icon: Building2,
  },
  {
    number: "275",
    title: "Students recruited through job fairs",
    description:
      "The institution reports 275 students recruited through job fairs, alongside MoUs for industrial training and job placement opportunities.",
    icon: Users,
  },
  {
    number: "7 Floors",
    title: "Purpose-built learning environment",
    description:
      "Official college information describes a well-decorated seven-storied building serving a student community of almost 3,000 learners.",
    icon: Library,
  },
  {
    number: "Global",
    title: "Further study opportunities",
    description:
      "The college reports students continuing their studies at institutions including DU, KU, BUET, KUET, CUET, RUET and universities overseas.",
    icon: Target,
  },
]

const facilities = [
  "Modern computer and technology laboratories",
  "Technical workshops for practical training",
  "Smart classrooms with multimedia support",
  "Auditorium and campus activity spaces",
  "Library and digital learning resources",
  "Sports and co-curricular facilities",
  "Industrial training and academic seminars",
  "Online banking-based fee management",
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0D0357]">
      <SiteHeader />

      <main>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative isolate overflow-hidden bg-[#0D0357]">
          {/* Background image overlay */}
          <div className="absolute inset-0 -z-10 select-none">
            <img
              src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"
              alt="KACST Campus Building"
              className="h-full w-full object-cover"
            />
            {/* dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-[#0D0357]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0357] via-transparent to-[#0D0357]/70" />
          </div>

          {/* Decorative layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#F6B900]/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#F8D87D]/10 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.9) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm text-white/55">
              <Link
                href="/"
                className="transition-colors duration-200 hover:text-[#FCD34D]"
              >
                Home
              </Link>

              <ChevronRight className="h-4 w-4 text-white/30" />

              <span className="text-white/85">Our History</span>
            </div>

            <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_.95fr]">
              {/* Hero copy */}
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-white/85 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#F6B900]" />
                  Since 2003 · Khulna, Bangladesh
                </div>

                <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  A journey built on{" "}
                  <span className="text-[#F6B900]">education.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  From its beginning in 2003, Khanjahan Ali College of Science
                  &amp; Technology has focused on practical education,
                  technical skills, academic development and opportunities for
                  students to build a meaningful future.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/about"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F6B900] px-6 py-3.5 font-semibold text-[#0D0357] shadow-[0_12px_35px_rgba(246,185,0,.18)] transition-all duration-200 hover:bg-[#FFC928] hover:shadow-[0_16px_42px_rgba(246,185,0,.25)]"
                  >
                    Discover KACST
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/academics/programs"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:border-[#F6B900]/50 hover:bg-white/[0.08]"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>

              {/* Hero visual */}
              <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_100px_rgba(0,0,0,.24)] backdrop-blur">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0B0754] px-7 py-8 sm:px-10 sm:py-10">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#F6B900]/10 blur-3xl" />

                    <div className="relative">
                      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#F8D87D]">
                        Institutional Legacy
                      </p>

                      <div className="mt-5 flex items-end gap-4">
                        <span className="text-8xl font-semibold leading-none tracking-[-0.08em] text-white sm:text-9xl">
                          23
                        </span>

                        <div className="pb-3">
                          <div className="text-sm uppercase tracking-[0.2em] text-white/45">
                            Years of
                          </div>
                          <div className="text-lg font-semibold text-white">
                            Educational Journey
                          </div>
                        </div>
                      </div>

                      <div className="my-8 h-px bg-white/10" />

                      <p className="max-w-md text-sm leading-7 text-white/60">
                        Established in 2003, KACST continues to combine
                        academic learning with practical and technology-based
                        education in Khulna.
                      </p>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="text-2xl font-semibold text-[#F6B900]">
                            3K+
                          </div>
                          <div className="mt-1 text-xs text-white/50">
                            Students
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="text-2xl font-semibold text-[#F6B900]">
                            15+
                          </div>
                          <div className="mt-1 text-xs text-white/50">
                            Programs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#F6B900]/25 bg-[#0D0357] px-5 py-4 shadow-[0_20px_50px_rgba(5,3,43,.35)] sm:block">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F6B900] text-[#0D0357]">
                      <Award className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Since 2003
                      </p>
                      <p className="text-xs text-white/45">
                        Education · Skills · Future
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================== */}
        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[#DCE7F1] bg-white shadow-[0_20px_60px_rgba(13,3,87,.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className={`group relative p-6 sm:p-7 ${index < stats.length - 1
                      ? "border-b border-[#DCE7F1] lg:border-b-0 lg:border-r"
                      : ""
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#0D0357]">
                        {stat.value}
                      </div>

                      <div className="mt-1 text-sm text-[#64748B]">
                        {stat.label}
                      </div>
                    </div>

                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#FFF4D8] text-[#D79B00] transition-transform duration-200 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* =========================================================
            INTRO / INSTITUTIONAL STORY
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  Our Story
                </span>
              </div>

              <h2 className="max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                Pioneering science &amp; technology education in Khulna.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#64748B]">
                Khanjahan Ali College of Science &amp; Technology was
                established in 2003 and has continued to develop an
                education model where academic knowledge, practical training
                and modern technology come together.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#0D0357]">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#FFF4D8] text-[#D79B00]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                Learning designed for the real world
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {institutionalFacts.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="group rounded-[1.5rem] border border-[#DCE7F1] bg-white p-6 shadow-[0_12px_40px_rgba(7,27,73,.045)] transition-all duration-200 hover:-translate-y-1 hover:border-[#F6B900]/50 hover:shadow-[0_18px_50px_rgba(13,3,87,.08)]"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0D0357] text-[#F6B900] transition-colors duration-200 group-hover:bg-[#120A80]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[#0D0357]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            TIMELINE
        ========================================================== */}
        <section className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  Our Journey
                </span>
                <span className="h-px w-10 bg-[#F6B900]" />
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                From a beginning to a growing institution.
              </h2>

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                The KACST story is defined by gradual academic development,
                practical learning and a continued effort to create better
                opportunities for students.
              </p>
            </div>

            <div className="relative mt-16">
              {/* central line */}
              <div className="absolute bottom-0 left-[18px] top-0 hidden w-px bg-[#DCE7F1] lg:left-1/2 lg:block" />

              <div className="space-y-12 lg:space-y-16">
                {journey.map((item, index) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`relative grid gap-8 lg:grid-cols-2 lg:gap-20 ${index % 2 === 0 ? "" : "lg:text-right"
                      }`}
                  >
                    {/* desktop year */}
                    <div
                      className={`hidden lg:block ${index % 2 === 0
                          ? "lg:pr-20"
                          : "lg:order-2 lg:pl-20"
                        }`}
                    >
                      <div className="inline-flex rounded-full border border-[#F6B900]/30 bg-[#FFF5DB] px-4 py-2 text-sm font-semibold text-[#D79B00]">
                        {item.year}
                      </div>

                      <div
                        className={`mt-4 h-1 w-16 rounded-full bg-[#F6B900] ${index % 2 === 0 ? "" : "ml-auto"
                          }`}
                      />
                    </div>

                    {/* content */}
                    <div
                      className={`relative rounded-[1.5rem] border border-[#DCE7F1] bg-[#F7F8FA] p-7 shadow-[0_10px_35px_rgba(13,3,87,.035)] lg:p-8 ${index % 2 === 0
                          ? "lg:pl-10"
                          : "lg:order-1 lg:pr-10"
                        }`}
                    >
                      {/* connector */}
                      <span className="absolute -left-[7px] top-10 hidden h-3.5 w-3.5 rounded-full border-4 border-white bg-[#F6B900] shadow-[0_0_0_1px_#E3B100] lg:block lg:left-auto lg:right-[-27px]" />

                      <div className="mb-4 flex items-center gap-3 lg:hidden">
                        <span className="rounded-full bg-[#FFF5DB] px-3 py-1.5 text-xs font-semibold text-[#D79B00]">
                          {item.year}
                        </span>
                      </div>

                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#738196]">
                        {item.eyebrow}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0D0357]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRINCIPAL MESSAGE
        ========================================================== */}
        <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E2E8F0] bg-white p-8 shadow-[0_24px_70px_rgba(13,3,87,0.04)] sm:p-12 lg:p-16">
              {/* Decorative glows inside card */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFF5DB]/50 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#E2E8F0]/40 blur-3xl" />

              <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
                {/* Principal image & details */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative group">
                    {/* Ring decoration */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#F6B900] to-[#0D0357] opacity-20 blur-md transition-all duration-300 group-hover:scale-105" />
                    
                    <div className="relative h-48 w-48 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-[0_16px_40px_rgba(13,3,87,0.12)] sm:h-56 sm:w-56">
                      <img
                        src="https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp"
                        alt="Engr. Md. Abul Kalam Azad"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF5DB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D79B00]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F6B900] animate-pulse" />
                      Leadership Message
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#0D0357] sm:text-3xl">
                      Engr. Md. Abul Kalam Azad
                    </h3>

                    <p className="mt-2 text-[10px] font-bold text-[#64748B] uppercase tracking-[0.15em] sm:text-xs">
                      Principal, Khanjahan Ali College of Science &amp; Technology
                    </p>
                  </div>
                </div>

                {/* Quote content */}
                <div className="relative border-t border-[#E2E8F0] pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  <span className="absolute -top-6 left-0 text-7xl font-serif text-[#F6B900]/25 lg:-left-2 lg:-top-12 lg:text-8xl">
                    “
                  </span>

                  <blockquote className="relative text-xl font-medium leading-relaxed tracking-tight text-[#0D0357] sm:text-2xl lg:text-3xl">
                    Among all creations in this world, education plays the most
                    vital role in enhancing human well-being. Traditional
                    education alone is not sufficient to build the nation's
                    backbone; practical engineering knowledge is indispensable.
                  </blockquote>

                  <p className="mt-6 text-sm leading-relaxed text-[#64748B] sm:text-base">
                    At KACST, our aim is to help students develop the practical
                    knowledge, discipline and confidence needed to respond to
                    real societal needs and participate meaningfully in a
                    changing world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ACHIEVEMENTS
        ========================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#F6B900]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                  Milestones &amp; Achievements
                </span>
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                Turning education into opportunity.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                KACST's development has included investments in physical
                infrastructure, employability initiatives, practical
                training and opportunities for further education.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2 text-sm font-medium text-[#64748B]">
                <ShieldCheck className="h-4 w-4 text-[#F59E0B]" />
                Institutional highlights
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {achievements.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#DCE7F1] bg-white p-7 shadow-[0_12px_40px_rgba(7,27,73,.045)]"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FFF5DB] blur-2xl transition-transform duration-300 group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="text-3xl font-semibold tracking-[-0.045em] text-[#0D0357]">
                          {item.number}
                        </div>

                        <h3 className="mt-2 text-lg font-semibold text-[#0D0357]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0D0357] text-[#F6B900]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* =========================================================
            FACILITIES / PHILOSOPHY
        ========================================================== */}
        <section className="bg-[#F7F8FA]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
              <div>
                <div className="rounded-[2rem] bg-[#0D0357] p-8 shadow-[0_25px_70px_rgba(13,3,87,.16)] sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6B900] text-[#0D0357]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8D87D]">
                    Educational Philosophy
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                    Knowledge becomes meaningful when it can be applied.
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/60">
                    KACST's official institutional information repeatedly
                    emphasizes practical training, technology-enabled
                    teaching and the development of skilled manpower suited
                    to domestic and international demand.
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#F6B900]/15" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Academic + Practical
                      </p>
                      <p className="text-xs text-white/45">
                        A student-centered learning approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F6B900]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D79B00]">
                    Built for Learning
                  </span>
                </div>

                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#0D0357] sm:text-5xl">
                  A campus designed around practical education.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B]">
                  From classrooms and laboratories to workshops and
                  co-curricular spaces, KACST's facilities support a broader
                  learning experience beyond traditional lectures.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {facilities.map((facility) => (
                    <div
                      key={facility}
                      className="flex items-start gap-3 rounded-xl border border-[#DCE7F1] bg-white p-4"
                    >
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FFF5DB] text-[#D79B00]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>

                      <span className="text-sm leading-6 text-[#334155]">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="bg-[#F8FAFC] py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0D0357] to-[#1E1B4B] p-10 shadow-[0_30px_80px_rgba(13,3,87,0.18)] sm:p-14 text-center">
              {/* Glow accents */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F6B900]/10 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#120A80]/50 blur-3xl" />

              <div className="relative flex flex-col items-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FCD34D] backdrop-blur-sm">
                  The Journey Continues
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Discover what comes next at KACST
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                  Explore our academic programs, student opportunities and
                  the learning environment that continues the KACST story.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/academics/programs"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#F6B900] px-8 py-4 font-semibold text-[#0D0357] shadow-[0_12px_35px_rgba(246,185,0,0.18)] transition-all duration-200 hover:bg-[#FFC928] hover:-translate-y-0.5"
                  >
                    Explore Programs
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 font-semibold text-white transition-all duration-200 hover:border-[#F6B900]/50 hover:bg-white/[0.08]"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}