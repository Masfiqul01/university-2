import Link from "next/link"
import { imageUrl } from "@/lib/site-assets"
import { ArrowRight, Mail, MapPin, Clock, Calendar, FileText, Download } from "lucide-react"
import { ICON_MAP } from "@/lib/icon-map"

export function FacultyCard({
  faculty,
}: {
  faculty: { slug: string; name: string; icon: string; description: string; departments: string[] }
}) {
  const Icon = ICON_MAP[faculty.icon] ?? ICON_MAP.Cpu
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mb-2 font-serif text-lg font-bold leading-snug text-foreground text-balance">
        {faculty.name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{faculty.description}</p>
      <ul className="mb-5 space-y-1.5">
        {faculty.departments.map((d) => (
          <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            {d}
          </li>
        ))}
      </ul>
      <Link
        href="/academics/faculties"
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5"
      >
        View Departments
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}

export function ProgramCard({
  program,
}: {
  program: { title: string; faculty: string; level: string; duration: string }
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <span className="mb-3 inline-flex w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        {program.level}
      </span>
      <h3 className="mb-2 font-serif text-base font-bold leading-snug text-foreground text-balance">
        {program.title}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">{program.faculty}</p>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="h-4 w-4" />
          {program.duration}
        </span>
        <Link href="/admissions/apply" className="font-semibold text-brand hover:text-brand-dark">
          Apply
        </Link>
      </div>
    </article>
  )
}

export function NewsCard({
  item,
}: {
  item: { slug: string; image: string; category: string; date: string; title: string; excerpt: string }
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-brand-dark px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          {item.date}
        </p>
        <h3 className="mb-2 font-serif text-base font-bold leading-snug text-foreground text-balance">
          {item.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all hover:gap-2.5"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export function EventCard({
  event,
}: {
  event: { title: string; date: string; time: string; location: string; category: string }
}) {
  const [month, day] = event.date.split(" ")
  return (
    <article className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand text-white">
        <span className="text-lg font-bold leading-none">{day?.replace(",", "")}</span>
        <span className="text-[11px] uppercase">{month}</span>
      </div>
      <div className="min-w-0">
        <span className="mb-1 inline-block rounded bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand">
          {event.category}
        </span>
        <h3 className="font-serif text-base font-bold leading-snug text-foreground text-balance">
          {event.title}
        </h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {event.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {event.location}
          </span>
        </p>
      </div>
    </article>
  )
}

export function NoticeCard({
  notice,
}: {
  notice: { title: string; date: string; category: string }
}) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <FileText className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-foreground text-balance">{notice.title}</h3>
          <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded bg-secondary px-2 py-0.5 font-medium">{notice.category}</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {notice.date}
            </span>
          </p>
        </div>
      </div>
      <div className="flex shrink-0 gap-2 pl-13 sm:pl-0">
        <button className="inline-flex items-center gap-1.5 rounded-full border border-brand px-3 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white">
          <FileText className="h-3.5 w-3.5" />
          View
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-dark">
          <Download className="h-3.5 w-3.5" />
          Download
        </button>
      </div>
    </article>
  )
}

export function FacultyMemberCard({
  member,
}: {
  member: { name: string; designation: string; department: string; email: string }
}) {
  const initials = member.name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
  return (
    <article className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 font-serif text-2xl font-bold text-brand">
        {initials}
      </div>
      <h3 className="font-serif text-base font-bold text-foreground">{member.name}</h3>
      <p className="text-sm font-medium text-brand">{member.designation}</p>
      <p className="mt-1 text-xs text-muted-foreground">{member.department}</p>
      <a
        href={`mailto:${member.email}`}
        className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-brand"
      >
        <Mail className="h-3.5 w-3.5" />
        {member.email}
      </a>
      <Link
        href="/faculty"
        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        View Profile
      </Link>
    </article>
  )
}

export function LeadershipCard({
  name,
  role,
  bio,
}: {
  name: string
  role: string
  bio: string
}) {
  const initials = name
    .replace(/^(Dr\.|Prof\.)\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-6">
      <div className="mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-brand/10 font-serif text-3xl font-bold text-brand sm:mb-0">
        {initials}
      </div>
      <div>
        <h3 className="font-serif text-lg font-bold text-foreground">{name}</h3>
        <p className="mb-3 text-sm font-medium text-brand">{role}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </div>
    </article>
  )
}
