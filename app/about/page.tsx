import type { Metadata } from "next"
import { PageShell, EditableNote } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section, FeatureGrid, ImageSplit } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { LeadershipCard } from "@/components/cards"
import { StatsBar } from "@/components/stats-bar"
import { CTASection } from "@/components/cta-section"
import { ICON_MAP } from "@/lib/icon-map"
import { VALUES } from "@/lib/data/about"

export const metadata: Metadata = {
  title: "About KKJSTU",
  description:
    "Learn about Khulna Khan Jahan Science and Technology University (KKJSTU) — our identity, values, and commitment to education, research and innovation.",
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="About Khulna Khan Jahan Science and Technology University"
        subtitle="A modern university dedicated to advancing science, technology, and knowledge for the betterment of society."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image="/images/hero-campus.png"
      />

      <div className="relative pb-4">
        <StatsBar />
      </div>

      <Section>
        <ImageSplit
          image="/images/admissions-building.png"
          alt="KKJSTU academic building"
          eyebrow="Who We Are"
          title="A Community Built on Knowledge and Purpose"
        >
          <p>
            Khulna Khan Jahan Science and Technology University (KKJSTU) is committed to nurturing
            competent professionals and ethical leaders. Through quality education, research, and
            innovation, we aim to create an inspiring environment where students thrive.
          </p>
          <p>
            Our academic community brings together dedicated faculty, curious students, and modern
            facilities to support learning across science, engineering, business, and the humanities.
          </p>
          <EditableNote>This introduction is editable placeholder content.</EditableNote>
        </ImageSplit>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Our Core Values"
          title="The Principles That Guide Us"
          description="These values shape our culture and define how we teach, research, and serve."
          center
        />
        <FeatureGrid items={VALUES.map((v) => ({ ...v, icon: ICON_MAP[v.icon] ?? ICON_MAP.Target }))} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership" title="Message from the Vice Chancellor" center />
        <div className="mx-auto max-w-3xl">
          <LeadershipCard
            name="Vice Chancellor"
            role="Office of the Vice Chancellor — KKJSTU (editable placeholder)"
            bio="Welcome to Khulna Khan Jahan Science and Technology University. Our mission is to empower students with the knowledge, skills, and values needed to excel and lead. We invite you to be part of a community devoted to learning, discovery, and service. (This message is editable placeholder content.)"
          />
        </div>
      </Section>

      <Section muted>
        <ImageSplit
          image="/images/campus-green.png"
          alt="KKJSTU green campus"
          eyebrow="Why KKJSTU"
          title="An Inspiring Place to Learn and Grow"
          reverse
        >
          <p>
            From modern laboratories and a well-resourced library to a vibrant, green campus, KKJSTU
            offers an environment designed to support both academic and personal development.
          </p>
          <p>
            Students benefit from experienced faculty, practical learning opportunities, and a range
            of clubs, activities, and support services.
          </p>
        </ImageSplit>
      </Section>

      <CTASection secondary={{ label: "Explore Programs", href: "/academics/programs" }} />
    </PageShell>
  )
}
