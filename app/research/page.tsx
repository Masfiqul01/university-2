"use client";

import {
  ArrowRight,
  BarChart3,
  Beaker,
  BookOpen,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  FlaskConical,
  Globe2,
  Leaf,
  Microscope,
  Network,
  Search,
  Sparkles,
  Users,
  Waypoints,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const researchAreas = [
  {
    title: "AI & Data Science",
    description:
      "Exploring intelligent systems, data-driven methods and emerging technologies that can address complex real-world challenges.",
    icon: BrainCircuit,
  },
  {
    title: "Engineering",
    description:
      "Applied engineering research focused on practical innovation, technology development and solutions for industry and society.",
    icon: Network,
  },
  {
    title: "Biotechnology",
    description:
      "Research into biological systems, laboratory methods and emerging applications with potential academic and societal value.",
    icon: Microscope,
  },
  {
    title: "Environment",
    description:
      "Investigating environmental challenges, sustainability and responsible approaches to natural-resource management.",
    icon: Leaf,
  },
  {
    title: "Mathematics",
    description:
      "Advancing mathematical thinking, modelling and analytical approaches that support science, engineering and technology.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Social & Business Innovation",
    description:
      "Research connecting business, society and innovation to understand challenges and create meaningful opportunities.",
    icon: Users,
  },
];

const researchStats = [
  {
    value: "06+",
    label: "Research Focus Areas",
    icon: Beaker,
  },
  {
    value: "20+",
    label: "Active Research Themes",
    icon: Waypoints,
  },
  {
    value: "50+",
    label: "Research & Academic Projects",
    icon: FlaskConical,
  },
  {
    value: "10+",
    label: "Collaboration Opportunities",
    icon: Globe2,
  },
];

const featuredProjects = [
  {
    title: "Intelligent Data & Decision Systems",
    area: "AI & Data Science",
    problem:
      "How can data and intelligent technologies support better decisions in complex environments?",
    method:
      "Applied data analysis, computational modelling and intelligent system development.",
    impact:
      "Building practical knowledge that can support technology-led solutions and future innovation.",
    researcher: "Research Group — AI & Data Science",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Sustainable Environmental Solutions",
    area: "Environment",
    problem:
      "How can research contribute to more sustainable communities and responsible environmental practices?",
    method:
      "Field observation, environmental analysis and interdisciplinary research approaches.",
    impact:
      "Supporting evidence-based approaches to sustainability and environmental awareness.",
    researcher: "Research Group — Environmental Studies",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Applied Engineering Innovation",
    area: "Engineering",
    problem:
      "How can engineering research translate academic knowledge into useful practical solutions?",
    method:
      "Laboratory experimentation, prototyping and applied engineering analysis.",
    impact:
      "Creating opportunities for practical innovation, student research and industry engagement.",
    researcher: "Research Group — Engineering",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  },
];

const researchOpportunities = [
  {
    title: "Research Centers",
    description:
      "Explore interdisciplinary research environments, laboratories and academic groups working across different areas.",
    icon: Building2,
  },
  {
    title: "Publications",
    description:
      "Browse research outputs, academic publications and scholarly work from the university community.",
    icon: BookOpen,
  },
  {
    title: "Researchers",
    description:
      "Connect with academics and research groups whose expertise aligns with your interests and collaboration goals.",
    icon: Users,
  },
  {
    title: "Research Funding",
    description:
      "Discover opportunities for research support, project development and collaborative funding initiatives.",
    icon: BarChart3,
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90"
          alt="University laboratory research"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/76" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/78 to-[#082746]/25" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Research at KKJSTU
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Research That
              <br />
              <span className="text-[#f1f4f8]">
                Creates Possibilities.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Advancing knowledge, encouraging innovation and connecting
              research with the challenges and opportunities of society.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#research-areas"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#collaborate"
                className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Collaborate With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / RESEARCH AT A GLANCE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Research at a Glance
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Knowledge With
                <br />
                Purpose
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Research at KKJSTU brings together academic curiosity,
                practical problem-solving and a commitment to creating
                meaningful knowledge.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Researchers, faculty members and students can contribute to
                interdisciplinary work across science, engineering,
                technology, environment, mathematics and social and business
                innovation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="border border-[#d8e5ee] bg-[#f5f9fc] px-4 py-2 text-xs font-semibold text-[#175783]">
                  Interdisciplinary Research
                </span>

                <span className="border border-[#d8e5ee] bg-[#f5f9fc] px-4 py-2 text-xs font-semibold text-[#175783]">
                  Applied Innovation
                </span>

                <span className="border border-[#d8e5ee] bg-[#f5f9fc] px-4 py-2 text-xs font-semibold text-[#175783]">
                  Global Collaboration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH STATS
      ========================================================= */}
      <section className="border-y border-[#d9e5ef] bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="grid divide-y divide-[#cdddea] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {researchStats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 px-5 py-5 first:pl-0 last:pr-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c8dcea] bg-white text-[#175783]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="font-serif text-2xl font-bold text-[#092c4d]">
                      {item.value}
                    </p>

                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH FOCUS AREAS
      ========================================================= */}
      <section id="research-areas" className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Research Focus Areas
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Exploring Questions That Matter
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Research themes can evolve as new academic strengths,
              collaborations and societal challenges emerge.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
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
          FEATURED RESEARCH
      ========================================================= */}
      <section className="bg-[#f0effb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Featured Research
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                From Research Questions
                <br />
                to Real-World Impact
              </h2>
            </div>

            <a
              href="/research/publications"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
            >
              Browse Research
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="overflow-hidden border border-[#dddcef] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#082746]/25" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#082746]/75 text-[#e1b63b] backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="absolute bottom-4 left-5 bg-[#d9a82e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#082746]">
                      {project.area}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                      {project.title}
                    </h3>

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          The Challenge
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          Research Method
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.method}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#b28718]">
                          Potential Impact
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-slate-500">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Responsible Researcher
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#175783]">
                        {project.researcher}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH LAB FEATURE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid overflow-hidden border border-slate-200 bg-[#082746] lg:grid-cols-2">
            <div className="relative min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85"
                alt="University research laboratory"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#082746]/25" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#082746]/90 to-transparent p-8 pt-32">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  Research Environment
                </span>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  Connecting curiosity with experimentation and discovery.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                <Microscope className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                Build, Test & Discover
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                Research grows when people have access to the right questions,
                expertise, tools and collaborative environment. KKJSTU aims to
                create opportunities for students and researchers to engage
                with meaningful academic work.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Laboratories", FlaskConical],
                  ["Researchers", Users],
                  ["Publications", BookOpen],
                  ["Collaboration", Network],
                ].map(([title, Icon]) => {
                  const ItemIcon = Icon as typeof FlaskConical;

                  return (
                    <div
                      key={title as string}
                      className="border border-white/10 bg-white/[0.045] p-4"
                    >
                      <ItemIcon className="h-5 w-5 text-[#d9a82e]" />

                      <p className="mt-3 text-sm font-semibold text-white">
                        {title as string}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH OPPORTUNITIES
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Research Opportunities
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Connect With
                <br />
                Research
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Whether you are a student, academic, industry partner or
                research organization, discover ways to connect with the
                university's research ecosystem.
              </p>

              <a
                href="#collaborate"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                Meet Researchers
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {researchOpportunities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group border border-[#d7e4ed] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                    >
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION
      ========================================================= */}
      <section id="collaborate" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden border border-[#d9e5ef] bg-[#f5f9fc]">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d9a82e]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    Collaboration
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                  Turn Ideas Into
                  <br />
                  Shared Impact
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  Research partnerships can connect academic expertise with
                  industry, communities and institutions to address complex
                  challenges and create new opportunities.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Academic Partnerships",
                    "Industry Collaboration",
                    "Student Research",
                    "Joint Projects",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-[#d5e2eb] bg-white px-3 py-2 text-xs font-semibold text-[#175783]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[270px] overflow-hidden bg-[#082746]">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85"
                  alt="Researchers collaborating"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-[#082746]/45" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center border border-white/35 bg-white/10 text-white backdrop-blur-sm">
                    <Network className="h-7 w-7 text-[#d9a82e]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — SAME KKJSTU STYLE
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
                  <Sparkles className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  RESEARCH & INNOVATION
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Discover What&apos;s
                <br />
                Possible Through Research.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Explore research centers, publications, researchers and
                opportunities to collaborate with KKJSTU.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="/research/centers"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                View Research Centers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/research/publications"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Browse Publications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Collaborate With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/research"
                className="group inline-flex min-w-[155px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Meet Researchers
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