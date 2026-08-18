import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ClipboardCheck, FileText, Phone } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ApplicationForm } from "./application-form"

export const metadata: Metadata = {
  title: "Apply Online",
  description:
    "Complete the online application form for admission to Khanjahan Ali College of Science & Technology.",
}

const beforeYouStart = [
  "Academic certificates and transcripts from your last examination",
  "National ID or birth certificate for identification",
  "Recent passport-size photograph",
  "A valid email address and mobile number",
]

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#102c4c]">
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#082746]">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border-[70px] border-[#d9a82e]" />
          <div className="absolute -bottom-56 left-[5%] h-[500px] w-[500px] rounded-full border border-white" />
          <div className="absolute right-[25%] top-[40%] h-32 w-32 border border-[#d9a82e]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d9a82e]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e2b83b]">
                Online Application
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Apply to KACST
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Complete the application form below. You can review all of your
              details before submitting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#application-form"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Start the Form
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/admissions/requirements"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Check Requirements
                <ClipboardCheck className="h-4 w-4" />
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
            href="/admissions"
            className="text-xs font-medium text-slate-500 transition hover:text-[#175783]"
          >
            Admissions
          </Link>

          <span className="mx-3 text-slate-300">/</span>

          <span className="text-xs font-semibold text-[#102c4c]">Apply</span>
        </div>
      </div>

      {/* =========================================================
          FORM + SIDEBAR
      ========================================================= */}
      <section id="application-form" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.4fr]">
          <ApplicationForm />

          <aside className="space-y-4">
            <div className="border border-slate-200 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                <FileText className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                Before you start
              </h3>

              <div className="mt-4 space-y-3">
                {beforeYouStart.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-6 text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#d9a82e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#cfe1ee] bg-[#eaf4fb] p-6">
              <div className="flex h-11 w-11 items-center justify-center bg-white text-[#175783]">
                <Phone className="h-5 w-5" strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold text-[#092c4d]">
                Need help?
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                The admission office can guide you through eligibility and the
                documents you need to prepare.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#092c4d] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#12476d]"
              >
                Contact Admissions
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
