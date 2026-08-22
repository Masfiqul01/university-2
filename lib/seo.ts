import type { Metadata } from "next"

/*
  ============================================================
  SEO CONFIGURATION
  ============================================================

  Single source of truth for canonical URLs, Open Graph and Twitter
  metadata so every route produces consistent tags instead of each page
  re-deriving them.

  The production domain is the one the institution already publishes on
  the contact page and in the footer, so it is not invented here. Set
  NEXT_PUBLIC_SITE_URL to override it per environment (preview builds).
*/

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.khanjahanalicst.edu.bd"
).replace(/\/$/, "")

export const SITE_NAME = "Khanjahan Ali College of Science & Technology"
export const SITE_SHORT_NAME = "KACST"
export const SITE_LOCALE = "en_US"

/** Existing campus banner, reused so no new asset is added for SEO. */
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

export const LOGO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp"

/**
 * Absolute URL for a route path such as `/admissions`.
 *
 * The root keeps its trailing slash so the sitemap entry and the canonical
 * Next emits for `/` are byte-identical — otherwise the homepage would be
 * advertised under two slightly different URLs.
 */
export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) path = `/${path}`
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

type SeoInput = {
  title: string
  description: string
  /** Route path, e.g. `/admissions`. Used for the canonical and og:url. */
  path: string
  image?: string
  /** `article` for news and event detail pages. */
  type?: "website" | "article"
  publishedTime?: string
  /** Private areas: keep them out of the index without hiding the page. */
  noIndex?: boolean
}

/**
 * Builds a complete Metadata object: canonical, Open Graph and Twitter
 * tags all derived from one definition so they can never drift apart.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  noIndex = false,
}: SeoInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
