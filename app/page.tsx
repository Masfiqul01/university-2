"use client";

import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { AdmissionsBanner } from "@/components/admissions-banner";
import { NewsEvents } from "@/components/news-events";
import { SiteFooter } from "@/components/site-footer";
import { NoticeTicker } from "@/components/notice-ticker";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProgramsSection } from "@/components/ProgramsSection";
import { BeginYourJourney } from "@/components/BeginYourJourney";

export default function HomePage() {
  return (
    <>
      <SiteHeader overlay />

      <main>
        {/* Hero */}
        <Hero />

        {/* Quick university statistics */}
        <StatsBar />

        {/* Important notices / announcements */}
        <NoticeTicker
          onSelectNotice={(notice) => {
            console.log("Selected notice:", notice);
          }}
          onOpenOnlineApply={() => {
            console.log("Open online application");
          }}
        />

        {/* University at a glance */}
        <TrustStats />



        {/* Admissions */}
        <AdmissionsBanner />

        {/* Featured academic programs */}
        <ProgramsSection />

        {/* Why choose us */}
        <WhyChooseUs />

        {/* News & events */}
        <NewsEvents />

        {/* Final conversion CTA */}
        <BeginYourJourney />
      </main>

      <SiteFooter />
    </>
  );
}