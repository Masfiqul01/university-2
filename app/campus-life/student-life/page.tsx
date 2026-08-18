"use client";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  HeartHandshake,
  HeartPulse,
  Music,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  UsersRound,
  Volleyball,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const journeyStages = [
  {
    number: "01",
    title: "First Week",
    description:
      "Settle into campus life, meet your peers and discover the support available to you.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build knowledge, develop practical skills and make the most of your academic experience.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Build friendships, join communities and participate in activities beyond the classroom.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Lead",
    description:
      "Develop confidence, leadership abilities and meaningful contributions to university life.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Graduate",
    description:
      "Leave KKJSTU prepared to contribute professionally and make a positive difference.",
    icon: Trophy,
  },
];

const studentSupport = [
  {
    title: "Orientation",
    description:
      "Start your university journey with guidance, campus information and opportunities to connect.",
    icon: Sparkles,
  },
  {
    title: "Academic Support",
    description:
      "Access academic guidance and resources that help you stay engaged and progress confidently.",
    icon: BookOpen,
  },
  {
    title: "Wellbeing",
    description:
      "A supportive university environment that recognizes student wellbeing as part of success.",
    icon: HeartPulse,
  },
];

const activities = [
  {
    title: "Clubs & Societies",
    description:
      "Connect with students who share your interests and discover new communities across campus.",
    icon: Users,
  },
  {
    title: "Cultural Activities",
    description:
      "Celebrate creativity, culture and university traditions through student-led activities.",
    icon: Palette,
  },
  {
    title: "Volunteering",
    description:
      "Take part in community initiatives and create meaningful impact beyond the university.",
    icon: HeartHandshake,
  },
  {
    title: "Sports & Recreation",
    description:
      "Stay active, build teamwork and enjoy opportunities for sport and recreation.",
    icon: Volleyball,
  },
];

const careerFeatures = [
  "Career guidance and preparation",
  "Practical skills development",
  "Industry and professional engagement",
  "Leadership and teamwork opportunities",
];

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#232771]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=85"
            alt="University students collaborating on campus"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#232771]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/75 to-[#232771]/35" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Student Life
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Discover More Than
              <br />
              <span className="text-white">a University Experience.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Student life at KKJSTU is about learning, connecting, leading
              and discovering opportunities that help you grow as a person and
              as a future professional.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#activities"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
              >
                Explore Clubs
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#support"
                className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/[0.08]"
              >
                Student Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Life at KKJSTU
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                A Place to Learn,
                <br />
                Connect & Grow
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                University life extends far beyond lectures and examinations.
                At KKJSTU, students can discover communities, develop
                practical abilities, participate in cultural and sporting
                activities, contribute to society and prepare for life after
                graduation.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                From your first week on campus to the day you graduate, the
                student experience is designed to help you make connections,
                build confidence and create memories that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENT JOURNEY
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Your Student Journey
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              From First Week to Graduation
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every stage of university life brings new opportunities to learn,
              connect and discover your potential.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Desktop connector */}
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-[#bfd1df] lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {journeyStages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={stage.title}
                    className="relative border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#c7dce9] bg-white text-[#175783]">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>

                    <div className="mt-5 text-xs font-bold tracking-[0.16em] text-[#b28718]">
                      {stage.number}
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#092c4d]">
                      {stage.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {stage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================= */}
      <section id="support" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                alt="Students studying together"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-7 pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  Student Support
                </p>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  You are part of a community.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Support & Wellbeing
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Support That Helps You Thrive
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                University can be a transformative experience. KKJSTU aims to
                provide students with an environment where they can access
                guidance, build confidence and feel connected throughout their
                journey.
              </p>

              <div className="mt-8 space-y-4">
                {studentSupport.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 border-b border-slate-200 pb-5 last:border-0"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[#092c4d]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/campus-life/student-life"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                Explore Student Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACTIVITIES
      ========================================================= */}
      <section id="activities" className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Beyond the Classroom
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Find Your Community
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Explore activities and communities that allow you to discover
              your interests, build relationships and make an impact.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783]"
                  >
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAREER DEVELOPMENT
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden bg-[#232771]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85"
                  alt="University students working on a professional project"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#232771]/40" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-8 pt-28">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                    Career Development
                  </span>

                  <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                    Prepare for What Comes Next
                  </h3>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>

                <h2 className="mt-6 font-serif text-3xl font-semibold text-white">
                  Build Skills for Your Future
                </h2>

                <p className="mt-4 text-sm leading-7 text-blue-100/70">
                  Your university experience should help you become ready for
                  the opportunities ahead. Develop practical abilities,
                  leadership qualities and professional confidence through
                  experiences inside and outside the classroom.
                </p>

                <div className="mt-7 space-y-4">
                  {careerFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-blue-100/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#d9a82e]/40 text-[#d9a82e]">
                        <Check className="h-3 w-3" />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/career"
                  className="mt-8 inline-flex items-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
                >
                  Explore Career Development
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#f5f8fc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Campus Life
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Stay Connected With Campus
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Discover activities, student events and opportunities to
                participate in the wider university community.
              </p>
            </div>

            <a
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#175783]"
            >
              View Events
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Student Activities",
                text: "Discover events, clubs and activities happening across campus.",
                icon: CalendarDays,
              },
              {
                title: "Cultural Life",
                text: "Participate in cultural celebrations, creative activities and student initiatives.",
                icon: Music,
              },
              {
                title: "Sports & Recreation",
                text: "Stay active, meet friends and experience the energy of campus sports.",
                icon: Trophy,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL / AUTHENTICITY NOTE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
            <Users className="h-5 w-5" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              Student Voices
            </span>

            <span className="h-px w-8 bg-[#d9a82e]" />
          </div>

          <h2 className="mt-4 font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            Your Experience Matters
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Student stories and testimonials can help future students
            understand life at KKJSTU. Authentic testimonials should be
            published only with the student&apos;s consent and approved
            university content.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* background glow */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-[45%] h-[300px] w-[300px] rounded-full bg-[#6650d9] opacity-10 blur-3xl" />

          <div className="relative flex min-h-[250px] flex-col justify-center px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="max-w-[650px]">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <span className="text-[11px]">+</span>
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  STUDENT LIFE
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Make Your University
                <br />
                Experience Count.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Discover the people, activities and opportunities that make
                student life at KKJSTU meaningful.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <a
                href="#activities"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                Explore Clubs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#support"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Student Support
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/events"
                className="group inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                View Events
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="absolute right-5 top-5 hidden h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.045] sm:flex">
              <UsersRound
                className="h-6 w-6 text-[#d9a82e]"
                strokeWidth={1.5}
              />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d9a82e]" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}