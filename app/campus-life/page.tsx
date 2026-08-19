"use client";

import { ArrowRight, Camera, MapPin, Play } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ICON_MAP } from "@/lib/icon-map";
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
      <section className="relative min-h-[560px] overflow-hidden bg-brand-dark">
        <img
          src={CAMPUS_LIFE_HERO.image}
          alt={CAMPUS_LIFE_HERO.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-brand-dark/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {CAMPUS_LIFE_HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[60px]">
              {CAMPUS_LIFE_HERO.titleLines[0]}
              <br />
              {CAMPUS_LIFE_HERO.titleLines[1]}
              <br />
              <span className="text-[#f2f5f8]">
                {CAMPUS_LIFE_HERO.titleLines[2]}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {CAMPUS_LIFE_HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={CAMPUS_LIFE_HERO.primary.href} variant="gold" radius={0}>
                {CAMPUS_LIFE_HERO.primary.label}
                <ArrowRight className="h-4 w-4" />
              </CtaButton>

              <CtaButton href={CAMPUS_LIFE_HERO.secondary.href} variant="ghost" radius={0}>
                {CAMPUS_LIFE_HERO.secondary.label}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

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
        className="overflow-hidden bg-[#232771] px-5 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e1b63b]">
                  {GALLERY_INTRO.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                {GALLERY_INTRO.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/65">
                {GALLERY_INTRO.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100/60">
              <Camera className="h-4 w-4 text-[#d9a82e]" />
              {GALLERY_INTRO.note}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {GALLERY_IMAGES.map((image, index) => {
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

                  <div className="absolute inset-0 bg-[#232771]/10 transition group-hover:bg-[#232771]/30" />

                  <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                    <div
                      className={`flex h-9 w-9 items-center justify-center bg-white/90 ${lightTileIcon(index).text} ${ICON_MOTION}`}
                    >
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