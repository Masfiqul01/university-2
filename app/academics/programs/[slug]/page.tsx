import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  GraduationCap,
  Layers,
  Users,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION, lightTileIcon } from "@/lib/icon-colors"
import { PROGRAMS } from "@/lib/data/programs"

const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const program = PROGRAMS.find((item) => item.slug === slug)

  if (!program) return { title: "Program Not Found" }

  return { title: program.title, description: program.description }
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const program = PROGRAMS.find((item) => item.slug === slug)

  if (!program) notFound()

  const Icon = ICON_MAP[program.icon] ?? ICON_MAP.Code2

  const related = PROGRAMS.filter(
    (item) =>
      item.slug !== program.slug &&
      (item.faculty === program.faculty || item.discipline === program.discipline),
  ).slice(0, 3)

  const facts = [
    { label: "Degree Level", value: program.level, icon: GraduationCap },
    { label: "Duration", value: program.duration, icon: Clock },
    { label: "Faculty", value: program.faculty, icon: Users },
    { label: "Discipline", value: program.discipline, icon: Layers },
  ]

  const highlights = [
    "Structured curriculum aligned with the university's academic calendar",
    "Practical learning supported by modern laboratories and facilities",
    "Teaching delivered by qualified and experienced faculty members",
    "Assessment through continuous evaluation and semester examinations",
    "Guidance on higher study and professional career pathways",
  ]

  return (
    <div className="min-h-screen bg-[#fafafb] text-slate-800">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[65vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span>›</span>
              <Link href="/academics" className="transition hover:text-white">
                Academics
              </Link>
              <span>›</span>
              <Link
                href="/academics/programs"
                className="transition hover:text-white"
              >
                Programs
              </Link>
              <span>›</span>
              <span className="text-white">{program.title}</span>
            </div>

            <span className="mb-3 inline-block rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              {program.level}
            </span>

            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {program.title}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              {program.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admissions/apply"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 text-xs font-bold text-[#17135f] shadow-md transition hover:bg-amber-300"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
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

      {/* KEY FACTS */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => {
              const FactIcon = fact.icon

              return (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50/80 text-[#17135f]">
                    <FactIcon className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {fact.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-snug text-[#17135f]">
                    {fact.value}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] sm:p-10">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${program.iconBg} ${program.iconColor} ${ICON_MOTION}`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-indigo-900">
              Program Overview
            </p>

            <h2 className="mt-2 font-serif text-2xl font-bold text-[#17135f] sm:text-3xl">
              About this program
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {program.description} Offered under the {program.faculty}, this{" "}
              {program.level.toLowerCase()} program runs for {program.duration}{" "}
              and combines academic study with practical, discipline-focused
              learning in {program.discipline}.
            </p>

            <h3 className="mt-8 font-serif text-lg font-bold text-[#17135f]">
              What you can expect
            </h3>

            <div className="mt-4 space-y-3">
              {highlights.map((item, index) => {
                const color = lightTileIcon(index)

                return (
                  <div
                    key={item}
                    className="group/point flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${color.bg} ${color.text} transition-all duration-300 group-hover/point:scale-125`}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>

                    <span>{item}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ADMISSION CARD */}
          <div className="rounded-2xl border border-slate-100 bg-[#f7f8fe] p-8">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#17135f] shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </div>

            <h3 className="font-serif text-lg font-bold text-[#17135f]">
              Interested in applying?
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Review the admission requirements for this level of study, then
              submit your application through the online form.
            </p>

            <div className="mt-5 space-y-2.5">
              <Link
                href="/admissions/requirements"
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-[#17135f] transition hover:border-slate-300"
              >
                Admission Requirements
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="/academics/programs"
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-[#17135f] transition hover:border-slate-300"
              >
                All Programs
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <Link
              href="/admissions/apply"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#110c59] px-4 py-3 text-xs font-semibold text-white transition hover:bg-opacity-90"
            >
              Start Application
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED PROGRAMS */}
      {related.length > 0 && (
        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-900">
              Related Programs
            </p>

            <h2 className="mt-1 font-serif text-2xl font-bold text-[#17135f] sm:text-3xl">
              You might also consider
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => {
                const RelatedIcon = ICON_MAP[item.icon] ?? ICON_MAP.Code2

                return (
                  <article
                    key={item.slug}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                  >
                    <div>
                      <div
                        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor} ${ICON_MOTION}`}
                      >
                        <RelatedIcon className="h-5 w-5" />
                      </div>

                      <span className="mb-3 inline-block rounded-full bg-blue-50/80 px-3 py-1 text-[11px] font-medium text-blue-600">
                        {item.level}
                      </span>

                      <h3 className="font-serif text-lg font-bold leading-snug text-[#17135f]">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                      <div className="text-slate-400">
                        <span>{item.duration}</span>
                        <span className="mx-1.5">•</span>
                        <span>Full Time</span>
                      </div>

                      <Link
                        href={`/academics/programs/${item.slug}`}
                        className="flex items-center gap-1 font-semibold text-[#17135f] transition-colors hover:text-indigo-600"
                      >
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
