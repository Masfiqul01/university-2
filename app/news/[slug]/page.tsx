import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
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

function findArticle(slug: string) {
  return NEWS_ARTICLES.find((a) => a.slug === slug)
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = findArticle(slug)
  if (!article) return { title: "Article Not Found" }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = findArticle(slug)

  if (!article) notFound()

  const paragraphs = article.content.split("\n\n").filter(Boolean)
  const related = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 4)

  return (
    <PageShell>
      <PageHero
        title={article.title}
        subtitle={article.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News & Events", href: "/news" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
        image={article.image}
      />

      <section className="news-content-section w-full bg-(--news-section-bg) py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:px-8">
          {/* MAIN COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className={`rounded px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${
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

            <article className="overflow-hidden rounded-xl border border-(--news-border) bg-(--news-card-bg) shadow-sm">
              <img
                src={imageUrl(article.image) || "/placeholder.svg"}
                alt={article.title}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="space-y-4 p-6 sm:p-8">
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed text-(--news-text-secondary)">
                    {para}
                  </p>
                ))}
              </div>
            </article>

            <Link
              href="/news"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All News
            </Link>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-(--news-border) bg-(--news-panel-bg) p-5 shadow-sm">
              <h3 className="mb-3 font-serif text-base font-bold text-(--news-heading)">Related News</h3>
              <ul className="space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/news/${item.slug}`} className="group flex gap-3">
                      <img
                        src={imageUrl(item.image) || "/placeholder.svg"}
                        alt={item.title}
                        className="h-14 w-14 shrink-0 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold leading-snug text-(--news-heading) group-hover:text-brand-accent">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-(--news-text-meta)">{item.date}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/news"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-all hover:gap-2.5"
              >
                View All News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
