"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  IdCard,
  Mail,
  Printer,
  ScrollText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type RequirementType = "undergraduate" | "postgraduate";

const quickEligibility = [
  {
    title: "Academic Qualification",
    description:
      "Required academic qualification depends on the degree level and selected program.",
    icon: GraduationCap,
  },
  {
    title: "Supporting Documents",
    description:
      "Academic certificates, transcripts and identification documents may be required.",
    icon: FileCheck2,
  },
  {
    title: "Program Requirements",
    description:
      "Some programs may have additional subject, academic or prerequisite requirements.",
    icon: ScrollText,
  },
  {
    title: "Application Timeline",
    description:
      "Applicants should follow the official admission notice for current deadlines.",
    icon: CalendarDays,
  },
];

const undergraduateRequirements = [
  {
    criterion: "Academic Qualification",
    minimum:
      "SSC/HSC or equivalent qualification according to the official admission policy.",
    document: "Academic Certificate & Transcript",
    notes: "Requirements may vary by program.",
  },
  {
    criterion: "Minimum Result",
    minimum:
      "Minimum GPA/grade as specified in the current official admission circular.",
    document: "Academic Transcript",
    notes: "Official policy should be followed for each intake.",
  },
  {
    criterion: "Required Subjects",
    minimum:
      "Relevant subjects may be required depending on the selected discipline.",
    document: "Academic Transcript",
    notes: "Program-specific conditions may apply.",
  },
  {
    criterion: "Identification",
    minimum: "Valid applicant identification document.",
    document: "NID / Birth Registration / Passport",
    notes: "Accepted identification depends on applicant category.",
  },
];

const postgraduateRequirements = [
  {
    criterion: "Previous Degree",
    minimum:
      "Recognized undergraduate degree or equivalent qualification relevant to the program.",
    document: "Degree Certificate & Transcript",
    notes: "Exact academic requirements are program-specific.",
  },
  {
    criterion: "Academic Background",
    minimum:
      "Relevant academic background according to the selected postgraduate program.",
    document: "Academic Transcript",
    notes: "Additional prerequisites may apply.",
  },
  {
    criterion: "Research / Thesis",
    minimum:
      "Additional research or thesis requirements may apply where relevant.",
    document: "Research Proposal / Supporting Documents",
    notes: "Applicable programs should define the requirement.",
  },
  {
    criterion: "Language Requirement",
    minimum:
      "Language proficiency may be required where specified by the program.",
    document: "Accepted Language Certificate",
    notes: "Requirement should follow the official program policy.",
  },
];

const documentChecklist = [
  {
    title: "Academic Certificates",
    description:
      "SSC/HSC, undergraduate or other relevant certificates according to degree level.",
    icon: GraduationCap,
  },
  {
    title: "Academic Transcripts",
    description:
      "Official marksheets/transcripts showing the applicant's academic record.",
    icon: FileText,
  },
  {
    title: "Identification",
    description:
      "Valid NID, birth registration, passport or other accepted identification.",
    icon: IdCard,
  },
  {
    title: "Photograph",
    description:
      "Recent passport-size photograph in the format specified by the application system.",
    icon: UserCheck,
  },
  {
    title: "Supporting Documents",
    description:
      "Additional documents for quota, transfer, equivalency or other applicable conditions.",
    icon: FileCheck2,
  },
  {
    title: "Program-Specific Documents",
    description:
      "Additional documents where required by the selected academic program.",
    icon: ClipboardCheck,
  },
];

const faqs = [
  {
    question: "Are the admission requirements the same for every program?",
    answer:
      "Not necessarily. General admission requirements may apply across a degree level, while individual programs can have additional academic, subject or prerequisite requirements.",
  },
  {
    question: "Where can I find the latest admission requirements?",
    answer:
      "Applicants should always check the latest official admission circular and program-specific instructions before submitting an application.",
  },
  {
    question: "Can transfer students apply?",
    answer:
      "Transfer admission depends on the university's approved policy and the availability of applicable transfer pathways. Any transfer-specific conditions should be published with the relevant admission notice.",
  },
  {
    question: "Are international applicants eligible?",
    answer:
      "International admission depends on the university's applicable policy, qualification equivalency and any additional documentation or immigration requirements.",
  },
  {
    question: "Can requirements change between admission cycles?",
    answer:
      "Yes. Applicants should rely on the latest officially published admission notice rather than an older circular or unofficial source.",
  },
];

export default function AdmissionRequirementsPage() {
  const [activeTab, setActiveTab] =
    useState<RequirementType>("undergraduate");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const requirements =
    activeTab === "undergraduate"
      ? undergraduateRequirements
      : postgraduateRequirements;

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
                Admission Requirements
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Know the Requirements.
              <br />
              Prepare With Confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
              Understand eligibility, required documents, program conditions
              and important admission information before beginning your
              application to KKJSTU.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#requirements"
                className="inline-flex items-center justify-center gap-2 bg-[#d9a82e] px-6 py-3.5 text-sm font-bold text-[#082746] transition hover:bg-[#edc85b]"
              >
                Check Requirements
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#documents"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Download Checklist
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK ELIGIBILITY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#d9a82e]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
              At a Glance
            </span>
          </div>

          <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
            What You Need to Know
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Admission requirements depend on degree level, program and
            applicant category. Review each section carefully before applying.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickEligibility.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          REQUIREMENTS
      ========================================================= */}
      <section
        id="requirements"
        className="border-y border-slate-200 bg-[#eaf3fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Eligibility Requirements
              </span>
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Requirements by Degree Level
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Select your degree level to review the relevant eligibility
              criteria and supporting documentation.
            </p>
          </div>

          {/* TABS */}
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-max border-b border-slate-300">
              <button
                type="button"
                onClick={() => setActiveTab("undergraduate")}
                className={`inline-flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-bold transition ${
                  activeTab === "undergraduate"
                    ? "border-[#d9a82e] bg-white text-[#092c4d]"
                    : "border-transparent text-slate-500 hover:text-[#175783]"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                Undergraduate
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("postgraduate")}
                className={`inline-flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-bold transition ${
                  activeTab === "postgraduate"
                    ? "border-[#d9a82e] bg-white text-[#092c4d]"
                    : "border-transparent text-slate-500 hover:text-[#175783]"
                }`}
              >
                <ScrollText className="h-4 w-4" />
                Postgraduate
              </button>
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="mt-6 hidden overflow-hidden border border-slate-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#f7fafc] text-left">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Criterion
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Minimum Requirement
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Accepted Document
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Notes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {requirements.map((item) => (
                    <tr
                      key={item.criterion}
                      className="border-b border-slate-100 last:border-0 hover:bg-[#fbfdff]"
                    >
                      <td className="px-6 py-5 align-top font-semibold text-[#173752]">
                        {item.criterion}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-600">
                        {item.minimum}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-600">
                        {item.document}
                      </td>

                      <td className="px-6 py-5 align-top text-sm leading-6 text-slate-500">
                        {item.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE REQUIREMENT CARDS */}
          <div className="mt-6 space-y-4 md:hidden">
            {requirements.map((item) => (
              <div
                key={item.criterion}
                className="border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#edf5fb] text-[#175783]">
                    <FileCheck2 className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-[#173752]">
                      {item.criterion}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Minimum Requirement
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.minimum}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Accepted Document
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {item.document}
                    </p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Notes
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IMPORTANT NOTE */}
          <div className="mt-6 flex gap-4 border border-[#ead89d] bg-[#fff9e7] p-5">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#b28718]" />

            <div>
              <p className="font-semibold text-[#6e5414]">
                Important Admission Note
              </p>

              <p className="mt-1 text-sm leading-6 text-[#75653b]">
                All eligibility criteria, minimum qualifications and
                program-specific requirements must be updated according to the
                latest officially approved admission policy and circular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERNATIONAL / TRANSFER
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* INTERNATIONAL */}
          <div className="border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <h2 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              International Applicants
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              International applicants may need additional documentation,
              qualification equivalency, language evidence and other
              requirements according to the university&apos;s approved policy.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Qualification equivalency where applicable",
                "Valid passport / identification",
                "Academic certificates and transcripts",
                "Additional documentation required by the university",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b28718]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TRANSFER */}
          <div className="border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
              <ClipboardCheck className="h-5 w-5" />
            </div>

            <h2 className="mt-5 font-serif text-2xl font-semibold text-[#092c4d]">
              Transfer Applicants
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Transfer admission, credit recognition and eligibility are
              subject to the university&apos;s approved academic and admission
              policies.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Previous academic records",
                "Course transcripts for credit evaluation",
                "Transfer eligibility according to policy",
                "Additional supporting documents where required",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b28718]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENT CHECKLIST
      ========================================================= */}
      <section
        id="documents"
        className="border-y border-slate-200 bg-[#eaf3fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d9a82e]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                  Document Checklist
                </span>
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
                Prepare Your Documents
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Use this checklist to prepare your admission documents before
                starting the application.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 border border-[#175783] bg-white px-5 py-3 text-sm font-bold text-[#175783] transition hover:bg-[#175783] hover:text-white"
              >
                <Download className="h-4 w-4" />
                Download Checklist
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#173752] transition hover:border-[#175783]"
              >
                <Printer className="h-4 w-4" />
                Print
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documentChecklist.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border border-[#cfe0ec] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center bg-[#edf5fb] text-[#175783]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold text-[#b28718]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-[#092c4d]">
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
      </section>

      {/* =========================================================
          DEADLINE NOTE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="border border-[#ead89d] bg-[#fff9e7] p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="flex h-14 w-14 items-center justify-center bg-white text-[#b28718]">
              <CalendarDays className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a17a16]">
                Application Deadline
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold text-[#092c4d]">
                Check the Latest Official Admission Notice
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Admission deadlines can vary by intake and degree level. The
                current official circular should be treated as the final
                source for all application dates.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#092c4d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123d63]"
            >
              View Notices
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d9a82e]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b28718]">
                Frequently Asked Questions
              </span>

              <span className="h-px w-8 bg-[#d9a82e]" />
            </div>

            <h2 className="font-serif text-3xl font-semibold text-[#092c4d] sm:text-4xl">
              Admission Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Quick answers to common questions about eligibility and
              admission requirements.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-slate-200 bg-[#f9fbfd]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-semibold text-[#173752]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
          Screenshot-inspired compact premium banner
      ========================================================= */}
      <section className="bg-[#f5f8fc] px-5 py-14 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#150866] shadow-[0_20px_60px_rgba(21,8,102,0.18)]">
          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#3920a2] opacity-20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[42%] h-56 w-56 rounded-full bg-[#6d4cff] opacity-10 blur-3xl" />

          {/* CTA CONTENT */}
          <div className="relative grid min-h-[210px] items-center gap-8 px-7 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-9">
            {/* LEFT */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#d9a82e]/50 text-[#d9a82e]">
                  <span className="text-[11px] leading-none">+</span>
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9a82e]">
                  START SOMETHING MEANINGFUL
                </span>
              </div>

              <h2 className="font-sans text-[34px] font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[48px]">
                Begin your journey.
                <br />
                <span className="text-white">Shape the future.</span>
              </h2>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
              <a
                href="#"
                className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#150866] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start Your Application

                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="/academics/programs"
                className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/[0.08] hover:text-white"
              >
                Explore Programs

                <ArrowRight className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* TOP RIGHT ICON */}
            <div className="absolute right-5 top-5 hidden h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.05] sm:flex">
              <GraduationCap
                className="h-6 w-6 text-[#d9a82e]"
                strokeWidth={1.5}
              />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#d9a82e]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <SiteFooter />

      {/* MOBILE STICKY APPLY */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-5px_25px_rgba(8,39,70,0.12)] md:hidden">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-2 bg-[#d9a82e] px-5 py-3.5 text-sm font-bold text-[#092c4d]"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}