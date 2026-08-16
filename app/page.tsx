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
      <div className="relative isolate min-h-screen overflow-hidden bg-[#F6F7FA]">

        {/* =====================================================
            GLOBAL BACKGROUND PATTERN
        ===================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.iiuc.ac.bd/assets/backpattern-SdO-ezZO.png')] bg-[length:920px_auto] bg-center bg-repeat opacity-[0.035]"
        />

        {/* =====================================================
            SOFT BACKGROUND GLOW
        ===================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        >
          <div className="absolute -left-40 top-[600px] h-96 w-96 rounded-full bg-[#0D0357]/[0.025] blur-3xl" />

          <div className="absolute -right-40 top-[1400px] h-[450px] w-[450px] rounded-full bg-amber-300/[0.035] blur-3xl" />

          <div className="absolute -left-40 top-[2800px] h-[420px] w-[420px] rounded-full bg-[#0D0357]/[0.025] blur-3xl" />
        </div>

        {/* =====================================================
            WEBSITE CONTENT
        ===================================================== */}
        <div className="relative z-10">

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

        </div>
      </div>
    </>
  );
}