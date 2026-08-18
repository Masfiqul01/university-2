"use client";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Compass,
  FlaskConical,
  Globe2,
  HandHeart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Leaf,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const priorities = [
  {
    title: "Teaching Excellence",
    description: "Innovative and student-centered education that prepares learners for a changing world.",
    icon: BookOpen,
  },
  {
    title: "Research & Innovation",
    description: "Research and innovation that address meaningful academic and real-world challenges.",
    icon: FlaskConical,
  },
  {
    title: "Employability",
    description: "Practical knowledge, professional skills and industry readiness for successful careers.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Inclusion",
    description: "An accessible and inclusive learning environment where every student can thrive.",
    icon: Users,
  },
  {
    title: "Social Impact",
    description: "Creating meaningful contributions to communities through knowledge and service.",
    icon: HandHeart,
  },
];

const values = [
  {
    title: "Innovation",
    description: "Encouraging new ideas, creative thinking and meaningful discovery.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "Acting with honesty, responsibility and respect in everything we do.",
    icon: ShieldCheck,
  },
  {
    title: "Inclusiveness",
    description: "Building a welcoming academic community where everyone belongs.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "Pursuing high standards in education, research and service.",
    icon: Star,
  },
  {
    title: "Service",
    description: "Using knowledge and skills to serve people and strengthen society.",
    icon: HandHeart,
  },
  {
    title: "Sustainability",
    description: "Supporting responsible development for future generations.",
    icon: Leaf,
  },
];

const studentPromise = [
  {
    title: "Accessible Learning",
    description: "Learning opportunities designed to help students reach their full potential.",
    icon: BookOpen,
  },
  {
    title: "Mentoring & Guidance",
    description: "Support and guidance throughout the academic journey.",
    icon: Users,
  },
  {
    title: "Practical Skills",
    description: "Hands-on experiences that connect academic knowledge with real-world needs.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ethical Leadership",
    description: "Preparing graduates to lead with responsibility, integrity and purpose.",
    icon: ShieldCheck,
  },
];

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[570px] overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90"
          alt="University campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/75 to-[#082746]/25" />

        <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e1b63b]">
                Our Mission & Vision
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[58px]">
              Guided by Purpose,
              <br />
              Committed to a
              <br />
              <span className="text-[#f1f4f7]">Better Future</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              KKJSTU is dedicated to advancing knowledge, fostering innovation
              and preparing responsible leaders who create positive change for
              society and the world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mission"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Discover Our History
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/research"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <a
            href="/"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Home
          </a>

          <span className="mx-3 text-slate-300">/</span>

          <a
            href="/about-kacst"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            About KKJSTU
          </a>

          <span className="mx-3 text-slate-300">/</span>

          <span className="text-xs font-semibold text-[#102c4c]">
            Mission & Vision
          </span>
        </div>
      </div>

      {/* MISSION / VISION */}
      <section id="mission" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <article className="group overflow-hidden border border-slate-200 bg-white shadow-[0_12px_35px_rgba(8,39,70,0.07)]">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-[300px]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
                    alt="Students collaborating in a learning environment"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#082746]/25" />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#cfe0eb] bg-[#edf5fb] text-[#175783]">
                    <Target className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    Our Mission
                  </div>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-[#092c4d]">
                    Education With Purpose
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    KKJSTU is committed to providing transformative and
                    accessible education, meaningful research and innovative
                    learning opportunities that prepare students to contribute
                    responsibly to society.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Transformative and accessible education",
                      "Meaningful research and innovation",
                      "Practical knowledge and skills",
                      "Responsible leadership and social contribution",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Vision */}
            <article className="overflow-hidden bg-[#082746] shadow-[0_12px_35px_rgba(8,39,70,0.12)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d9a82e]/35 bg-white/[0.06] text-[#e1b63b]">
                    <Compass className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    Our Vision
                  </div>

                  <h2 className="mt-2 font-serif text-3xl font-semibold text-white">
                    A Leading Center of Excellence
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-blue-100/70">
                    KKJSTU aspires to become a leading center of academic
                    excellence, recognized for globally relevant education,
                    research, innovation and sustainable development.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Academic excellence with global recognition",
                      "World-class education and research",
                      "Innovation for sustainable development",
                      "Globally capable and responsible graduates",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-blue-100/75"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#d9a82e]/40 text-[#e1b63b]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=85"
                    alt="Modern university campus"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-[#082746]/30" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* STRATEGIC PRIORITIES */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Our Strategic Priorities
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Driving Excellence in Everything We Do
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our priorities connect teaching, research, professional
              development, inclusion and meaningful service to society.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {priorities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 h-px w-7 bg-[#d9a82e] transition-all group-hover:w-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Our Core Values
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Principles That Guide Our Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              These principles shape how we learn, teach, research, serve and
              work together as an academic community.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#cbdde9] hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="h-px w-8 bg-[#d9a82e] transition-all group-hover:w-12" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDENT PROMISE */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Our Promise to Students
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Your Success,
                <br />
                Our Commitment
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                KKJSTU is committed to creating a supportive environment where
                students can learn, grow, develop practical abilities and
                become ethical leaders who contribute positively to society.
              </p>

              <div className="mt-8 space-y-3">
                {studentPromise.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 border border-slate-200 bg-white p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.7} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#092c4d]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=90"
                alt="University students collaborating"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082746]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                    Student Experience
                  </span>
                </div>

                <h3 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-white sm:text-3xl">
                  Learn with confidence. Grow with purpose.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="relative overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=2200&q=90"
          alt="Students participating in community activities"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/80 to-[#082746]/45" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                Our Impact
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
              Creating a Better Tomorrow
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
              Through education, research, partnerships and community
              engagement, KKJSTU works to create meaningful and sustainable
              change.
            </p>
          </div>

          <div className="mt-14 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Stronger Communities", Users],
              ["Sustainable Development", Leaf],
              ["Global Partnerships", Globe2],
              ["Meaningful Change", Sparkles],
            ].map(([title, Icon]) => {
              const ImpactIcon = Icon as typeof Users;

              return (
                <div
                  key={title as string}
                  className="border-b border-white/10 px-6 py-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <ImpactIcon
                    className="h-5 w-5 text-[#e1b63b]"
                    strokeWidth={1.6}
                  />

                  <p className="mt-4 font-serif text-lg font-semibold text-white">
                    {title as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f5f8fc] px-5 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden bg-[#082746] shadow-[0_18px_55px_rgba(8,39,70,0.16)]">
          {/* subtle institutional line pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="pointer-events-none absolute -right-32 -top-40 h-[360px] w-[360px] rounded-full bg-[#175783] opacity-20 blur-3xl" />

          <div className="relative flex min-h-[290px] flex-col justify-center px-7 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center border border-[#d9a82e]/50 text-[#d9a82e]">
                  <Compass className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  PURPOSE & PROGRESS
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Be Part of a
                <br />
                Purpose-Driven Journey
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Discover the opportunities, people and ideas shaping the future
                of KKJSTU.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a
                href="#"
                className="group inline-flex min-w-[190px] items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Discover Our History
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/research"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Explore Research
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/admissions/undergraduate"
                className="group inline-flex min-w-[145px] items-center justify-center gap-2 border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
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