import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { imageUrl } from "@/lib/site-assets"
import { EVENTS_LIST, type EventCategory } from "@/lib/data/events"

const CATEGORY_COLOR: Record<EventCategory, string> = {
  Seminar: "bg-brand-dark",
  Workshop: "bg-emerald-600",
  Competition: "bg-amber-700",
  Cultural: "bg-blue-600",
  Others: "bg-violet-600",
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

function formatDate(iso: string) {
  const d = parseISO(iso)
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

function findEvent(slug: string) {
  return EVENTS_LIST.find((e) => e.slug === slug)
}

export function generateStaticParams() {
  return EVENTS_LIST.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = findEvent(slug)
  if (!event) return { title: "Event Not Found" }
  return {
    title: event.title,
    description: event.description,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = findEvent(slug)

  if (!event) notFound()

  const related = EVENTS_LIST.filter((e) => e.slug !== event.slug).slice(0, 3)
  const eventDate = parseISO(event.date)

  return (
    <PageShell>
      <PageHero
        title={event.title}
        subtitle={event.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events", href: "/news" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
        image={event.image}
      />

      <section className="events-content-section w-full bg-(--events-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2">
            <span
              className={`mb-4 inline-flex w-fit rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${CATEGORY_COLOR[event.category]}`}
            >
              {event.category}
            </span>

            <article className="overflow-hidden rounded-xl border border-(--events-border) bg-(--events-card-bg) shadow-sm">
              <div className="relative">
                <img
                  src={imageUrl(event.image) || "/placeholder.svg"}
                  alt={event.title}
                  className="aspect-[16/9] w-full object-cover"
                />
                <span className="absolute left-4 top-4 flex w-16 flex-col items-center rounded-lg bg-brand-dark/90 py-2 text-white backdrop-blur-sm">
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {MONTH_NAMES[eventDate.getMonth()].slice(0, 3)}
                  </span>
                  <span className="text-xl font-bold leading-none">{eventDate.getDate()}</span>
                  <span className="text-[10px] text-white/70">{eventDate.getFullYear()}</span>
                </span>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 rounded-xl bg-(--events-btn-bg) px-3.5 py-3 text-sm text-(--events-heading)">
                    <CalendarDays className="h-4 w-4 shrink-0 text-brand-accent" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-(--events-btn-bg) px-3.5 py-3 text-sm text-(--events-heading)">
                    <Clock className="h-4 w-4 shrink-0 text-brand-accent" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-(--events-btn-bg) px-3.5 py-3 text-sm text-(--events-heading)">
                    <MapPin className="h-4 w-4 shrink-0 text-brand-accent" />
                    {event.venue}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-(--events-text-secondary)">{event.description}</p>
              </div>
            </article>

            <Link
              href="/events"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-(--events-border) bg-(--events-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--events-heading)">Related Events</h3>
              <ul className="space-y-4">
                {related.map((item) => {
                  const d = parseISO(item.date)
                  return (
                    <li key={item.slug}>
                      <Link href={`/events/${item.slug}`} className="group flex gap-3">
                        <img
                          src={imageUrl(item.image) || "/placeholder.svg"}
                          alt={item.title}
                          className="h-14 w-14 shrink-0 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold leading-snug text-(--events-heading) group-hover:text-brand-accent">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-(--events-text-meta)">
                            {MONTH_NAMES[d.getMonth()].slice(0, 3)} {d.getDate()}, {d.getFullYear()}
                          </p>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link
                href="/events"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
              >
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
