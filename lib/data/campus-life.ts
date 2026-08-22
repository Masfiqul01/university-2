// Campus Life page (/campus-life) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const CAMPUS_LIFE_HERO = {
  image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90",
  imageAlt: "University campus",
  eyebrow: "Campus Life",
  titleLines: ["Learn.", "Connect.", "Belong."],
  description:
    "Discover a campus experience where academic life meets community, wellbeing, friendship and opportunities to grow.",
  primary: { label: "Explore Facilities", href: "#facilities" },
  secondary: { label: "Discover Student Life", href: "#gallery" },
}

export const CAMPUS_LIFE_INTRO = {
  eyebrow: "Life at KKJSTU",
  titleLines: ["More Than a Place", "to Study"],
  paragraphs: [
    "Campus life is an important part of the university experience. It is where students build friendships, discover new interests, participate in activities and develop a sense of belonging.",
    "At KKJSTU, students can experience a campus environment that brings together learning spaces, recreation, support services, community activities and opportunities for personal growth.",
  ],
}

export const CAMPUS_HIGHLIGHTS_INTRO = {
  eyebrow: "Campus Highlights",
  title: "Spaces Designed for University Life",
  description:
    "Explore the places and facilities that shape everyday life at KKJSTU.",
}

export const CAMPUS_HIGHLIGHTS = [
  {
    title: "Green Spaces",
    description:
      "Quiet open spaces and welcoming campus surroundings provide places to relax, meet friends and recharge.",
    icon: "Sparkles",
  },
  {
    title: "Library",
    description:
      "A focused academic environment where students can study, explore resources and work independently.",
    icon: "Library",
  },
  {
    title: "Laboratories",
    description:
      "Practical learning spaces that support experimentation, research and hands-on academic development.",
    icon: "FlaskConical",
  },
  {
    title: "Cafeteria",
    description:
      "Convenient spaces where students can take a break, share meals and connect with the campus community.",
    icon: "Coffee",
  },
  {
    title: "Sports & Recreation",
    description:
      "Opportunities to stay active, develop teamwork and participate in sports and recreational activities.",
    icon: "Dumbbell",
  },
  {
    title: "Transport",
    description:
      "Accessible transportation support designed to make everyday movement to and around campus easier.",
    icon: "Bus",
  },
]

export const CAMPUS_FEATURE = {
  image: "/images/campus-green.png",
  imageAlt: "University campus and students",
  overlayEyebrow: "Campus Experience",
  overlayTitle: "A welcoming environment for every stage of student life.",
  icon: "MapPin",
  title: "Discover Your Campus",
  description:
    "From quiet study areas and practical laboratories to social spaces and recreational facilities, campus provides places to focus, connect and enjoy university life.",
  items: [
    { title: "Library", icon: "BookOpen" },
    { title: "Labs", icon: "FlaskConical" },
    { title: "Sports", icon: "Dumbbell" },
    { title: "Cafeteria", icon: "Utensils" },
  ],
}

export const SUPPORT_INTRO = {
  eyebrow: "Student Support",
  titleLines: ["Support for Your", "Wellbeing & Success"],
  description:
    "A strong campus experience is supported by services that help students feel safe, connected, healthy and prepared for the future.",
  link: { label: "Discover Student Support", href: "/campus-life/student-life" },
}

export const SUPPORT_SERVICES = [
  {
    title: "Counselling & Wellbeing",
    description:
      "Supportive services that help students manage challenges and maintain a healthy university experience.",
    icon: "HeartPulse",
  },
  {
    title: "Career Support",
    description:
      "Guidance and development opportunities that help students prepare for professional life after graduation.",
    icon: "Trophy",
  },
  {
    title: "Health Services",
    description:
      "Access to health-related support and information throughout your student journey.",
    icon: "Heart",
  },
  {
    title: "Accessibility",
    description:
      "A commitment to making the university environment welcoming and accessible to every student.",
    icon: "Accessibility",
  },
  {
    title: "Student Services",
    description:
      "Practical administrative and student-focused services to help you navigate university life.",
    icon: "Users",
  },
]

export const ACTIVITIES_INTRO = {
  eyebrow: "Community & Activities",
  title: "Find Your Place on Campus",
  description:
    "Join communities, explore interests and make university life your own.",
  linkLabel: "Explore",
}

export const ACTIVITIES = [
  {
    title: "Student Clubs",
    description:
      "Meet people with shared interests and participate in student-led communities.",
    icon: "Users",
  },
  {
    title: "Cultural Activities",
    description:
      "Experience creativity, culture, celebration and the traditions of university life.",
    icon: "Camera",
  },
  {
    title: "Sports",
    description:
      "Take part in sporting activities, develop teamwork and stay active on campus.",
    icon: "Dumbbell",
  },
  {
    title: "Community Engagement",
    description:
      "Contribute to meaningful initiatives and build connections beyond the classroom.",
    icon: "HeartHandshake",
  },
]

export const GALLERY_INTRO = {
  eyebrow: "Campus Gallery",
  titleLead: "A Glimpse of",
  titleAccent: "Campus Life",
  description:
    "Capture the places, people and moments that make the KKJSTU experience unique.",
  note: "Campus Moments",
  cta: { label: "Explore More Moments", href: "#gallery" },
}

/**
 * Five cards laid out as one tall card on the left and a 2x2 block on the
 * right. `feature` marks the tall one; its badge is the gold accent while the
 * rest use the navy badge.
 */
export const GALLERY_IMAGES = [
  {
    src: "/images/campus-library.png",
    alt: "Students studying in the KKJSTU library",
    title: "Modern Library",
    caption: "A space to learn, explore and grow.",
    icon: "Building2",
    feature: true,
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
    alt: "Graduating students throwing their caps in the air",
    title: "Celebrating Achievements",
    caption: "Milestones today, leaders tomorrow.",
    icon: "GraduationCap",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
    alt: "The KKJSTU campus building and grounds",
    title: "Beautiful Campus",
    caption: "Where inspiration meets opportunity.",
    icon: "Building2",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    alt: "Students collaborating around a laptop",
    title: "Learning Together",
    caption: "Collaboration, ideas and friendships.",
    icon: "Users",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    alt: "Students researching together among library shelves",
    title: "Research & Innovation",
    caption: "Curiosity that drives meaningful change.",
    icon: "BookOpen",
  },
]

export const GALLERY_STATS = [
  { value: "500+", label: "Photos Captured", icon: "Camera" },
  { value: "1000+", label: "Happy Students", icon: "Users" },
  { value: "50+", label: "Campus Spots", icon: "Building2" },
  { value: "Events", label: "All Year Round", icon: "CalendarDays" },
]

export const VIRTUAL_TOUR = {
  eyebrow: "Explore From Anywhere",
  title: "Take a Virtual Tour of KKJSTU",
  description:
    "Get a closer look at the campus environment, facilities and spaces where students learn, connect and build their future.",
  link: { label: "Take a Virtual Tour", href: "/campus-life" },
  image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "University building",
}

export const CAMPUS_LIFE_CTA = {
  icon: "MapPin",
  eyebrow: "CAMPUS LIFE",
  titleLines: ["Find Your Place.", "Make It Your Own."],
  description:
    "Explore the facilities, communities and experiences that make life at KKJSTU more than just a university education.",
  primary: { label: "Explore Facilities", href: "#facilities" },
  secondary: { label: "Discover Student Life", href: "/campus-life/student-life" },
  footerNote: "Explore, connect and experience campus life at KKJSTU.",
  footerLinks: [
    { label: "Join a Club", href: "/campus-life/clubs" },
    { label: "Take a Virtual Tour", href: "/campus-life" },
  ],
}
