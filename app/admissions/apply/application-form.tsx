"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Check, CircleCheck, Loader2 } from "lucide-react"
import { PROGRAMS, PROGRAM_LEVELS } from "@/lib/data/programs"
import { APPLICATION_FORM_STEPS, INTAKE_OPTIONS } from "@/lib/data/admissions"

type FormData = {
  fullName: string
  email: string
  phone: string
  dob: string
  presentAddress: string
  previousInstitution: string
  previousQualification: string
  resultGpa: string
  passingYear: string
  level: string
  program: string
  intake: string
  guardianName: string
  guardianRelation: string
  guardianPhone: string
  permanentAddress: string
  city: string
  postalCode: string
  declaration: boolean
}

const INITIAL_FORM_DATA: FormData = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  presentAddress: "",
  previousInstitution: "",
  previousQualification: "",
  resultGpa: "",
  passingYear: "",
  level: "",
  program: "",
  intake: "",
  guardianName: "",
  guardianRelation: "",
  guardianPhone: "",
  permanentAddress: "",
  city: "",
  postalCode: "",
  declaration: false,
}

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-4 focus:ring-brand/10 disabled:cursor-not-allowed disabled:opacity-60"

function FormField({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block text-sm font-semibold text-foreground">
      {label} {required && <span className="text-destructive">*</span>}
      {children}
    </label>
  )
}

function ReviewCard({
  title,
  onEdit,
  children,
}: {
  title: string
  onEdit: () => void
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-serif text-base font-bold text-foreground">{title}</h3>
        <button type="button" onClick={onEdit} className="text-xs font-semibold text-brand hover:underline">
          Edit
        </button>
      </div>
      <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">{children}</dl>
    </div>
  )
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-sm text-foreground">{value || "—"}</dd>
    </div>
  )
}

export function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState("")

  const formRef = useRef<HTMLFormElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)
  const totalSteps = APPLICATION_FORM_STEPS.length

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [step])

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  function handleLevelChange(level: string) {
    setFormData((prev) => ({
      ...prev,
      level,
      program: PROGRAMS.some((p) => p.title === prev.program && p.level === level) ? prev.program : "",
    }))
  }

  function validateStep(currentStep: number) {
    const fields = formRef.current?.querySelectorAll<HTMLElement>(`[data-step="${currentStep}"]`)

    const invalidField = Array.from(fields ?? []).find((field) =>
      field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement
        ? !field.checkValidity()
        : false
    ) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | undefined

    if (invalidField) {
      setError("Please complete all required fields before continuing.")
      invalidField.reportValidity()
      invalidField.focus()
      return false
    }

    setError("")
    return true
  }

  function nextStep() {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, totalSteps))
    }
  }

  function prevStep() {
    setError("")
    setStep((s) => Math.max(s - 1, 1))
  }

  function goToStep(n: number) {
    setError("")
    setStep(n)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validateStep(totalSteps)) return

    setIsSubmitting(true)
    setTimeout(() => {
      const id = `KACST-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
      setReferenceId(id)
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1400)
  }

  function resetForm() {
    setFormData(INITIAL_FORM_DATA)
    setStep(1)
    setError("")
    setReferenceId("")
    setSubmitted(false)
  }

  const levelPrograms = formData.level ? PROGRAMS.filter((p) => p.level === formData.level) : PROGRAMS
  const intakeLabel = INTAKE_OPTIONS.find((i) => i.value === formData.intake)?.label ?? formData.intake

  return (
    <div ref={topRef} className="mx-auto max-w-4xl scroll-mt-24">
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/5 px-5 py-4">
        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <p className="text-sm leading-relaxed text-foreground/80">
          <span className="font-semibold text-brand">Demo application form.</span> This is a
          frontend preview only — no data is transmitted, stored, or submitted to any server. Feel
          free to explore every step.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-sm sm:px-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
            <CircleCheck className="h-9 w-9" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-foreground sm:text-3xl">Application Submitted</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Thank you for applying to KACST, {formData.fullName || "applicant"}. Your reference number is{" "}
            <span className="font-semibold text-brand">{referenceId}</span>. In a live system, our admissions
            team would review your information and contact you by email.
          </p>
          <p className="mx-auto mt-2 max-w-md text-xs text-muted-foreground">
            This is a demo — nothing was actually sent or saved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Submit Another Application
            </button>
            <Link
              href="/admissions"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Back to Admissions
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-6 sm:px-10">
            <ol className="grid grid-cols-5 gap-1.5 sm:gap-4">
              {APPLICATION_FORM_STEPS.map((item) => {
                const active = item.number === step
                const complete = item.number < step
                return (
                  <li key={item.number} className="min-w-0">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold sm:h-8 sm:w-8 ${
                          active || complete ? "bg-brand text-white" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {complete ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : item.number}
                      </span>
                      <span className={`hidden h-0.5 flex-1 sm:block ${complete ? "bg-brand" : "bg-border"}`} />
                    </div>
                    <p
                      className={`mt-2 truncate text-[11px] font-bold leading-tight sm:text-sm ${
                        active ? "text-brand" : "text-muted-foreground"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="mt-0.5 hidden text-xs text-muted-foreground lg:block">{item.description}</p>
                  </li>
                )
              })}
            </ol>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="px-6 py-8 sm:px-10">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Personal Information</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Use your official contact details.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full name" required>
                    <input
                      data-step="1"
                      required
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={fieldClass}
                      placeholder="Your full name"
                    />
                  </FormField>
                  <FormField label="Email address" required>
                    <input
                      data-step="1"
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={fieldClass}
                      placeholder="name@example.com"
                    />
                  </FormField>
                  <FormField label="Mobile number" required>
                    <input
                      data-step="1"
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={fieldClass}
                      placeholder="01XXXXXXXXX"
                    />
                  </FormField>
                  <FormField label="Date of birth" required>
                    <input
                      data-step="1"
                      required
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={(e) => update("dob", e.target.value)}
                      className={fieldClass}
                    />
                  </FormField>
                </div>
                <FormField label="Present address" required>
                  <textarea
                    data-step="1"
                    required
                    name="presentAddress"
                    rows={3}
                    value={formData.presentAddress}
                    onChange={(e) => update("presentAddress", e.target.value)}
                    className={fieldClass}
                    placeholder="House, road, area, district"
                  />
                </FormField>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Academic Information</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us about your most recent academic qualification.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Previous institution" required>
                    <input
                      data-step="2"
                      required
                      name="previousInstitution"
                      value={formData.previousInstitution}
                      onChange={(e) => update("previousInstitution", e.target.value)}
                      className={fieldClass}
                      placeholder="Name of school, college or university"
                    />
                  </FormField>
                  <FormField label="Qualification" required>
                    <input
                      data-step="2"
                      required
                      name="previousQualification"
                      value={formData.previousQualification}
                      onChange={(e) => update("previousQualification", e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. HSC, BSc in Physics"
                    />
                  </FormField>
                  <FormField label="GPA / CGPA / result" required>
                    <input
                      data-step="2"
                      required
                      type="number"
                      min="0"
                      max="5"
                      step="0.01"
                      name="resultGpa"
                      value={formData.resultGpa}
                      onChange={(e) => update("resultGpa", e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. 4.50"
                    />
                  </FormField>
                  <FormField label="Passing year" required>
                    <input
                      data-step="2"
                      required
                      type="number"
                      min="1990"
                      max="2100"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={(e) => update("passingYear", e.target.value)}
                      className={fieldClass}
                      placeholder="2025"
                    />
                  </FormField>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Program Selection</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Choose the study level, program and intake you&apos;re applying for.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Study level" required>
                    <select
                      data-step="3"
                      required
                      name="level"
                      value={formData.level}
                      onChange={(e) => handleLevelChange(e.target.value)}
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select a study level
                      </option>
                      {PROGRAM_LEVELS.map((lvl) => (
                        <option key={lvl} value={lvl}>
                          {lvl}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Program" required>
                    <select
                      data-step="3"
                      required
                      name="program"
                      value={formData.program}
                      onChange={(e) => update("program", e.target.value)}
                      disabled={!formData.level}
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        {formData.level ? "Select a program" : "Select a study level first"}
                      </option>
                      {levelPrograms.map((p) => (
                        <option key={p.slug} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField label="Preferred intake" required>
                    <select
                      data-step="3"
                      required
                      name="intake"
                      value={formData.intake}
                      onChange={(e) => update("intake", e.target.value)}
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select an intake
                      </option>
                      {INTAKE_OPTIONS.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Contact Information</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Guardian and permanent address details for our records.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Guardian's full name" required>
                    <input
                      data-step="4"
                      required
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={(e) => update("guardianName", e.target.value)}
                      className={fieldClass}
                      placeholder="Parent or guardian name"
                    />
                  </FormField>
                  <FormField label="Relationship" required>
                    <input
                      data-step="4"
                      required
                      name="guardianRelation"
                      value={formData.guardianRelation}
                      onChange={(e) => update("guardianRelation", e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. Father, Mother, Guardian"
                    />
                  </FormField>
                  <FormField label="Guardian's phone number" required>
                    <input
                      data-step="4"
                      required
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={(e) => update("guardianPhone", e.target.value)}
                      className={fieldClass}
                      placeholder="01XXXXXXXXX"
                    />
                  </FormField>
                  <FormField label="City / District" required>
                    <input
                      data-step="4"
                      required
                      name="city"
                      value={formData.city}
                      onChange={(e) => update("city", e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. Khulna"
                    />
                  </FormField>
                  <FormField label="Postal code" required>
                    <input
                      data-step="4"
                      required
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => update("postalCode", e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. 9000"
                    />
                  </FormField>
                </div>
                <FormField label="Permanent address" required>
                  <textarea
                    data-step="4"
                    required
                    name="permanentAddress"
                    rows={3}
                    value={formData.permanentAddress}
                    onChange={(e) => update("permanentAddress", e.target.value)}
                    className={fieldClass}
                    placeholder="House, road, area, district (if different from present address)"
                  />
                </FormField>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">Review &amp; Submit</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Please review your information carefully before submitting.
                  </p>
                </div>

                <div className="space-y-4">
                  <ReviewCard title="Personal Information" onEdit={() => goToStep(1)}>
                    <ReviewRow label="Full name" value={formData.fullName} />
                    <ReviewRow label="Email" value={formData.email} />
                    <ReviewRow label="Phone" value={formData.phone} />
                    <ReviewRow label="Date of birth" value={formData.dob} />
                    <ReviewRow label="Present address" value={formData.presentAddress} />
                  </ReviewCard>
                  <ReviewCard title="Academic Information" onEdit={() => goToStep(2)}>
                    <ReviewRow label="Previous institution" value={formData.previousInstitution} />
                    <ReviewRow label="Qualification" value={formData.previousQualification} />
                    <ReviewRow label="GPA / CGPA" value={formData.resultGpa} />
                    <ReviewRow label="Passing year" value={formData.passingYear} />
                  </ReviewCard>
                  <ReviewCard title="Program Selection" onEdit={() => goToStep(3)}>
                    <ReviewRow label="Study level" value={formData.level} />
                    <ReviewRow label="Program" value={formData.program} />
                    <ReviewRow label="Preferred intake" value={intakeLabel} />
                  </ReviewCard>
                  <ReviewCard title="Contact Information" onEdit={() => goToStep(4)}>
                    <ReviewRow label="Guardian's name" value={formData.guardianName} />
                    <ReviewRow label="Relationship" value={formData.guardianRelation} />
                    <ReviewRow label="Guardian's phone" value={formData.guardianPhone} />
                    <ReviewRow label="City / District" value={formData.city} />
                    <ReviewRow label="Postal code" value={formData.postalCode} />
                    <ReviewRow label="Permanent address" value={formData.permanentAddress} />
                  </ReviewCard>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-foreground/80">
                  <input
                    data-step="5"
                    required
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={(e) => update("declaration", e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-brand"
                  />
                  <span>
                    I confirm that the information provided is accurate to the best of my knowledge and I agree to
                    the admissions terms. <span className="text-destructive">*</span>
                  </span>
                </label>
              </div>
            )}

            {error && (
              <p role="alert" className="mt-6 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-semibold text-destructive">
                {error}
              </p>
            )}

            <div className="mt-10 flex items-center justify-between gap-3 border-t border-border pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <span />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Next Step
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
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
      )}
    </div>
  )
}
