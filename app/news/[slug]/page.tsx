import type { Metadata } from "next"
import { absoluteUrl, buildMetadata, SITE_NAME, SITE_URL } from "@/lib/seo"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { imageUrl } from "@/lib/site-assets"
import { NEWS_ARTICLES } from "@/lib/data/news"

const CATEGORY_BADGE: Record<string, string> = {
  Achievement: "bg-amber-800",
  Announcement: "bg-blue-600",
  Event: "bg-emerald-600",
  Notice: "bg-violet-600",
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((item) => item.slug === slug)

  if (!article) return { title: "Article Not Found" }

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    image: article.image ? imageUrl(article.image) : undefined,
    type: "article",
  })
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((item) => item.slug === slug)

  if (!article) notFound()

  const related = NEWS_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 4)

  /*
    NewsArticle + breadcrumbs. Every field comes from the article record —
    headline, description, image and publish date — so nothing is invented.
  */
  const articleLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: article.title,
        description: article.excerpt,
        datePublished: new Date(article.date).toISOString(),
        articleSection: article.category,
        image: [imageUrl(article.image)],
        mainEntityOfPage: absoluteUrl(`/news/${article.slug}`),
        publisher: { "@id": `${SITE_URL}/#organization` },
        author: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "News & Events", item: absoluteUrl("/news") },
          { "@type": "ListItem", position: 3, name: article.title },
        ],
      },
    ],
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events", href: "/news" },
          { label: article.category },
        ]}
        image="/images/hero-campus.png"
        tall
      />

      <section className="news-content-section w-full bg-(--news-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* ARTICLE */}
          <article className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-(--news-border)">
              <img
                src={imageUrl(article.image) || "/placeholder.svg"}
                alt={article.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white ${
                  CATEGORY_BADGE[article.category] ?? "bg-brand-dark"
                }`}
              >
                {article.category}
              </span>

              <span className="flex items-center gap-1.5 text-xs text-(--news-text-meta)">
                <Calendar className="h-3.5 w-3.5" />
                {article.date}
              </span>
            </div>

            <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-balance text-(--news-heading) sm:text-3xl">
              {article.title}
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-(--news-text-secondary) sm:text-[15px] sm:leading-7">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-(--news-border) pt-6">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                <ArrowLeft className="h-4 w-4" />
                All News
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-(--news-border) px-5 py-2.5 text-sm font-semibold text-(--news-heading) transition-colors hover:bg-(--news-btn-bg)"
              >
                Upcoming Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-(--news-border) bg-(--news-panel-bg) p-6">
              <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-(--news-heading)">
                <Tag className="h-4 w-4 text-brand-accent" />
                Recent News
              </h3>

              <div className="mt-5 space-y-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group flex gap-3 border-b border-(--news-border) pb-4 last:border-0 last:pb-0"
                  >
                    <img
                      src={imageUrl(item.image) || "/placeholder.svg"}
                      alt={item.title}
                      className="h-16 w-20 shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-(--news-text-meta)">{item.date}</p>

                      <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-(--news-heading) transition-colors group-hover:text-brand">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-(--news-border) bg-(--news-panel-bg) p-6">
              <h3 className="font-serif text-lg font-bold text-(--news-heading)">
                Stay Informed
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-(--news-text-secondary)">
                Official notices, examination routines and academic
                announcements are published on the university notice board.
              </p>

              <Link
                href="/notice-board"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-all hover:gap-3"
              >
                Visit Notice Board
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
