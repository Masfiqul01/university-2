import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/lib/seo"
import { NEWS_ARTICLES } from "@/lib/data/news"
import { EVENTS_LIST } from "@/lib/data/events"
import { PROGRAMS } from "@/lib/data/programs"

/*
  Only real, public, indexable pages belong here.

  Deliberately excluded: /login, /hod-login, /dashboard, /result,
  /track-status, /pay-fees, /student-portal and /teacher-portal. Those are
  authentication, payment or personal dashboard areas — they carry no public
  content and are marked noindex on the pages themselves.
*/

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

const STATIC_ROUTES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },

  // About
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about/history", changeFrequency: "yearly", priority: 0.6 },
  { path: "/about/mission-vision", changeFrequency: "yearly", priority: 0.7 },
  { path: "/about/leadership", changeFrequency: "monthly", priority: 0.7 },

  // Academics
  { path: "/academics", changeFrequency: "monthly", priority: 0.9 },
  { path: "/academics/programs", changeFrequency: "monthly", priority: 0.9 },
  { path: "/academics/faculties", changeFrequency: "monthly", priority: 0.8 },
  { path: "/academics/calendar", changeFrequency: "weekly", priority: 0.7 },

  // Admissions — highest-intent section after the homepage.
  { path: "/admissions", changeFrequency: "weekly", priority: 0.9 },
  { path: "/admissions/undergraduate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/admissions/postgraduate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/admissions/requirements", changeFrequency: "monthly", priority: 0.8 },
  { path: "/admissions/apply", changeFrequency: "weekly", priority: 0.8 },

  // Administration
  { path: "/administration", changeFrequency: "monthly", priority: 0.7 },
  { path: "/administration/chancellor", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/vice-chancellor", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/pro-vice-chancellor", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/treasurer", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/registrar", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/controller-of-examinations", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/deans-heads", changeFrequency: "yearly", priority: 0.5 },
  { path: "/administration/offices", changeFrequency: "monthly", priority: 0.6 },

  // Campus life
  { path: "/campus-life", changeFrequency: "monthly", priority: 0.8 },
  { path: "/campus-life/facilities", changeFrequency: "monthly", priority: 0.7 },
  { path: "/campus-life/student-life", changeFrequency: "monthly", priority: 0.7 },
  { path: "/campus-life/clubs", changeFrequency: "monthly", priority: 0.7 },

  // Research
  { path: "/research", changeFrequency: "monthly", priority: 0.8 },
  { path: "/research/centers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/research/publications", changeFrequency: "weekly", priority: 0.7 },

  // News, events, notices
  { path: "/news", changeFrequency: "daily", priority: 0.8 },
  { path: "/events", changeFrequency: "daily", priority: 0.8 },
  { path: "/notice-board", changeFrequency: "daily", priority: 0.8 },

  // Contact and standing information pages served by the catch-all route.
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/library", changeFrequency: "monthly", priority: 0.6 },
  { path: "/career", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faculty", changeFrequency: "monthly", priority: 0.6 },
  { path: "/iqac", changeFrequency: "yearly", priority: 0.5 },
  { path: "/transport", changeFrequency: "yearly", priority: 0.5 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/sitemap", changeFrequency: "monthly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Real publication dates where the content carries one, so lastModified
  // reflects the article rather than the build time.
  const newsEntries = NEWS_ARTICLES.map((article) => ({
    url: absoluteUrl(`/news/${article.slug}`),
    lastModified: article.date ? new Date(article.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const eventEntries = EVENTS_LIST.map((event) => ({
    url: absoluteUrl(`/events/${event.slug}`),
    lastModified: event.date ? new Date(event.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const programEntries = PROGRAMS.map((program) => ({
    url: absoluteUrl(`/academics/programs/${program.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...newsEntries, ...eventEntries, ...programEntries]
}
