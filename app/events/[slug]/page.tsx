import type { Metadata } from "next"
import { absoluteUrl, buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo"
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

/** "2025-05-20" → "May 20, 2025". Parsed manually to avoid timezone drift. */
function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number)
  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`
}

export function generateStaticParams() {
  return EVENTS_LIST.map((event) => ({ slug: event.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = EVENTS_LIST.find((item) => item.slug === slug)

  if (!event) return { title: "Event Not Found" }

  return buildMetadata({
    title: event.title,
    description: event.description,
    path: `/events/${event.slug}`,
    image: event.image ? imageUrl(event.image) : undefined,
    type: "article",
  })
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = EVENTS_LIST.find((item) => item.slug === slug)

  if (!event) notFound()

  const upcoming = EVENTS_LIST.filter((item) => item.slug !== event.slug).slice(0, 4)

  const details = [
    { label: "Date", value: formatDate(event.date), icon: CalendarDays },
    { label: "Time", value: event.time, icon: Clock },
    { label: "Venue", value: event.venue, icon: MapPin },
  ]

  /*
    Event schema built only from fields the page already shows: name,
    description, date, venue and image. No prices or ticketing are claimed.
  */
  const eventLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: event.date,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        image: [imageUrl(event.image)],
        url: absoluteUrl(`/events/${event.slug}`),
        location: {
          "@type": "Place",
          name: event.venue,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Khulna",
            addressCountry: "BD",
          },
        },
        organizer: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Events", item: absoluteUrl("/events") },
          { "@type": "ListItem", position: 3, name: event.title },
        ],
      },
    ],
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }}
      />
      <PageHero
        eyebrow={event.category}
        title={event.title}
        subtitle={event.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events", href: "/news" },
          { label: "Events", href: "/events" },
        ]}
        image="/images/hero-campus.png"
        tall
      />

      <section className="events-content-section w-full bg-(--events-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* EVENT */}
          <article className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-(--events-border)">
              <img
                src={imageUrl(event.image) || "/placeholder.svg"}
                alt={event.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <span
              className={`mt-6 inline-block rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
                CATEGORY_COLOR[event.category] ?? "bg-brand-dark"
              }`}
            >
              {event.category}
            </span>

            <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-balance text-(--events-heading) sm:text-3xl">
              {event.title}
            </h2>

            {/* KEY DETAILS */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {details.map((detail) => {
                const Icon = detail.icon

                return (
                  <div
                    key={detail.label}
                    className="rounded-xl border border-(--events-border) bg-(--events-card-bg) p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-4 w-4" />
                    </span>

                    <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-(--events-text-meta)">
                      {detail.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-snug text-(--events-heading)">
                      {detail.value}
                    </p>
                  </div>
                )
              })}
            </div>

            <h3 className="mt-10 font-serif text-xl font-bold text-(--events-heading)">
              About this event
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-(--events-text-secondary) sm:text-[15px] sm:leading-7">
              {event.description}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-(--events-text-secondary) sm:text-[15px] sm:leading-7">
              The programme will be held at {event.venue} from {event.time}.
              Students and staff are encouraged to attend. Any change to the
              schedule or venue will be announced through the university notice
              board.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-(--events-border) pt-6">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>

              <Link
                href="/academics/calendar"
                className="inline-flex items-center gap-2 rounded-full border border-(--events-border) px-5 py-2.5 text-sm font-semibold text-(--events-heading) transition-colors hover:bg-(--events-btn-bg)"
              >
                Academic Calendar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-(--events-border) bg-(--events-panel-bg) p-6">
              <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-(--events-heading)">
                <CalendarDays className="h-4 w-4 text-brand-accent" />
                Other Events
              </h3>

              <div className="mt-5 space-y-4">
                {upcoming.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/events/${item.slug}`}
                    className="group flex gap-3 border-b border-(--events-border) pb-4 last:border-0 last:pb-0"
                  >
                    <img
                      src={imageUrl(item.image) || "/placeholder.svg"}
                      alt={item.title}
                      className="h-16 w-20 shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-(--events-text-meta)">
                        {formatDate(item.date)}
                      </p>

                      <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-(--events-heading) transition-colors group-hover:text-brand">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-(--events-border) bg-(--events-panel-bg) p-6">
              <h3 className="font-serif text-lg font-bold text-(--events-heading)">
                Event Enquiries
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-(--events-text-secondary)">
                For questions about participation, registration or venue
                access, please contact the organising office.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-all hover:gap-3"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
