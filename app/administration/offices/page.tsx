import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
import { ADMIN_DIRECTORY } from "@/lib/data/administration"

export const metadata: Metadata = buildMetadata({
  title: "Administrative Offices",
  description:
    "Directory of administrative offices and support units at Khanjahan Ali College of Science & Technology.",
  path: "/administration/offices",
})

const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

export default function AdministrativeOfficesPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[65vh] overflow-hidden bg-brand-dark">
        <img
          src={HERO_IMAGE}
          alt="KACST campus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-brand-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-brand-dark/30" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#e1b63b]">
                University Administration
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
              Administrative Offices
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
              A directory of the offices and support units that keep academic
              life, student services and institutional governance running at
              KACST.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#directory"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#232771] transition hover:bg-[#edc85b]"
              >
                Browse Directory
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Contact the University
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b border-slate-200 bg-page-pattern">
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

          <span className="text-xs font-semibold text-[#102c4c]">Offices</span>
        </div>
      </div>

      {/* =========================================================
          DIRECTORY
      ========================================================= */}
      <section id="directory" className="bg-page-pattern">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              Office Directory
            </span>
          </div>

          <h2 className="max-w-2xl font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            Offices and support units
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Offices with a dedicated page can be opened directly. Units without
            a page yet are listed here for reference and can be reached through
            the university contact office.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADMIN_DIRECTORY.map((item, index) => {
              const Icon = ICON_MAP[item.icon] ?? ICON_MAP.Building2
              const color = lightTileIcon(index)

              const card = (
                <>
                  <div
                    className={`flex h-12 w-12 items-center justify-center border border-[#cfe0eb] ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-[#092c4d]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </>
              )

              if (!item.href) {
                return (
                  <div
                    key={item.title}
                    className="border border-dashed border-slate-300 bg-[#f8fbfe] p-6"
                  >
                    {card}

                    <p className="mt-5 text-xs font-medium text-slate-400">
                      Dedicated page coming soon
                    </p>
                  </div>
                )
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group border border-slate-200 bg-white p-6 shadow-[0_5px_24px_rgba(15,45,90,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#cbd8e6] hover:shadow-[0_12px_30px_rgba(15,45,90,0.09)]"
                >
                  {card}

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#175783]">
                    View office
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HELP CTA
      ========================================================= */}
      <section className="bg-[#092c4d]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e0b637]">
                  Administrative Support
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                Not sure which office to contact?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/75">
                The general enquiry office can direct students, guardians and
                visitors to the right administrative unit.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#092c4d] transition hover:bg-[#edc85b]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/administration"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Administration Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
