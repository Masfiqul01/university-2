import Link from "next/link"
import { imageUrl } from "@/lib/site-assets"
import { ArrowRight, GraduationCap } from "lucide-react"

export function AdmissionsBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-brand-dark">
        <img
          src={imageUrl("/images/admissions-building.png")}
          alt="KKJSTU academic building"
          className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-40 md:w-3/5 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/20" />

        <div className="relative flex flex-col gap-6 px-8 py-12 md:max-w-xl md:px-12 md:py-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-8 bg-white/50" />
            Admissions Open
          </p>
          <h2 className="font-serif text-3xl font-bold text-white text-balance md:text-4xl">
            Join KKJSTU, Shape Your Future
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/85">
            Admission is now open for the upcoming session. Take the next step towards your bright
            future at Khulna Khan Jahan Science and Technology University.
          </p>
          <Link
            href="/admissions/apply"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-white/90"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="absolute right-8 top-1/2 hidden h-28 w-28 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-dashed border-white/70 text-center text-white md:flex">
          <GraduationCap className="mb-1 h-5 w-5" />
          <span className="text-[9px] font-medium">Admission</span>
          <span className="text-[11px] font-bold leading-tight">OPEN</span>
          <span className="text-[9px] font-medium">Now</span>
        </div>
      </div>
    </section>
  )
}
