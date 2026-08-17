"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Bus,
  Camera,
  Coffee,
  Dumbbell,
  FlaskConical,
  Heart,
  HeartHandshake,
  HeartPulse,
  Library,
  MapPin,
  Play,
  Sparkles,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const campusHighlights = [
  {
    title: "Green Spaces",
    description:
      "Quiet open spaces and welcoming campus surroundings provide places to relax, meet friends and recharge.",
    icon: Sparkles,
  },
  {
    title: "Library",
    description:
      "A focused academic environment where students can study, explore resources and work independently.",
    icon: Library,
  },
  {
    title: "Laboratories",
    description:
      "Practical learning spaces that support experimentation, research and hands-on academic development.",
    icon: FlaskConical,
  },
  {
    title: "Cafeteria",
    description:
      "Convenient spaces where students can take a break, share meals and connect with the campus community.",
    icon: Coffee,
  },
  {
    title: "Sports & Recreation",
    description:
      "Opportunities to stay active, develop teamwork and participate in sports and recreational activities.",
    icon: Dumbbell,
  },
  {
    title: "Transport",
    description:
      "Accessible transportation support designed to make everyday movement to and around campus easier.",
    icon: Bus,
  },
];

const supportServices = [
  {
    title: "Counselling & Wellbeing",
    description:
      "Supportive services that help students manage challenges and maintain a healthy university experience.",
    icon: HeartPulse,
  },
  {
    title: "Career Support",
    description:
      "Guidance and development opportunities that help students prepare for professional life after graduation.",
    icon: Trophy,
  },
  {
    title: "Health Services",
    description:
      "Access to health-related support and information throughout your student journey.",
    icon: Heart,
  },
  {
    title: "Accessibility",
    description:
      "A commitment to making the university environment welcoming and accessible to every student.",
    icon: Accessibility,
  },
  {
    title: "Student Services",
    description:
      "Practical administrative and student-focused services to help you navigate university life.",
    icon: Users,
  },
];

const activities = [
  {
    title: "Student Clubs",
    description:
      "Meet people with shared interests and participate in student-led communities.",
    icon: Users,
  },
  {
    title: "Cultural Activities",
    description:
      "Experience creativity, culture, celebration and the traditions of university life.",
    icon: Camera,
  },
  {
    title: "Sports",
    description:
      "Take part in sporting activities, develop teamwork and stay active on campus.",
    icon: Dumbbell,
  },
  {
    title: "Community Engagement",
    description:
      "Contribute to meaningful initiatives and build connections beyond the classroom.",
    icon: HeartHandshake,
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
    alt: "University campus building",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=85",
    alt: "University campus walkway",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85",
    alt: "University architecture",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Students walking across campus",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
    alt: "Students collaborating",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    alt: "Students enjoying university life",
    size: "large",
  },
];

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90"
          alt="University campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/75 to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Campus Life
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[60px]">
              Learn.
              <br />
              Connect.
              <br />
              <span className="text-[#f2f5f8]">Belong.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Discover a campus experience where academic life meets
              community, wellbeing, friendship and opportunities to grow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#facilities"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Explore Facilities
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Discover Student Life
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
                More Than a Place
                <br />
                to Study
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Campus life is an important part of the university experience.
                It is where students build friendships, discover new interests,
                participate in activities and develop a sense of belonging.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                At KKJSTU, students can experience a campus environment that
                brings together learning spaces, recreation, support services,
                community activities and opportunities for personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS HIGHLIGHTS
      ========================================================= */}
      <section
        id="facilities"
        className="border-y border-slate-200 bg-[#f5f8fc]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Campus Highlights
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Spaces Designed for University Life
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Explore the places and facilities that shape everyday life at
              KKJSTU.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {campusHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-[#d5e5ef] bg-[#edf5fb] text-[#175783] transition group-hover:bg-[#175783] group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#d9a82e] transition-all group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FACILITY IMAGE FEATURE
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-0 overflow-hidden border border-slate-200 bg-[#082746] lg:grid-cols-2">
            <div className="relative min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85"
                alt="University campus and students"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#082746]/20" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#082746]/90 to-transparent p-8 pt-28">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  Campus Experience
                </span>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  A welcoming environment for every stage of student life.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                <MapPin className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                Discover Your Campus
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                From quiet study areas and practical laboratories to social
                spaces and recreational facilities, campus provides places to
                focus, connect and enjoy university life.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Library", BookOpen],
                  ["Labs", FlaskConical],
                  ["Sports", Dumbbell],
                  ["Cafeteria", Utensils],
                ].map(([title, Icon]) => {
                  const ItemIcon = Icon as typeof BookOpen;

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
          STUDENT SUPPORT
      ========================================================= */}
      <section id="support" className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Student Support
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Support for Your
                <br />
                Wellbeing & Success
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                A strong campus experience is supported by services that help
                students feel safe, connected, healthy and prepared for the
                future.
              </p>

              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                Discover Student Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportServices.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
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
        </div>
      </section>

      {/* =========================================================
          ACTIVITIES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Community & Activities
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Find Your Place on Campus
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Join communities, explore interests and make university life
              your own.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <Icon className="h-5 w-5" />
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
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO GALLERY
      ========================================================= */}
      <section
        id="gallery"
        className="overflow-hidden bg-[#082746] px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                  Campus Gallery
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                A Glimpse of Campus Life
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/65">
                Capture the places, people and moments that make the KKJSTU
                experience unique.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100/60">
              <Camera className="h-4 w-4 text-[#d9a82e]" />
              Campus Moments
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {galleryImages.map((image, index) => {
              const isLarge = image.size === "large";
              const isWide = image.size === "wide";

              return (
                <div
                  key={`${image.src}-${index}`}
                  className={[
                    "group relative min-h-[170px] overflow-hidden",
                    isLarge ? "md:row-span-2" : "",
                    isWide ? "md:col-span-2" : "",
                    index === 0 ? "col-span-2 md:col-span-1" : "",
                  ].join(" ")}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index > 1 ? "lazy" : "eager"}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#082746]/10 transition group-hover:bg-[#082746]/30" />

                  <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                    <div className="flex h-9 w-9 items-center justify-center bg-white/90 text-[#175783]">
                      <Camera className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          VIRTUAL TOUR
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden bg-[#edf5fb]">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d9a82e]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    Explore From Anywhere
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                  Take a Virtual Tour of KKJSTU
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  Get a closer look at the campus environment, facilities and
                  spaces where students learn, connect and build their future.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
                >
                  Take a Virtual Tour
                  <Play className="h-4 w-4 fill-current" />
                </a>
              </div>

              <div className="relative min-h-[260px] overflow-hidden bg-[#082746]">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                  alt="University building"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-[#082746]/35" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          Screenshot-inspired premium KKJSTU CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 pt-2 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[30px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">

          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full bg-[#4931a8] opacity-20 blur-3xl" />

          <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-[160px] w-[360px] -translate-x-1/2 rounded-full bg-[#3b278f] opacity-20 blur-3xl" />

          <div className="relative px-8 py-10 sm:px-10 sm:py-11 lg:px-14 lg:py-12">

            {/* Main CTA row */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT */}
              <div className="max-w-[650px]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                    <MapPin className="h-3 w-3" />
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                    CAMPUS LIFE
                  </span>
                </div>

                <h2 className="font-serif text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[52px]">
                  Find Your Place.
                  <br />
                  <span className="text-[#8377c3]">
                    Make It Your Own.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                  Explore the facilities, communities and experiences that
                  make life at KKJSTU more than just a university education.
                </p>
              </div>

              {/* RIGHT — FIRST TWO CTA BUTTONS */}
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-center">
                <a
                  href="#facilities"
                  className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] shadow-[0_8px_25px_rgba(217,168,46,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#edc85b]"
                >
                  Explore Facilities
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="#"
                  className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/80 transition duration-200 hover:border-white/40 hover:bg-white/[0.07] hover:text-white"
                >
                  Discover Student Life
                  <ArrowRight className="h-4 w-4 text-white/60 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Bottom CTA row */}
            <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <MapPin className="h-3.5 w-3.5 text-[#d9a82e]" />
                </div>

                <span className="text-xs text-blue-100/45">
                  Explore, connect and experience campus life at KKJSTU.
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white/75 transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
                >
                  Join a Club
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white/75 transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
                >
                  Take a Virtual Tour
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}