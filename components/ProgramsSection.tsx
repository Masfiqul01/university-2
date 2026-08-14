"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Laptop,
  Cpu,
  Briefcase,
  Terminal,
  Zap,
  Building2,
  Compass,
  ArrowRight,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  X,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROGRAMS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

type Program = (typeof PROGRAMS)[number];

const APPLICATION_STEPS = [
  {
    number: 1,
    title: "Personal Info",
    description: "Tell us about yourself",
  },
  {
    number: 2,
    title: "Academic Grades",
    description: "Share your results",
  },
  {
    number: 3,
    title: "Program & Submission",
    description: "Choose a program and submit",
  },
] as const;

interface ProgramsSectionProps {
  onSelectProgram?: (program: Program) => void;
  onOpenOnlineApplyWithProgram?: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onOpenOnlineApplyWithProgram,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  const [filter, setFilter] = useState<
    "all" | "undergraduate" | "postgraduate"
  >("all");

  const [applicationProgram, setApplicationProgram] = useState<string | null>(
    null
  );

  /* ============================================================
     GSAP SCROLL ANIMATION
  ============================================================ */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const header = section.querySelector("[data-programs-header]");

      const filters = section.querySelectorAll("[data-program-filter]");

      const cards = section.querySelectorAll("[data-program-card]");

      /* Header reveal */
      if (header) {
        gsap.fromTo(
          header,
          {
            autoAlpha: 0,
            y: 35,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /* Filter buttons */
      if (filters.length) {
        gsap.fromTo(
          filters,
          {
            autoAlpha: 0,
            y: 15,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: filters[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      /* Program cards */
      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            autoAlpha: 0,
            y: 45,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [filter]);

  /* ============================================================
     FILTER PROGRAMS
  ============================================================ */
  const filteredPrograms = PROGRAMS.filter((program) => {
    if (filter === "undergraduate") {
      return program.level.toLowerCase() === "undergraduate";
    }

    if (filter === "postgraduate") {
      return program.level.toLowerCase() === "postgraduate";
    }

    return true;
  });

  /* ============================================================
     PROGRAM ICON
  ============================================================ */
  const getIcon = (program: Program) => {
    const title = program.title.toLowerCase();
    const faculty = program.faculty.toLowerCase();

    if (title.includes("computer") || title.includes("software")) {
      return <Laptop className="h-6 w-6 text-amber-500" />;
    }

    if (
      title.includes("electrical") ||
      title.includes("electronic") ||
      title.includes("engineering")
    ) {
      return <Cpu className="h-6 w-6 text-indigo-500" />;
    }

    if (
      title.includes("business") ||
      title.includes("business administration") ||
      title.includes("mba")
    ) {
      return <Briefcase className="h-6 w-6 text-emerald-500" />;
    }

    if (
      title.includes("physics") ||
      title.includes("chemistry") ||
      title.includes("mathematics") ||
      faculty.includes("science")
    ) {
      return <Zap className="h-6 w-6 text-yellow-500" />;
    }

    if (title.includes("civil") || title.includes("mechanical")) {
      return <Building2 className="h-6 w-6 text-blue-500" />;
    }

    if (title.includes("economics") || faculty.includes("social")) {
      return <Compass className="h-6 w-6 text-purple-500" />;
    }

    if (
      title.includes("environmental") ||
      title.includes("microbiology") ||
      title.includes("biochemistry")
    ) {
      return <Terminal className="h-6 w-6 text-cyan-500" />;
    }

    return <GraduationCap className="h-6 w-6 text-amber-500" />;
  };

  /* ============================================================
     PROGRAM DESCRIPTION
  ============================================================ */
  const getDescription = (program: Program) => {
    return `${program.title} is offered under the ${program.faculty}. This ${program.level.toLowerCase()} program has a duration of ${program.duration}.`;
  };

  /* ============================================================
     RENDER
  ============================================================ */
  return (
    <section
      ref={sectionRef}
      id="programs-section"
      className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50 py-20"
    >
      {/* =====================================================
          BACKGROUND PATTERN
          Only this layer has opacity.
          Content/card opacity will NOT be affected.
      ====================================================== */}
      <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.iiuc.ac.bd/assets/backpattern-SdO-ezZO.png')] bg-[length:1220px_auto] bg-center bg-repeat opacity-[0.0935]"
/>

      {/* =====================================================
          SOFT BACKGROUND LIGHT
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 z-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 z-0 h-96 w-96 rounded-full bg-amber-100/25 blur-3xl"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div
          data-programs-header
          className="programs-header mx-auto mb-12 max-w-3xl space-y-3 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0D0357]">
            <GraduationCap className="h-4 w-4 text-amber-600" />

            <span>Academic Offerings</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Academic Programs
          </h2>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore undergraduate and postgraduate programs available
            across the university&apos;s academic faculties.
          </p>

          {/* =================================================
              FILTER BUTTONS
          ================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {/* ALL */}
            <button
              type="button"
              data-program-filter
              onClick={() => setFilter("all")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                filter === "all"
                  ? "bg-[#0D0357] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              All Programs ({PROGRAMS.length})
            </button>

            {/* UNDERGRADUATE */}
            <button
              type="button"
              data-program-filter
              onClick={() => setFilter("undergraduate")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                filter === "undergraduate"
                  ? "bg-[#0D0357] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Undergraduate (
              {
                PROGRAMS.filter(
                  (program) =>
                    program.level.toLowerCase() === "undergraduate"
                ).length
              }
              )
            </button>

            {/* POSTGRADUATE */}
            <button
              type="button"
              data-program-filter
              onClick={() => setFilter("postgraduate")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                filter === "postgraduate"
                  ? "bg-[#0D0357] text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              Postgraduate (
              {
                PROGRAMS.filter(
                  (program) =>
                    program.level.toLowerCase() === "postgraduate"
                ).length
              }
              )
            </button>
          </div>
        </div>

        {/* =====================================================
            PROGRAM GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, index) => (
            <div
              key={`${program.title}-${index}`}
              data-program-card
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* =================================================
                  CARD CONTENT
              ================================================== */}
              <div className="space-y-4 p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-slate-100 p-3 transition-colors group-hover:bg-indigo-50">
                    {getIcon(program)}
                  </div>

                  {/* Level */}
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                      program.level.toLowerCase() === "undergraduate"
                        ? "border-amber-200 bg-amber-100 text-amber-800"
                        : "border-emerald-200 bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {program.level}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-[#0D0357]">
                    {program.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {program.faculty}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-amber-600" />

                    <span>{program.duration}</span>
                  </div>

                  <div className="border-l border-slate-200 pl-3">
                    {program.level}
                  </div>
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {getDescription(program)}
                </p>

                {/* Faculty */}
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-900">
                    Faculty
                  </span>

                  <span className="text-xs font-medium text-slate-600">
                    {program.faculty}
                  </span>
                </div>
              </div>

              {/* =================================================
                  CARD FOOTER
              ================================================== */}
              <div className="flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 p-4">
                {/* Details */}
                <button
                  type="button"
                  onClick={() => onSelectProgram?.(program)}
                  className="flex items-center gap-1 text-xs font-bold text-[#0D0357] transition-colors hover:text-amber-600"
                >
                  <span>View Details</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                {/* Apply */}
                <button
                  type="button"
                  onClick={() => {
                    onOpenOnlineApplyWithProgram?.(program.title);
                    setApplicationProgram(program.title);
                  }}
                  className="flex items-center gap-1 rounded-lg bg-[#0D0357] px-3.5 py-2 text-xs font-bold text-amber-300 shadow-sm transition-all hover:bg-indigo-950 hover:shadow-md"
                >
                  <span>Apply Now</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}
        {filteredPrograms.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <GraduationCap className="mx-auto mb-4 h-10 w-10 text-slate-400" />

            <h3 className="text-lg font-bold text-slate-900">
              No Programs Found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              No academic programs are available for this category.
            </p>
          </div>
        )}
      </div>

      {/* =======================================================
          APPLICATION MODAL
      ======================================================== */}
      {applicationProgram && (
        <ApplicationModal
          initialProgram={applicationProgram}
          onClose={() => setApplicationProgram(null)}
        />
      )}
    </section>
  );
};

/* ================================================================
   APPLICATION MODAL
================================================================ */

function ApplicationModal({
  initialProgram,
  onClose,
}: {
  initialProgram: string;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  /* ============================================================
     PREVENT BACKGROUND SCROLL + ESCAPE CLOSE
  ============================================================ */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  /* ============================================================
     VALIDATION
  ============================================================ */
  const validateStep = (currentStep: number) => {
    const fields = formRef.current?.querySelectorAll<HTMLElement>(
      `[data-step="${currentStep}"]`
    );

    const invalidField = Array.from(fields ?? []).find((field) =>
      field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement
        ? !field.checkValidity()
        : false
    ) as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | undefined;

    if (invalidField) {
      setError("Please complete all required fields before continuing.");

      invalidField.reportValidity();
      invalidField.focus();

      return false;
    }

    setError("");

    return true;
  };

  /* ============================================================
     NEXT STEP
  ============================================================ */
  const nextStep = () => {
    if (validateStep(step)) {
      setStep((current) => Math.min(current + 1, 3));
    }
  };

  /* ============================================================
     SUBMIT
  ============================================================ */
  const submitApplication = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!validateStep(3)) {
      return;
    }

    setSubmitted(true);
  };

  const fieldClassName =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100";

  const labelClassName = "text-sm font-bold text-slate-700";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end bg-slate-950/65 p-0 backdrop-blur-sm sm:items-center sm:justify-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[94dvh] w-full overflow-y-auto rounded-t-3xl bg-slate-50 shadow-2xl sm:max-w-3xl sm:rounded-3xl">
        {/* =====================================================
            MODAL HEADER
        ====================================================== */}
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-5 py-5 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-[#0D0357] focus:outline-none focus:ring-4 focus:ring-amber-100 sm:right-6 sm:top-5"
            aria-label="Close application form"
          >
            <X className="h-5 w-5" />
          </button>

          <p className="pr-12 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">
            Admissions application
          </p>

          <h2
            id="application-modal-title"
            className="mt-1 text-2xl font-extrabold text-[#0D0357] sm:text-3xl"
          >
            Apply to KKJSTU
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Complete all fields to submit your application.
          </p>
        </div>

        {/* =====================================================
            SUCCESS STATE
        ====================================================== */}
        {submitted ? (
          <div className="px-5 py-12 text-center sm:px-8 sm:py-16">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CircleCheck className="h-9 w-9" />
            </div>

            <h3 className="mt-5 text-2xl font-extrabold text-[#0D0357]">
              Application submitted
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
              Thank you for applying. Our admissions team will review your
              information and contact you by email.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-xl bg-[#0D0357] px-6 py-3 text-sm font-bold text-amber-300 transition hover:bg-indigo-950"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={submitApplication} noValidate>
            {/* =================================================
                STEPS
            ================================================== */}
            <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
              <ol className="grid grid-cols-3 gap-2 sm:gap-4">
                {APPLICATION_STEPS.map((item) => {
                  const active = item.number === step;
                  const complete = item.number < step;

                  return (
                    <li key={item.number} className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black ${
                            active || complete
                              ? "bg-[#0D0357] text-amber-300"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {complete ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            item.number
                          )}
                        </span>

                        <span
                          className={`hidden h-0.5 flex-1 sm:block ${
                            item.number < step
                              ? "bg-[#0D0357]"
                              : "bg-slate-200"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-2 text-xs font-extrabold leading-tight sm:text-sm ${
                          active ? "text-[#0D0357]" : "text-slate-500"
                        }`}
                      >
                        {item.title}
                      </p>

                      <p className="mt-0.5 hidden text-xs text-slate-400 sm:block">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* =================================================
                FORM CONTENT
            ================================================== */}
            <div className="px-5 py-6 sm:px-8 sm:py-7">
              {/* =================================================
                  STEP 1
              ================================================== */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Personal Info
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Use your official contact details.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className={labelClassName}>
                      Full name <span className="text-rose-500">*</span>

                      <input
                        data-step="1"
                        required
                        name="fullName"
                        autoComplete="name"
                        className={fieldClassName}
                        placeholder="Your full name"
                      />
                    </label>

                    <label className={labelClassName}>
                      Email address{" "}
                      <span className="text-rose-500">*</span>

                      <input
                        data-step="1"
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        className={fieldClassName}
                        placeholder="name@example.com"
                      />
                    </label>

                    <label className={labelClassName}>
                      Mobile number <span className="text-rose-500">*</span>

                      <input
                        data-step="1"
                        required
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        className={fieldClassName}
                        placeholder="01XXXXXXXXX"
                      />
                    </label>

                    <label className={labelClassName}>
                      Date of birth <span className="text-rose-500">*</span>

                      <input
                        data-step="1"
                        required
                        type="date"
                        name="dateOfBirth"
                        className={fieldClassName}
                      />
                    </label>
                  </div>

                  <label className={labelClassName}>
                    Present address <span className="text-rose-500">*</span>

                    <textarea
                      data-step="1"
                      required
                      name="address"
                      rows={3}
                      className={fieldClassName}
                      placeholder="House, road, area, district"
                    />
                  </label>
                </div>
              )}

              {/* =================================================
                  STEP 2
              ================================================== */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Academic Grades
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter the results from your most recent qualifications.
                    </p>
                  </div>

                  {/* SSC */}
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                    <p className="text-sm font-extrabold text-[#0D0357]">
                      Secondary School Certificate (SSC/O-Level)
                    </p>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <label className={labelClassName}>
                        Board <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="sscBoard"
                          className={fieldClassName}
                          placeholder="e.g. Dhaka"
                        />
                      </label>

                      <label className={labelClassName}>
                        Passing year{" "}
                        <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="sscYear"
                          type="number"
                          min="1990"
                          max="2100"
                          className={fieldClassName}
                          placeholder="2023"
                        />
                      </label>

                      <label className={labelClassName}>
                        GPA / grade{" "}
                        <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="sscGpa"
                          type="number"
                          min="0"
                          max="5"
                          step="0.01"
                          className={fieldClassName}
                          placeholder="5.00"
                        />
                      </label>
                    </div>
                  </div>

                  {/* HSC */}
                  <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
                    <p className="text-sm font-extrabold text-[#0D0357]">
                      Higher Secondary Certificate (HSC/A-Level)
                    </p>

                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      <label className={labelClassName}>
                        Board <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="hscBoard"
                          className={fieldClassName}
                          placeholder="e.g. Dhaka"
                        />
                      </label>

                      <label className={labelClassName}>
                        Passing year{" "}
                        <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="hscYear"
                          type="number"
                          min="1990"
                          max="2100"
                          className={fieldClassName}
                          placeholder="2025"
                        />
                      </label>

                      <label className={labelClassName}>
                        GPA / grade{" "}
                        <span className="text-rose-500">*</span>

                        <input
                          data-step="2"
                          required
                          name="hscGpa"
                          type="number"
                          min="0"
                          max="5"
                          step="0.01"
                          className={fieldClassName}
                          placeholder="5.00"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
                  STEP 3
              ================================================== */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Program & Submission
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Review your choice, then submit the application.
                    </p>
                  </div>

                  {/* Program */}
                  <label className={labelClassName}>
                    Program you are applying for{" "}
                    <span className="text-rose-500">*</span>

                    <select
                      data-step="3"
                      required
                      name="program"
                      defaultValue={initialProgram}
                      className={fieldClassName}
                    >
                      <option value="" disabled>
                        Select a program
                      </option>

                      {PROGRAMS.map((program) => (
                        <option key={program.title} value={program.title}>
                          {program.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Intake */}
                  <label className={labelClassName}>
                    Preferred intake{" "}
                    <span className="text-rose-500">*</span>

                    <select
                      data-step="3"
                      required
                      name="intake"
                      defaultValue=""
                      className={fieldClassName}
                    >
                      <option value="" disabled>
                        Select an intake
                      </option>

                      <option value="spring-2026">Spring 2026</option>

                      <option value="fall-2026">Fall 2026</option>
                    </select>
                  </label>

                  {/* Declaration */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
                    <input
                      data-step="3"
                      required
                      name="declaration"
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 accent-[#0D0357]"
                    />

                    <span>
                      I confirm that the information provided is accurate and
                      I agree to the admissions terms.{" "}
                      <span className="text-rose-500">*</span>
                    </span>
                  </label>
                </div>
              )}

              {/* Error */}
              {error && (
                <p
                  className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>

            {/* =================================================
                MODAL FOOTER
            ================================================== */}
            <div className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 py-4 sm:px-8">
              {/* Back */}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setStep((current) => current - 1);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-[#0D0357] transition hover:bg-indigo-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <span />
              )}

              {/* Next */}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D0357] px-5 py-2.5 text-sm font-bold text-amber-300 shadow-sm transition hover:bg-indigo-950"
                >
                  Next step
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D0357] px-5 py-2.5 text-sm font-bold text-amber-300 shadow-sm transition hover:bg-indigo-950"
                >
                  Submit application
                  <Check className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}