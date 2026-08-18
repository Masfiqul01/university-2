"use client";

import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Bus,
  Building2,
  CalendarClock,
  Camera,
  Coffee,
  Dumbbell,
  FlaskConical,
  HeartPulse,
  Library,
  MapPin,
  Monitor,
  Phone,
  Play,
  ShieldCheck,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const facilities = [
  {
    title: "Central Library",
    category: "Academic & Learning",
    description:
      "A dedicated academic space for reading, independent study, research and access to learning resources.",
    icon: Library,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
    services: ["Reading spaces", "Study areas", "Research support"],
    hours: "Sun – Thu, 8:00 AM – 8:00 PM",
    location: "Academic Campus",
    contact: "library@kkjstu.ac.bd",
  },
  {
    title: "Science Laboratories",
    category: "Research & Practical Learning",
    description:
      "Practical learning environments supporting laboratory classes, experimentation and academic research.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    services: ["Teaching laboratories", "Research facilities", "Practical sessions"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Science & Engineering Zone",
    contact: "labs@kkjstu.ac.bd",
  },
  {
    title: "ICT & Computing Facilities",
    category: "Technology",
    description:
      "Technology-enabled spaces supporting computing education, digital learning, programming and academic projects.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    services: ["Computer labs", "Digital learning", "ICT support"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Technology Building",
    contact: "ict@kkjstu.ac.bd",
  },
  {
    title: "Auditorium",
    category: "Events & Community",
    description:
      "A central venue for academic events, seminars, cultural programs, orientations and university gatherings.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
    services: ["Seminars", "Conferences", "Cultural events"],
    hours: "By event schedule",
    location: "Central Campus",
    contact: "events@kkjstu.ac.bd",
  },
  {
    title: "Sports & Recreation",
    category: "Student Life",
    description:
      "Spaces that encourage physical activity, teamwork, recreation and a balanced university experience.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    services: ["Sports activities", "Recreation", "Student competitions"],
    hours: "Sun – Thu, 7:00 AM – 8:00 PM",
    location: "Sports & Recreation Area",
    contact: "sports@kkjstu.ac.bd",
  },
  {
    title: "Cafeteria",
    category: "Food & Community",
    description:
      "Convenient dining and social spaces where students and staff can enjoy meals and connect with one another.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    services: ["Meals & refreshments", "Seating areas", "Student gathering"],
    hours: "Sun – Thu, 8:00 AM – 7:00 PM",
    location: "Student Activity Zone",
    contact: "cafeteria@kkjstu.ac.bd",
  },
  {
    title: "Medical & Wellness",
    category: "Health & Wellbeing",
    description:
      "Student-focused health and wellbeing support designed to help maintain a safe and supportive campus environment.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
    services: ["Basic health support", "Wellness guidance", "Emergency assistance"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Student Services Area",
    contact: "health@kkjstu.ac.bd",
  },
  {
    title: "Campus Transport",
    category: "Mobility & Access",
    description:
      "Transport support designed to make daily travel between the university and surrounding areas more convenient.",
    icon: Bus,
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    services: ["Scheduled routes", "Student transport", "Transport assistance"],
    hours: "According to route schedule",
    location: "Main Campus Gate",
    contact: "transport@kkjstu.ac.bd",
  },
  {
    title: "Student Residence",
    category: "Student Community",
    description:
      "Residential spaces that support student living, community building and a comfortable university experience.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85",
    services: ["Residential support", "Common spaces", "Student community"],
    hours: "According to residence policy",
    location: "Residential Area",
    contact: "residence@kkjstu.ac.bd",
  },
];

const facilityStats = [
  {
    number: "09+",
    label: "Key Facilities",
    icon: Building2,
  },
  {
    number: "24/7",
    label: "Campus Community",
    icon: Users,
  },
  {
    number: "01",
    label: "Connected Campus",
    icon: MapPin,
  },
  {
    number: "100%",
    label: "Student Focused",
    icon: Accessibility,
  },
];

const quickLinks = [
  {
    title: "Library Services",
    description:
      "Find study spaces, learning resources and information about library services.",
    icon: BookOpen,
  },
  {
    title: "Laboratory Access",
    description:
      "Explore practical learning and research environments across academic disciplines.",
    icon: FlaskConical,
  },
  {
    title: "Sports & Recreation",
    description:
      "Discover opportunities to stay active and participate in campus activities.",
    icon: Trophy,
  },
  {
    title: "Student Services",
    description:
      "Access essential support services that help make campus life easier.",
    icon: ShieldCheck,
  },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[540px] overflow-hidden bg-[#082746]">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90"
          alt="University campus facilities"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#082746]/72" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#082746]/95 via-[#082746]/78 to-[#082746]/20" />

        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                Campus Facilities
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Spaces That Support
              <br />
              <span className="text-[#f1f4f8]">
                Learning, Life & Growth.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              Discover the academic, recreational, health and community
              facilities that help create a complete university experience at
              KKJSTU.
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
                href="#campus-map"
                className="inline-flex items-center justify-center gap-2 border border-white/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                View Campus Map
                <MapPin className="h-4 w-4" />
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Facilities at KKJSTU
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Everything You Need
                <br />
                Within Reach
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                A university campus is more than classrooms and lecture
                halls. It is a collection of spaces where students learn,
                research, meet friends, stay active and build meaningful
                experiences.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore the facilities available across KKJSTU and discover
                the places that support academic success, wellbeing and
                everyday campus life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-[#d9e5ef] bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-7 lg:px-8">
          <div className="grid divide-y divide-[#cdddea] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {facilityStats.map((item) => {
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
                      {item.number}
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
          FACILITY DIRECTORY
      ========================================================= */}
      <section
        id="facilities"
        className="bg-[#f5f8fc] border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Facility Directory
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Explore Campus Facilities
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Find the spaces and services that support learning, research,
              wellbeing, recreation and student life at KKJSTU.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-[#082746]/15 transition group-hover:bg-[#082746]/30" />

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#082746]/75 text-[#e1b63b] backdrop-blur-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="absolute bottom-4 left-5 bg-[#d9a82e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#082746]">
                      {facility.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#092c4d]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {facility.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      <div className="flex items-start gap-3">
                        <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Opening Hours
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-slate-600">
                            {facility.hours}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Location
                          </p>

                          <p className="mt-0.5 text-xs font-medium text-slate-600">
                            {facility.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#175783]" />

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Contact
                          </p>

                          <p className="mt-0.5 break-all text-xs font-medium text-slate-600">
                            {facility.contact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Available Services
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {facility.services.map((service) => (
                          <span
                            key={service}
                            className="border border-[#d9e6ef] bg-[#f5f9fc] px-2.5 py-1.5 text-[11px] font-medium text-[#175783]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#175783] transition hover:text-[#b28718]"
                    >
                      Facility Details
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK SERVICES
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Essential Services
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                Designed Around
                <br />
                Student Needs
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                From quiet places to study to spaces for sport, technology,
                health and community, campus facilities are designed to
                support different parts of student life.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                Contact Facilities Office
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPUS EXPERIENCE FEATURE
      ========================================================= */}
      <section className="bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid overflow-hidden border border-[#cbddea] bg-[#082746] lg:grid-cols-2">
            <div className="relative min-h-[430px]">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85"
                alt="Students walking across a university campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#082746]/20" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#082746]/90 to-transparent p-8 pt-32">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  Campus Experience
                </span>

                <p className="mt-2 max-w-lg font-serif text-2xl font-semibold text-white">
                  Places where academic life and community come together.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                <MapPin className="h-6 w-6" />
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                Navigate Your Campus
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                Find academic buildings, learning facilities, student spaces,
                recreation areas and essential services across the KKJSTU
                campus.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Library", Library],
                  ["Laboratories", FlaskConical],
                  ["Sports", Dumbbell],
                  ["Cafeteria", Utensils],
                ].map(([title, Icon]) => {
                  const ItemIcon = Icon as typeof Library;

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

              <a
                id="campus-map"
                href="#"
                className="mt-8 inline-flex w-fit items-center gap-2 border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                View Campus Map
                <MapPin className="h-4 w-4 text-[#d9a82e]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCESSIBILITY
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative min-h-[390px] overflow-hidden bg-[#082746]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85"
                alt="University campus walkway"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#082746]/30" />

              <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center bg-[#d9a82e] text-[#082746]">
                <Accessibility className="h-6 w-6" />
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Accessible Campus
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                A Campus Designed
                <br />
                for Everyone
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Campus facilities should help every student participate in
                academic and community life. KKJSTU's campus experience brings
                together learning, movement, support and shared spaces.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Accessible learning and common spaces",
                  "Student-focused support services",
                  "Connected academic and recreational areas",
                  "Safe and welcoming campus environment",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-100 pb-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <ShieldCheck className="h-4 w-4" />
                    </div>

                    <p className="text-sm font-medium text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — SAME STYLE AS PREVIOUS KKJSTU CTA
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_18px_55px_rgba(21,8,102,0.18)]">
          {/* subtle architectural/grid texture */}
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
                  <Building2 className="h-3 w-3" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  CAMPUS FACILITIES
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Explore Your Campus.
                <br />
                Make It Your Own.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                Discover the places, services and facilities that make everyday
                life at KKJSTU easier, more connected and more meaningful.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-wrap lg:justify-end">
              <a
                href="#campus-map"
                className="group inline-flex min-w-[170px] items-center justify-center gap-2 rounded-full bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#150866] transition hover:-translate-y-0.5 hover:bg-[#edc85b]"
              >
                View Campus Map
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/library"
                className="group inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Check Library Hours
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/contact"
                className="group inline-flex min-w-[185px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/[0.08]"
              >
                Contact Facilities Office
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