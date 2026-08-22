import { LOGO_IMAGE, SITE_NAME, SITE_SHORT_NAME, SITE_URL } from "@/lib/seo"

/*
  Site-wide structured data.

  Every value below is already published elsewhere on this site (footer and
  contact page): legal name, short name, founding year, address, phone and
  email. Nothing is invented — if a fact is not on the site, it is not here.
*/

const ORGANIZATION = {
  "@type": "CollegeOrUniversity",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  logo: LOGO_IMAGE,
  foundingDate: "2003",
  email: "khanjahanali.kln@gmail.com",
  telephone: "+880 1711-042194",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khulna",
    addressCountry: "BD",
  },
}

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
}

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION, WEBSITE],
}

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Server-rendered constant: no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(GRAPH) }}
    />
  )
}
