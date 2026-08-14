"use client";
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { AdmissionsBanner } from "@/components/admissions-banner"
import { NewsEvents } from "@/components/news-events"
import { SiteFooter } from "@/components/site-footer"
import { NoticeTicker } from "@/components/notice-ticker";
import { TrustStats } from "@/components/TrustStats";
import { ProgramsSection } from "@/components/ProgramsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader overlay />
      <main>
        <Hero />
        <StatsBar />
        <NoticeTicker
          onSelectNotice={(notice) => {
          console.log("Selected notice:", notice);
           }}
           onOpenOnlineApply={() => {
           console.log("Open online application");
           }}
           />
           <TrustStats />
        <AdmissionsBanner />
        <NewsEvents />
       <ProgramsSection />
      
      </main>
      <SiteFooter />
      </>
   
  )
}
