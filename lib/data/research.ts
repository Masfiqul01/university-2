// Research page (/research) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const RESEARCH_HERO = {
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90",
  imageAlt: "University laboratory research",
  eyebrow: "Research at KKJSTU",
  titleLines: ["Research That", "Creates Possibilities."],
  description:
    "Advancing knowledge, encouraging innovation and connecting research with the challenges and opportunities of society.",
  primary: { label: "Explore Research", href: "#research-areas" },
  secondary: { label: "Collaborate With Us", href: "#collaborate" },
}

export const RESEARCH_INTRO = {
  eyebrow: "Research at a Glance",
  titleLines: ["Knowledge With", "Purpose"],
  paragraphs: [
    "Research at KKJSTU brings together academic curiosity, practical problem-solving and a commitment to creating meaningful knowledge.",
    "Researchers, faculty members and students can contribute to interdisciplinary work across science, engineering, technology, environment, mathematics and social and business innovation.",
  ],
  tags: ["Interdisciplinary Research", "Applied Innovation", "Global Collaboration"],
}

export const RESEARCH_STATS = [
  { value: "06+", label: "Research Focus Areas", icon: "Beaker" },
  { value: "20+", label: "Active Research Themes", icon: "Waypoints" },
  { value: "50+", label: "Research & Academic Projects", icon: "FlaskConical" },
  { value: "10+", label: "Collaboration Opportunities", icon: "Globe2" },
]

export const RESEARCH_AREAS_INTRO = {
  eyebrow: "Research Focus Areas",
  title: "Exploring Questions That Matter",
  description:
    "Research themes can evolve as new academic strengths, collaborations and societal challenges emerge.",
}

export const RESEARCH_AREAS = [
  {
    title: "AI & Data Science",
    description:
      "Exploring intelligent systems, data-driven methods and emerging technologies that can address complex real-world challenges.",
    icon: "BrainCircuit",
  },
  {
    title: "Engineering",
    description:
      "Applied engineering research focused on practical innovation, technology development and solutions for industry and society.",
    icon: "Network",
  },
  {
    title: "Biotechnology",
    description:
      "Research into biological systems, laboratory methods and emerging applications with potential academic and societal value.",
    icon: "Microscope",
  },
  {
    title: "Environment",
    description:
      "Investigating environmental challenges, sustainability and responsible approaches to natural-resource management.",
    icon: "Leaf",
  },
  {
    title: "Mathematics",
    description:
      "Advancing mathematical thinking, modelling and analytical approaches that support science, engineering and technology.",
    icon: "ChartNoAxesCombined",
  },
  {
    title: "Social & Business Innovation",
    description:
      "Research connecting business, society and innovation to understand challenges and create meaningful opportunities.",
    icon: "Users",
  },
]

export const FEATURED_RESEARCH_INTRO = {
  eyebrow: "Featured Research",
  titleLines: ["From Research Questions", "to Real-World Impact"],
  link: { label: "Browse Research", href: "/research/publications" },
  cardLabels: {
    problem: "The Challenge",
    method: "Research Method",
    impact: "Potential Impact",
    researcher: "Responsible Researcher",
  },
}

export const FEATURED_PROJECTS = [
  {
    title: "Intelligent Data & Decision Systems",
    area: "AI & Data Science",
    problem:
      "How can data and intelligent technologies support better decisions in complex environments?",
    method:
      "Applied data analysis, computational modelling and intelligent system development.",
    impact:
      "Building practical knowledge that can support technology-led solutions and future innovation.",
    researcher: "Research Group — AI & Data Science",
    icon: "BrainCircuit",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Sustainable Environmental Solutions",
    area: "Environment",
    problem:
      "How can research contribute to more sustainable communities and responsible environmental practices?",
    method:
      "Field observation, environmental analysis and interdisciplinary research approaches.",
    impact:
      "Supporting evidence-based approaches to sustainability and environmental awareness.",
    researcher: "Research Group — Environmental Studies",
    icon: "Leaf",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Applied Engineering Innovation",
    area: "Engineering",
    problem:
      "How can engineering research translate academic knowledge into useful practical solutions?",
    method:
      "Laboratory experimentation, prototyping and applied engineering analysis.",
    impact:
      "Creating opportunities for practical innovation, student research and industry engagement.",
    researcher: "Research Group — Engineering",
    icon: "Network",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
  },
]

export const RESEARCH_LAB_FEATURE = {
  image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85",
  imageAlt: "University research laboratory",
  overlayEyebrow: "Research Environment",
  overlayTitle: "Connecting curiosity with experimentation and discovery.",
  icon: "Microscope",
  title: "Build, Test & Discover",
  description:
    "Research grows when people have access to the right questions, expertise, tools and collaborative environment. KKJSTU aims to create opportunities for students and researchers to engage with meaningful academic work.",
  items: [
    { title: "Laboratories", icon: "FlaskConical" },
    { title: "Researchers", icon: "Users" },
    { title: "Publications", icon: "BookOpen" },
    { title: "Collaboration", icon: "Network" },
  ],
}

export const RESEARCH_OPPORTUNITIES_INTRO = {
  eyebrow: "Research Opportunities",
  titleLines: ["Connect With", "Research"],
  description:
    "Whether you are a student, academic, industry partner or research organization, discover ways to connect with the university's research ecosystem.",
  link: { label: "Meet Researchers", href: "#collaborate" },
  cardLinkLabel: "Explore",
}

export const RESEARCH_OPPORTUNITIES = [
  {
    title: "Research Centers",
    description:
      "Explore interdisciplinary research environments, laboratories and academic groups working across different areas.",
    icon: "Building2",
  },
  {
    title: "Publications",
    description:
      "Browse research outputs, academic publications and scholarly work from the university community.",
    icon: "BookOpen",
  },
  {
    title: "Researchers",
    description:
      "Connect with academics and research groups whose expertise aligns with your interests and collaboration goals.",
    icon: "Users",
  },
  {
    title: "Research Funding",
    description:
      "Discover opportunities for research support, project development and collaborative funding initiatives.",
    icon: "BarChart3",
  },
]

export const COLLABORATION = {
  eyebrow: "Collaboration",
  titleLines: ["Turn Ideas Into", "Shared Impact"],
  description:
    "Research partnerships can connect academic expertise with industry, communities and institutions to address complex challenges and create new opportunities.",
  tags: [
    "Academic Partnerships",
    "Industry Collaboration",
    "Student Research",
    "Joint Projects",
  ],
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "Researchers collaborating",
  icon: "Network",
}

export const RESEARCH_CTA = {
  icon: "Sparkles",
  eyebrow: "RESEARCH & INNOVATION",
  titleLines: ["Discover What's", "Possible Through Research."],
  description:
    "Explore research centers, publications, researchers and opportunities to collaborate with KKJSTU.",
  links: [
    { label: "View Research Centers", href: "/research/centers" },
    { label: "Browse Publications", href: "/research/publications" },
    { label: "Collaborate With Us", href: "/contact" },
    { label: "Meet Researchers", href: "/research" },
  ],
}
