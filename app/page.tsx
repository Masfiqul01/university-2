"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const sections = Array.from(mainRef.current?.children ?? []).slice(1);

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, mainRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <SiteHeader overlay />

      <main ref={mainRef}>
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

        {/* News & events */}
        <NewsEvents />

        {/* Why choose us */}
        <WhyChooseUs />

        {/* Final conversion CTA */}
        <BeginYourJourney />
      </main>

      <SiteFooter />
    </>
  );
}
