import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/blocks"
import { SectionHeading } from "@/components/section-heading"
import { CTASection } from "@/components/cta-section"
import { PublicationsExplorer } from "./publications-explorer"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse recent journal articles and conference papers from KACST faculty researchers across artificial intelligence, renewable energy, biotechnology, materials, water resources, and business analytics.",
}

export default function ResearchPublicationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Research"
        title="Publications"
        subtitle="Recent scholarly output from KACST faculty researchers, spanning all six research centers."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Publications" },
        ]}
        image="/images/hero-campus.png"
      />

      <Section>
        <SectionHeading
          eyebrow="Scholarly Output"
          title="Faculty Publications"
          description="Filter by research area to browse journal articles and conference papers from KACST researchers."
        />
        <PublicationsExplorer />
      </Section>

      <CTASection
        title="Learn More About Our Research"
        description="Explore the centers behind this work, or return to the research overview to see our focus areas."
        primary={{ label: "Research Centers", href: "/research/centers" }}
        secondary={{ label: "Research Overview", href: "/research" }}
      />
    </PageShell>
  )
}
