// Apply Online page (/admissions/apply) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const APPLY_METADATA = {
  title: "Apply Online",
  description:
    "Complete the online application form for admission to Khanjahan Ali College of Science & Technology.",
}

export const APPLY_HERO = {
  eyebrow: "Online Application",
  title: "Apply to KACST",
  description:
    "Complete the application form below. You can review all of your details before submitting.",
  primary: { label: "Start the Form", href: "#application-form" },
  secondary: { label: "Check Requirements", href: "/admissions/requirements" },
}

export const APPLY_BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Apply" },
]

export const BEFORE_YOU_START = {
  icon: "FileText",
  title: "Before you start",
  items: [
    "Academic certificates and transcripts from your last examination",
    "National ID or birth certificate for identification",
    "Recent passport-size photograph",
    "A valid email address and mobile number",
  ],
}

export const APPLY_HELP = {
  icon: "Phone",
  title: "Need help?",
  description:
    "The admission office can guide you through eligibility and the documents you need to prepare.",
  link: { label: "Contact Admissions", href: "/contact" },
}
