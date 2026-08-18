// Research Centers page (/research/centers) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const CENTERS_HERO = {
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2200&q=90",
  imageAlt: "University research laboratory",
  eyebrow: "Research Centers",
  titleLines: ["Where Knowledge", "Becomes Impact."],
  description:
    "Discover research centers bringing together researchers, students, facilities and interdisciplinary expertise to address meaningful challenges and create new possibilities.",
  primary: { label: "Explore Research Centers", href: "#centers" },
  secondary: { label: "Collaborate With Us", href: "#collaboration" },
}

export const CENTERS_INTRO = {
  eyebrow: "Research at a Glance",
  titleLines: ["Connecting Ideas,", "People & Possibilities"],
  description:
    "Research centers provide focused environments where academics, students and external partners can work together on complex questions and develop practical solutions.",
  stats: [
    { value: "06", label: "Research Areas" },
    { value: "60+", label: "Researchers" },
    { value: "40+", label: "Projects" },
    { value: "150+", label: "Publications" },
  ],
}

export const CENTER_DIRECTORY_INTRO = {
  eyebrow: "Research Directory",
  title: "Explore Our Research Centers",
  description:
    "Find research communities working across disciplines, technologies and societal challenges.",
  filterLabel: "Filter by Discipline",
  searchPlaceholder: "Search research centers...",
  searchButtonLabel: "Search",
  cardLabels: {
    projects: "Projects",
    publications: "Publications",
    link: "Visit Center",
  },
}

export const DISCIPLINES = [
  "All Disciplines",
  "AI & Data Science",
  "Engineering",
  "Biotechnology",
  "Environment",
  "Mathematics",
  "Social & Business Innovation",
]

export const RESEARCH_CENTERS = [
  {
    id: 1,
    name: "Center for Artificial Intelligence & Data Science",
    shortName: "AI & Data Science",
    discipline: "AI & Data Science",
    mission:
      "Advancing intelligent systems, data-driven research and responsible digital innovation for real-world challenges.",
    themes: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
    ],
    director: "Director, Research Center",
    members: "24 Researchers",
    projects: 8,
    publications: 32,
    location: "Research & Innovation Complex",
    email: "research@kkjstu.ac.bd",
    icon: "Network",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 2,
    name: "Center for Engineering Research & Innovation",
    shortName: "Engineering Research",
    discipline: "Engineering",
    mission:
      "Supporting interdisciplinary engineering research, technological development and practical innovation.",
    themes: ["Smart Engineering", "Robotics", "Energy Systems", "Materials"],
    director: "Director, Engineering Research",
    members: "31 Researchers",
    projects: 11,
    publications: 46,
    location: "Faculty of Engineering",
    email: "engineering.research@kkjstu.ac.bd",
    icon: "FlaskConical",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 3,
    name: "Center for Biotechnology & Life Sciences",
    shortName: "Biotechnology",
    discipline: "Biotechnology",
    mission:
      "Developing research in biotechnology and life sciences to address health, food and environmental challenges.",
    themes: ["Biotechnology", "Molecular Biology", "Food Science", "Bioinnovation"],
    director: "Director, Life Sciences",
    members: "19 Researchers",
    projects: 6,
    publications: 28,
    location: "Science Research Building",
    email: "biotech.research@kkjstu.ac.bd",
    icon: "Microscope",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 4,
    name: "Center for Environment & Sustainable Development",
    shortName: "Environment & Sustainability",
    discipline: "Environment",
    mission:
      "Creating research-based solutions for environmental resilience, climate adaptation and sustainable development.",
    themes: [
      "Climate Change",
      "Environmental Science",
      "Sustainability",
      "Natural Resources",
    ],
    director: "Director, Sustainability Research",
    members: "18 Researchers",
    projects: 7,
    publications: 25,
    location: "Environmental Research Unit",
    email: "environment@kkjstu.ac.bd",
    icon: "Leaf",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 5,
    name: "Center for Mathematical & Computational Research",
    shortName: "Mathematical Research",
    discipline: "Mathematics",
    mission:
      "Promoting mathematical modelling, computational research and analytical methods across disciplines.",
    themes: [
      "Applied Mathematics",
      "Mathematical Modelling",
      "Statistics",
      "Computational Science",
    ],
    director: "Director, Mathematical Research",
    members: "16 Researchers",
    projects: 5,
    publications: 21,
    location: "Mathematics Research Wing",
    email: "math.research@kkjstu.ac.bd",
    icon: "BookOpen",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: 6,
    name: "Center for Social & Business Innovation",
    shortName: "Social & Business Innovation",
    discipline: "Social & Business Innovation",
    mission:
      "Connecting research, business and society to develop evidence-based solutions for inclusive growth.",
    themes: [
      "Business Innovation",
      "Entrepreneurship",
      "Social Development",
      "Policy Research",
    ],
    director: "Director, Innovation Research",
    members: "21 Researchers",
    projects: 9,
    publications: 34,
    location: "Business & Innovation Hub",
    email: "innovation@kkjstu.ac.bd",
    icon: "Globe2",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
]

export const FEATURED_CENTER_LABELS = {
  overlayEyebrow: "Featured Research Center",
  eyebrow: "Center Profile",
  themesTitle: "Research Themes",
  directorLabel: "Director",
  locationLabel: "Location",
  primary: { label: "View Projects", href: "#projects" },
  secondary: { label: "View Publications", href: "/research/publications" },
}

export const PEOPLE_INTRO = {
  eyebrow: "Researchers",
  title: "Meet the Research Community",
  description:
    "Researchers, faculty members and collaborators contribute expertise across disciplines and research themes.",
  link: { label: "Meet Researchers", href: "/research" },
  cardLinkLabel: "View Profile",
}

export const FEATURED_PEOPLE = [
  {
    name: "Research Faculty Member",
    role: "Principal Researcher",
    discipline: "Artificial Intelligence",
  },
  {
    name: "Research Faculty Member",
    role: "Senior Researcher",
    discipline: "Engineering Innovation",
  },
  {
    name: "Research Faculty Member",
    role: "Research Scientist",
    discipline: "Environmental Research",
  },
  {
    name: "Research Faculty Member",
    role: "Associate Researcher",
    discipline: "Biotechnology",
  },
]

export const PROJECT_TIMELINE_INTRO = {
  eyebrow: "Research Journey",
  title: "From Questions to Impact",
  description:
    "Research develops through a connected journey of discovery, experimentation, validation and knowledge sharing.",
}

export const PROJECT_TIMELINE = [
  {
    year: "01",
    title: "Research Challenge",
    description:
      "Identify a meaningful problem and establish a clear research question.",
  },
  {
    year: "02",
    title: "Research & Development",
    description:
      "Develop methods, conduct experiments and collaborate across disciplines.",
  },
  {
    year: "03",
    title: "Validation & Impact",
    description:
      "Evaluate findings and translate research into practical outcomes.",
  },
  {
    year: "04",
    title: "Publication & Partnership",
    description:
      "Share findings and build opportunities for wider collaboration.",
  },
]

export const CENTER_RESOURCES = [
  {
    icon: "BookOpen",
    title: "Publications",
    description:
      "Explore research outputs, academic papers and knowledge generated by the university research community.",
    link: { label: "Browse Publications", href: "/research/publications" },
  },
  {
    icon: "FlaskConical",
    title: "Research Facilities",
    description:
      "Discover laboratories, equipment and research environments supporting interdisciplinary investigation.",
    link: { label: "Explore Facilities", href: "/campus-life/facilities" },
  },
  {
    icon: "CalendarDays",
    title: "Current Projects",
    description:
      "Follow ongoing research projects, themes and opportunities for academic collaboration.",
    link: { label: "View Projects", href: "#projects" },
  },
]

export const CENTERS_CTA = {
  icon: "Network",
  eyebrow: "RESEARCH & COLLABORATION",
  titleLines: ["Research Without", "Boundaries."],
  description:
    "Connect with researchers, explore emerging ideas and discover opportunities to create meaningful knowledge and impact together.",
  links: [
    { label: "View Research Centers", href: "#centers" },
    { label: "Meet Researchers", href: "/research" },
    { label: "Collaborate With Us", href: "/contact" },
  ],
}
