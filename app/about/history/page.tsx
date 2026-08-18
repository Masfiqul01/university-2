import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { ICON_MAP } from "@/lib/icon-map";
import { VISION_POINTS, HISTORY_PILLARS } from "@/lib/data/history";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] text-[#0b0754]">
      <section className="relative overflow-hidden bg-[#0b0754] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(253,153,0,0.18),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f8d87d]">
            About KKJSTU
          </div>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Building a future through knowledge, innovation and service.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
            KKJSTU continues to grow as a center of quality education, professional development and research-driven progress for students and communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#fd9900] px-5 py-3 text-sm font-semibold text-[#0b0754] transition hover:bg-[#ffc14d]">
              Explore About Us
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-[#120a80]">
              <Landmark className="h-6 w-6" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A developing academic institution with a long-term vision.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              This history page is structured for the university’s official story, milestones, and institutional vision. Replace the placeholder content below with verified historical information from the university’s official records.
            </p>
          </div>

          <div className="grid gap-5">
            {VISION_POINTS.map(({ icon, title, text }) => {
              const Icon = ICON_MAP[icon] ?? ICON_MAP.Target;
              return (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-[#fd9900]" />
                  <h3 className="mt-4 text-xl font-bold text-[#0b0754]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:px-8 lg:grid-cols-3 lg:px-10">
          {HISTORY_PILLARS.map(({ icon, title, text }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Target;
            return (
              <div key={title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm">
                <Icon className="h-8 w-8 text-[#120a80]" />
                <h3 className="mt-4 text-xl font-bold text-[#0b0754]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
