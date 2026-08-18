import Link from "next/link"
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { OfficeProfile } from "@/lib/data/administration"

const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

/**
 * Shared layout for every /administration/* detail page. Follows the
 * navy + gold section language used across the university pages so the
 * eight office pages stay consistent without eight copies of the markup.
 */
export function OfficePage({ profile }: { profile: OfficeProfile }) {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[460px] overflow-hidden bg-[#232771]">
        <img
          src={HERO_IMAGE}
          alt="KACST campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#232771]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#232771]/95 via-[#232771]/78 to-[#232771]/25" />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                {profile.eyebrow}
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
              {profile.role}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/administration"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
              >
                All Administration
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Contact the Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Home
          </Link>

          <span className="mx-3 text-slate-300">/</span>

          <Link
            href="/administration"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Administration
          </Link>

          <span className="mx-3 text-slate-300">/</span>

          <span className="text-xs font-semibold text-[#102c4c]">
            {profile.role}
          </span>
        </div>
      </div>

      {/* =========================================================
          PROFILE / OVERVIEW
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {profile.holder && profile.image ? (
              <div className="relative min-h-[380px] overflow-hidden border border-slate-200 bg-[#edf5fb]">
                <img
                  src={profile.image}
                  alt={profile.holder}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="border border-slate-200 bg-[#edf5fb] p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-[#cfe0eb] bg-white text-[#175783]">
                  <MapPin className="h-6 w-6" strokeWidth={1.7} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  {profile.role}
                </p>

                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#092c4d]">
                  {profile.office}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Official contact details for this office are listed below.
                  Students and visitors are advised to contact the office
                  during regular working hours.
                </p>
              </div>
            )}

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Overview
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                {profile.heading}
              </h2>

              {profile.holder && (
                <div className="mt-6 border-l-2 border-[#d9a82e] pl-5">
                  <p className="font-serif text-xl font-semibold text-[#092c4d]">
                    {profile.holder}
                  </p>

                  {profile.holderTitle && (
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {profile.holderTitle}
                    </p>
                  )}
                </div>
              )}

              {profile.message && (
                <div className="mt-7 space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {profile.message.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {!profile.message && (
                <p className="mt-7 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {profile.intro}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBILITIES + SERVICES
      ========================================================= */}
      <section className="border-y border-slate-200 bg-[#eaf3fa]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              Scope of the Office
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            Key responsibilities
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(35,39,113,0.05)]">
              <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                Responsibilities
              </h3>

              <div className="mt-6 space-y-3.5">
                {profile.responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {profile.services ? (
              <div className="border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(35,39,113,0.05)]">
                <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                  Services offered
                </h3>

                <div className="mt-6 space-y-3.5">
                  {profile.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#fff7df] text-[#b28718]">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center border border-[#cfe1ee] bg-[#eaf4fb] p-8">
                <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                  Need assistance?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  For enquiries relating to this office, please use the contact
                  details below or reach out through the university contact
                  page.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12476d]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d9a82e]" />

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
            Contact
          </span>
        </div>

        <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
          Reach this office
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
              <Phone className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
              Phone
            </p>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="mt-1 block text-sm font-semibold text-[#092c4d] transition hover:text-[#175783]"
            >
              {profile.phone}
            </a>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
              <Mail className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
              Email
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block break-all text-sm font-semibold text-[#092c4d] transition hover:text-[#175783]"
            >
              {profile.email}
            </a>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
              <MapPin className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
              Office
            </p>

            <p className="mt-1 text-sm font-semibold text-[#092c4d]">
              {profile.office}
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
