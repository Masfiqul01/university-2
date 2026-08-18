// Admission Requirements data — shared by /admissions/requirements and
// /admissions/undergraduate (both render the same requirements content).
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export type RequirementType = "undergraduate" | "postgraduate"

export const REQUIREMENTS_HERO = {
  eyebrow: "Admission Requirements",
  titleLines: ["Know the Requirements.", "Prepare With Confidence."],
  description:
    "Understand eligibility, required documents, program conditions and important admission information before beginning your application to KKJSTU.",
  primary: { label: "Check Requirements", href: "#requirements" },
  secondary: { label: "Download Checklist", href: "#documents" },
}

export const QUICK_ELIGIBILITY_INTRO = {
  eyebrow: "At a Glance",
  title: "What You Need to Know",
  description:
    "Admission requirements depend on degree level, program and applicant category. Review each section carefully before applying.",
}

export const QUICK_ELIGIBILITY = [
  {
    title: "Academic Qualification",
    description:
      "Required academic qualification depends on the degree level and selected program.",
    icon: "GraduationCap",
  },
  {
    title: "Supporting Documents",
    description:
      "Academic certificates, transcripts and identification documents may be required.",
    icon: "FileCheck2",
  },
  {
    title: "Program Requirements",
    description:
      "Some programs may have additional subject, academic or prerequisite requirements.",
    icon: "ScrollText",
  },
  {
    title: "Application Timeline",
    description:
      "Applicants should follow the official admission notice for current deadlines.",
    icon: "CalendarDays",
  },
]

export const REQUIREMENTS_SECTION = {
  eyebrow: "Eligibility Requirements",
  title: "Requirements by Degree Level",
  description:
    "Select your degree level to review the relevant eligibility criteria and supporting documentation.",
  tabs: [
    { id: "undergraduate", label: "Undergraduate", icon: "GraduationCap" },
    { id: "postgraduate", label: "Postgraduate", icon: "ScrollText" },
  ],
  tableHeaders: [
    "Criterion",
    "Minimum Requirement",
    "Accepted Document",
    "Notes",
  ],
  mobileLabels: {
    minimum: "Minimum Requirement",
    document: "Accepted Document",
    notes: "Notes",
  },
  note: {
    title: "Important Admission Note",
    text: "All eligibility criteria, minimum qualifications and program-specific requirements must be updated according to the latest officially approved admission policy and circular.",
  },
}

export const UNDERGRADUATE_REQUIREMENTS = [
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
]

export const POSTGRADUATE_REQUIREMENTS = [
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
]

export const INTERNATIONAL_APPLICANTS = {
  icon: "ShieldCheck",
  title: "International Applicants",
  description:
    "International applicants may need additional documentation, qualification equivalency, language evidence and other requirements according to the university's approved policy.",
  points: [
    "Qualification equivalency where applicable",
    "Valid passport / identification",
    "Academic certificates and transcripts",
    "Additional documentation required by the university",
  ],
}

export const TRANSFER_APPLICANTS = {
  icon: "ClipboardCheck",
  title: "Transfer Applicants",
  description:
    "Transfer admission, credit recognition and eligibility are subject to the university's approved academic and admission policies.",
  points: [
    "Previous academic records",
    "Course transcripts for credit evaluation",
    "Transfer eligibility according to policy",
    "Additional supporting documents where required",
  ],
}

export const DOCUMENT_CHECKLIST_INTRO = {
  eyebrow: "Document Checklist",
  title: "Prepare Your Documents",
  description:
    "Use this checklist to prepare your admission documents before starting the application.",
  downloadLabel: "Download Checklist",
  printLabel: "Print",
}

export const DOCUMENT_CHECKLIST = [
  {
    title: "Academic Certificates",
    description:
      "SSC/HSC, undergraduate or other relevant certificates according to degree level.",
    icon: "GraduationCap",
  },
  {
    title: "Academic Transcripts",
    description:
      "Official marksheets/transcripts showing the applicant's academic record.",
    icon: "FileText",
  },
  {
    title: "Identification",
    description:
      "Valid NID, birth registration, passport or other accepted identification.",
    icon: "IdCard",
  },
  {
    title: "Photograph",
    description:
      "Recent passport-size photograph in the format specified by the application system.",
    icon: "UserCheck",
  },
  {
    title: "Supporting Documents",
    description:
      "Additional documents for quota, transfer, equivalency or other applicable conditions.",
    icon: "FileCheck2",
  },
  {
    title: "Program-Specific Documents",
    description:
      "Additional documents where required by the selected academic program.",
    icon: "ClipboardCheck",
  },
]

export const DEADLINE_NOTE = {
  icon: "CalendarDays",
  eyebrow: "Application Deadline",
  title: "Check the Latest Official Admission Notice",
  description:
    "Admission deadlines can vary by intake and degree level. The current official circular should be treated as the final source for all application dates.",
  link: { label: "View Notices", href: "/notice-board" },
}

export const REQUIREMENTS_FAQ_INTRO = {
  eyebrow: "Frequently Asked Questions",
  title: "Admission Questions",
  description:
    "Quick answers to common questions about eligibility and admission requirements.",
}

export const REQUIREMENTS_FAQS = [
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
]

export const REQUIREMENTS_CTA = {
  eyebrow: "START SOMETHING MEANINGFUL",
  titleLines: ["Begin your journey.", "Shape the future."],
  links: [
    { label: "Start Your Application", href: "/admissions/apply" },
    { label: "Explore Programs", href: "/academics/programs" },
  ],
  stickyMobile: { label: "Apply Now", href: "/admissions/apply" },
}
