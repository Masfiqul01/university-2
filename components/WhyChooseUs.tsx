"use client";

import Link from "next/link";

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
      <path
        d="M6 22H42"
        stroke="currentColor"
        strokeWidth="1.8"
      />
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
      <path
        d="M7 24H41"
        stroke="currentColor"
        strokeWidth="1.8"
      />
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

const reasons = [
  {
    number: "01",
    title: "Academic Excellence",
    label: "EXCELLENCE",
    description:
      "A rigorous academic environment built around meaningful learning, relevant programs, and high standards.",
    icon: AcademicIcon,
  },
  {
    number: "02",
    title: "Experienced Faculty",
    label: "FACULTY",
    description:
      "Learn from accomplished educators and professionals who bring knowledge, mentorship, and real-world insight.",
    icon: FacultyIcon,
  },
  {
    number: "03",
    title: "Modern Learning",
    label: "LEARNING",
    description:
      "Technology-enabled classrooms, digital resources, and practical learning designed for today's students.",
    icon: LearningIcon,
  },
  {
    number: "04",
    title: "Career Opportunities",
    label: "CAREERS",
    description:
      "Develop career-ready skills through practical experience, industry connections, internships, and guidance.",
    icon: CareerIcon,
  },
  {
    number: "05",
    title: "Global Exposure",
    label: "GLOBAL",
    description:
      "Expand your perspective through international connections, diverse communities, and global opportunities.",
    icon: GlobalIcon,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="relative isolate overflow-hidden bg-[#F6F7FA] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0D0357]/[0.035] blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-amber-300/[0.07] blur-3xl" />

        <svg
          className="absolute right-0 top-0 h-[520px] w-[520px] opacity-[0.035]"
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

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D0357]/65 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Why choose us
            </div>

            <h2
              id="why-choose-us-title"
              className="mt-5 max-w-[650px] text-[2.7rem] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#0D0357] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              An education
              <span className="block text-[#0D0357]/35">
                built for more.
              </span>
            </h2>
          </div>

          <div className="max-w-[590px] lg:justify-self-end">
            <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              More than a place to earn a degree. We provide the knowledge,
              people, opportunities, and perspective you need to turn your
              ambitions into a meaningful future.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <span>Knowledge</span>
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span>Opportunity</span>
              <span className="h-1 w-1 rounded-full bg-amber-400" />
              <span>Future</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN FEATURE AREA
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-[#0D0357] shadow-[0_30px_80px_rgba(13,3,87,0.12)] sm:mt-16 lg:mt-20">
          <div className="grid lg:grid-cols-[0.68fr_1.32fr]">
            {/* =================================================
                LEFT FEATURE
            ================================================= */}

            <div className="relative overflow-hidden p-7 sm:p-9 lg:p-11 xl:p-14">
              {/* Decorative SVG */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-12 h-[330px] w-[330px] opacity-[0.13]"
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

              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200/80">
                  The difference
                </span>

                <h3 className="mt-6 max-w-[420px] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                  Where ambition meets
                  <span className="text-amber-200"> opportunity.</span>
                </h3>

                <p className="mt-5 max-w-[430px] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                  Every part of the university experience is designed to help
                  you learn with purpose, discover your strengths, and move
                  confidently toward what's next.
                </p>

                {/* Mini metric */}
                <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
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
                      Designed for progress
                    </p>
                    <p className="mt-0.5 text-xs text-white/35">
                      From classroom to career
                    </p>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0D0357]"
                >
                  <span>Discover our university</span>

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
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group relative border-b border-white/10 p-6 last:border-b-0 sm:p-7 lg:p-8 xl:px-10"
                  >
                    {/* Active accent */}
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-amber-200 transition-all duration-300 group-hover:border-amber-200/20 group-hover:bg-amber-200/[0.08]">
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

                        <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/20 transition-colors group-hover:text-amber-200/70">
                          <span>Explore</span>

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

        <div className="mt-8 flex flex-col gap-5 rounded-[24px] border border-slate-200 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D0357]/50">
              Your next chapter
            </p>

            <h3 className="mt-1.5 text-lg font-bold tracking-[-0.025em] text-[#0D0357] sm:text-xl">
              Find the environment where your ambition can grow.
            </h3>
          </div>

          <Link
            href="/programs"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#0D0357] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17096F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D0357]/40 focus-visible:ring-offset-2"
          >
            <span>Explore Programs</span>

            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              <ExternalArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}