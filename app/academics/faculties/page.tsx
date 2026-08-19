"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

import { SiteHeader } from "../../../components/site-header";
import { SiteFooter } from "../../../components/site-footer";
import {
  FACULTIES_PAGE_HERO,
  FACULTIES_STAT_STRIP,
  ACADEMIC_EXCELLENCE_INTRO,
  ACADEMIC_FEATURES,
  PROGRAMS_INTRO,
  PROGRAMS,
  SMART_CLASSROOM,
  LABS_SECTION,
  LIBRARY_SECTION,
  CAMPUS_FACILITIES_INTRO,
  CAMPUS_FACILITIES,
  BEYOND_CLASSROOM,
  ACTIVITIES,
  SAFETY_SECTION,
  FACULTIES_PAGE_CTA,
} from "@/lib/data/faculties";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================================
   DATA
========================================================= */

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${
        dark ? "text-[#f8d87d]" : "text-[#120a80]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          dark ? "bg-[#fd9900]" : "bg-[#120a80]"
        }`}
      />

      <span>{children}</span>
    </div>
  );
}

function RevealText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function StatCard({
  index,
  number,
  label,
}: {
  index: number;
  number: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ backgroundColor: "#F7F8FA" }}
      className="group border-b border-slate-200 p-6 transition-colors md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="text-xs font-bold tracking-[0.18em] text-[#120a80]">
          {number}
        </span>

        <ArrowUpRight
          size={16}
          className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#120a80]"
        />
      </div>

      <div className="mt-10 text-lg font-bold tracking-tight text-[#0b0754] sm:text-xl">
        {label}
      </div>

      <div className="mt-5 h-px w-10 bg-slate-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#120a80]" />
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AcademicFacilitiesPage() {
  const root = useRef<HTMLDivElement | null>(null);
  const heroImage = useRef<HTMLDivElement | null>(null);
  const heroGlow = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.4],
    [1, 1.12]
  );

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, 90]
  );

  /* =========================================================
     GSAP
  ========================================================= */

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        /* Hero intro */

        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        intro
          .from(".hero-kicker", {
            opacity: 0,
            y: 20,
            duration: 0.7,
          })
          .from(
            ".hero-title-line",
            {
              opacity: 0,
              yPercent: 110,
              stagger: 0.12,
              duration: 1.1,
            },
            "-=0.35"
          )
          .from(
            ".hero-copy",
            {
              opacity: 0,
              y: 24,
              duration: 0.8,
            },
            "-=0.45"
          )
          .from(
            ".hero-actions",
            {
              opacity: 0,
              y: 20,
              duration: 0.75,
            },
            "-=0.4"
          )
          .from(
            ".hero-meta",
            {
              opacity: 0,
              y: 20,
              duration: 0.7,
            },
            "-=0.35"
          );

        /* Generic reveal */

        gsap.utils.toArray(".gsap-reveal").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 55,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });

        /* Cards */

        gsap.utils.toArray(".facility-card").forEach(
          (item, index) => {
            gsap.from(item, {
              opacity: 0,
              y: 60,
              scale: 0.97,
              duration: 0.8,
              delay: index * 0.06,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          }
        );

        /* Image reveal */

        gsap.utils.toArray(".image-reveal").forEach((image) => {
          gsap.fromTo(
            image,
            {
              clipPath: "inset(0 100% 0 0)",
            },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.35,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: image,
                start: "top 82%",
              },
            }
          );
        });

        /* Moving lines */

        gsap.utils.toArray(".moving-line").forEach((line) => {
          gsap.fromTo(
            line,
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            {
              scaleX: 1,
              duration: 1.1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: line,
                start: "top 90%",
              },
            }
          );
        });

        /* Hero glow */

        if (heroGlow.current) {
          gsap.to(heroGlow.current, {
            y: 80,
            x: 30,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        /* Hero image */

        if (heroImage.current) {
          gsap.to(heroImage.current, {
            scale: 1.08,
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        /* Parallax images */

        gsap.utils.toArray(".parallax-image").forEach((image) => {
          gsap.to(image, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        /* Section numbers */

        gsap.utils.toArray(".section-number").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            x: -25,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          });
        });
      }, root);

      return () => {
        ctx.revert();
      };
    },
    {
      scope: root,
    }
  );

  /* =========================================================
     SCROLL BEHAVIOR
  ========================================================= */

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
        smoothWheel: true,
      }}
    >
      <div
        ref={root}
        className="bg-[#f7f7fb] text-[#0b0754]"
      >
        {/* Scroll progress */}

        {/* <motion.div
          style={{ scaleX: progress }}
          className="fixed left-0 top-0 z-[200] h-[3px] w-full origin-left bg-[#fd9900]"
        /> */}

        {/* Header */}

        <SiteHeader />

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero-section relative min-h-[70vh] overflow-hidden bg-brand-dark">
          <motion.div
            ref={heroImage}
            style={{
              scale: heroScale,
              y: heroY,
            }}
            className="absolute inset-0"
          >
            <img
              src={FACULTIES_PAGE_HERO.image}
              alt={FACULTIES_PAGE_HERO.imageAlt}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />
          </motion.div>

          <div
            ref={heroGlow}
            className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-[#fd9900]/20 blur-[90px]"
          />

          <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div className="w-full">
              <div className="max-w-5xl">
                <div className="hero-kicker mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f8d87d]">
                  <span className="h-px w-10 bg-[#fd9900]" />

                  {FACULTIES_PAGE_HERO.badge}
                </div>

                <h1 className="max-w-4xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  <span className="hero-title-line block">
                    {FACULTIES_PAGE_HERO.titleLines[0]}
                  </span>

                  <span className="hero-title-line block text-[#f8d87d]">
                    {FACULTIES_PAGE_HERO.titleLines[1]}
                  </span>
                </h1>

                <p className="hero-copy mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  {FACULTIES_PAGE_HERO.description}
                </p>

                <div className="hero-actions mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#academics"
                    className="group inline-flex h-11 items-center justify-center gap-3 rounded-xl bg-white px-5 text-sm font-bold text-[#0b0754] transition hover:bg-[#fff4d8]"
                  >
                    {FACULTIES_PAGE_HERO.primary.label}

                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="#facilities"
                    className="group inline-flex h-11 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                  >
                    {FACULTIES_PAGE_HERO.secondary.label}

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="hero-meta mt-8 grid max-w-4xl border-t border-white/15 sm:grid-cols-4">
                {[
                  ...FACULTIES_PAGE_HERO.stats.map((stat) => [stat.value, stat.label] as const),
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="border-b border-white/10 px-0 py-4 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <div className="text-xl font-black text-white">
                      {number}
                    </div>

                    <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STAT STRIP
        ====================================================== */}

        <section className="border-b border-slate-200 bg-[#ffffff]">
          <div className="mx-auto grid max-w-[1440px] md:grid-cols-4">
            {FACULTIES_STAT_STRIP.map((stat, index) => (
              <StatCard
                key={stat.label}
                index={index}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            ACADEMIC EXCELLENCE
        ====================================================== */}

        <section
          id="academics"
          className="relative overflow-hidden bg-[#f5f7fb] py-24 sm:py-32"
        >
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="gsap-reveal lg:sticky lg:top-32">
                <SectionLabel>
                  {ACADEMIC_EXCELLENCE_INTRO.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#0b0754] sm:text-5xl">
                    {ACADEMIC_EXCELLENCE_INTRO.title}
                  </h2>
                </RevealText>

                <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {ACADEMIC_EXCELLENCE_INTRO.description}
                </p>

                <div className="moving-line mt-9 h-px w-full bg-[#0b0754]" />

                <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                  <span>{ACADEMIC_EXCELLENCE_INTRO.note}</span>
                  <span>{ACADEMIC_EXCELLENCE_INTRO.counter}</span>
                </div>
              </div>

              <div className="grid gap-0 border-t border-slate-300">
                {ACADEMIC_FEATURES.map((feature) => (
                  <motion.div
                    key={feature.number}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="group gsap-reveal grid gap-5 border-b border-slate-300 py-8 sm:grid-cols-[80px_1fr_1.2fr] sm:items-start"
                  >
                    <div className="section-number text-xs font-bold text-[#120a80]">
                      {feature.number}
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#0b0754] sm:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="max-w-lg text-sm leading-6 text-slate-500 sm:pt-1">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMS
        ====================================================== */}

        <section className="bg-page-pattern py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <SectionLabel>
                  {PROGRAMS_INTRO.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#08111F] sm:text-5xl">
                    {PROGRAMS_INTRO.title}
                  </h2>
                </RevealText>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500 lg:text-right">
                {PROGRAMS_INTRO.description}
              </p>
            </div>

            <div className="mt-14 grid border-t border-slate-300 md:grid-cols-2">
              {PROGRAMS.map((program) => (
                <motion.article
                  key={program.number}
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="facility-card group border-b border-slate-300 bg-white p-7 sm:p-10 md:[&:nth-child(odd)]:border-r"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.18em] text-[#120a80]">
                      {program.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-[#120a80] group-hover:bg-[#120a80] group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <div className="mt-14">
                    <div className="text-[10px] font-bold tracking-[0.22em] text-slate-400">
                      {program.level}
                    </div>

                    <h3 className="mt-3 text-2xl font-black tracking-tight text-[#0b0754] sm:text-3xl">
                      {program.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
                      {program.text}
                    </p>

                    <Link
                      href="/academics"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0b0754] transition group-hover:text-[#120a80]"
                    >
                      Learn More

                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SMART CLASSROOM
        ====================================================== */}

        <section className="overflow-hidden bg-[#0b0754] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="image-reveal overflow-hidden rounded-2xl">
                <div className="relative h-[430px] sm:h-[570px]">
                  <img
                    src={SMART_CLASSROOM.image}
                    alt={SMART_CLASSROOM.imageAlt}
                    className="parallax-image h-full w-full scale-[1.08] object-cover"
                  />

                  <div className="absolute inset-0 bg-[#0b0754]/20" />

                  <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#0b0754]/65 px-4 py-3 backdrop-blur-md">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#f8d87d]">
                      Modern Learning
                    </div>

                    <div className="mt-1 text-xs text-white">
                      Technology + Teaching
                    </div>
                  </div>
                </div>
              </div>

              <div className="gsap-reveal lg:pl-8">
                <SectionLabel dark>
                  {SMART_CLASSROOM.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl">
                    Modern classrooms.

                    <span className="block text-[#f8d87d]">
                      More engaging learning.
                    </span>
                  </h2>
                </RevealText>

                <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {SMART_CLASSROOM.description}
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    ...SMART_CLASSROOM.points,
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.07,
                      }}
                      className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm text-slate-200"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#f8d87d]/40 text-[#f8d87d]">
                        ✓
                      </span>

                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LABS
        ====================================================== */}

        <section className="bg-page-pattern py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="gsap-reveal">
                <SectionLabel>
                  {LABS_SECTION.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#08111F] sm:text-5xl">
                    {LABS_SECTION.title}
                  </h2>
                </RevealText>

                <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {LABS_SECTION.description}
                </p>

                <Link
                  href="/research"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0b0754] hover:text-[#120a80]"
                >
                  Explore Research
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-2 border-l border-t border-slate-300">
                {[
                  ...LABS_SECTION.labs.map((lab) => [lab.number, lab.title] as const),
                ].map(([number, title]) => (
                  <motion.div
                    key={title}
                    whileHover={{
                      backgroundColor: "#F7F8FA",
                    }}
                    className="border-b border-r border-slate-300 p-7 sm:p-10"
                  >
                    <div className="text-xs font-bold text-[#120a80]">
                      {number}
                    </div>

                    <div className="mt-12 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff5db] text-2xl">
                      🔬
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-[#0b0754] sm:text-xl">
                      {title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {LABS_SECTION.cardText}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LIBRARY
        ====================================================== */}

        <section className="bg-[#F7F8FA] py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="gsap-reveal">
                <SectionLabel>
                  {LIBRARY_SECTION.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#08111F] sm:text-5xl">
                    A space to read,

                    <span className="block text-[#120a80]">
                      explore & learn.
                    </span>
                  </h2>
                </RevealText>

                <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {LIBRARY_SECTION.description}
                </p>

                <div className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {[
                    ...LIBRARY_SECTION.points,
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-slate-200 pb-4 text-sm font-medium text-slate-700"
                    >
                      <span className="text-[#120a80]">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </div>

             <div className="image-reveal overflow-hidden rounded-2xl">
  <div className="relative h-[480px] sm:h-[560px]">
    <img
      src={LIBRARY_SECTION.image}
      alt={LIBRARY_SECTION.imageAlt}
      className="parallax-image h-full w-full scale-[1.08] object-cover"
    />
  </div>
</div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACILITIES
        ====================================================== */}

        <section
          id="facilities"
          className="bg-page-pattern py-24 sm:py-32"
        >
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="max-w-3xl gsap-reveal">
              <SectionLabel>
                {CAMPUS_FACILITIES_INTRO.label}
              </SectionLabel>

              <RevealText>
                <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#08111F] sm:text-5xl">
                  {CAMPUS_FACILITIES_INTRO.title}
                </h2>
              </RevealText>

              <p className="mt-7 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {CAMPUS_FACILITIES_INTRO.description}
              </p>
            </div>

            <div className="mt-14 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
              {CAMPUS_FACILITIES.map((facility) => (
                <motion.div
                  key={facility.title}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#F7F8FA",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="facility-card group min-h-[270px] border-b border-r border-slate-300 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-[#120a80]">
                      {facility.icon}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition group-hover:text-[#120a80]"
                    />
                  </div>

                  <h3 className="mt-16 text-lg font-bold tracking-tight text-[#0b0754]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {facility.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BEYOND CLASSROOM
        ====================================================== */}

        <section className="bg-[#F7F8FA] py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
              <div className="gsap-reveal">
                <SectionLabel>
                  {BEYOND_CLASSROOM.label}
                </SectionLabel>

                <RevealText>
                  <h2 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#08111F] sm:text-5xl">
                    Developing confident,

                    <span className="block text-[#120a80]">
                      well-rounded individuals.
                    </span>
                  </h2>
                </RevealText>

                <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {BEYOND_CLASSROOM.description}
                </p>

                <div className="mt-9 max-w-lg border-t border-slate-300 pt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {BEYOND_CLASSROOM.note}
                </div>
              </div>

              <div className="grid border-l border-t border-slate-300 sm:grid-cols-2">
                {ACTIVITIES.map((activity, index) => (
                  <motion.div
                    key={activity}
                    whileHover={{
                      backgroundColor: "#FFFFFF",
                      x: 4,
                    }}
                    className="border-b border-r border-slate-300 p-6"
                  >
                    <div className="text-[10px] font-bold text-[#120a80]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-5 text-sm font-bold text-[#0b0754]">
                      {activity}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SAFETY
        ====================================================== */}

        <section className="bg-page-pattern py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2e3494] via-[#232771] to-[#171a52] px-7 py-12 shadow-[0_24px_70px_rgba(35,39,113,0.28)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Decorative glows */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/[0.08] blur-[90px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-white/[0.05] blur-[90px]"
              />

              {/* Corner badge icon */}
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] text-amber-200 backdrop-blur-md sm:flex"
              >
                <GraduationCap className="h-6 w-6" strokeWidth={1.7} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
              </div>

              <div className="relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="gsap-reveal">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-200/85">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/[0.08]">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {SAFETY_SECTION.label}
                  </div>

                  <RevealText>
                    <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {SAFETY_SECTION.title}
                    </h2>
                  </RevealText>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                    {SAFETY_SECTION.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ...SAFETY_SECTION.points,
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white"
                    >
                      <span className="mr-2 text-[#f8d87d]">
                        ✓
                      </span>

                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-page-pattern py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2e3494] via-[#232771] to-[#171a52] px-7 py-12 shadow-[0_24px_70px_rgba(35,39,113,0.28)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              {/* Decorative glows */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/[0.08] blur-[90px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-white/[0.05] blur-[90px]"
              />

              {/* Corner badge icon */}
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] text-amber-200 backdrop-blur-md sm:flex"
              >
                <GraduationCap className="h-6 w-6" strokeWidth={1.7} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
              </div>

              <div className="relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="gsap-reveal">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-200/85">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/[0.08]">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {FACULTIES_PAGE_CTA.eyebrow}
                  </div>

                  <RevealText>
                    <h2 className="max-w-xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {FACULTIES_PAGE_CTA.titleLines[0]}
                      <br />
                      {FACULTIES_PAGE_CTA.titleLines[1]}
                    </h2>
                  </RevealText>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                    {FACULTIES_PAGE_CTA.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={FACULTIES_PAGE_CTA.links[0].href}
                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-bold text-[#0b0754] transition hover:bg-[#fff4d8]"
                  >
                    {FACULTIES_PAGE_CTA.links[0].label}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href={FACULTIES_PAGE_CTA.links[1].href}
                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                  >
                    {FACULTIES_PAGE_CTA.links[1].label}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href={FACULTIES_PAGE_CTA.links[2].href}
                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 px-6 text-sm font-semibold text-white/70 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    {FACULTIES_PAGE_CTA.links[2].label}

                    <ArrowUpRight
                      size={15}
                      className="opacity-60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>

                  {/* Trust strip */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4">
                    {FACULTIES_PAGE_CTA.trustStrip.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}

        <SiteFooter />
      </div>
    </ReactLenis>
  );
}