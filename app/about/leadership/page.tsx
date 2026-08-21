"use client";

import { SiteHeader } from "@/components/site-header";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { PageHeroBanner } from "@/components/page-hero-banner";
import {
  ArrowRight,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { COLLEGE_IMAGE, CHANCELLOR_IMAGE, LEADERS } from "@/lib/data/leadership";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#0D0357]">
      {/* =========================================================
          FIXED SITE HEADER
      ========================================================= */}
      <SiteHeader />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <PageHeroBanner
        eyebrow="University Administration"
        titleLines={["Leadership"]}
        description="Meet the visionary leaders who guide Khanjahan Ali College of Science & Technology towards excellence in education, research and innovation."
        image={COLLEGE_IMAGE}
        imageAlt="Khanjahan Ali College of Science & Technology"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration" },
          { label: "Leadership" },
        ]}
      />


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative z-10 mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
        {/* =======================================================
            CHANCELLOR FEATURE CARD
        ======================================================= */}
        <article className="-mt-10 mx-auto max-w-[1080px] overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(13,3,87,0.10)] sm:-mt-14 sm:rounded-[24px] lg:-mt-40">
          <div className="grid lg:grid-cols-[245px_minmax(0,1fr)] xl:grid-cols-[275px_minmax(0,1fr)]">
            {/* Chancellor image */}
            <div className="p-4 sm:p-5 lg:p-6">
              <div className="group relative h-[285px] overflow-hidden rounded-[18px] bg-slate-100 sm:h-[320px] lg:h-[345px]">
                <img
                  src={CHANCELLOR_IMAGE}
                  alt="Chancellor"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0357]/15 via-transparent to-transparent" />
              </div>
            </div>

            {/* Chancellor content */}
            <div className="relative flex min-w-0 flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border-[12px] border-[#0D0357]/[0.035] xl:block"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full border ">
                  <span className="font-serif text-base font-bold w-[70%] rounded-full">
                    <img src="https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp" alt="" />
                  </span>
                </div>
              </div>

              <div className="relative z-10 max-w-2xl">
                {/* Role */}
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-600 sm:text-[10px]">
                  Chancellor
                </span>

                {/* Name */}
                <h2 className="mt-4 max-w-2xl font-serif text-2xl font-bold leading-[1.1] tracking-[-0.02em] text-[#0D0357] sm:text-3xl lg:text-4xl">
                  His Excellency Hafiz Uddin Ahmad
                </h2>

                {/* Position */}
                <p className="mt-3 max-w-xl text-xs font-medium leading-6 text-slate-600 sm:text-sm">
                  The Honourable President (Acting) of the
                  People&apos;s Republic of Bangladesh
                </p>

                {/* Accent */}
                <div className="mt-5 h-1 w-10 rounded-full bg-amber-400" />

                {/* Description */}
                <p className="mt-5 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm">
                  As the Chancellor of Khanjahan Ali College of
                  Science & Technology, he provides visionary
                  guidance and leadership to foster academic
                  excellence, institutional development and
                  innovation.
                </p>

                {/* Button */}
                <Link
                  href="/administration/chancellor"
                  className="group mt-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#0D0357] px-5 py-3 text-xs font-bold text-white shadow-md shadow-[#0D0357]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-[#0D0357]"
                >
                  <span>View Profile</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* =======================================================
            OTHER LEADERS
        ======================================================= */}
        <div className="mt-6 grid gap-5 pb-20 md:grid-cols-2 xl:grid-cols-3">
          {LEADERS.map((leader) => (
            <article
              key={leader.role}
              className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_15px_45px_rgba(13,3,87,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(13,3,87,0.12)]"
            >
              <div className="flex gap-5">
                {/* Portrait */}
                <div className="relative h-[190px] w-[135px] shrink-0 overflow-hidden rounded-[18px] bg-slate-100 sm:h-[210px] sm:w-[150px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col">
                  {/* Role */}
                  <span className="w-fit max-w-full truncate rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.11em] text-emerald-600 sm:text-[9px]">
                    {leader.role}
                  </span>

                  {/* Name */}
                  <h3 className="mt-3 font-serif text-base font-bold leading-tight text-[#0D0357] sm:text-lg">
                    {leader.name}
                  </h3>

                  {/* Position */}
                  <p className="mt-2 text-[11px] font-medium leading-5 text-slate-500">
                    {leader.role}, Khanjahan Ali College of
                    Science & Technology
                  </p>

                  {/* Accent */}
                  <div className="mt-4 h-1 w-8 shrink-0 rounded-full bg-amber-400" />

                  {/* Description */}
                  <p className="mt-4 line-clamp-4 text-[11px] leading-5 text-slate-600 sm:text-xs sm:leading-6">
                    {leader.description}
                  </p>

                  {/* Profile link */}
                  <Link
                    href={leader.href}
                    className="group/link mt-auto flex w-fit items-center gap-2 pt-5 text-xs font-bold text-[#0D0357]"
                  >
                    <span>View Profile</span>

                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM CTA
        ======================================================= */}
        <div className="mb-16 overflow-hidden rounded-[28px] bg-[#0D0357] p-7 shadow-[0_25px_70px_rgba(13,3,87,0.18)] sm:p-10 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            {/* CTA text */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-amber-400">
                <GraduationCap className="h-5 w-5 shrink-0" />

                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                  Academic Excellence
                </span>
              </div>

              <h2 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                Innovation at Khanjahan Ali College of Science
        & Technology.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                Meet the dedicated leaders and university offices committed
        to strengthening academic excellence, institutional growth,
        research and innovation at Khanjahan Ali College of Science
        & Technology.
              </p>
            </div>

            {/* CTA button */}
            <Link
              href="/administration"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0D0357] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-400"
            >
              <span>Administration</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </section>
            <SiteFooter />
    </main>
  );
}