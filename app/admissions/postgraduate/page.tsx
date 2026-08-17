"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  FlaskConical,
  GraduationCap,
  HelpCircle,
  Microscope,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const degreeTypes = [
  {
    title: "Master's Programs",
    description:
      "Advance your academic knowledge through structured coursework, research and applied learning.",
    duration: "1–2 Years",
    credit: "Program Based",
    thesis: "Thesis / Project Options",
    intake: "According to Official Notice",
    icon: GraduationCap,
  },
  {
    title: "M.Phil. / Research Programs",
    description:
      "Develop advanced research capability through focused study and supervised scholarly work.",
    duration: "Program Based",
    credit: "Program Based",
    thesis: "Research Required",
    intake: "According to Official Notice",
    icon: Microscope,
  },
  {
    title: "Doctoral Programs",
    description:
      "Pursue original research and contribute new knowledge within your chosen academic field.",
    duration: "Program Based",
    credit: "Program Based",
    thesis: "Dissertation Required",
    intake: "According to Official Notice",
    icon: FlaskConical,
  },
];

const researchAreas = [
  {
    title: "AI & Data Science",
    description:
      "Explore intelligent systems, data-driven methods, computation and emerging technologies.",
    icon: Network,
  },
  {
    title: "Engineering",
    description:
      "Advance technical knowledge through applied engineering research and innovation.",
    icon: Briefcase,
  },
  {
    title: "Biotechnology",
    description:
      "Investigate biological systems, laboratory methods and technology-driven solutions.",
    icon: FlaskConical,
  },
  {
    title: "Environment",
    description:
      "Address environmental challenges through research, sustainability and evidence-based solutions.",
    icon: Sparkles,
  },
  {
    title: "Mathematics",
    description:
      "Develop analytical approaches and mathematical methods for academic and practical problems.",
    icon: BookOpen,
  },
  {
    title: "Social & Business Innovation",
    description:
      "Connect research with organizational, social and economic challenges facing communities.",
    icon: Users,
  },
];

const applicationSteps = [
  {
    number: "01",
    title: "Explore Your Program",
    description:
      "Review available postgraduate programs, research areas, entry requirements and study options.",
  },
  {
    number: "02",
    title: "Identify a Research Direction",
    description:
      "Consider your academic interests and research goals before selecting a thesis or project pathway.",
  },
  {
    number: "03",
    title: "Find a Supervisor",
    description:
      "Review relevant academic expertise and identify a potential supervisor where required.",
  },
  {
    number: "04",
    title: "Prepare Your Documents",
    description:
      "Collect academic records, certificates, identification and other documents required by the program.",
  },
  {
    number: "05",
    title: "Submit Your Application",
    description:
      "Complete the application according to the official admission instructions and track the next steps.",
  },
];

const supervisorAreas = [
  {
    name: "Engineering & Technology",
    description:
      "Find academic expertise aligned with engineering, computing and technology-focused research.",
    icon: Briefcase,
  },
  {
    name: "Science & Biotechnology",
    description:
      "Explore research supervision related to laboratory, biological and scientific disciplines.",
    icon: Microscope,
  },
  {
    name: "Mathematics & Analytics",
    description:
      "Connect with research interests involving mathematics, analytics and computational methods.",
    icon: BookOpen,
  },
  {
    name: "Business & Social Innovation",
    description:
      "Explore supervision opportunities across business, management and social innovation.",
    icon: Users,
  },
];

const fundingFaqs = [
  {
    question: "Are postgraduate scholarships available?",
    answer:
      "Funding and scholarship opportunities may vary by program, intake and official university notice. Applicants should review current funding announcements before applying.",
  },
  {
    question: "Can postgraduate students receive research funding?",
    answer:
      "Research funding opportunities may be available through specific projects, centers or institutional initiatives. Availability should be confirmed with the relevant academic office.",
  },
  {
    question: "Is a thesis required for every postgraduate program?",
    answer:
      "Thesis requirements depend on the specific degree and program structure. Applicants should review the official program requirements before selecting a study pathway.",
  },
  {
    question: "When should I apply?",
    answer:
      "Application deadlines vary by program and intake. Always check the latest official admission notice for the current deadline.",
  },
];

const quickFacts = [
  {
    title: "Research Orientation",
    description: "Build advanced academic and research capability.",
    icon: Microscope,
  },
  {
    title: "Supervisor Matching",
    description: "Connect your interests with relevant academic expertise.",
    icon: Users,
  },
  {
    title: "Thesis & Projects",
    description: "Choose pathways aligned with your academic goals.",
    icon: FileText,
  },
  {
    title: "Career Advancement",
    description: "Develop expertise for academic and professional careers.",
    icon: Award,
  },
];

export default function PostgraduateAdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[540px] overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90"
          alt="Postgraduate research laboratory"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/80 to-[#082746]/35" />

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Admissions / Postgraduate
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[60px]">
              Advance Your
              <br />
              Expertise.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Build advanced knowledge, develop research capability and prepare
              for meaningful academic and professional opportunities through
              postgraduate study at KKJSTU.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#supervisors"
                className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Find a Supervisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / RESEARCH ORIENTATION
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Postgraduate Study
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Research With
                <br />
                Purpose
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Postgraduate study at KKJSTU is designed for students who want
                to move beyond foundational knowledge and develop deeper
                academic, analytical and research capabilities.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Depending on the program, students may pursue advanced
                coursework, thesis research, applied projects or doctoral
                research under appropriate academic supervision.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Advanced Learning",
                  "Research Skills",
                  "Academic Mentoring",
                  "Professional Growth",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#d5e5ef] bg-white px-4 py-2 text-xs font-semibold text-[#175783]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS
      ========================================================= */}
      <section id="programs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Degree Types
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Choose the Right Postgraduate Path
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Explore advanced study options and choose a pathway that matches
              your academic interests and future goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {degreeTypes.map((program) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#b28718]">
                      Postgraduate
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {program.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-semibold text-[#092c4d]">
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Credits</span>
                      <span className="font-semibold text-[#092c4d]">
                        {program.credit}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Thesis</span>
                      <span className="text-right font-semibold text-[#092c4d]">
                        {program.thesis}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-500">Intake</span>
                      <span className="text-right font-semibold text-[#092c4d]">
                        {program.intake}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
                  >
                    Explore Program
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH AREAS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Research Areas
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Explore Where Your Research Can Lead
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Connect your postgraduate journey with research themes that
              address academic, technological, environmental and social
              challenges.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {area.description}
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#d9a82e] transition-all group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPERVISOR MATCHING
      ========================================================= */}
      <section id="supervisors" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Supervisor Matching
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Find the Right
                <br />
                Academic Guidance
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Finding appropriate academic guidance is an important part of
                postgraduate research. Explore relevant expertise and research
                interests before contacting a potential supervisor.
              </p>

              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
              >
                Find a Supervisor
                <Search className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supervisorAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.name}
                    className="border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                      {area.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {area.description}
                    </p>

                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                    >
                      View Researchers
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION PROCESS
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Application Process
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              From Interest to Enrollment
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Follow the key stages of a postgraduate application. Always
              confirm program-specific requirements and deadlines in the
              latest official admission notice.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {applicationSteps.map((step) => (
              <div
                key={step.number}
                className="relative border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="font-serif text-3xl font-semibold text-[#d9a82e]">
                  {step.number}
                </span>

                <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                {step.number !== "05" && (
                  <ArrowRight className="mt-5 hidden h-4 w-4 text-[#175783] lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS / DOCUMENTS
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.7} />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                Entry Requirements
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Admission requirements depend on the degree, department and
                program. Applicants should check the current official
                requirements before submitting an application.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Recognized previous academic qualification",
                  "Program-specific academic prerequisites",
                  "Required language or academic prerequisites",
                  "Supporting academic documents",
                  "Additional requirements where applicable",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Check className="h-3.5 w-3.5" />
                    </div>

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                Check Requirements
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border border-slate-200 bg-[#f5f8fc] p-8">
              <div className="flex h-12 w-12 items-center justify-center bg-white text-[#175783] shadow-sm">
                <FileText className="h-6 w-6" strokeWidth={1.7} />
              </div>

              <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d]">
                Prepare Your Documents
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Prepare your academic and supporting documents before beginning
                the application process.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Academic transcripts and certificates",
                  "National identification / passport where applicable",
                  "Recent photographs where required",
                  "Research proposal or statement where applicable",
                  "Additional program-specific documents",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-slate-200 bg-white p-4"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#b28718]" />

                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
              >
                Download Checklist
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUNDING
      ========================================================= */}
      <section className="bg-[#f1eefb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Funding & Opportunities
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Invest in Your
                <br />
                Academic Future
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Explore available scholarship, funding and research
                opportunities according to your program and current university
                announcements.
              </p>

              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                Explore Funding Opportunities
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Scholarships",
                  description:
                    "Review available scholarship opportunities and eligibility conditions.",
                  icon: Award,
                },
                {
                  title: "Research Funding",
                  description:
                    "Look for project-based and research-related funding opportunities.",
                  icon: FlaskConical,
                },
                {
                  title: "Assistantships",
                  description:
                    "Check whether relevant academic or research assistant opportunities are available.",
                  icon: Users,
                },
                {
                  title: "Official Notices",
                  description:
                    "Follow current announcements for funding and admission deadlines.",
                  icon: FileText,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <Icon
                      className="h-6 w-6 text-[#175783]"
                      strokeWidth={1.7}
                    />

                    <h3 className="mt-4 font-serif text-lg font-semibold text-[#092c4d]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DEADLINE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="border border-[#ead9a4] bg-[#fff9e8] p-7 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#f8e8b2] text-[#a4770d]">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#092c4d]">
                    Important Admission Deadline
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Postgraduate application deadlines vary by program and
                    intake. Please refer to the latest official admission
                    notice for the confirmed date.
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#175783] px-5 py-3 text-sm font-bold text-[#175783] transition hover:bg-[#175783] hover:text-white"
              >
                View Admission Notices
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Funding & Application FAQ
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {fundingFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-center gap-3 font-semibold text-[#092c4d]">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#175783]" />
                    {faq.question}
                  </span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="relative flex min-h-[270px] flex-col justify-center px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <GraduationCap className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  POSTGRADUATE ADMISSIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Advance Your Expertise.
                <br />
                Shape Your Future.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Take the next step toward advanced knowledge, meaningful
                research and new academic opportunities at KKJSTU.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="#supervisors"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                Find a Supervisor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#research"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#"
                className="group inline-flex min-w-[145px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}