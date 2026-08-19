import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { LucideIcon } from "lucide-react";
import { ICON_MAP } from "@/lib/icon-map";
import { ICON_MOTION } from "@/lib/icon-colors";
import { CountUp } from "@/components/count-up";
import { CtaButton } from "@/components/cta-button";
import {
  ABOUT_HERO,
  ABOUT_BREADCRUMB,
  ABOUT_INTRO,
  ABOUT_GLANCE_INTRO,
  ABOUT_STATS,
  ABOUT_DISTINCTIVE_INTRO,
  ABOUT_DISTINCTIVE,
  ABOUT_VALUES_INTRO,
  ABOUT_VALUES,
  ABOUT_LEARNING_ENVIRONMENT,
  ABOUT_LEADERSHIP,
  ABOUT_CTA,
} from "@/lib/data/about";
import { ArrowRight, Sparkles } from "lucide-react";

function JourneyBanner({
  icon: BadgeIcon,
  eyebrow,
  title,
  titleAs = "h2",
  description,
  primary,
  secondary,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  titleAs?: "h1" | "h2";
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  const Title = titleAs;
  return (
    <section className="bg-page-pattern px-6 py-14 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#2e3494] via-[#232771] to-[#171a52] shadow-[0_24px_70px_rgba(35,39,113,0.28)]">
        {/* decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/[0.08] blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-white/[0.05] blur-[90px]"
        />

        {/* badge icon */}
        <div
          aria-hidden="true"
          className="absolute right-6 top-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.06] text-amber-200 backdrop-blur-md sm:flex"
        >
          <BadgeIcon className="h-6 w-6" strokeWidth={1.7} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.8)]" />
        </div>

        <div className="relative flex flex-col gap-8 px-6 py-10 sm:px-10 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-14">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-200/85">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/[0.08]">
                <Sparkles className="h-3 w-3" />
              </span>
              {eyebrow}
            </div>

            <Title className="max-w-xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </Title>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row md:items-center">
            <CtaButton href={primary.href} variant="light" size="sm">
              {primary.label}
              <ArrowRight size={16} />
            </CtaButton>

            <CtaButton href={secondary.href} variant="ghost" size="sm">
              {secondary.label}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-page-pattern text-[#10233f]">
        {/* HERO */}
        <section className="relative min-h-[620px] overflow-hidden">
          <img
            src={ABOUT_HERO.image}
            alt={ABOUT_HERO.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">
            <div className="max-w-4xl text-white">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#9cc9ff]">
                {ABOUT_HERO.eyebrow}
              </p>

              <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                {ABOUT_HERO.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {ABOUT_HERO.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaButton href={ABOUT_HERO.primary.href} variant="light">
                  {ABOUT_HERO.primary.label}
                  <ArrowRight size={18} />
                </CtaButton>

                <CtaButton href={ABOUT_HERO.secondary.href} variant="ghost">
                  {ABOUT_HERO.secondary.label}
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="border-b border-slate-200 bg-page-pattern">
          <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500 lg:px-8">
            {ABOUT_BREADCRUMB.map((crumb, index) => (
              <span key={crumb.label}>
                {index > 0 && <span className="mx-2">/</span>}

                {crumb.href ? (
                  <span>{crumb.label}</span>
                ) : (
                  <span className="font-medium text-[#10233f]">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
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
                src={ABOUT_INTRO.image}
                alt={ABOUT_INTRO.imageAlt}
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3f4a88]">
                {ABOUT_INTRO.eyebrow}
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                {ABOUT_INTRO.title}
              </h2>

              <div className="mt-7 space-y-5 text-[17px] leading-8 text-slate-600">
                {ABOUT_INTRO.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <a
                href={ABOUT_INTRO.link.href}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1e5b91] transition-all hover:gap-3"
              >
                {ABOUT_INTRO.link.label}
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
                {ABOUT_GLANCE_INTRO.eyebrow}
              </p>

              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                {ABOUT_GLANCE_INTRO.title}
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {ABOUT_GLANCE_INTRO.description}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUT_STATS.map((item) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-slate-200/70 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-serif text-4xl font-semibold text-[#10233f]">
                          <CountUp value={item.value} />
                        </p>

                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {item.label}
                        </p>
                      </div>

                      <div className={`rounded-xl p-3 ${item.iconClass} ${ICON_MOTION}`}>
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
                {ABOUT_DISTINCTIVE_INTRO.eyebrow}
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                {ABOUT_DISTINCTIVE_INTRO.title}
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-slate-600">
                {ABOUT_DISTINCTIVE_INTRO.description}
              </p>
            </div>

            <div className="space-y-4">
              {ABOUT_DISTINCTIVE.map((item, index) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.title}
                    className="group flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#b7d4ef] hover:shadow-md"
                  >
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.iconClass} ${ICON_MOTION}`}>
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
                {ABOUT_VALUES_INTRO.eyebrow}
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                {ABOUT_VALUES_INTRO.title}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {ABOUT_VALUES_INTRO.description}
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUT_VALUES.map((item) => {
                const Icon = ICON_MAP[item.icon];

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconClass} ${ICON_MOTION}`}>
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
                  {ABOUT_LEARNING_ENVIRONMENT.eyebrow}
                </p>

                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  {ABOUT_LEARNING_ENVIRONMENT.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  {ABOUT_LEARNING_ENVIRONMENT.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {ABOUT_LEARNING_ENVIRONMENT.highlights.map((highlight) => {
                    const Icon = ICON_MAP[highlight.icon];

                    return (
                      <div
                        key={highlight.label}
                        className="group rounded-xl bg-white p-4"
                      >
                        <Icon
                          className={`${highlight.iconClass} ${ICON_MOTION}`}
                          size={22}
                        />
                        <p className="mt-3 font-semibold">{highlight.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="order-1 overflow-hidden rounded-[2rem] lg:order-2">
                <img
                  src={ABOUT_LEARNING_ENVIRONMENT.image}
                  alt={ABOUT_LEARNING_ENVIRONMENT.imageAlt}
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
                src={ABOUT_LEADERSHIP.image}
                alt={ABOUT_LEADERSHIP.imageAlt}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#527da8]">
                {ABOUT_LEADERSHIP.eyebrow}
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                {ABOUT_LEADERSHIP.title}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {ABOUT_LEADERSHIP.description}
              </p>

              <blockquote className="mt-7 border-l-2 border-[#6c9bc5] pl-5 text-lg italic leading-8 text-slate-700">
                “{ABOUT_LEADERSHIP.quote}”
              </blockquote>

              <div className="mt-7">
                <p className="font-semibold">{ABOUT_LEADERSHIP.personName}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {ABOUT_LEADERSHIP.personRole}
                </p>
              </div>

              <div className="mt-8">
                <CtaButton href={ABOUT_LEADERSHIP.link.href} variant="dark">
                  {ABOUT_LEADERSHIP.link.label}
                  <ArrowRight size={18} />
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
      
         <JourneyBanner
          icon={ICON_MAP[ABOUT_CTA.icon]}
          eyebrow={ABOUT_CTA.eyebrow}
          title={ABOUT_CTA.title}
          description={ABOUT_CTA.description}
          primary={ABOUT_CTA.primary}
          secondary={ABOUT_CTA.secondary}
        />
     
      </main>

      <SiteFooter />
    </>
  );
}