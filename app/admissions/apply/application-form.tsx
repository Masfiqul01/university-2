"use client"

import { useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from "lucide-react"
import { PROGRAMS, PROGRAM_LEVELS } from "@/lib/data/programs"

/**
 * Frontend-only demo application form. Nothing is transmitted or stored —
 * submitting shows a local confirmation state. Wire this to the real
 * admission backend when one is available.
 */

const STEPS = [
  { number: 1, title: "Personal", description: "Your details" },
  { number: 2, title: "Academic", description: "Previous study" },
  { number: 3, title: "Program", description: "Choice of study" },
  { number: 4, title: "Contact", description: "How to reach you" },
  { number: 5, title: "Review", description: "Check and submit" },
]

type FormState = {
  fullName: string
  fatherName: string
  motherName: string
  dateOfBirth: string
  gender: string
  nationality: string
  lastInstitution: string
  lastExam: string
  passingYear: string
  result: string
  level: string
  program: string
  session: string
  email: string
  phone: string
  address: string
}

const EMPTY_FORM: FormState = {
  fullName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "Bangladeshi",
  lastInstitution: "",
  lastExam: "",
  passingYear: "",
  result: "",
  level: "",
  program: "",
  session: "",
  email: "",
  phone: "",
  address: "",
}

const inputClass =
  "h-11 w-full border border-slate-200 bg-[#f8fbfe] px-4 text-sm text-[#102c4c] outline-none transition focus:border-[#1c5d8f]"

const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wide text-[#183957]"

export function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const stepRef = useRef<HTMLDivElement>(null)

  const update = (field: keyof FormState) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  const programsForLevel = form.level
    ? PROGRAMS.filter((program) => program.level === form.level)
    : PROGRAMS

  /** Validates only the fields rendered in the current step. */
  function goNext() {
    const container = stepRef.current
    if (container) {
      const fields = container.querySelectorAll<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >("input, select, textarea")

      for (const field of fields) {
        if (!field.checkValidity()) {
          field.reportValidity()
          return
        }
      }
    }

    setStep((current) => Math.min(STEPS.length, current + 1))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    // No backend yet — simulate the round trip so the loading state is real.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="border border-slate-200 bg-white p-10 text-center shadow-[0_12px_35px_rgba(8,39,70,0.07)] sm:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#edf5fb] text-[#175783]">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.7} />
        </div>

        <h2 className="mt-6 font-serif text-2xl font-semibold text-[#092c4d] sm:text-3xl">
          Application Received
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          Thank you, {form.fullName || "applicant"}. Your application details
          have been collected in this form.
        </p>

        <div className="mx-auto mt-6 flex max-w-md items-start gap-3 border border-[#d9a82e]/30 bg-[#fffaf0] p-4 text-left">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c89516]" />

          <p className="text-xs leading-6 text-[#9b7313]">
            This is a demonstration form. No application has been submitted or
            stored. Please contact the admission office to submit an official
            application.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12476d]"
          >
            Contact Admission Office
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => {
              setForm(EMPTY_FORM)
              setStep(1)
              setSubmitted(false)
            }}
            className="inline-flex items-center justify-center gap-2 border border-slate-200 px-6 py-3.5 text-sm font-semibold text-[#092c4d] transition hover:border-[#9dbdd6]"
          >
            Start Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-slate-200 bg-white shadow-[0_12px_35px_rgba(8,39,70,0.07)]">
      {/* STEP INDICATOR */}
      <div className="border-b border-slate-200 bg-[#f8fbfe] px-6 py-6 sm:px-8">
        <div className="flex flex-wrap gap-4">
          {STEPS.map((item) => {
            const isDone = step > item.number
            const isActive = step === item.number

            return (
              <div key={item.number} className="flex min-w-[110px] flex-1 items-center gap-3">
                <span
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center text-sm font-bold transition",
                    isDone
                      ? "bg-[#175783] text-white"
                      : isActive
                        ? "bg-[#d9a82e] text-[#082746]"
                        : "bg-slate-100 text-slate-400",
                  ].join(" ")}
                >
                  {isDone ? <Check className="h-4 w-4" strokeWidth={2.4} /> : item.number}
                </span>

                <div className="min-w-0">
                  <p
                    className={[
                      "text-xs font-bold",
                      isActive || isDone ? "text-[#092c4d]" : "text-slate-400",
                    ].join(" ")}
                  >
                    {item.title}
                  </p>

                  <p className="truncate text-[11px] text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate={false}>
        <div ref={stepRef} className="px-6 py-8 sm:px-8">
          {/* STEP 1 — PERSONAL */}
          {step === 1 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  required
                  className={inputClass}
                  value={form.fullName}
                  onChange={(e) => update("fullName")(e.target.value)}
                  placeholder="As written on your certificate"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="fatherName">
                  Father&apos;s Name *
                </label>
                <input
                  id="fatherName"
                  required
                  className={inputClass}
                  value={form.fatherName}
                  onChange={(e) => update("fatherName")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="motherName">
                  Mother&apos;s Name *
                </label>
                <input
                  id="motherName"
                  required
                  className={inputClass}
                  value={form.motherName}
                  onChange={(e) => update("motherName")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="dateOfBirth">
                  Date of Birth *
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  required
                  className={inputClass}
                  value={form.dateOfBirth}
                  onChange={(e) => update("dateOfBirth")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gender">
                  Gender *
                </label>
                <select
                  id="gender"
                  required
                  className={inputClass}
                  value={form.gender}
                  onChange={(e) => update("gender")(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="nationality">
                  Nationality *
                </label>
                <input
                  id="nationality"
                  required
                  className={inputClass}
                  value={form.nationality}
                  onChange={(e) => update("nationality")(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* STEP 2 — ACADEMIC */}
          {step === 2 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="lastInstitution">
                  Last Institution Attended *
                </label>
                <input
                  id="lastInstitution"
                  required
                  className={inputClass}
                  value={form.lastInstitution}
                  onChange={(e) => update("lastInstitution")(e.target.value)}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="lastExam">
                  Last Examination Passed *
                </label>
                <select
                  id="lastExam"
                  required
                  className={inputClass}
                  value={form.lastExam}
                  onChange={(e) => update("lastExam")(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>SSC / Equivalent</option>
                  <option>HSC / Equivalent</option>
                  <option>Diploma</option>
                  <option>Bachelor&apos;s Degree</option>
                  <option>Master&apos;s Degree</option>
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="passingYear">
                  Year of Passing *
                </label>
                <input
                  id="passingYear"
                  type="number"
                  min="1970"
                  max="2100"
                  required
                  className={inputClass}
                  value={form.passingYear}
                  onChange={(e) => update("passingYear")(e.target.value)}
                  placeholder="e.g. 2025"
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="result">
                  Result / GPA *
                </label>
                <input
                  id="result"
                  required
                  className={inputClass}
                  value={form.result}
                  onChange={(e) => update("result")(e.target.value)}
                  placeholder="e.g. GPA 4.50"
                />
              </div>
            </div>
          )}

          {/* STEP 3 — PROGRAM */}
          {step === 3 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="level">
                  Level of Study *
                </label>
                <select
                  id="level"
                  required
                  className={inputClass}
                  value={form.level}
                  onChange={(e) => {
                    update("level")(e.target.value)
                    update("program")("")
                  }}
                >
                  <option value="">Select</option>
                  {PROGRAM_LEVELS.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="session">
                  Preferred Session *
                </label>
                <select
                  id="session"
                  required
                  className={inputClass}
                  value={form.session}
                  onChange={(e) => update("session")(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Spring</option>
                  <option>Summer</option>
                  <option>Fall</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="program">
                  Program *
                </label>
                <select
                  id="program"
                  required
                  className={inputClass}
                  value={form.program}
                  onChange={(e) => update("program")(e.target.value)}
                >
                  <option value="">
                    {form.level ? "Select a program" : "Select a level first"}
                  </option>
                  {programsForLevel.map((program) => (
                    <option key={program.slug}>{program.title}</option>
                  ))}
                </select>

                <p className="mt-2 text-xs text-slate-500">
                  Not sure which program fits?{" "}
                  <Link
                    href="/academics/programs"
                    className="font-semibold text-[#175783] hover:underline"
                  >
                    Browse all programs
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* STEP 4 — CONTACT */}
          {step === 4 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Mobile Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  pattern="[0-9+\-\s]{6,}"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => update("phone")(e.target.value)}
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="address">
                  Present Address *
                </label>
                <textarea
                  id="address"
                  required
                  rows={4}
                  className="w-full border border-slate-200 bg-[#f8fbfe] px-4 py-3 text-sm text-[#102c4c] outline-none transition focus:border-[#1c5d8f]"
                  value={form.address}
                  onChange={(e) => update("address")(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* STEP 5 — REVIEW */}
          {step === 5 && (
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#092c4d]">
                Review your application
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Please check the details below before submitting.
              </p>

              <div className="mt-6 divide-y divide-slate-100 border border-slate-200">
                {[
                  ["Full Name", form.fullName],
                  ["Father's Name", form.fatherName],
                  ["Mother's Name", form.motherName],
                  ["Date of Birth", form.dateOfBirth],
                  ["Gender", form.gender],
                  ["Nationality", form.nationality],
                  ["Last Institution", form.lastInstitution],
                  ["Last Examination", form.lastExam],
                  ["Year of Passing", form.passingYear],
                  ["Result / GPA", form.result],
                  ["Level of Study", form.level],
                  ["Program", form.program],
                  ["Preferred Session", form.session],
                  ["Email", form.email],
                  ["Mobile", form.phone],
                  ["Address", form.address],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 px-5 py-3 sm:grid-cols-[220px_1fr] sm:gap-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {label}
                    </span>

                    <span className="text-sm text-[#102c4c]">
                      {value || <span className="text-slate-400">Not provided</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 border border-[#d9a82e]/30 bg-[#fffaf0] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c89516]" />

                <p className="text-xs leading-6 text-[#9b7313]">
                  This form is a demonstration only. Submitting will not send an
                  official application to the university.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-[#f8fbfe] px-6 py-5 sm:px-8">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(1, current - 1))}
            disabled={step === 1}
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#092c4d] transition hover:border-[#9dbdd6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <p className="text-xs text-slate-500">
            Step {step} of {STEPS.length}
          </p>

          {step < STEPS.length ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 bg-[#092c4d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12476d]"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-[#d9a82e] px-6 py-3 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <Check className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
