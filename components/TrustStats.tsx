import React from "react";
import {
  GraduationCap,
  Users,
  Building2,
  CheckCircle2,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

import {
  FACULTIES,
  PROGRAMS,
  RESEARCH_AREAS,
} from "@/lib/data";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      id: "faculties",
      label: "Academic Faculties",
      value: FACULTIES.length,
      subtext: "Across multiple disciplines",
      icon: Building2,
      iconStyle: "bg-indigo-50 text-indigo-600",
      hoverStyle: "group-hover:border-indigo-200",
      numberHover: "group-hover:text-indigo-600",
    },
    {
      id: "programs",
      label: "Academic Programs",
      value: PROGRAMS.length,
      subtext: "Undergraduate & postgraduate",
      icon: GraduationCap,
      iconStyle: "bg-amber-50 text-amber-600",
      hoverStyle: "group-hover:border-amber-200",
      numberHover: "group-hover:text-amber-600",
    },
    {
      id: "faculty-members",
      label: "Faculty Members",
      value: "37+",
      subtext: "Academics & researchers",
      icon: Users,
      iconStyle: "bg-emerald-50 text-emerald-600",
      hoverStyle: "group-hover:border-emerald-200",
      numberHover: "group-hover:text-emerald-600",
    },
    {
      id: "research",
      label: "Research Areas",
      value: RESEARCH_AREAS.length,
      subtext: "Innovation & research focus",
      icon: FlaskConical,
      iconStyle: "bg-cyan-50 text-cyan-600",
      hoverStyle: "group-hover:border-cyan-200",
      numberHover: "group-hover:text-cyan-600",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden border-b border-slate-200/80 bg-white py-14 sm:py-16 lg:py-20">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-100/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">

          {/* Intro */}
          <div className="max-w-2xl">

            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#0D0357]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D0357]/70">
                At a Glance
              </span>
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-[-0.025em] text-slate-950 sm:text-3xl lg:text-[2.25rem]">
              A growing academic community
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              Discover the academic strength, people, programs and research
              focus that define Khanjahan Ali College of Science & Technology.
            </p>
          </div>

          {/* =================================================
              UNIVERSITY IDENTITY
          ================================================= */}
          <div className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 lg:w-auto lg:min-w-[430px]">

            {/* Logo */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#0D0357] shadow-[0_8px_24px_rgba(13,3,87,0.12)] ring-1 ring-slate-200 sm:h-[68px] sm:w-[68px]">
              <img
                src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp"
                alt="KACST"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-5 tracking-[-0.01em] text-slate-950 sm:text-base">
                Khanjahan Ali College of Science & Technology
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Academic Excellence
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Research
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST HIGHLIGHTS
        ===================================================== */}
        <div className="mb-8 flex flex-wrap gap-2.5">

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="text-[11px] font-bold text-slate-700">
              Academic Programs
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="text-[11px] font-bold text-slate-700">
              Research Focus
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="text-[11px] font-bold text-slate-700">
              Student-Centered Learning
            </span>
          </div>
        </div>

        {/* =====================================================
            STATS GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] ${stat.hoverStyle}`}
              >

                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-5 select-none text-[90px] font-black leading-none text-slate-100/80 transition-transform duration-500 group-hover:translate-x-1"
                >
                  {typeof stat.value === "number" ? stat.value : ""}
                </span>

                <div className="relative">

                  {/* Icon + arrow */}
                  <div className="mb-7 flex items-center justify-between">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconStyle}`}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-slate-300 group-hover:text-slate-700">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Main number */}
                  <span
                    className={`block text-[2.7rem] font-black leading-none tracking-[-0.05em] text-[#0D0357] transition-colors duration-300 sm:text-5xl ${stat.numberHover}`}
                  >
                    {stat.value}
                  </span>

                  {/* Label */}
                  <h3 className="mt-4 text-[15px] font-extrabold tracking-[-0.01em] text-slate-900">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-[11px] font-medium leading-5 text-slate-500">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-2xl text-[11px] font-medium leading-5 text-slate-500 sm:text-xs">
            Building a stronger academic community through knowledge,
            research and innovation.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Growing with purpose
          </div>
        </div>

      </div>
    </section>
  );
};