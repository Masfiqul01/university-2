// Research pages (/research, /research/centers, /research/publications) data — edit or add items here.
// Extends `RESEARCH_AREAS` and `FACULTY_MEMBERS` from the root lib/data.ts — do not duplicate those here.

import { FACULTY_MEMBERS } from "@/lib/data"

function leadBy(email: string) {
  return FACULTY_MEMBERS.find((m) => m.email === email) ?? FACULTY_MEMBERS[0]
}

// Editable placeholder figures — replace with official KACST research office data.
export const RESEARCH_STATS = [
  { icon: "FlaskConical", value: "6", label: "Research Centers" },
  { icon: "BookOpen", value: "40+", label: "Publications" },
  { icon: "ClipboardList", value: "15+", label: "Ongoing Projects" },
  { icon: "Handshake", value: "12+", label: "Partner Organizations" },
]

// `areaTitle` matches a `title` in RESEARCH_AREAS (lib/data.ts) — used to pair
// the two on /research and /research/centers.
export const RESEARCH_CENTERS = [
  {
    slug: "ai-data-science",
    name: "Center for Artificial Intelligence & Data Science",
    areaTitle: "Artificial Intelligence & Data Science",
    icon: "Cpu",
    description:
      "Brings together faculty and student researchers working on machine learning, computer vision, and intelligent systems that solve real-world problems — from agricultural forecasting to Bangla language processing. The center maintains a dedicated computing lab and partners with regional industry on applied data projects.",
    focusAreas: [
      "Machine learning and deep learning systems",
      "Computer vision and pattern recognition",
      "Natural language processing for Bangla and English",
      "Big data analytics and decision support",
    ],
    lead: leadBy("a.rahman@kacst.edu.bd"),
  },
  {
    slug: "renewable-energy",
    name: "Center for Renewable Energy & Sustainability",
    areaTitle: "Renewable Energy & Sustainability",
    icon: "Zap",
    description:
      "Studies Bangladesh's transition to clean energy through solar and grid technologies, energy-efficient systems, and environmental engineering suited to coastal and rural communities. Researchers collaborate with utilities and local government on pilot renewable-energy installations.",
    focusAreas: [
      "Solar photovoltaic systems and micro-grids",
      "Smart grid design and load forecasting",
      "Energy-efficient building and industrial systems",
      "Environmental impact and sustainability engineering",
    ],
    lead: leadBy("r.karim@kacst.edu.bd"),
  },
  {
    slug: "biotechnology-public-health",
    name: "Center for Biotechnology & Public Health",
    areaTitle: "Biotechnology & Public Health",
    icon: "Dna",
    description:
      "Advances health and biotechnology research addressing regional priorities such as infectious disease, food safety, and applied microbiology. Laboratory research is paired with community health studies across the greater Khulna region.",
    focusAreas: [
      "Applied and molecular microbiology",
      "Public health and epidemiology",
      "Food and water safety biotechnology",
      "Recombinant DNA and biomedical research",
    ],
    lead: leadBy("j.begum@kacst.edu.bd"),
  },
  {
    slug: "materials-nanotechnology",
    name: "Center for Materials & Nanotechnology",
    areaTitle: "Materials & Nanotechnology",
    icon: "Atom",
    description:
      "Explores advanced materials, nanoscale structures, and applied physics with applications in energy, water treatment, and electronics. The center houses characterization equipment shared across the Faculty of Science.",
    focusAreas: [
      "Nanomaterial synthesis and characterization",
      "Thin-film and semiconductor physics",
      "Materials for water purification",
      "Applied and computational physics",
    ],
    lead: leadBy("f.sultana@kacst.edu.bd"),
  },
  {
    slug: "water-resources-environment",
    name: "Center for Water Resources & Environment",
    areaTitle: "Water Resources & Environment",
    icon: "Droplets",
    description:
      "Given the university's proximity to the Sundarbans and Bangladesh's coastal belt, this center studies climate resilience, salinity intrusion, and sustainable water management to support vulnerable communities and ecosystems.",
    focusAreas: [
      "Coastal salinity and groundwater studies",
      "Climate change adaptation and resilience",
      "Sundarbans ecosystem and biodiversity research",
      "Integrated water resource management",
    ],
    lead: leadBy("t.islam@kacst.edu.bd"),
  },
  {
    slug: "business-analytics-innovation",
    name: "Center for Business Analytics & Innovation",
    areaTitle: "Business Analytics & Innovation",
    icon: "TrendingUp",
    description:
      "Studies the economics of digital transformation, entrepreneurship, and data-driven decision-making for organizations across Bangladesh, connecting classroom research with regional SMEs and startups.",
    focusAreas: [
      "Business and economic data analytics",
      "Entrepreneurship and innovation studies",
      "Digital transformation strategy",
      "Regional economic development",
    ],
    lead: leadBy("m.hasan@kacst.edu.bd"),
  },
]

export type Publication = {
  title: string
  authors: string
  venue: string
  year: number
  area: string
}

// `area` matches a `title` in RESEARCH_AREAS (lib/data.ts).
export const PUBLICATIONS: Publication[] = [
  {
    title: "Deep Learning Approaches for Bengali Handwritten Character Recognition",
    authors: "Dr. A. Rahman, Dr. R. Karim",
    venue: "International Journal of Computational Intelligence & Applications",
    year: 2025,
    area: "Artificial Intelligence & Data Science",
  },
  {
    title: "A Comparative Study of Machine Learning Models for Crop Yield Prediction in Coastal Bangladesh",
    authors: "Dr. R. Karim, Dr. S. Akter",
    venue: "Journal of Data Science & Analytics",
    year: 2024,
    area: "Artificial Intelligence & Data Science",
  },
  {
    title: "Performance Optimization of Grid-Connected Solar PV Systems in Southern Bangladesh",
    authors: "Dr. R. Karim, Dr. A. Rahman",
    venue: "Renewable Energy Systems Review",
    year: 2024,
    area: "Renewable Energy & Sustainability",
  },
  {
    title: "Smart Grid Load Forecasting Using Hybrid Statistical Models",
    authors: "Dr. A. Rahman",
    venue: "Journal of Energy & Environmental Engineering",
    year: 2023,
    area: "Renewable Energy & Sustainability",
  },
  {
    title: "Antimicrobial Resistance Patterns Among Clinical Isolates in the Khulna Region",
    authors: "Dr. J. Begum, Dr. T. Islam",
    venue: "Bangladesh Journal of Microbiology & Public Health",
    year: 2025,
    area: "Biotechnology & Public Health",
  },
  {
    title: "Applications of Recombinant DNA Technology in Sustainable Aquaculture",
    authors: "Dr. J. Begum",
    venue: "Journal of Applied Biotechnology",
    year: 2023,
    area: "Biotechnology & Public Health",
  },
  {
    title: "Synthesis and Characterization of Zinc Oxide Nanoparticles for Water Purification",
    authors: "Dr. F. Sultana, Dr. S. Akter",
    venue: "International Journal of Materials Science & Nanotechnology",
    year: 2024,
    area: "Materials & Nanotechnology",
  },
  {
    title: "Structural and Optical Properties of Thin-Film Semiconductors for Solar Applications",
    authors: "Dr. F. Sultana",
    venue: "Journal of Applied Physics & Materials",
    year: 2022,
    area: "Materials & Nanotechnology",
  },
  {
    title: "Salinity Intrusion and Groundwater Quality Assessment in the Khulna Coastal Belt",
    authors: "Dr. T. Islam, Dr. J. Begum",
    venue: "Journal of Water Resources & Climate Resilience",
    year: 2025,
    area: "Water Resources & Environment",
  },
  {
    title: "Climate-Resilient Water Management Strategies for the Sundarbans Ecosystem",
    authors: "Dr. T. Islam",
    venue: "Environmental Science & Policy Review",
    year: 2023,
    area: "Water Resources & Environment",
  },
  {
    title: "Digital Transformation and SME Growth: Evidence from Southern Bangladesh",
    authors: "Dr. M. Hasan, Dr. N. Chowdhury",
    venue: "Journal of Business Analytics & Innovation",
    year: 2024,
    area: "Business Analytics & Innovation",
  },
  {
    title: "Entrepreneurial Intention Among University Students: A Data-Driven Analysis",
    authors: "Dr. M. Hasan, Dr. K. Ahmed",
    venue: "South Asian Journal of Management Studies",
    year: 2022,
    area: "Business Analytics & Innovation",
  },
]
