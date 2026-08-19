"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* =========================================================
   GSAP PLUGIN
========================================================= */

import { WHY_CHOOSE_US_INTRO, WHY_CHOOSE_US } from "@/lib/data/home";
import { darkTileIcon } from "@/lib/icon-colors";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROFESSIONAL SVG ICONS
========================================================= */

function AcademicIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M5 17.5L24 8L43 17.5L24 27L5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M11 21V29.5C11 33.7 16.8 37 24 37C31.2 37 37 33.7 37 29.5V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M43 18V30"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="43" cy="33" r="1.8" fill="currentColor" />
    </svg>
  );
}

function FacultyIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="14"
        r="6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 38C12 30.7 17.4 25.5 24 25.5C30.6 25.5 36 30.7 36 38"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 20C11.2 20 9 22.2 9 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".45"
      />
      <path
        d="M34 20C36.8 20 39 22.2 39 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  );
}

function LearningIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="8"
        width="34"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14 16H34"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 22H29"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M14 28H24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity=".45"
      />
      <circle cx="34" cy="29" r="2.5" fill="currentColor" />
    </svg>
  );
}

function CareerIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="14"
        width="36"
        height="27"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17 14V10.5C17 9.1 18.1 8 19.5 8H28.5C29.9 8 31 9.1 31 10.5V14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M6 22H42" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19 22V26C19 26.8 19.7 27.5 20.5 27.5H27.5C28.3 27.5 29 26.8 29 26V22"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="17"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M7 24H41" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M24 7C28.7 11.8 31 17.5 31 24C31 30.5 28.7 36.2 24 41"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M24 7C19.3 11.8 17 17.5 17 24C17 30.5 19.3 36.2 24 41"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M4 10H15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10.5 5.5L15 10L10.5 14.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 13L13 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 5H13V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const ICONS: Record<string, () => React.JSX.Element> = {
  AcademicIcon,
  FacultyIcon,
  LearningIcon,
  CareerIcon,
  GlobalIcon,
};

const reasons = WHY_CHOOSE_US.map((item) => ({
  ...item,
  icon: ICONS[item.icon],
}));

/* =========================================================
   COMPONENT
========================================================= */

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const eventCleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      /* =====================================================
         ELEMENTS
      ===================================================== */

      const heading = section.querySelector(".why-heading");
      const description = section.querySelector(".why-description");
      const meta = section.querySelector(".why-meta");

      const featurePanel = section.querySelector(".why-feature-panel");
      const leftContent = section.querySelector(".why-left-content");
      const rightItems = section.querySelectorAll("[data-why-item]");

      const decorativeSvg = section.querySelector(".why-decorative-svg");
      const decorativePanelSvg = section.querySelector(
        ".why-panel-decorative-svg"
      );

      const miniMetric = section.querySelector(".why-mini-metric");
      const discoverLink = section.querySelector(".why-discover-link");

      const bottomCta = section.querySelector(".why-bottom-cta");
      const bottomCtaText = section.querySelector(".why-bottom-cta-text");
      const bottomCtaButton = section.querySelector(
        ".why-bottom-cta-button"
      );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(heading, {
        autoAlpha: 0,
        y: 55,
      });

      gsap.set(description, {
        autoAlpha: 0,
        y: 35,
      });

      gsap.set(meta, {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set(featurePanel, {
        autoAlpha: 0,
        y: 70,
        scale: 0.97,
      });

      gsap.set(leftContent, {
        autoAlpha: 0,
        y: 35,
      });

      gsap.set(rightItems, {
        autoAlpha: 0,
        y: 40,
        x: 25,
      });

      gsap.set(miniMetric, {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set(discoverLink, {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(bottomCta, {
        autoAlpha: 0,
        y: 45,
        scale: 0.98,
      });

      gsap.set(bottomCtaText, {
        autoAlpha: 0,
        x: -25,
      });

      gsap.set(bottomCtaButton, {
        autoAlpha: 0,
        x: 25,
        scale: 0.95,
      });

      /* =====================================================
         HEADER REVEAL
      ===================================================== */

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      introTimeline
        .to(heading, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          ease: "power3.out",
        })
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          meta,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.4"
        );

      /* =====================================================
         MAIN FEATURE PANEL
      ===================================================== */

      const panelTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: featurePanel,
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });

      panelTimeline
        .to(featurePanel, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        })
        .to(
          leftContent,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.65"
        )
        .to(
          miniMetric,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          discoverLink,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        );

      /* =====================================================
         RIGHT FEATURE ITEMS
      ===================================================== */

      gsap.to(rightItems, {
        autoAlpha: 1,
        y: 0,
        x: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featurePanel,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      /* =====================================================
         BACKGROUND PARALLAX
      ===================================================== */

      const backgroundShapes = section.querySelectorAll(
        ".why-bg-shape"
      );

      backgroundShapes.forEach((shape, index) => {
        gsap.to(shape, {
          y: index === 0 ? -45 : 35,
          x: index === 0 ? 20 : -20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      /* =====================================================
         TOP DECORATIVE SVG
      ===================================================== */

      if (decorativeSvg) {
        gsap.to(decorativeSvg, {
          y: -55,
          x: -15,
          rotate: 7,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      /* =====================================================
         PANEL DECORATIVE SVG
      ===================================================== */

      if (decorativePanelSvg) {
        gsap.to(decorativePanelSvg, {
          y: -30,
          x: 15,
          rotate: -5,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: featurePanel,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      /* =====================================================
         BOTTOM CTA
      ===================================================== */

      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: bottomCta,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      ctaTimeline
        .to(bottomCta, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          bottomCtaText,
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .to(
          bottomCtaButton,
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.4"
        );

      /* =====================================================
         HOVER INTERACTION
      ===================================================== */

      rightItems.forEach((item) => {
        const icon = item.querySelector(".why-item-icon");

        const enter = () => {
          gsap.to(item, {
            x: 5,
            duration: 0.35,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              y: -3,
              scale: 1.06,
              duration: 0.35,
              ease: "power2.out",
            });
          }
        };

        const leave = () => {
          gsap.to(item, {
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          });

          if (icon) {
            gsap.to(icon, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);

        eventCleanups.push(() => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
        });
      });

      /* =====================================================
         REFRESH
      ===================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    return () => {
      eventCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  aria-labelledby="why-choose-us-title"
  className="relative isolate overflow-hidden bg-[#F6F7FA] py-20 sm:py-24 lg:py-28"
>
  {/* =====================================================
      BACKGROUND PATTERN
  ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.iiuc.ac.bd/assets/backpattern-SdO-ezZO.png')] bg-[length:920px_auto] bg-center bg-repeat opacity-[0.035]"
  />

  {/* =====================================================
      BACKGROUND DECORATION
  ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
  >
    {/* Left glow */}
    <div className="why-bg-shape absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0D0357]/[0.035] blur-3xl" />

    {/* Right glow */}
    <div className="why-bg-shape absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-300/[0.07] blur-3xl" />

    {/* Decorative circles */}
    <svg
      aria-hidden="true"
      className="why-decorative-svg absolute right-0 top-0 h-[520px] w-[520px] opacity-[0.035]"
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="260"
        cy="260"
        r="200"
        stroke="#0D0357"
        strokeWidth="1"
      />

      <circle
        cx="260"
        cy="260"
        r="150"
        stroke="#0D0357"
        strokeWidth="1"
      />

      <circle
        cx="260"
        cy="260"
        r="100"
        stroke="#0D0357"
        strokeWidth="1"
      />

      <path
        d="M60 260H460M260 60V460"
        stroke="#0D0357"
        strokeWidth="1"
      />
    </svg>
  </div>

  {/* =====================================================
      MAIN CONTENT
  ===================================================== */}
  <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-14">

    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">

      {/* Left */}
      <div>
        <div className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D0357]/65 sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          {WHY_CHOOSE_US_INTRO.eyebrow}
        </div>

        <h2
          id="why-choose-us-title"
          className="why-heading mt-5 max-w-[650px] text-[2.7rem] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#0D0357] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          {WHY_CHOOSE_US_INTRO.titleLines[0]}

          <span className="block text-[#0D0357]/35">
            {WHY_CHOOSE_US_INTRO.titleLines[1]}
          </span>
        </h2>
      </div>

      {/* Right */}
      <div className="max-w-[590px] lg:justify-self-end">

        <p className="why-description text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
          {WHY_CHOOSE_US_INTRO.description}
        </p>

        <div className="why-meta mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          <span>Knowledge</span>

          <span className="h-1 w-1 rounded-full bg-amber-400" />

          <span>Opportunity</span>

          <span className="h-1 w-1 rounded-full bg-amber-400" />

          <span>Future</span>
        </div>
      </div>
    </div>

    {/* =====================================================
        MAIN FEATURE PANEL
    ===================================================== */}
    <div className="why-feature-panel mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-[#0D0357] shadow-[0_30px_80px_rgba(13,3,87,0.12)] sm:mt-16 lg:mt-20">

      <div className="grid lg:grid-cols-[0.68fr_1.32fr]">

        {/* =================================================
            LEFT FEATURE
        ================================================= */}
        <div className="relative overflow-hidden p-7 sm:p-9 lg:p-11 xl:p-14">

          {/* Decorative SVG */}
          <svg
            aria-hidden="true"
            className="why-panel-decorative-svg pointer-events-none absolute -bottom-16 -left-12 h-[330px] w-[330px] opacity-[0.13]"
            viewBox="0 0 330 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="165"
              cy="165"
              r="120"
              stroke="white"
              strokeWidth="1"
            />

            <circle
              cx="165"
              cy="165"
              r="85"
              stroke="white"
              strokeWidth="1"
            />

            <circle
              cx="165"
              cy="165"
              r="50"
              stroke="#FCD34D"
              strokeWidth="1"
            />

            <path
              d="M45 165H285M165 45V285"
              stroke="white"
              strokeWidth="1"
            />
          </svg>

          <div className="why-left-content relative z-10">

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200/80">
              {WHY_CHOOSE_US_INTRO.featureEyebrow}
            </span>

            <h3 className="mt-6 max-w-[420px] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
              {WHY_CHOOSE_US_INTRO.featureTitleLines[0]}

              <span className="text-amber-200">
                {" "}{WHY_CHOOSE_US_INTRO.featureTitleLines[1]}
              </span>
            </h3>

            <p className="mt-5 max-w-[430px] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
              {WHY_CHOOSE_US_INTRO.featureDescription}
            </p>

            {/* Mini Metric */}
            <div className="why-mini-metric mt-10 flex items-center gap-4 border-t border-white/10 pt-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/[0.08] text-amber-200">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M5 17L10 12L14 15L20 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M15 7H20V12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {WHY_CHOOSE_US_INTRO.metricTitle}
                </p>

                <p className="mt-0.5 text-xs text-white/35">
                  {WHY_CHOOSE_US_INTRO.metricSubtitle}
                </p>
              </div>
            </div>

            {/* Discover Link */}
            <Link
              href={WHY_CHOOSE_US_INTRO.link.href}
              className="why-discover-link group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0357]"
            >
              <span>
                {WHY_CHOOSE_US_INTRO.link.label}
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* =================================================
            RIGHT FEATURE LIST
        ================================================= */}
        <div className="border-t border-white/10 bg-white/[0.035] lg:border-l lg:border-t-0">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-why-item
                className="group relative border-b border-white/10 p-6 last:border-b-0 sm:p-7 lg:p-8 xl:px-10"
              >

                {/* Hover Indicator */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-amber-300 transition-transform duration-300 group-hover:scale-y-100"
                />

                <div className="flex gap-5 sm:gap-7">

                  {/* Number */}
                  <div className="hidden w-8 shrink-0 pt-1 sm:block">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-amber-200/60">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`why-item-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] ${darkTileIcon(index)} transition-all duration-300 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/[0.1]`}
                  >
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                      <h4 className="text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                        {item.title}
                      </h4>

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/20 transition-colors group-hover:text-amber-200/60">
                        {item.label}
                      </span>

                    </div>

                    <p className="mt-2.5 max-w-[650px] text-sm leading-6 text-white/42 transition-colors duration-300 group-hover:text-white/58">
                      {item.description}
                    </p>

                    {/* Explore */}
                    <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/20 transition-colors group-hover:text-amber-200/70">

                      <span>
                        {WHY_CHOOSE_US_INTRO.cardLinkLabel}
                      </span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>

                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>

    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}
    <div className="why-bottom-cta mt-8 flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">

      <div className="why-bottom-cta-text">

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D0357]/50">
          Your next chapter
        </p>

        <h3 className="mt-1.5 text-lg font-bold tracking-[-0.025em] text-[#0D0357] sm:text-xl">
          Find the environment where your ambition can grow.
        </h3>

      </div>

      <Link
        href="/academics/programs"
        className="why-bottom-cta-button group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0D0357] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17096F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D0357]/40 focus-visible:ring-offset-2"
      >
        <span>
          Explore Programs
        </span>

        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          <ExternalArrowIcon />
        </span>
      </Link>
    </div>
  </div>
</section>
  );
}