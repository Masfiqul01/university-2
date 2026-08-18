import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  { value: "06", label: "Faculties", icon: Building2 },
  { value: "30+", label: "Academic Programs", icon: GraduationCap },
  { value: "150+", label: "Faculty Members", icon: Users },
  { value: "20+", label: "Research Areas", icon: FlaskConical },
  { value: "15+", label: "Modern Labs", icon: FlaskConical },
  { value: "25+", label: "Campus Facilities", icon: Building2 },
];

const distinctive = [
  {
    title: "Quality Education",
    text: "A strong academic foundation designed to develop knowledge, confidence, and professional competence.",
    icon: Award,
  },
  {
    title: "Applied Learning",
    text: "Hands-on learning opportunities that connect classroom knowledge with real-world challenges.",
    icon: BookOpen,
  },
  {
    title: "Research & Innovation",
    text: "A growing culture of inquiry, experimentation, discovery, and meaningful innovation.",
    icon: Lightbulb,
  },
  {
    title: "Student-Centered Support",
    text: "An inclusive environment where students receive guidance, support, and opportunities to grow.",
    icon: HeartHandshake,
  },
];

const values = [
  {
    title: "Innovation",
    text: "We encourage curiosity, creativity, and new ideas.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    text: "We value honesty, responsibility, and ethical conduct.",
    icon: ShieldCheck,
  },
  {
    title: "Inclusiveness",
    text: "We create a respectful community where everyone belongs.",
    icon: Users,
  },
  {
    title: "Excellence",
    text: "We pursue high standards in learning, teaching, and research.",
    icon: Award,
  },
  {
    title: "Service",
    text: "We use knowledge and education to contribute to society.",
    icon: HeartHandshake,
  },
  {
    title: "Sustainability",
    text: "We promote responsible thinking for a better future.",
    icon: Leaf,
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white text-[#10233f]">
        {/* HERO */}
        <section className="relative min-h-[620px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85"
            alt="University campus"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#071b35]/80" />

          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#9cc9ff]">
                About KKJSTU
              </p>

              <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                A Community Built on Knowledge and Purpose
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                We are building an academic community where knowledge,
                innovation, research, and human values come together to prepare
                students for a changing world.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#history"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#10233f] transition hover:bg-[#dceeff]"
                >
                  Explore Our History
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#leadership"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Meet Our Leadership
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500 lg:px-8">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-[#10233f]">About KKJSTU</span>
          </div>
        </div>

        {/* UNIVERSITY INTRODUCTION */}
        <section
          id="history"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=85"
                alt="University academic building"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                Who We Are
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                An institution shaped by learning, discovery, and purpose.
              </h2>

              <div className="mt-7 space-y-5 text-[17px] leading-8 text-slate-600">
                <p>
                  KKJSTU is committed to creating an academic environment
                  where students can develop strong foundations in knowledge
                  while discovering their own potential.
                </p>

                <p>
                  Our academic community brings together students, faculty,
                  researchers, and professionals across science, engineering,
                  business, humanities, and related disciplines.
                </p>

                <p>
                  Through quality teaching, practical learning, research, and
                  collaboration, we aim to prepare graduates who can
                  contribute meaningfully to their professions and to society.
                </p>
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1e5b91] transition-all hover:gap-3"
              >
                Discover our story
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* AT A GLANCE */}
        <section className="bg-[#f2f7fd] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                At a Glance
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                A growing academic community
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A snapshot of our academic community, facilities, and
                research-driven environment.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-4xl font-semibold text-[#10233f]">
                          {item.value}
                        </p>

                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {item.label}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#edf5ff] p-3 text-[#316c9e]">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DISTINCTIVE */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                What Makes Us Distinctive
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                More than an institution. A community with purpose.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-slate-600">
                Our educational approach combines academic rigor with
                practical experience, research, innovation, and genuine
                support for students.
              </p>
            </div>

            <div className="space-y-4">
              {distinctive.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#b7d4ef] hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#316c9e]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-400">
                          0{index + 1}
                        </span>

                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-xl leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-[#f8fafc] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                Core Values
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Principles that guide us
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Our values shape the way we teach, learn, collaborate, conduct
                research, and serve our wider community.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf5ff] text-[#316c9e]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LEARNING ENVIRONMENT */}
        <section className="bg-[#eef6fd] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                  Learning Environment
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  Learning happens beyond the classroom.
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Our learning environment is designed to encourage curiosity,
                  collaboration, experimentation, and independent thinking.
                  Students can engage with modern laboratories, library
                  resources, green spaces, and collaborative academic settings.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-4">
                    <FlaskConical className="text-[#316c9e]" size={22} />
                    <p className="mt-3 font-semibold">Modern Laboratories</p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <BookOpen className="text-[#316c9e]" size={22} />
                    <p className="mt-3 font-semibold">Learning Resources</p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <Users className="text-[#316c9e]" size={22} />
                    <p className="mt-3 font-semibold">Collaboration</p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <Globe2 className="text-[#316c9e]" size={22} />
                    <p className="mt-3 font-semibold">Global Outlook</p>
                  </div>
                </div>
              </div>

              <div className="order-1 overflow-hidden rounded-[2rem] lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern university laboratory"
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section
          id="leadership"
          className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        >
          <div className="grid items-center gap-14 rounded-[2rem] bg-[#f5f8fb] p-8 md:p-12 lg:grid-cols-[0.7fr_1.3fr] lg:p-16">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
                alt="University leadership"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                Leadership
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Guided by vision. Driven by purpose.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Our leadership works to create an institution where academic
                excellence, innovation, integrity, and service remain at the
                heart of university life.
              </p>

              <blockquote className="mt-7 border-l-2 border-[#6c9bc5] pl-5 text-lg italic leading-8 text-slate-700">
                “Our purpose is to create opportunities for every student to
                learn, discover, and build a meaningful future.”
              </blockquote>

              <div className="mt-7">
                <p className="font-semibold">Professor Name</p>
                <p className="mt-1 text-sm text-slate-500">
                  Vice Chancellor / Principal
                </p>
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#10233f] px-6 py-3.5 font-semibold text-white transition hover:bg-[#1d3d61]"
              >
                Meet Our Leadership
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#071b35] py-24">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9cc9ff]">
              Your Future Starts Here
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
              Start Your Journey at KKJSTU
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Explore academic opportunities, discover your interests, and
              take the next step toward building your future with us.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#10233f] transition hover:bg-[#dceeff]"
              >
                Explore Programs
                <ArrowRight size={18} />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}