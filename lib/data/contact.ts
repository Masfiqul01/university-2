// Contact page (/contact) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const CONTACT_METADATA = {
  title: "Contact Us",
  description:
    "Contact Khanjahan Ali College of Science & Technology for admissions, academic, research and general enquiries.",
}

export const CONTACT_HERO = {
  image: "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp",
  imageAlt: "KACST campus",
  eyebrow: "Get in Touch",
  title: "Contact KACST",
  description:
    "Connect with the university for admissions, academics, research and general enquiries. Our offices are here to help students, guardians and visitors.",
  primary: { label: "Send a Message", href: "#message" },
  secondary: { label: "Email the University", href: "mailto:khanjahanali.kln@gmail.com" },
}

export const CONTACT_BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Contact" },
]

export const CONTACT_DETAILS_INTRO = {
  eyebrow: "University Contact",
  title: "How to reach us",
}

// Sourced from the institution details already published in the site footer.
export const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "khanjahanali.kln@gmail.com",
    href: "mailto:khanjahanali.kln@gmail.com",
    icon: "Mail",
  },
  {
    label: "Website",
    value: "www.khanjahanalicst.edu.bd",
    href: "https://www.khanjahanalicst.edu.bd",
    icon: "Globe",
  },
  {
    label: "Location",
    value: "Khulna, Bangladesh",
    icon: "MapPin",
  },
]

export const CONTACT_FORM_INTRO = {
  eyebrow: "Send a Message",
  title: "We would like to hear from you",
  description:
    "Complete the form below and our office will respond to your enquiry. Fields marked as required must be filled in before the message can be submitted.",
}

export const OFFICE_HOURS_CARD = {
  icon: "Clock3",
  title: "Office Hours",
}

export const OFFICE_HOURS = [
  { day: "Saturday – Wednesday", hours: "09:00 AM – 05:00 PM" },
  { day: "Thursday", hours: "09:00 AM – 01:00 PM" },
  { day: "Friday & Public Holidays", hours: "Closed" },
]

export const ENQUIRY_ROUTES_CARD = {
  icon: "Phone",
  title: "Enquiry Routing",
  description:
    "Looking for a specific department? These pages may answer your question faster.",
}

export const ENQUIRY_ROUTES = [
  {
    title: "Admissions",
    description: "Programme eligibility, application process and requirements.",
    href: "/admissions",
  },
  {
    title: "Academic Offices",
    description: "Faculties, departments, results and the academic calendar.",
    href: "/academics",
  },
  {
    title: "Administration",
    description: "Registrar, examinations, finance and institutional offices.",
    href: "/administration",
  },
]
