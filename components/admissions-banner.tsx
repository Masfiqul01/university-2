"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function AdmissionsBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    /*
     * IMPORTANT:
     * Keep event listener cleanup separate from GSAP context.
     * Do NOT use ctx.add() inside gsap.context() callback because
     * ctx has not been initialized at that point.
     */
    const eventCleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      /* =====================================================
         ELEMENTS
      ===================================================== */

      const image = section.querySelector<HTMLElement>(
        "[data-banner-image]"
      );

      const status = section.querySelector<HTMLElement>(
        "[data-banner-status]"
      );

      const heading = section.querySelector<HTMLElement>(
        "[data-banner-heading]"
      );

      const description = section.querySelector<HTMLElement>(
        "[data-banner-description]"
      );

      const ctas = section.querySelectorAll<HTMLElement>(
        "[data-banner-cta]"
      );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(image, {
        autoAlpha: 0,
        scale: 1.06,
      });

      gsap.set(status, {
        autoAlpha: 0,
        y: -18,
      });

      gsap.set(heading, {
        autoAlpha: 0,
        y: 35,
      });

      gsap.set(description, {
        autoAlpha: 0,
        y: 25,
      });

      gsap.set(ctas, {
        autoAlpha: 0,
        y: 20,
        scale: 0.96,
      });

      /* =====================================================
         MAIN REVEAL TIMELINE
      ===================================================== */

      const revealTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      revealTimeline
        .to(image, {
          autoAlpha: 1,
          scale: 1,
          duration: 1.15,
          ease: "power2.out",
        })
        .to(
          status,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "back.out(1.4)",
          },
          "-=0.7"
        )
        .to(
          heading,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.55"
        )
        .to(
          ctas,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.3)",
          },
          "-=0.35"
        );

      /* =====================================================
         SCROLL TRIGGER
      ===================================================== */

      ScrollTrigger.create({
        trigger: section,
        start: "top 82%",
        once: true,
        onEnter: () => {
          revealTimeline.play();
        },
      });

      /* =====================================================
         BACKGROUND IMAGE PARALLAX
      ===================================================== */

      if (image) {
        gsap.to(image, {
          yPercent: 4,
          scale: 1.035,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      /* =====================================================
         DECORATIVE SVG PARALLAX
      ===================================================== */

      const decorativeSvg = section.querySelector<SVGElement>(
        "svg.pointer-events-none"
      );

      if (decorativeSvg) {
        gsap.to(decorativeSvg, {
          y: -45,
          rotation: 4,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
          },
        });
      }

      /* =====================================================
         FLOATING LIGHT EFFECTS
      ===================================================== */

      const lightEffects = section.querySelectorAll<HTMLElement>(
        ".pointer-events-none.absolute.rounded-full"
      );

      lightEffects.forEach((light, index) => {
        gsap.to(light, {
          y: index === 0 ? -45 : 35,
          x: index === 0 ? 25 : -20,
          scale: index === 0 ? 1.08 : 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      });

      /* =====================================================
         STATUS BADGE FLOAT
      ===================================================== */

      if (status) {
        gsap.to(status, {
          y: -3,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =====================================================
         HOVER EFFECT — PRIMARY CTA
      ===================================================== */

      const primaryCta = section.querySelector<HTMLElement>(
        '[data-banner-cta][href="/admissions/apply"]'
      );

      if (primaryCta) {
        const enter = () => {
          gsap.to(primaryCta, {
            y: -3,
            scale: 1.025,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(primaryCta, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        primaryCta.addEventListener("mouseenter", enter);
        primaryCta.addEventListener("mouseleave", leave);

        /*
         * FIX:
         * Previously ctx.add() was used here.
         * That caused:
         * "Cannot access 'ctx' before initialization"
         */
        eventCleanups.push(() => {
          primaryCta.removeEventListener("mouseenter", enter);
          primaryCta.removeEventListener("mouseleave", leave);
        });
      }

      /* =====================================================
         CTA BUTTON MICRO INTERACTION
      ===================================================== */

      ctas.forEach((cta) => {
        const arrow = cta.querySelector<SVGElement>("svg");

        if (!arrow) return;

        const enter = () => {
          gsap.to(arrow, {
            x: 4,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(arrow, {
            x: 0,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        cta.addEventListener("mouseenter", enter);
        cta.addEventListener("mouseleave", leave);

        /*
         * FIX:
         * Use eventCleanups instead of ctx.add().
         */
        eventCleanups.push(() => {
          cta.removeEventListener("mouseenter", enter);
          cta.removeEventListener("mouseleave", leave);
        });
      });

      /* =====================================================
         REFRESH SCROLLTRIGGER
      ===================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, sectionRef);

    /* =======================================================
       CLEANUP
    ======================================================= */

    return () => {
      // Remove custom event listeners
      eventCleanups.forEach((cleanup) => cleanup());

      // Revert GSAP animations and ScrollTriggers
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-full max-w-[1400px] px-3 pb-6 sm:px-5 lg:px-6 lg:pb-8"
    >
      <div className="relative isolate min-h-[560px] overflow-hidden rounded-[28px] bg-[#0D0357] shadow-[0_24px_80px_rgba(13,3,87,0.18)] sm:min-h-[590px] sm:rounded-[32px] md:min-h-[520px] lg:min-h-[540px]">
        {/* =========================================================
            BACKGROUND IMAGE
        ========================================================= */}

        <img
          data-banner-image
          src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"
          alt="Khanjahan Ali College of Science and Technology campus"
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-[center_45%] md:left-auto md:w-[68%] md:object-[center_50%]"
        />

        {/* Desktop image protection */}
        <div className="absolute inset-y-0 right-0 hidden w-[72%] bg-gradient-to-r from-[#0D0357] via-[#0D0357]/35 to-transparent md:block" />

        {/* Main mobile overlay */}
        <div className="absolute inset-0 bg-[#0D0357]/72 md:hidden" />

        {/* Desktop left-side overlay */}
        <div className="absolute inset-y-0 left-0 hidden w-[66%] bg-gradient-to-r from-[#0D0357] via-[#0D0357]/95 to-transparent md:block" />

        {/* Bottom image readability */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0357]/55 to-transparent md:hidden" />

        {/* =========================================================
            SUBTLE DECORATIVE LIGHT
        ========================================================= */}

        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-400/[0.06] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-brand/[0.045] blur-3xl" />

        {/* =========================================================
            CUSTOM SVG ARCHITECTURAL DECORATION
        ========================================================= */}

        <svg
          aria-hidden="true"
          viewBox="0 0 520 520"
          fill="none"
          className="pointer-events-none absolute -right-44 -top-44 hidden h-[540px] w-[540px] opacity-[0.08] lg:block"
        >
          <circle
            cx="260"
            cy="260"
            r="210"
            stroke="white"
            strokeWidth="1"
          />

          <circle
            cx="260"
            cy="260"
            r="174"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="2 10"
          />

          <circle
            cx="260"
            cy="260"
            r="135"
            stroke="#FDBA74"
            strokeWidth="1"
            strokeDasharray="1 8"
          />

          <circle
            cx="260"
            cy="260"
            r="92"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 12"
          />

          <path
            d="M260 20V500M20 260H500"
            stroke="white"
            strokeWidth="1"
            strokeOpacity=".35"
          />

          <path
            d="M90 90L430 430M430 90L90 430"
            stroke="white"
            strokeWidth="1"
            strokeOpacity=".18"
          />

          <path
            d="M260 50L300 220L470 260L300 300L260 470L220 300L50 260L220 220Z"
            stroke="#FDBA74"
            strokeWidth="1"
            strokeOpacity=".25"
          />
        </svg>

        {/* =========================================================
            CONTENT
        ========================================================= */}

        <div className="relative z-10 flex min-h-[560px] items-center px-6 py-12 sm:px-9 sm:py-14 md:min-h-[520px] md:max-w-[680px] md:px-12 lg:min-h-[540px] lg:px-16">
          <div className="w-full">
            {/* =====================================================
                STATUS
            ===================================================== */}

            <div
              data-banner-status
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 shadow-sm backdrop-blur-md sm:mb-7"
            >
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-orange-400/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3.5 w-3.5 text-orange-300"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3.5l1.7 5.1L19 10.3l-4.5 3.1 1.5 5.3-4-3.1-4 3.1-4 3.1 1.5-5.3L5 10.3l5.3-1.7L12 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
                Admissions Now Open
              </span>

              <span className="relative ml-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </span>
            </div>

            {/* =====================================================
                HEADING
            ===================================================== */}

            <h2
              data-banner-heading
              className="max-w-[620px] font-serif text-[2.25rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.65rem]"
            >
              Your journey to
              <span className="mt-1 block text-white/70">
                a brighter future begins here.
              </span>
            </h2>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}

            <p
              data-banner-description
              className="mt-5 max-w-[540px] text-sm leading-6 text-white/68 sm:mt-6 sm:text-[15px] sm:leading-7"
            >
              Applications are now open for the upcoming academic session.
              Discover a learning environment where knowledge, innovation,
              research, and opportunity come together.
            </p>

            {/* =====================================================
                CTA BUTTONS
            ===================================================== */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              {/* Primary CTA */}

              <Link
                data-banner-cta
                href="/admissions/apply"
                className="group relative inline-flex w-full overflow-hidden rounded-full p-[1.5px] sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[-180%] animate-[spin_3s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 248deg, #f97316 285deg, #fdba74 315deg, #f97316 340deg, transparent 360deg)",
                  }}
                />

                <span className="relative flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0D0357] shadow-lg transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-xl sm:w-auto">
                  Apply Now

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              {/* Secondary CTA */}

              <Link
                data-banner-cta
                href="/admissions"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/[0.12] sm:w-auto"
              >
                Explore Admissions

                <span className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </Link>
            </div>

            {/* =====================================================
                TRUST POINTS
            ===================================================== */}

            <div className="mt-8 border-t border-white/10 pt-6 sm:mt-9">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-0">
                <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:pr-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>

                  <span className="text-[10px] font-semibold leading-4 text-white/55 sm:text-[11px]">
                    Quality Education
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:border-r sm:border-white/10 sm:px-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>

                  <span className="text-[10px] font-semibold leading-4 text-white/55 sm:text-[11px]">
                    Research Opportunities
                  </span>
                </div>

                <div className="flex items-center gap-2.5 sm:pl-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>

                  <span className="text-[10px] font-semibold leading-4 text-white/55 sm:text-[11px]">
                    Vibrant Campus Life
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            ADMISSION SEAL
        ========================================================= */}

        <div className="absolute right-7 top-7 z-20 hidden lg:block">
          <div className="relative flex h-[122px] w-[122px] items-center justify-center rounded-full border border-white/30 bg-white/[0.08] p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-[6px]">
            {/* Rotating text */}

            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-[spin_28s_linear_infinite]"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="admissionCircle"
                  d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"
                />
              </defs>

              <text
                fill="rgba(255,255,255,.78)"
                fontSize="6.3"
                fontWeight="700"
                letterSpacing="2.4"
              >
                <textPath href="#admissionCircle">
                  • ADMISSIONS OPEN • APPLY NOW •
                </textPath>
              </text>
            </svg>

            {/* Inner seal */}

            <div className="relative flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full border border-orange-200/70 bg-white/[0.12] text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <GraduationCap className="mb-1 h-5 w-5 text-orange-200" />

              <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/70">
                Admissions
              </span>

              <span className="mt-0.5 text-sm font-extrabold leading-none text-white">
                OPEN
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM ACCENT
        ========================================================= */}

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"
        />
      </div>
    </section>
  );
}