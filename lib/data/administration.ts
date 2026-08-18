// Administration page (/administration) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.
export const OFFICES = [
  { title: "Vice-Chancellor", href: "/administration/vice-chancellor", icon: "Users" },
  { title: "Pro Vice-Chancellor", href: "/administration/pro-vice-chancellor", icon: "GraduationCap" },
  { title: "Registrar", href: "/administration/registrar", icon: "Landmark" },
  { title: "Treasurer", href: "/administration/treasurer", icon: "ShieldCheck" },
  { title: "Controller of Examinations", href: "/administration/controller-of-examinations", icon: "Briefcase" },
  { title: "Deans & Heads", href: "/administration/deans-heads", icon: "Building2" },
]

// ============================================================
// OFFICE / LEADERSHIP DETAIL PAGES
// ------------------------------------------------------------
// Each entry drives one page under /administration/*.
// `holder` is the named office-holder where the university has
// published one. Offices with no published name use a generic
// office title instead — replace with the official name when
// available rather than leaving a placeholder in production.
// Contact details follow the KACST switchboard convention
// (+88 041 7698461-XXX). Replace extensions with official ones.
// ============================================================

export type OfficeProfile = {
  slug: string
  role: string
  holder: string | null
  holderTitle?: string
  image?: string
  eyebrow: string
  heading: string
  intro: string
  message?: string[]
  responsibilities: string[]
  services?: string[]
  phone: string
  email: string
  office: string
}

export const OFFICE_PROFILES: OfficeProfile[] = [
  {
    slug: "chancellor",
    role: "Chancellor",
    holder: "His Excellency Hafiz Uddin Ahmad",
    holderTitle: "The Honourable President (Acting) of the People's Republic of Bangladesh",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp",
    eyebrow: "Office of the Chancellor",
    heading: "Constitutional head of the university",
    intro:
      "The Chancellor is the constitutional head of the university and presides over convocation, conferring degrees and providing the highest level of institutional oversight.",
    message: [
      "As Chancellor of Khanjahan Ali College of Science & Technology, the office provides visionary guidance and leadership to foster academic excellence, institutional development and innovation.",
      "The Chancellor's role safeguards the academic standing of the institution and affirms the degrees and honours conferred upon its graduates.",
    ],
    responsibilities: [
      "Serving as the constitutional head of the university",
      "Presiding over the annual convocation ceremony",
      "Conferring degrees, diplomas and academic honours",
      "Providing the highest level of institutional oversight",
      "Approving appointments reserved to the Chancellor's office",
    ],
    phone: "+88 041 7698461-100",
    email: "chancellor@kkjstu.ac.bd",
    office: "Office of the Chancellor, Administrative Building",
  },
  {
    slug: "vice-chancellor",
    role: "Vice-Chancellor",
    holder: "Prof. Dr. Mohammad Ali Azadi",
    holderTitle: "Vice-Chancellor, Khanjahan Ali College of Science & Technology",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707390/fac_1785751849.jpg",
    eyebrow: "Office of the Vice-Chancellor",
    heading: "Leading the academic and administrative direction",
    intro:
      "The Vice-Chancellor is the principal academic and executive officer of the university, leading it with a commitment to academic excellence, research and institutional growth.",
    message: [
      "Our purpose is to build an institution where quality teaching, meaningful research and responsible leadership come together for the benefit of our students and the wider community.",
      "We remain committed to strengthening academic standards, expanding research capacity and creating an environment in which every student can reach their full potential.",
    ],
    responsibilities: [
      "Serving as the principal academic and executive officer",
      "Leading academic planning, quality assurance and policy",
      "Chairing the Academic Council and key university committees",
      "Representing the university to government and partner institutions",
      "Overseeing faculty development and institutional growth",
    ],
    phone: "+88 041 7698461-101",
    email: "vc@kkjstu.ac.bd",
    office: "Office of the Vice-Chancellor, Administrative Building",
  },
  {
    slug: "pro-vice-chancellor",
    role: "Pro Vice-Chancellor",
    holder: "Prof. Dr. Mohammad Hasmid Ali",
    holderTitle: "Pro Vice-Chancellor, Khanjahan Ali College of Science & Technology",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707395/faculty_1786563553_747.jpg",
    eyebrow: "Office of the Pro Vice-Chancellor",
    heading: "Supporting academic advancement and strategy",
    intro:
      "The Pro Vice-Chancellor supports academic advancement, research initiatives and the strategic development of the university, deputising for the Vice-Chancellor as required.",
    message: [
      "Academic progress depends on strong coordination between faculties, departments and student support services. This office works to keep those connections effective and student-focused.",
      "We place particular emphasis on research culture, curriculum development and the continuous improvement of the student learning experience.",
    ],
    responsibilities: [
      "Supporting the Vice-Chancellor in academic leadership",
      "Coordinating research initiatives across faculties",
      "Overseeing curriculum development and academic review",
      "Guiding strategic planning and institutional projects",
      "Deputising for the Vice-Chancellor when required",
    ],
    phone: "+88 041 7698461-102",
    email: "provc@kkjstu.ac.bd",
    office: "Office of the Pro Vice-Chancellor, Administrative Building",
  },
  {
    slug: "treasurer",
    role: "Treasurer",
    holder: "Prof. Dr. Muhammad Mahbubur Rahman",
    holderTitle: "Treasurer, Khanjahan Ali College of Science & Technology",
    image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707399/faculty_1786173440_602.jpg",
    eyebrow: "Office of the Treasurer",
    heading: "Financial stewardship and accountability",
    intro:
      "The Treasurer oversees financial management and ensures transparency and accountability across all financial activities of the university.",
    message: [
      "Sound financial management underpins every academic ambition of the university. This office works to ensure resources are allocated responsibly and accounted for transparently.",
      "The Treasurer's office also supports students and staff on fee structures, financial procedures and institutional budgeting.",
    ],
    responsibilities: [
      "Overseeing the university budget and financial planning",
      "Ensuring transparency and accountability in expenditure",
      "Supervising audit, accounts and financial compliance",
      "Managing fee structures and institutional funds",
      "Reporting financial performance to governing bodies",
    ],
    phone: "+88 041 7698461-103",
    email: "treasurer@kkjstu.ac.bd",
    office: "Office of the Treasurer, Administrative Building",
  },
  {
    slug: "registrar",
    role: "Registrar",
    holder: null,
    eyebrow: "Office of the Registrar",
    heading: "The administrative centre of the university",
    intro:
      "The Registrar's Office is the principal administrative unit of the university, maintaining official records, coordinating admissions administration and serving as the custodian of institutional correspondence.",
    responsibilities: [
      "Maintaining official student and academic records",
      "Coordinating admission and enrolment administration",
      "Issuing certificates, transcripts and official documents",
      "Serving as secretary to university governing bodies",
      "Managing institutional correspondence and archives",
    ],
    services: [
      "Student enrolment and registration",
      "Transcript and certificate issuance",
      "Verification of academic documents",
      "Official letters and attestation",
      "Convocation administration",
    ],
    phone: "+88 041 7698461-104",
    email: "registrar@kkjstu.ac.bd",
    office: "Office of the Registrar, Administrative Building",
  },
  {
    slug: "controller-of-examinations",
    role: "Controller of Examinations",
    holder: null,
    eyebrow: "Office of the Controller of Examinations",
    heading: "Examinations, results and academic integrity",
    intro:
      "The Controller of Examinations administers all university examinations, publishes results and safeguards the integrity and fairness of the assessment process.",
    responsibilities: [
      "Planning and conducting all university examinations",
      "Publishing semester and final examination results",
      "Maintaining examination records and grade histories",
      "Safeguarding examination integrity and confidentiality",
      "Handling result review and re-scrutiny applications",
    ],
    services: [
      "Examination routine publication",
      "Admit card issuance",
      "Result publication and grade sheets",
      "Answer script re-scrutiny",
      "Certificate and transcript verification",
    ],
    phone: "+88 041 7698461-106",
    email: "controller@kkjstu.ac.bd",
    office: "Examination Control Office, Academic Building",
  },
  {
    slug: "deans-heads",
    role: "Deans & Heads",
    holder: null,
    eyebrow: "Faculty Leadership",
    heading: "Deans and departmental heads",
    intro:
      "Each faculty is led by a Dean, supported by departmental Heads who guide teaching, research and student progression within their disciplines.",
    responsibilities: [
      "Providing academic leadership within each faculty",
      "Overseeing curriculum delivery and teaching quality",
      "Supporting faculty members and research supervision",
      "Coordinating departmental planning and resources",
      "Advising students on academic progression",
    ],
    services: [
      "Academic advising and programme guidance",
      "Course and curriculum coordination",
      "Research supervision allocation",
      "Departmental seminars and academic events",
      "Faculty-level student support",
    ],
    phone: "+88 041 7698461-105",
    email: "deans@kkjstu.ac.bd",
    office: "Faculty Offices, Academic Building",
  },
]

export function getOfficeProfile(slug: string) {
  return OFFICE_PROFILES.find((profile) => profile.slug === slug)
}

// Directory shown on /administration/offices. Entries without an
// `href` have no dedicated page yet.
export const ADMIN_DIRECTORY = [
  {
    title: "Office of the Chancellor",
    description: "Constitutional head of the university, presiding over convocation and conferring degrees.",
    icon: "Landmark",
    href: "/administration/chancellor",
  },
  {
    title: "Office of the Vice-Chancellor",
    description: "Principal academic and executive office leading institutional direction and policy.",
    icon: "Users",
    href: "/administration/vice-chancellor",
  },
  {
    title: "Office of the Pro Vice-Chancellor",
    description: "Supports academic advancement, research initiatives and strategic development.",
    icon: "GraduationCap",
    href: "/administration/pro-vice-chancellor",
  },
  {
    title: "Office of the Treasurer",
    description: "Financial planning, budgeting, audit and accountability across the university.",
    icon: "ShieldCheck",
    href: "/administration/treasurer",
  },
  {
    title: "Office of the Registrar",
    description: "Official records, enrolment administration, certificates and institutional correspondence.",
    icon: "ClipboardList",
    href: "/administration/registrar",
  },
  {
    title: "Controller of Examinations",
    description: "Examination administration, result publication and assessment integrity.",
    icon: "Briefcase",
    href: "/administration/controller-of-examinations",
  },
  {
    title: "Deans & Departmental Heads",
    description: "Faculty-level academic leadership, curriculum delivery and student progression.",
    icon: "Building2",
    href: "/administration/deans-heads",
  },
  {
    title: "Library",
    description: "Books, journals, digital resources and study spaces supporting academic work.",
    icon: "Library",
    href: "/library",
  },
  {
    title: "Transport Office",
    description: "University transport services, routes and schedules for students and staff.",
    icon: "Bus",
    href: "/transport",
  },
  {
    title: "Finance & Accounts",
    description: "Fee collection, payments, payroll and day-to-day financial operations.",
    icon: "Wallet",
  },
  {
    title: "ICT Cell",
    description: "Campus network, university systems, portals and technical support.",
    icon: "Cpu",
  },
  {
    title: "Student Affairs",
    description: "Student welfare, clubs, counselling and co-curricular coordination.",
    icon: "Handshake",
  },
]
