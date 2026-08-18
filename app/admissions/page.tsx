import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Layers,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PROGRAMS } from "@/lib/data/programs"

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Explore admission pathways, eligibility, key dates and the application process at Khanjahan Ali College of Science & Technology.",
}

const highlights = [
  {
    title: "Recognised Programs",
    description:
      "Undergraduate, postgraduate, doctoral and diploma programs across engineering, science, business and humanities.",
    icon: GraduationCap,
  },
  {
    title: "Clear Requirements",
    description:
      "Published eligibility criteria and document checklists so applicants know exactly what to prepare.",
    icon: FileCheck2,
  },
  {
    title: "Practical Learning",
    description:
      "Laboratories, workshops and technology-enabled classrooms that connect study with real-world practice.",
    icon: Layers,
  },
  {
    title: "Student Support",
    description:
      "Academic advising, scholarship information and guidance available throughout the admission process.",
    icon: HeartHandshake,
  },
]

const pathways = [
  {
    title: "Undergraduate Admission",
    description:
      "Four-year Honours and Bachelor programs for students completing higher secondary education.",
    href: "/admissions/undergraduate",
    icon: GraduationCap,
  },
  {
    title: "Postgraduate Admission",
    description:
      "Master's and doctoral study for graduates seeking advanced specialisation and research.",
    href: "/admissions/postgraduate",
    icon: UserCheck,
  },
  {
    title: "Admission Requirements",
    description:
      "Eligibility conditions, required documents and programme-specific admission criteria.",
    href: "/admissions/requirements",
    icon: ClipboardCheck,
  },
  {
    title: "Apply Online",
    description:
      "Complete the online application form and submit your details to the admission office.",
    href: "/admissions/apply",
    icon: Send,
  },
]

const process = [
  {
    step: "01",
    title: "Review Eligibility",
    description:
      "Check the academic requirements for your chosen level of study and programme.",
  },
  {
    step: "02",
    title: "Prepare Documents",
    description:
      "Collect academic certificates, transcripts, identification and photographs.",
  },
  {
    step: "03",
    title: "Submit Application",
    description:
      "Complete the online application form with accurate personal and academic details.",
  },
  {
    step: "04",
    title: "Assessment & Confirmation",
    description:
      "Applications are assessed and shortlisted applicants are contacted for enrolment.",
  },
]

export default function AdmissionsPage() {
  const levelCounts = [
    { label: "Undergraduate", value: PROGRAMS.filter((p) => p.level === "Undergraduate").length },
    { label: "Postgraduate", value: PROGRAMS.filter((p) => p.level === "Postgraduate").length },
    { label: "PhD / Doctoral", value: PROGRAMS.filter((p) => p.level === "PhD / Doctoral").length },
    { label: "Diploma", value: PROGRAMS.filter((p) => p.level === "Diploma").length },
  ]

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#082746]">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border-[70px] border-[#d9a82e]" />
          <div className="absolute -bottom-56 left-[5%] h-[500px] w-[500px] rounded-full border border-white" />
          <div className="absolute right-[25%] top-[40%] h-32 w-32 border border-[#d9a82e]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2b83b]">
                Admissions
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Begin Your Application.
              <br />
              Build Your Future.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Discover the programs, requirements and application steps that
              lead to a place at Khanjahan Ali College of Science &amp;
              Technology.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/admissions/requirements"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                View Requirements
                <ClipboardCheck className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Home
          </Link>

          <span className="mx-3 text-slate-300">/</span>

          <span className="text-xs font-semibold text-[#102c4c]">Admissions</span>
        </div>
      </div>

      {/* =========================================================
          PROGRAM COUNTS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-[#dbe8f5] bg-[#edf6ff] sm:grid-cols-2 lg:grid-cols-4">
          {levelCounts.map((item, index) => (
            <div
              key={item.label}
              className={[
                "px-6 py-6",
                index !== levelCounts.length - 1
                  ? "border-b border-[#d7e5f2] lg:border-b-0 lg:border-r"
                  : "",
              ].join(" ")}
            >
              <div className="font-serif text-[30px] font-bold leading-none text-[#071b49]">
                {item.value}
              </div>

              <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-[#61708a]">
                {item.label} Programs
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          WHY KACST
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              Why Apply to KACST
            </span>
          </div>

          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            An institution built around student outcomes
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#cfe0eb] bg-[#edf5fb] text-[#175783]">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ADMISSION PATHWAYS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d9a82e]" />

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
            Admission Pathways
          </span>
        </div>

        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
          Where would you like to start?
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pathways.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-slate-200 bg-white p-8 shadow-[0_5px_24px_rgba(15,45,90,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#cbd8e6] hover:shadow-[0_12px_30px_rgba(15,45,90,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#cfe0eb] bg-[#edf5fb] text-[#175783]">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#175783]">
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* =========================================================
          APPLICATION PROCESS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              How to Apply
            </span>
          </div>

          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            Four steps to your application
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="border border-slate-200 bg-white p-6"
              >
                <span className="font-serif text-3xl font-bold text-[#d9a82e]">
                  {item.step}
                </span>

                <h3 className="mt-4 font-serif text-lg font-semibold text-[#092c4d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12476d]"
            >
              Start Your Application
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/academics/calendar"
              className="inline-flex items-center justify-center gap-2 border border-[#cfe1ee] bg-white px-6 py-3.5 text-sm font-semibold text-[#092c4d] transition hover:border-[#9dbdd6]"
            >
              <CalendarDays className="h-4 w-4" />
              Academic Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          HELP CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 py-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden bg-[#082746] shadow-[0_18px_55px_rgba(8,39,70,0.16)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative flex min-h-[260px] flex-col justify-center px-7 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center border border-[#d9a82e]/50 text-[#d9a82e]">
                  <ShieldCheck className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  Admission Support
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Questions about your application?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                The admission office can help with eligibility, required
                documents and the online application process.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex min-w-[180px] items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Contact Admissions
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/academics/programs"
                className="inline-flex min-w-[170px] items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50"
              >
                Browse Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
