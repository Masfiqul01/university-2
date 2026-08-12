import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Programs } from "@/components/programs"
import { AdmissionsBanner } from "@/components/admissions-banner"
import { NewsEvents } from "@/components/news-events"
import { CampusLife } from "@/components/campus-life"
import { WhyChoose } from "@/components/why-choose"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader overlay />
      <main>
        <Hero />
        <StatsBar />
        <Programs />
        <AdmissionsBanner />
        <NewsEvents />
        <CampusLife />
        <WhyChoose />
      </main>
      <SiteFooter />
    </div>
  )
}
