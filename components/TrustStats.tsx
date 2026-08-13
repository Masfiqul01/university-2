import React from "react";
import {
  Award,
  GraduationCap,
  Users,
  Building2,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

import {
  FACULTIES,
  PROGRAMS,
  FACULTY_MEMBERS,
  RESEARCH_AREAS,
} from "@/lib/data";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      id: "faculties",
      label: "Academic Faculties",
      value: FACULTIES.length,
      subtext: "Faculties across multiple disciplines",
      icon: Building2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-600/10",
    },
    {
      id: "programs",
      label: "Academic Programs",
      value: PROGRAMS.length,
      subtext: "Undergraduate & postgraduate programs",
      icon: GraduationCap,
      color: "text-amber-600",
      bgColor: "bg-amber-500/10",
    },
    {
      id: "faculty-members",
      label: "Faculty Members",
      value: FACULTY_MEMBERS.length,
      subtext: "Academic professionals & researchers",
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-600/10",
    },
    {
      id: "research",
      label: "Research Areas",
      value: RESEARCH_AREAS.length,
      subtext: "Research & innovation focus areas",
      icon: FlaskConical,
      color: "text-cyan-600",
      bgColor: "bg-cyan-600/10",
    },
  ];

  return (
    <section className="relative z-20 border-b border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* University Information Banner */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0D0357] text-xl font-black text-white shadow-sm">
              KK
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                Khulna Khan Jahan Science and Technology University
              </h3>

              <p className="mt-0.5 text-xs font-medium text-slate-600">
                Academic faculties, programs, faculty members and research
                areas
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700">

            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Academic Programs</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Research Focus</span>
            </div>

          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group rounded-2xl border border-slate-200/80 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">

                  <div
                    className={`rounded-xl p-3 ${stat.bgColor}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${stat.color}`}
                    />
                  </div>

                  <span className="text-3xl font-extrabold tracking-tight text-[#0D0357] transition-colors group-hover:text-amber-600 sm:text-4xl">
                    {stat.value}
                  </span>
                </div>

                <h4 className="mb-1 text-base font-bold text-slate-900">
                  {stat.label}
                </h4>

                <p className="text-xs font-medium text-slate-500">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

