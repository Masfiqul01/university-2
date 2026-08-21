"use client";

import { ArrowRight, Camera, MapPin, Play } from "lucide-react";

import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
import { imageUrl } from "@/lib/site-assets";
import { PageHeroBanner } from "@/components/page-hero-banner";
import {
  ICON_MOTION,
  ICON_MOTION_FILL,
  lightTileIcon,
} from "@/lib/icon-colors";
import { CtaButton } from "@/components/cta-button";
import {
  CAMPUS_LIFE_HERO,
  CAMPUS_LIFE_INTRO,
  CAMPUS_HIGHLIGHTS_INTRO,
  CAMPUS_HIGHLIGHTS,
  CAMPUS_FEATURE,
  SUPPORT_INTRO,
  SUPPORT_SERVICES,
  ACTIVITIES_INTRO,
  ACTIVITIES,
  GALLERY_INTRO,
  GALLERY_IMAGES,
  GALLERY_STATS,
  VIRTUAL_TOUR,
  CAMPUS_LIFE_CTA,
} from "@/lib/data/campus-life";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHeroBanner
        eyebrow={CAMPUS_LIFE_HERO.eyebrow}
        titleLines={CAMPUS_LIFE_HERO.titleLines}
        description={CAMPUS_LIFE_HERO.description}
        image={CAMPUS_LIFE_HERO.image}
        imageAlt={CAMPUS_LIFE_HERO.imageAlt}
        primary={CAMPUS_LIFE_HERO.primary}
        secondary={CAMPUS_LIFE_HERO.secondary}
      />

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {CAMPUS_LIFE_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {CAMPUS_LIFE_INTRO.titleLines[0]}
                <br />
                {CAMPUS_LIFE_INTRO.titleLines[1]}
              </h2>
            </div>

            <div>
              {CAMPUS_LIFE_INTRO.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-slate-600 ${
                    index > 0 ? "mt-5" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
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
                {CAMPUS_HIGHLIGHTS_INTRO.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {CAMPUS_HIGHLIGHTS_INTRO.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {CAMPUS_HIGHLIGHTS_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAMPUS_HIGHLIGHTS.map((item, index) => {
              const Icon = ICON_MAP[item.icon];
              const color = lightTileIcon(index);

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center border border-[#d5e5ef] ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
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
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-0 overflow-hidden border border-slate-200 bg-[#232771] lg:grid-cols-2">
            <div className="relative min-h-[420px]">
              <img
                src={CAMPUS_FEATURE.image}
                alt={CAMPUS_FEATURE.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#232771]/20" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#232771]/90 to-transparent p-8 pt-28">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#e1b63b]">
                  {CAMPUS_FEATURE.overlayEyebrow}
                </span>

                <p className="mt-2 font-serif text-2xl font-semibold text-white">
                  {CAMPUS_FEATURE.overlayTitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15 bg-white/[0.06] text-[#d9a82e]">
                {(() => {
                  const Icon = ICON_MAP[CAMPUS_FEATURE.icon];
                  return <Icon className="h-6 w-6" />;
                })()}
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold text-white sm:text-4xl">
                {CAMPUS_FEATURE.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                {CAMPUS_FEATURE.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {CAMPUS_FEATURE.items.map((item) => {
                  const ItemIcon = ICON_MAP[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="border border-white/10 bg-white/[0.045] p-4"
                    >
                      <ItemIcon className="h-5 w-5 text-[#d9a82e]" />

                      <p className="mt-3 text-sm font-semibold text-white">
                        {item.title}
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
                  {SUPPORT_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#092c4d] sm:text-4xl">
                {SUPPORT_INTRO.titleLines[0]}
                <br />
                {SUPPORT_INTRO.titleLines[1]}
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {SUPPORT_INTRO.description}
              </p>

              <a
                href={SUPPORT_INTRO.link.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#175783] transition hover:text-[#b28718]"
              >
                {SUPPORT_INTRO.link.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {SUPPORT_SERVICES.map((item, index) => {
                const Icon = ICON_MAP[item.icon];
                const color = lightTileIcon(index);

                return (
                  <div
                    key={item.title}
                    className="border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                    >
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
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                {ACTIVITIES_INTRO.eyebrow}
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              {ACTIVITIES_INTRO.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {ACTIVITIES_INTRO.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((item, index) => {
              const Icon = ICON_MAP[item.icon];
              const color = lightTileIcon(index);

              return (
                <div
                  key={item.title}
                  className="group border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
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
                    {ACTIVITIES_INTRO.linkLabel}
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
        className="campus-gallery overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Decorative: halftone dot circle + dashed curve, kept faint. */}
          <div
            aria-hidden="true"
            className="campus-gallery__decor pointer-events-none absolute inset-0 hidden lg:block"
          >
            <svg
              className="absolute -top-6 right-0 h-24 w-24 text-slate-200"
              viewBox="0 0 100 100"
              fill="none"
            >
              <defs>
                <pattern
                  id="cg-dots"
                  width="7"
                  height="7"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <circle cx="50" cy="50" r="50" fill="url(#cg-dots)" />
            </svg>

            <svg
              className="absolute right-24 top-24 h-32 w-72 text-slate-300"
              viewBox="0 0 300 130"
              fill="none"
            >
              <path
                d="M298 4C250 4 250 74 202 74S154 24 106 24 58 104 10 104"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
              <circle cx="10" cy="104" r="4" fill="currentColor" />
            </svg>
          </div>

          {/* ================= HEADER ================= */}
          <div className="campus-gallery__header relative flex flex-col justify-between gap-7 md:flex-row md:items-start">
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#f0a92a]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0a92a]">
                  {GALLERY_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="campus-gallery__title font-serif text-4xl font-bold leading-[1.08] tracking-tight text-[#101a4b] sm:text-5xl">
                <span className="block">{GALLERY_INTRO.titleLead}</span>
                <span className="block text-[#f0a92a]">
                  {GALLERY_INTRO.titleAccent}
                </span>
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#334876]">
                {GALLERY_INTRO.description}
              </p>

              <Link
                href={GALLERY_INTRO.cta.href}
                className="campus-gallery__cta mt-7 inline-flex items-center gap-3 rounded-xl bg-[#101a4b] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(16,26,75,0.18)] transition-colors duration-200 hover:bg-[#1a2668]"
              >
                {GALLERY_INTRO.cta.label}
                <ArrowRight className="h-4 w-4 text-[#f0a92a] transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-[#334876] md:pt-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#f0a92a] shadow-sm">
                <Camera className="h-4 w-4" />
              </span>
              {GALLERY_INTRO.note}
            </div>
          </div>

          {/* ================= GRID ================= */}
          <div className="campus-gallery__grid relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((image, index) => {
              const Icon = ICON_MAP[image.icon] ?? ICON_MAP.Camera;
              const feature = "feature" in image && image.feature;

              return (
                <article
                  key={image.src}
                  className={`campus-gallery__card group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_30px_rgba(16,26,75,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(16,26,75,0.13)] ${
                    feature ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      feature ? "h-64 lg:h-auto lg:flex-1" : "h-44"
                    }`}
                  >
                    <img
                      src={imageUrl(image.src)}
                      alt={image.alt}
                      loading={index > 1 ? "lazy" : "eager"}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content, with the badge overlapping the image edge. */}
                  <div className="relative flex shrink-0 flex-col border-b-2 border-[#f0a92a] px-5 pb-5 pt-8">
                    <span
                      className={`absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full shadow-md ${
                        feature
                          ? "bg-[#f0a92a] text-white"
                          : "bg-[#101a4b] text-white"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </span>

                    <h3 className="text-[15px] font-bold text-[#101a4b]">
                      {image.title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-6 text-[#5b6b93]">
                      {image.caption}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ================= STATS ================= */}
          <div className="campus-gallery__stats mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-100 bg-white px-4 py-6 shadow-[0_10px_30px_rgba(16,26,75,0.07)] sm:px-8">
            <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
              {GALLERY_STATS.map((stat, index) => {
                const Icon = ICON_MAP[stat.icon] ?? ICON_MAP.Camera;

                return (
                  <div
                    key={stat.label}
                    className={`flex items-center justify-center gap-3 px-2 ${
                      index > 0 ? "sm:border-l sm:border-slate-200" : ""
                    }`}
                  >
                    <Icon className="h-7 w-7 shrink-0 text-[#f0a92a]" />

                    <div className="min-w-0">
                      <dt className="font-serif text-xl font-bold leading-none text-[#101a4b]">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-[11px] text-[#5b6b93]">
                        {stat.label}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      {/* =========================================================
          VIRTUAL TOUR
      ========================================================= */}
      <section className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden bg-[#edf5fb]">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d9a82e]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-14">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d9a82e]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                    {VIRTUAL_TOUR.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                  {VIRTUAL_TOUR.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  {VIRTUAL_TOUR.description}
                </p>

                <a
                  href={VIRTUAL_TOUR.link.href}
                  className="mt-8 inline-flex items-center gap-2 bg-[#175783] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0e466c]"
                >
                  {VIRTUAL_TOUR.link.label}
                  <Play className="h-4 w-4 fill-current" />
                </a>
              </div>

              <div className="relative min-h-[260px] overflow-hidden bg-[#232771]">
                <img
                  src={VIRTUAL_TOUR.image}
                  alt={VIRTUAL_TOUR.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-[#232771]/35" />

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
                    {(() => {
                      const Icon = ICON_MAP[CAMPUS_LIFE_CTA.icon];
                      return <Icon className="h-3 w-3" />;
                    })()}
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                    {CAMPUS_LIFE_CTA.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[52px]">
                  {CAMPUS_LIFE_CTA.titleLines[0]}
                  <br />
                  <span className="text-[#8377c3]">
                    {CAMPUS_LIFE_CTA.titleLines[1]}
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/70">
                  {CAMPUS_LIFE_CTA.description}
                </p>
              </div>

              {/* RIGHT — FIRST TWO CTA BUTTONS */}
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-center">
                <CtaButton href={CAMPUS_LIFE_CTA.primary.href} variant="gold">
                  {CAMPUS_LIFE_CTA.primary.label}
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>

                <CtaButton href={CAMPUS_LIFE_CTA.secondary.href} variant="ghost">
                  {CAMPUS_LIFE_CTA.secondary.label}
                  <ArrowRight className="h-4 w-4" />
                </CtaButton>
              </div>
            </div>

            {/* Bottom CTA row */}
            <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <MapPin className="h-3.5 w-3.5 text-[#d9a82e]" />
                </div>

                <span className="text-xs text-blue-100/45">
                  {CAMPUS_LIFE_CTA.footerNote}
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {CAMPUS_LIFE_CTA.footerLinks.map((link) => (
                  <CtaButton
                    key={link.label}
                    href={link.href}
                    variant="ghost"
                    size="sm"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </CtaButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}