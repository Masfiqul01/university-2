import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ArrowRight, BookOpen, Building2, Clock3, GraduationCap } from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"
import { PROGRAMS, HERO_IMAGE, BACKGROUND_PATTERN_IMAGE, type Program } from "@/lib/data/programs"
import { PROGRAMS as ROOT_PROGRAMS } from "@/lib/data"

type RootProgram = (typeof ROOT_PROGRAMS)[number]

function isFullProgram(item: Program | RootProgram): item is Program {
  return "icon" in item
}

function findFullProgram(slug: string) {
  return PROGRAMS.find((p) => p.slug === slug)
}

function findRootProgram(slug: string) {
  return ROOT_PROGRAMS.find((p) => p.slug === slug)
}

function relatedFor<T extends { slug: string; faculty: string; level: string }>(list: T[], current: T): T[] {
  const sameFaculty = list.filter((p) => p.slug !== current.slug && p.faculty === current.faculty)
  if (sameFaculty.length >= 3) return sameFaculty.slice(0, 3)
  const sameFacultySlugs = new Set(sameFaculty.map((p) => p.slug))
  const sameLevel = list.filter(
    (p) => p.slug !== current.slug && p.level === current.level && !sameFacultySlugs.has(p.slug),
  )
  return [...sameFaculty, ...sameLevel].slice(0, 3)
}

export function generateStaticParams() {
  const slugs = new Set<string>()
  PROGRAMS.forEach((p) => slugs.add(p.slug))
  ROOT_PROGRAMS.forEach((p) => slugs.add(p.slug))
  return Array.from(slugs, (slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const full = findFullProgram(slug)
  const root = full ? undefined : findRootProgram(slug)

  if (!full && !root) return { title: "Program Not Found" }

  const title = full ? full.title : root!.title
  const description = full
    ? full.description
    : `${root!.title} is offered under ${root!.faculty}, a ${root!.level.toLowerCase()} program with a duration of ${root!.duration}.`

  return { title, description }
}

function Breadcrumb({ title }: { title: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>
      <span>›</span>
      <Link href="/academics" className="transition hover:text-white">
        Academics
      </Link>
      <span>›</span>
      <Link href="/academics/programs" className="transition hover:text-white">
        Programs
      </Link>
      <span>›</span>
      <span className="text-white">{title}</span>
    </div>
  )
}

function RelatedProgramCard({ item }: { item: Program | RootProgram }) {
  let RelIcon = ICON_MAP.GraduationCap
  let iconBg = "bg-white"
  let iconColor = "text-[#17135f]"

  if (isFullProgram(item)) {
    RelIcon = ICON_MAP[item.icon] ?? ICON_MAP.GraduationCap
    iconBg = item.iconBg
    iconColor = item.iconColor
  }

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <div>
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
          <RelIcon className="h-5 w-5" />
        </div>
        <span className="mb-3 inline-block rounded-full bg-blue-50/80 px-3 py-1 text-[11px] font-medium text-blue-600">
          {item.level}
        </span>
        <h3 className="font-serif text-base font-bold leading-snug text-[#17135f]">{item.title}</h3>
        <p className="mt-2 text-xs text-slate-500">{item.faculty}</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
        <span className="text-slate-400">{item.duration}</span>
        <Link
          href={`/academics/programs/${item.slug}`}
          className="flex items-center gap-1 font-semibold text-[#17135f] transition-colors hover:text-indigo-600"
        >
          View
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const full = findFullProgram(slug)
  const root = full ? undefined : findRootProgram(slug)

  if (!full && !root) notFound()

  const title = full ? full.title : root!.title
  const level = full ? full.level : root!.level
  const faculty = full ? full.faculty : root!.faculty
  const duration = full ? full.duration : root!.duration
  const discipline = full?.discipline
  const description = full
    ? full.description
    : `${root!.title} is offered under ${root!.faculty}. This ${root!.level.toLowerCase()} program has a duration of ${root!.duration}.`

  const IconComponent = full ? ICON_MAP[full.icon] ?? ICON_MAP.GraduationCap : ICON_MAP.GraduationCap
  const iconBg = full?.iconBg ?? "bg-white/10"
  const iconColor = full?.iconColor ?? "text-amber-400"

  const related: (Program | RootProgram)[] = full
    ? relatedFor(PROGRAMS, full)
    : relatedFor(ROOT_PROGRAMS, root!)

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fafafb] text-slate-800">
        {/* HERO SECTION */}
        <section className="relative min-h-[380px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b075b] via-[#111064]/95 to-[#111064]/30" />

          <div className="relative mx-auto flex min-h-[380px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <Breadcrumb title={title} />

              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">{level}</p>

              <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                {[faculty, discipline, duration].filter(Boolean).join(" • ")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/admissions/apply"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-amber-400 px-6 text-xs font-bold text-[#17135f] shadow-md transition hover:bg-amber-300"
                >
                  Apply Now
                </Link>

                <Link
                  href="/academics/programs"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-xs font-bold text-[#17135f] transition hover:bg-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-center bg-repeat opacity-[0.135]"
            style={{ backgroundImage: `url("${BACKGROUND_PATTERN_IMAGE}")`, backgroundSize: "920px auto" }}
          />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* MAIN COLUMN */}
              <div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#17135f]">Program Overview</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
                </div>

                {/* RELATED PROGRAMS */}
                {related.length > 0 && (
                  <div className="mt-10">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-900">EXPLORE MORE</p>
                    <h2 className="mt-1 font-serif text-2xl font-bold text-[#17135f] sm:text-3xl">
                      Related Programs
                    </h2>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {related.map((item) => (
                        <RelatedProgramCard key={item.slug} item={item} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SIDEBAR */}
              <aside className="space-y-6">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <h3 className="mb-4 font-serif text-lg font-bold text-[#17135f]">Quick Facts</h3>
                  <dl className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <dt className="text-xs text-slate-400">Level</dt>
                        <dd className="font-semibold text-slate-700">{level}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <dt className="text-xs text-slate-400">Faculty</dt>
                        <dd className="font-semibold text-slate-700">{faculty}</dd>
                      </div>
                    </div>
                    {discipline && (
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <div>
                          <dt className="text-xs text-slate-400">Discipline</dt>
                          <dd className="font-semibold text-slate-700">{discipline}</dd>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <div>
                        <dt className="text-xs text-slate-400">Duration</dt>
                        <dd className="font-semibold text-slate-700">{duration}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-[#0d094d] p-6 text-white">
                  <h3 className="font-serif text-lg font-bold">Ready to apply?</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    Start your application to {title} today.
                  </p>
                  <Link
                    href="/admissions/apply"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-xs font-bold text-[#17135f] transition hover:bg-amber-300"
                  >
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
