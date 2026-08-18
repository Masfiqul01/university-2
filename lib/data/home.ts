// Home page (/) data — edit or add items here.
// The home page composes components; this file collects the copy, links and
// image URLs those components currently hardcode.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

// ---------------------------------------------------------------------------
// Global background pattern (app/page.tsx)
// ---------------------------------------------------------------------------
export const HOME_BACKGROUND = {
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  gridColor: "rgba(11,7,84,0.06)",
  gridSize: "140px 140px",
}

// ---------------------------------------------------------------------------
// Hero (components/hero.tsx)
// ---------------------------------------------------------------------------
export const HOME_HERO = {
  image: "/images/hero-campus.png",
  imageAlt: "Aerial view of the KACST campus",
  eyebrow: "Khulna, Bangladesh",
  title: "Excellence in Science & Technology",
  description:
    "KACST is committed to developing competent professionals and ethical leaders through quality education, research and innovation in an inspiring environment.",
  primary: { label: "Explore Our Campus", href: "/campus-life" },
  secondary: { label: "Learn More About KACST", href: "/about" },
}

export const HERO_SIDE_LINKS = [
  { label: "Virtual Tour", icon: "Compass", href: "/campus-life" },
  { label: "Apply Now", icon: "GraduationCap", href: "/admissions/apply" },
  { label: "Student Portal", icon: "UserRound", href: "/student-portal" },
  { label: "Research", icon: "FlaskConical", href: "/research" },
]

// ---------------------------------------------------------------------------
// Stats bar (components/stats-bar.tsx)
// Editable placeholder figures — replace with official KACST data.
// ---------------------------------------------------------------------------
export const HOME_STATS_BAR = [
  { icon: "Building2", value: "5+", label: "Faculties" },
  { icon: "BookOpen", value: "20+", label: "Programs" },
  { icon: "Users", value: "Growing", label: "Student Body" },
  { icon: "GraduationCap", value: "Dedicated", label: "Faculty Members" },
  { icon: "FlaskConical", value: "Modern", label: "Research Labs" },
  { icon: "Trees", value: "Beautiful", label: "Green Campus" },
]

// ---------------------------------------------------------------------------
// Trust stats / At a Glance (components/TrustStats.tsx)
// Counts come from FACULTIES / PROGRAMS / RESEARCH_AREAS in lib/data.ts.
// ---------------------------------------------------------------------------
export const TRUST_STATS_INTRO = {
  eyebrow: "At a Glance",
  title: "A growing academic community",
  description:
    "Discover the academic strength, people, programs and research focus that define Khanjahan Ali College of Science & Technology.",
  logo: "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606084/logokacst_loyhwz.webp",
}

export const TRUST_STATS = [
  {
    id: "faculties",
    label: "Academic Faculties",
    subtext: "Across multiple disciplines",
    icon: "Building2",
    source: "FACULTIES.length",
  },
  {
    id: "programs",
    label: "Academic Programs",
    subtext: "Undergraduate & postgraduate",
    icon: "GraduationCap",
    source: "PROGRAMS.length",
  },
  {
    id: "faculty-members",
    label: "Faculty Members",
    value: "37+",
    subtext: "Academics & researchers",
    icon: "Users",
  },
  {
    id: "research",
    label: "Research Areas",
    subtext: "Innovation & research focus",
    icon: "FlaskConical",
    source: "RESEARCH_AREAS.length",
  },
]

// ---------------------------------------------------------------------------
// Admissions banner (components/admissions-banner.tsx)
// ---------------------------------------------------------------------------
export const ADMISSIONS_BANNER = {
  image:
    "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp",
  imageAlt: "Khanjahan Ali College of Science and Technology campus",
  status: "Admissions Now Open",
  titleLines: ["Your journey to", "a brighter future begins here."],
  description:
    "Applications are now open for the upcoming academic session. Discover a learning environment where knowledge, innovation, research, and opportunity come together.",
  primary: { label: "Apply Now", href: "/admissions/apply" },
  secondary: { label: "Explore Admissions", href: "/admissions" },
  trustPoints: [
    "Quality Education",
    "Research Opportunities",
    "Vibrant Campus Life",
  ],
  sealText: "• ADMISSIONS OPEN • APPLY NOW •",
}

// ---------------------------------------------------------------------------
// Programs section (components/ProgramsSection.tsx)
// The program cards themselves come from PROGRAMS in lib/data.ts.
// ---------------------------------------------------------------------------
export const PROGRAMS_SECTION_INTRO = {
  eyebrow: "Academic Offerings",
  title: "Academic Programs",
  description:
    "Explore undergraduate and postgraduate programs available across the university's academic faculties.",
  filters: [
    { id: "all", label: "All Programs" },
    { id: "undergraduate", label: "Undergraduate" },
    { id: "postgraduate", label: "Postgraduate" },
  ],
  cardLabels: {
    faculty: "Faculty",
    details: "View Details",
    apply: "Apply Now",
  },
  emptyState: {
    title: "No Programs Found",
    description: "No academic programs are available for this category.",
  },
}

export const PROGRAM_APPLICATION_STEPS = [
  { number: 1, title: "Personal Info", description: "Tell us about yourself" },
  { number: 2, title: "Academic Grades", description: "Share your results" },
  {
    number: 3,
    title: "Program & Submission",
    description: "Choose a program and submit",
  },
]

export const PROGRAM_APPLICATION_MODAL = {
  title: "Admissions application",
  successTitle: "Application submitted",
  successText:
    "Thank you for applying. Our admissions team will review your application.",
  closeLabel: "Close",
  backLabel: "Back",
  nextLabel: "Next step",
  submitLabel: "Submit application",
  programPlaceholder: "Select a program",
  intakePlaceholder: "Select an intake",
  intakes: [
    { value: "spring-2026", label: "Spring 2026" },
    { value: "fall-2026", label: "Fall 2026" },
  ],
}

// ---------------------------------------------------------------------------
// Why choose us (components/WhyChooseUs.tsx)
// `icon` here refers to the inline SVG components defined in that file.
// ---------------------------------------------------------------------------
export const WHY_CHOOSE_US_INTRO = {
  eyebrow: "Why choose us",
  titleLines: ["An education", "built for more."],
  description:
    "More than a place to earn a degree. We provide the knowledge, people, opportunities, and perspective you need to turn your ambitions into a meaningful future.",
  featureEyebrow: "The difference",
  featureTitleLines: ["Where ambition meets", "opportunity."],
  featureDescription:
    "Every part of the university experience is designed to help you learn with purpose, discover your strengths, and move confidently toward what's next.",
  metricTitle: "Designed for progress",
  metricSubtitle: "From classroom to career",
  link: { label: "Discover our university", href: "/about" },
  cardLinkLabel: "Explore",
}

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Academic Excellence",
    label: "EXCELLENCE",
    description:
      "A rigorous academic environment built around meaningful learning, relevant programs, and high standards.",
    icon: "AcademicIcon",
  },
  {
    number: "02",
    title: "Experienced Faculty",
    label: "FACULTY",
    description:
      "Learn from accomplished educators and professionals who bring knowledge, mentorship, and real-world insight.",
    icon: "FacultyIcon",
  },
  {
    number: "03",
    title: "Modern Learning",
    label: "LEARNING",
    description:
      "Technology-enabled classrooms, digital resources, and practical learning designed for today's students.",
    icon: "LearningIcon",
  },
  {
    number: "04",
    title: "Career Opportunities",
    label: "CAREERS",
    description:
      "Develop career-ready skills through practical experience, industry connections, internships, and guidance.",
    icon: "CareerIcon",
  },
  {
    number: "05",
    title: "Global Exposure",
    label: "GLOBAL",
    description:
      "Expand your perspective through international connections, diverse communities, and global opportunities.",
    icon: "GlobalIcon",
  },
]

// ---------------------------------------------------------------------------
// Final CTA (components/BeginYourJourney.tsx)
// ---------------------------------------------------------------------------
export const BEGIN_YOUR_JOURNEY = {
  titleLines: ["Begin your journey.", "Shape the future."],
  primary: { label: "Start Your Application", href: "/admissions/apply" },
  secondary: { label: "Explore Programs", href: "/academics/programs" },
}
