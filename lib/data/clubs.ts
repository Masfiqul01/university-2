// Clubs & Organizations page (/campus-life/clubs) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export type ClubCategory =
  | "Academic"
  | "Cultural"
  | "Technology"
  | "Leadership"
  | "Sports"
  | "Social"

export const CLUBS_HERO = {
  badge: "Student Life",
  title: "Clubs &",
  titleHighlight: "Organizations",
  description:
    "Discover student communities that help you learn beyond the classroom, build meaningful connections, develop leadership skills and turn ideas into action.",
  primary: { label: "Explore Clubs", href: "#clubs" },
  secondary: { label: "Start a Club", href: "/contact" },
}

export const CLUB_STATS = [
  { value: "12+", label: "Active Clubs" },
  { value: "1,000+", label: "Student Members" },
  { value: "6", label: "Major Categories" },
  { value: "50+", label: "Activities / Year" },
]

export const CLUB_CATEGORIES = [
  "All",
  "Academic",
  "Cultural",
  "Technology",
  "Leadership",
  "Sports",
  "Social",
] as const

export const CLUB_LIST_INTRO = {
  eyebrow: "Student Communities",
  title: "Find your community",
  description:
    "Choose a club based on your interests, skills and the kind of student experience you want to build.",
  searchPlaceholder: "Search clubs or interests...",
  filterLabel: "Filter:",
  tagline: "Explore • Connect • Grow",
  cardLabels: {
    members: "Community",
    meeting: "Schedule",
    link: "Explore Club",
    featured: "Featured",
  },
  emptyState: {
    title: "No clubs found",
    description: "Try another keyword or choose a different category.",
    resetLabel: "Reset Filters",
  },
}

export const CLUBS = [
  {
    id: 1,
    name: "Science & Innovation Club",
    shortName: "Science & Innovation",
    category: "Academic" as ClubCategory,
    description:
      "A student-led platform for scientific thinking, innovation, project building, competitions and practical learning.",
    members: "120+ Members",
    meeting: "Every Wednesday",
    icon: "Microscope",
    accent: "#F6B900",
    featured: true,
  },
  {
    id: 2,
    name: "Computer & Technology Club",
    shortName: "Computer & Technology",
    category: "Technology" as ClubCategory,
    description:
      "Explore programming, software development, digital tools, emerging technologies and hands-on technical workshops.",
    members: "95+ Members",
    meeting: "Every Thursday",
    icon: "Laptop2",
    accent: "#FCD34D",
    featured: true,
  },
  {
    id: 3,
    name: "Cultural Club",
    shortName: "Cultural Club",
    category: "Cultural" as ClubCategory,
    description:
      "Celebrating creativity, literature, music, art, performance and the cultural diversity of our student community.",
    members: "150+ Members",
    meeting: "Every Tuesday",
    icon: "Music2",
    accent: "#F8D87D",
    featured: true,
  },
  {
    id: 4,
    name: "Debate & Public Speaking Club",
    shortName: "Debate & Public Speaking",
    category: "Leadership" as ClubCategory,
    description:
      "Develop confidence, communication, critical thinking and leadership through debate and public speaking activities.",
    members: "80+ Members",
    meeting: "Every Monday",
    icon: "Users",
    accent: "#F59E0B",
  },
  {
    id: 5,
    name: "Business & Leadership Club",
    shortName: "Business & Leadership",
    category: "Leadership" as ClubCategory,
    description:
      "Build entrepreneurial thinking, teamwork, presentation skills and practical leadership capabilities.",
    members: "70+ Members",
    meeting: "Twice a Month",
    icon: "Trophy",
    accent: "#FFC928",
  },
  {
    id: 6,
    name: "Photography & Media Club",
    shortName: "Photography & Media",
    category: "Cultural" as ClubCategory,
    description:
      "A creative community for photography, videography, storytelling, event coverage and visual communication.",
    members: "60+ Members",
    meeting: "Every Friday",
    icon: "Camera",
    accent: "#FDBA74",
  },
  {
    id: 7,
    name: "Sports & Fitness Club",
    shortName: "Sports & Fitness",
    category: "Sports" as ClubCategory,
    description:
      "Promoting teamwork, fitness, healthy competition and an active campus lifestyle through sports activities.",
    members: "130+ Members",
    meeting: "Weekly Practice",
    icon: "Trophy",
    accent: "#F6B900",
  },
  {
    id: 8,
    name: "Social Service Club",
    shortName: "Social Service",
    category: "Social" as ClubCategory,
    description:
      "Connecting students with community initiatives, volunteering, awareness programs and meaningful social impact.",
    members: "90+ Members",
    meeting: "Monthly Activities",
    icon: "HeartHandshake",
    accent: "#FDE68A",
  },
  {
    id: 9,
    name: "Art & Creative Club",
    shortName: "Art & Creative",
    category: "Cultural" as ClubCategory,
    description:
      "A space for drawing, design, illustration, creative writing and other forms of artistic expression.",
    members: "55+ Members",
    meeting: "Every Saturday",
    icon: "Palette",
    accent: "#FFC14D",
  },
  {
    id: 10,
    name: "Language & Literature Club",
    shortName: "Language & Literature",
    category: "Academic" as ClubCategory,
    description:
      "Encouraging reading, writing, language development, literature discussions and knowledge sharing.",
    members: "65+ Members",
    meeting: "Every Sunday",
    icon: "BookOpen",
    accent: "#F8D87D",
  },
  {
    id: 11,
    name: "Global Relations Club",
    shortName: "Global Relations",
    category: "Social" as ClubCategory,
    description:
      "Developing cultural awareness, global communication skills and opportunities for broader student engagement.",
    members: "45+ Members",
    meeting: "Monthly Sessions",
    icon: "Globe2",
    accent: "#FCD34D",
  },
  {
    id: 12,
    name: "Community Volunteers",
    shortName: "Community Volunteers",
    category: "Social" as ClubCategory,
    description:
      "Student volunteers working together on campus support, awareness drives, outreach and community initiatives.",
    members: "100+ Members",
    meeting: "Monthly Drives",
    icon: "HeartHandshake",
    accent: "#F6B900",
  },
]

export const WHY_JOIN_INTRO = {
  eyebrow: "Beyond the Classroom",
  title: "More than a club.",
  titleHighlight: "It is your campus community.",
  description:
    "Student organizations create space to meet new people, discover hidden strengths, build leadership experience and contribute to campus life in meaningful ways.",
  link: { label: "Connect With Student Affairs", href: "/contact" },
}

export const WHY_JOIN = [
  {
    icon: "Users",
    title: "Build Connections",
    description:
      "Meet students with similar interests and create lasting friendships.",
  },
  {
    icon: "Trophy",
    title: "Grow Leadership",
    description:
      "Take responsibility, organize activities and practice leadership in real situations.",
  },
  {
    icon: "BookOpen",
    title: "Learn by Doing",
    description:
      "Turn academic knowledge into practical projects, workshops and events.",
  },
  {
    icon: "HeartHandshake",
    title: "Make an Impact",
    description:
      "Contribute to the campus and wider community through meaningful initiatives.",
  },
]

export const CLUBS_CTA = {
  eyebrow: "Start Something Meaningful",
  title: "Have an idea for a new student organization?",
  description:
    "Bring your idea, gather interested students and connect with the appropriate campus office to explore the next steps.",
  link: { label: "Contact Us", href: "/contact" },
}
