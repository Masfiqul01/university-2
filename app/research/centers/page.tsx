"use client";

import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FlaskConical,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Microscope,
  Network,
  Search,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const researchCenters = [
  {
    id: 1,
    name: "Center for Artificial Intelligence & Data Science",
    shortName: "AI & Data Science",
    discipline: "AI & Data Science",
    mission:
      "Advancing intelligent systems, data-driven research and responsible digital innovation for real-world challenges.",
    themes: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
    ],
    director: "Director, Research Center",
    members: "24 Researchers",
    projects: 8,
    publications: 32,
    location: "Research & Innovation Complex",
    email: "research@kkjstu.ac.bd",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    name: "Center for Engineering Research & Innovation",
    shortName: "Engineering Research",
    discipline: "Engineering",
    mission:
      "Supporting interdisciplinary engineering research, technological development and practical innovation.",
    themes: [
      "Smart Engineering",
      "Robotics",
      "Energy Systems",
      "Materials",
    ],
    director: "Director, Engineering Research",
    members: "31 Researchers",
    projects: 11,
    publications: 46,
    location: "Faculty of Engineering",
    email: "engineering.research@kkjstu.ac.bd",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    name: "Center for Biotechnology & Life Sciences",
    shortName: "Biotechnology",
    discipline: "Biotechnology",
    mission:
      "Developing research in biotechnology and life sciences to address health, food and environmental challenges.",
    themes: [
      "Biotechnology",
      "Molecular Biology",
      "Food Science",
      "Bioinnovation",
    ],
    director: "Director, Life Sciences",
    members: "19 Researchers",
    projects: 6,
    publications: 28,
    location: "Science Research Building",
    email: "biotech.research@kkjstu.ac.bd",
    icon: Microscope,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    name: "Center for Environment & Sustainable Development",
    shortName: "Environment & Sustainability",
    discipline: "Environment",
    mission:
      "Creating research-based solutions for environmental resilience, climate adaptation and sustainable development.",
    themes: [
      "Climate Change",
      "Environmental Science",
      "Sustainability",
      "Natural Resources",
    ],
    director: "Director, Sustainability Research",
    members: "18 Researchers",
    projects: 7,
    publications: 25,
    location: "Environmental Research Unit",
    email: "environment@kkjstu.ac.bd",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    name: "Center for Mathematical & Computational Research",
    shortName: "Mathematical Research",
    discipline: "Mathematics",
    mission:
      "Promoting mathematical modelling, computational research and analytical methods across disciplines.",
    themes: [
      "Applied Mathematics",
      "Mathematical Modelling",
      "Statistics",
      "Computational Science",
    ],
    director: "Director, Mathematical Research",
    members: "16 Researchers",
    projects: 5,
    publications: 21,
    location: "Mathematics Research Wing",
    email: "math.research@kkjstu.ac.bd",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    name: "Center for Social & Business Innovation",
    shortName: "Social & Business Innovation",
    discipline: "Social & Business Innovation",
    mission:
      "Connecting research, business and society to develop evidence-based solutions for inclusive growth.",
    themes: [
      "Business Innovation",
      "Entrepreneurship",
      "Social Development",
      "Policy Research",
    ],
    director: "Director, Innovation Research",
    members: "21 Researchers",
    projects: 9,
    publications: 34,
    location: "Business & Innovation Hub",
    email: "innovation@kkjstu.ac.bd",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
];

const disciplines = [
  "All Disciplines",
  "AI & Data Science",
  "Engineering",
  "Biotechnology",
  "Environment",
  "Mathematics",
  "Social & Business Innovation",
];

const featuredPeople = [
  {
    name: "Research Faculty Member",
    role: "Principal Researcher",
    discipline: "Artificial Intelligence",
  },
  {
    name: "Research Faculty Member",
    role: "Senior Researcher",
    discipline: "Engineering Innovation",
  },
  {
    name: "Research Faculty Member",
    role: "Research Scientist",
    discipline: "Environmental Research",
  },
  {
    name: "Research Faculty Member",
    role: "Associate Researcher",
    discipline: "Biotechnology",
  },
];

const projectTimeline = [
  {
    year: "01",
    title: "Research Challenge",
    description:
      "Identify a meaningful problem and establish a clear research question.",
  },
  {
    year: "02",
    title: "Research & Development",
    description:
      "Develop methods, conduct experiments and collaborate across disciplines.",
  },
  {
    year: "03",
    title: "Validation & Impact",
    description:
      "Evaluate findings and translate research into practical outcomes.",
  },
  {
    year: "04",
    title: "Publication & Partnership",
    description:
      "Share findings and build opportunities for wider collaboration.",
  },
];

export default function ResearchCentersPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#071f43]">
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90"
          alt="University research laboratory"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071f43]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071f43]/98 via-[#071f43]/82 to-[#071f43]/35" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Research Centers
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Where Knowledge
              <br />
              <span className="text-[#e9edf5]">
                Becomes Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Discover research centers bringing together researchers,
              students, facilities and interdisciplinary expertise to address
              meaningful challenges and create new possibilities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#centers"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#071f43] transition hover:bg-[#edc85b]"
              >
                Explore Research Centers
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#collaboration"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Collaborate With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / STATS
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Research at a Glance
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Connecting Ideas,
                <br />
                People & Possibilities
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Research centers provide focused environments where academics,
                students and external partners can work together on complex
                questions and develop practical solutions.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["06", "Research Areas"],
                  ["60+", "Researchers"],
                  ["40+", "Projects"],
                  ["150+", "Publications"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-l-2 border-[#d9a82e] pl-4"
                  >
                    <div className="font-serif text-2xl font-semibold text-[#092c4d]">
                      {value}
                    </div>

                    <div className="mt-1 text-xs text-slate-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CENTER DIRECTORY
      ========================================================= */}
      <section
        id="centers"
        className="border-y border-slate-200 bg-[#f5f8fc]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Research Directory
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Explore Our Research Centers
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Find research communities working across disciplines,
                technologies and societal challenges.
              </p>
            </div>

            {/* Filter */}
            <div className="relative w-full lg:w-[270px]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#092c4d]">
                Filter by Discipline
              </label>

              <div className="relative">
                <select className="h-12 w-full appearance-none border border-slate-200 bg-white px-4 pr-10 text-sm text-[#092c4d] outline-none transition focus:border-[#175783]">
                  {disciplines.map((discipline) => (
                    <option key={discipline}>{discipline}</option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search research centers..."
                className="h-12 w-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-[#092c4d] outline-none placeholder:text-slate-400 focus:border-[#175783]"
              />
            </div>

            <button className="inline-flex h-12 items-center justify-center gap-2 bg-[#092c4d] px-7 text-sm font-bold text-white transition hover:bg-[#175783]">
              Search
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchCenters.map((center) => {
              const Icon = center.icon;

              return (
                <article
                  key={center.id}
                  className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#071f43]/30" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#071f43]/80 text-[#d9a82e] backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b28718]">
                      {center.discipline}
                    </div>

                    <h3 className="mt-3 min-h-[58px] font-serif text-xl font-semibold leading-tight text-[#092c4d]">
                      {center.name}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {center.mission}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {center.themes.slice(0, 3).map((theme) => (
                        <span
                          key={theme}
                          className="border border-[#d9e6ef] bg-[#f5f9fc] px-2.5 py-1 text-[10px] font-semibold text-[#175783]"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
                      <div>
                        <div className="text-lg font-semibold text-[#092c4d]">
                          {center.projects}
                        </div>

                        <div className="text-[11px] text-slate-500">
                          Projects
                        </div>
                      </div>

                      <div>
                        <div className="text-lg font-semibold text-[#092c4d]">
                          {center.publications}
                        </div>

                        <div className="text-[11px] text-slate-500">
                          Publications
                        </div>
                      </div>
                    </div>

                    <a
                      href={`#center-${center.id}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
                    >
                      Visit Center
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED CENTER DETAIL
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid overflow-hidden border border-slate-200 bg-white lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[460px]">
              <img
                src={researchCenters[0].image}
                alt={researchCenters[0].name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#071f43]/25" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#071f43]/95 to-transparent p-8 pt-28">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  Featured Research Center
                </div>

                <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                  {researchCenters[0].shortName}
                </h3>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Center Profile
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {researchCenters[0].name}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {researchCenters[0].mission}
              </p>

              {/* Themes */}
              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#092c4d]">
                  Research Themes
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">
                  {researchCenters[0].themes.map((theme) => (
                    <span
                      key={theme}
                      className="border border-[#d9e6ef] bg-[#f5f9fc] px-3 py-2 text-xs font-semibold text-[#175783]"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Director */}
              <div className="mt-8 grid gap-5 border-y border-slate-100 py-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Director
                    </div>

                    <div className="mt-1 text-sm font-semibold text-[#092c4d]">
                      {researchCenters[0].director}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Location
                    </div>

                    <div className="mt-1 text-sm font-semibold text-[#092c4d]">
                      {researchCenters[0].location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 bg-[#092c4d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#175783]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 px-5 py-3 text-sm font-semibold text-[#092c4d] transition hover:border-[#175783] hover:text-[#175783]"
                >
                  View Publications
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PEOPLE
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Researchers
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Meet the Research Community
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Researchers, faculty members and collaborators contribute
                expertise across disciplines and research themes.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
            >
              Meet Researchers
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPeople.map((person, index) => (
              <div
                key={`${person.name}-${index}`}
                className="border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-[#d7e5ef] bg-[#edf5fb] text-[#175783]">
                  <Users className="h-6 w-6" strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-serif text-lg font-semibold text-[#092c4d]">
                  {person.name}
                </h3>

                <p className="mt-2 text-xs font-semibold text-[#b28718]">
                  {person.role}
                </p>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {person.discipline}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#175783]"
                >
                  View Profile
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT TIMELINE
      ========================================================= */}
      <section id="projects" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Research Journey
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              From Questions to Impact
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Research develops through a connected journey of discovery,
              experimentation, validation and knowledge sharing.
            </p>
          </div>

          <div className="mt-12 border-l border-[#d9a82e]/50">
            {projectTimeline.map((item, index) => (
              <div
                key={item.year}
                className="relative grid gap-5 pb-10 pl-8 last:pb-0 md:grid-cols-[90px_0.8fr_1fr] md:items-start md:gap-8"
              >
                <div className="absolute -left-[7px] top-1 h-3 w-3 border-2 border-[#d9a82e] bg-white" />

                <div className="font-serif text-2xl font-semibold text-[#b28718]">
                  {item.year}
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PUBLICATIONS / FACILITIES
      ========================================================= */}
      <section className="bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <BookOpen className="h-5 w-5" />
              </div>

              <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                Publications
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Explore research outputs, academic papers and knowledge
                generated by the university research community.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                Browse Publications
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <FlaskConical className="h-5 w-5" />
              </div>

              <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                Research Facilities
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Discover laboratories, equipment and research environments
                supporting interdisciplinary investigation.
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                Explore Facilities
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <CalendarDays className="h-5 w-5" />
              </div>

              <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                Current Projects
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Follow ongoing research projects, themes and opportunities for
                academic collaboration.
              </p>

              <a
                href="#projects"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION CTA
      ========================================================= */}
      <section
        id="collaboration"
        className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          {/* subtle architectural grid */}
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
                  <Network className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  RESEARCH & COLLABORATION
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Research Without
                <br />
                Boundaries.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Connect with researchers, explore emerging ideas and discover
                opportunities to create meaningful knowledge and impact
                together.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="#centers"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                View Research Centers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#"
                className="group inline-flex min-w-[165px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Meet Researchers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Collaborate With Us
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