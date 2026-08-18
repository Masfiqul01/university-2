// Publications page (/research/publications) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const PUBLICATIONS_HERO = {
  eyebrow: "Research / Publications",
  titleLines: ["Discover Research,", "Ideas & Knowledge"],
  description:
    "Explore research publications, scholarly work and academic contributions from the KKJSTU research community.",
  primary: { label: "Search Publications", href: "#publications" },
  secondary: { label: "Download Research Report", href: "#report" },
}

export const PUBLICATIONS_INTRO = {
  eyebrow: "Research Knowledge",
  title: "Publications at KKJSTU",
  description:
    "Browse scholarly publications by year, department, research area and publication type. The directory is designed to make research outputs easier to discover and explore.",
  stats: [
    { value: "06", label: "Publications" },
    { value: "06", label: "Research Areas" },
    { value: "03", label: "Years" },
  ],
}

export const FEATURED_PUBLICATIONS_INTRO = {
  eyebrow: "Featured Publications",
  title: "Selected Research Contributions",
  description:
    "A selection of research publications representing different academic disciplines and areas of inquiry.",
  cardLinkLabel: "View",
}

export const PUBLICATIONS = [
  {
    title: "Data-Driven Approaches for Sustainable Development",
    authors: "Dr. A. Rahman, M. Hasan, S. Ahmed",
    year: "2025",
    department: "Computer Science & Engineering",
    type: "Journal Article",
    area: "AI & Data Science",
    journal: "International Journal of Applied Computing",
    doi: "10.0000/kkjstu.2025.001",
    abstract:
      "This study explores data-driven methods for identifying practical approaches to sustainable development and evidence-based decision making.",
  },
  {
    title: "Smart Engineering Solutions for Modern Infrastructure",
    authors: "Dr. M. Karim, T. Islam",
    year: "2025",
    department: "Engineering",
    type: "Conference Paper",
    area: "Engineering",
    journal: "International Engineering Conference",
    doi: "10.0000/kkjstu.2025.002",
    abstract:
      "The research investigates innovative engineering approaches designed to improve infrastructure efficiency, resilience and sustainability.",
  },
  {
    title: "Environmental Monitoring and Sustainable Resource Management",
    authors: "N. Sultana, Dr. F. Hossain",
    year: "2024",
    department: "Environmental Science",
    type: "Journal Article",
    area: "Environment",
    journal: "Journal of Environmental Research",
    doi: "10.0000/kkjstu.2024.003",
    abstract:
      "A research framework for environmental monitoring and responsible resource management with a focus on sustainable development.",
  },
  {
    title: "Mathematical Modelling for Complex Systems",
    authors: "Dr. R. Ahmed, M. Chowdhury",
    year: "2024",
    department: "Mathematics",
    type: "Research Article",
    area: "Mathematics",
    journal: "Applied Mathematical Studies",
    doi: "10.0000/kkjstu.2024.004",
    abstract:
      "This publication presents mathematical modelling techniques for analysing complex systems and improving predictive understanding.",
  },
  {
    title: "Innovation and Entrepreneurship in Emerging Economies",
    authors: "Dr. S. Islam, F. Kabir",
    year: "2023",
    department: "Business Administration",
    type: "Journal Article",
    area: "Social & Business Innovation",
    journal: "Business & Innovation Review",
    doi: "10.0000/kkjstu.2023.005",
    abstract:
      "The paper examines innovation, entrepreneurship and institutional factors influencing emerging business ecosystems.",
  },
  {
    title: "Biotechnology Applications in Sustainable Agriculture",
    authors: "Dr. T. Akter, M. Rahman",
    year: "2023",
    department: "Biotechnology",
    type: "Research Article",
    area: "Biotechnology",
    journal: "Asian Biotechnology Research",
    doi: "10.0000/kkjstu.2023.006",
    abstract:
      "An overview of biotechnology-based approaches that can support sustainable agricultural practices and resource efficiency.",
  },
]

export const PUBLICATION_YEARS = ["All Years", "2025", "2024", "2023"]

export const PUBLICATION_DEPARTMENTS = [
  "All Departments",
  "Computer Science & Engineering",
  "Engineering",
  "Environmental Science",
  "Mathematics",
  "Business Administration",
  "Biotechnology",
]

export const PUBLICATION_TYPES = [
  "All Types",
  "Journal Article",
  "Conference Paper",
  "Research Article",
]

export const PUBLICATION_AREAS = [
  "All Research Areas",
  "AI & Data Science",
  "Engineering",
  "Environment",
  "Mathematics",
  "Social & Business Innovation",
  "Biotechnology",
]

export const PUBLICATION_DIRECTORY = {
  eyebrow: "Publication Directory",
  title: "Search Research Publications",
  filterTitle: "Filter Publications",
  filterDescription: "Refine results by academic criteria.",
  searchPlaceholder: "Search title or author",
  filterLabels: ["Year", "Department", "Type", "Research Area"],
  applyLabel: "Apply Filters",
  tableHeaders: [
    "Publication",
    "Author / Department",
    "Type",
    "Year",
    "DOI",
    "Link",
  ],
  mobileLabels: {
    department: "Department",
    journal: "Journal / Conference",
    doi: "DOI",
    link: "View Publication",
  },
}

export const PUBLICATIONS_HELP = {
  icon: "FileText",
  title: "Explore Research in Detail",
  description:
    "Each publication provides information about its authors, department, research area, publication venue and DOI. Use the directory to identify research relevant to your academic or professional interests.",
  points: [
    "Search by research area",
    "Browse by academic year",
    "Explore department outputs",
    "Find publication links",
  ],
}

export const RESEARCH_REPORT = {
  icon: "CalendarDays",
  eyebrow: "Annual Research Report",
  title: "Research at a Glance",
  description:
    "Download the annual research report to explore institutional research activities, publications, projects and broader research contributions.",
  link: { label: "Download Research Report", href: "/research/publications" },
}

export const SUBMIT_PUBLICATION = {
  eyebrow: "Research Community",
  title: "Have a Publication to Share?",
  description:
    "Help build the university's research knowledge base by submitting your latest scholarly publication for inclusion in the research directory.",
  link: { label: "Submit a Publication", href: "/contact" },
}

export const PUBLICATIONS_CTA = {
  icon: "BookOpen",
  eyebrow: "RESEARCH & PUBLICATIONS",
  titleLines: ["Discover Knowledge.", "Shape the Future."],
  description:
    "Explore the research, publications and academic ideas shaping the future of KKJSTU and its wider community.",
  links: [
    { label: "Search Publications", href: "#publications" },
    { label: "Download Research Report", href: "#report" },
    { label: "Submit a Publication", href: "/contact" },
  ],
}
