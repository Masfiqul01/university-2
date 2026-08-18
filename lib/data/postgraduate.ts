// Postgraduate Admissions page (/admissions/postgraduate) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const POSTGRADUATE_HERO = {
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90",
  imageAlt: "Postgraduate research laboratory",
  eyebrow: "Admissions / Postgraduate",
  titleLines: ["Advance Your", "Expertise."],
  description:
    "Build advanced knowledge, develop research capability and prepare for meaningful academic and professional opportunities through postgraduate study at KKJSTU.",
  primary: { label: "Explore Programs", href: "#programs" },
  secondary: { label: "Find a Supervisor", href: "#supervisors" },
}

export const QUICK_FACTS = [
  {
    title: "Research Orientation",
    description: "Build advanced academic and research capability.",
    icon: "Microscope",
  },
  {
    title: "Supervisor Matching",
    description: "Connect your interests with relevant academic expertise.",
    icon: "Users",
  },
  {
    title: "Thesis & Projects",
    description: "Choose pathways aligned with your academic goals.",
    icon: "FileText",
  },
  {
    title: "Career Advancement",
    description: "Develop expertise for academic and professional careers.",
    icon: "Award",
  },
]

export const POSTGRADUATE_INTRO = {
  eyebrow: "Postgraduate Study",
  titleLines: ["Research With", "Purpose"],
  paragraphs: [
    "Postgraduate study at KKJSTU is designed for students who want to move beyond foundational knowledge and develop deeper academic, analytical and research capabilities.",
    "Depending on the program, students may pursue advanced coursework, thesis research, applied projects or doctoral research under appropriate academic supervision.",
  ],
  tags: [
    "Advanced Learning",
    "Research Skills",
    "Academic Mentoring",
    "Professional Growth",
  ],
}

export const DEGREE_TYPES_INTRO = {
  eyebrow: "Degree Types",
  title: "Choose the Right Postgraduate Path",
  description:
    "Explore advanced study options and choose a pathway that matches your academic interests and future goals.",
  badgeLabel: "Postgraduate",
  cardLink: { label: "Explore Program", href: "/academics/programs" },
}

export const DEGREE_TYPES = [
  {
    title: "Master's Programs",
    description:
      "Advance your academic knowledge through structured coursework, research and applied learning.",
    duration: "1–2 Years",
    credit: "Program Based",
    thesis: "Thesis / Project Options",
    intake: "According to Official Notice",
    icon: "GraduationCap",
  },
  {
    title: "M.Phil. / Research Programs",
    description:
      "Develop advanced research capability through focused study and supervised scholarly work.",
    duration: "Program Based",
    credit: "Program Based",
    thesis: "Research Required",
    intake: "According to Official Notice",
    icon: "Microscope",
  },
  {
    title: "Doctoral Programs",
    description:
      "Pursue original research and contribute new knowledge within your chosen academic field.",
    duration: "Program Based",
    credit: "Program Based",
    thesis: "Dissertation Required",
    intake: "According to Official Notice",
    icon: "FlaskConical",
  },
]

export const RESEARCH_AREAS_INTRO = {
  eyebrow: "Research Areas",
  title: "Explore Where Your Research Can Lead",
  description:
    "Connect your postgraduate journey with research themes that address academic, technological, environmental and social challenges.",
}

export const RESEARCH_AREAS = [
  {
    title: "AI & Data Science",
    description:
      "Explore intelligent systems, data-driven methods, computation and emerging technologies.",
    icon: "Network",
  },
  {
    title: "Engineering",
    description:
      "Advance technical knowledge through applied engineering research and innovation.",
    icon: "Briefcase",
  },
  {
    title: "Biotechnology",
    description:
      "Investigate biological systems, laboratory methods and technology-driven solutions.",
    icon: "FlaskConical",
  },
  {
    title: "Environment",
    description:
      "Address environmental challenges through research, sustainability and evidence-based solutions.",
    icon: "Sparkles",
  },
  {
    title: "Mathematics",
    description:
      "Develop analytical approaches and mathematical methods for academic and practical problems.",
    icon: "BookOpen",
  },
  {
    title: "Social & Business Innovation",
    description:
      "Connect research with organizational, social and economic challenges facing communities.",
    icon: "Users",
  },
]

export const SUPERVISOR_INTRO = {
  eyebrow: "Supervisor Matching",
  titleLines: ["Find the Right", "Academic Guidance"],
  description:
    "Finding appropriate academic guidance is an important part of postgraduate research. Explore relevant expertise and research interests before contacting a potential supervisor.",
  link: { label: "Find a Supervisor", href: "/research" },
  cardLink: { label: "View Researchers", href: "/research" },
}

export const SUPERVISOR_AREAS = [
  {
    name: "Engineering & Technology",
    description:
      "Find academic expertise aligned with engineering, computing and technology-focused research.",
    icon: "Briefcase",
  },
  {
    name: "Science & Biotechnology",
    description:
      "Explore research supervision related to laboratory, biological and scientific disciplines.",
    icon: "Microscope",
  },
  {
    name: "Mathematics & Analytics",
    description:
      "Connect with research interests involving mathematics, analytics and computational methods.",
    icon: "BookOpen",
  },
  {
    name: "Business & Social Innovation",
    description:
      "Explore supervision opportunities across business, management and social innovation.",
    icon: "Users",
  },
]

export const APPLICATION_PROCESS_INTRO = {
  eyebrow: "Application Process",
  title: "From Interest to Enrollment",
  description:
    "Follow the key stages of a postgraduate application. Always confirm program-specific requirements and deadlines in the latest official admission notice.",
}

export const APPLICATION_STEPS = [
  {
    number: "01",
    title: "Explore Your Program",
    description:
      "Review available postgraduate programs, research areas, entry requirements and study options.",
  },
  {
    number: "02",
    title: "Identify a Research Direction",
    description:
      "Consider your academic interests and research goals before selecting a thesis or project pathway.",
  },
  {
    number: "03",
    title: "Find a Supervisor",
    description:
      "Review relevant academic expertise and identify a potential supervisor where required.",
  },
  {
    number: "04",
    title: "Prepare Your Documents",
    description:
      "Collect academic records, certificates, identification and other documents required by the program.",
  },
  {
    number: "05",
    title: "Submit Your Application",
    description:
      "Complete the application according to the official admission instructions and track the next steps.",
  },
]

export const ENTRY_REQUIREMENTS = {
  title: "Entry Requirements",
  description:
    "Admission requirements depend on the degree, department and program. Applicants should check the current official requirements before submitting an application.",
  points: [
    "Recognized previous academic qualification",
    "Program-specific academic prerequisites",
    "Required language or academic prerequisites",
    "Supporting academic documents",
    "Additional requirements where applicable",
  ],
  link: { label: "Check Requirements", href: "/admissions/requirements" },
}

export const PREPARE_DOCUMENTS = {
  title: "Prepare Your Documents",
  description:
    "Prepare your academic and supporting documents before beginning the application process.",
  points: [
    "Academic transcripts and certificates",
    "National identification / passport where applicable",
    "Recent photographs where required",
    "Research proposal or statement where applicable",
    "Additional program-specific documents",
  ],
  link: { label: "Download Checklist", href: "/admissions/requirements" },
}

export const FUNDING_INTRO = {
  eyebrow: "Funding & Opportunities",
  titleLines: ["Invest in Your", "Academic Future"],
  description:
    "Explore available scholarship, funding and research opportunities according to your program and current university announcements.",
  link: { label: "Explore Funding Opportunities", href: "/notice-board" },
}

export const FUNDING_OPTIONS = [
  {
    title: "Scholarships",
    description:
      "Review available scholarship opportunities and eligibility conditions.",
    icon: "Award",
  },
  {
    title: "Research Funding",
    description:
      "Look for project-based and research-related funding opportunities.",
    icon: "FlaskConical",
  },
  {
    title: "Assistantships",
    description:
      "Check whether relevant academic or research assistant opportunities are available.",
    icon: "Users",
  },
  {
    title: "Official Notices",
    description:
      "Follow current announcements for funding and admission deadlines.",
    icon: "FileText",
  },
]

export const POSTGRADUATE_DEADLINE = {
  icon: "Clock3",
  title: "Important Admission Deadline",
  description:
    "Postgraduate application deadlines vary by program and intake. Please refer to the latest official admission notice for the confirmed date.",
  link: { label: "View Admission Notices", href: "/notice-board" },
}

export const FUNDING_FAQ_INTRO = {
  eyebrow: "Funding & Application FAQ",
  title: "Frequently Asked Questions",
}

export const FUNDING_FAQS = [
  {
    question: "Are postgraduate scholarships available?",
    answer:
      "Funding and scholarship opportunities may vary by program, intake and official university notice. Applicants should review current funding announcements before applying.",
  },
  {
    question: "Can postgraduate students receive research funding?",
    answer:
      "Research funding opportunities may be available through specific projects, centers or institutional initiatives. Availability should be confirmed with the relevant academic office.",
  },
  {
    question: "Is a thesis required for every postgraduate program?",
    answer:
      "Thesis requirements depend on the specific degree and program structure. Applicants should review the official program requirements before selecting a study pathway.",
  },
  {
    question: "When should I apply?",
    answer:
      "Application deadlines vary by program and intake. Always check the latest official admission notice for the current deadline.",
  },
]

export const POSTGRADUATE_CTA = {
  eyebrow: "POSTGRADUATE ADMISSIONS",
  titleLines: ["Advance Your Expertise.", "Shape Your Future."],
  description:
    "Take the next step toward advanced knowledge, meaningful research and new academic opportunities at KKJSTU.",
  links: [
    { label: "Find a Supervisor", href: "#supervisors" },
    { label: "Explore Research", href: "#research" },
    { label: "Apply Now", href: "/admissions/apply" },
  ],
}
