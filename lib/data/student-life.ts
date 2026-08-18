// Student Life page (/campus-life/student-life) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const STUDENT_LIFE_HERO = {
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=85",
  imageAlt: "University students collaborating on campus",
  eyebrow: "Student Life",
  titleLines: ["Discover More Than", "a University Experience."],
  description:
    "Student life at KKJSTU is about learning, connecting, leading and discovering opportunities that help you grow as a person and as a future professional.",
  primary: { label: "Explore Clubs", href: "#activities" },
  secondary: { label: "Student Support", href: "#support" },
}

export const STUDENT_LIFE_INTRO = {
  eyebrow: "Life at KKJSTU",
  titleLines: ["A Place to Learn,", "Connect & Grow"],
  paragraphs: [
    "University life extends far beyond lectures and examinations. At KKJSTU, students can discover communities, develop practical abilities, participate in cultural and sporting activities, contribute to society and prepare for life after graduation.",
    "From your first week on campus to the day you graduate, the student experience is designed to help you make connections, build confidence and create memories that last.",
  ],
}

export const JOURNEY_STAGES_INTRO = {
  eyebrow: "Your Student Journey",
  title: "From First Week to Graduation",
  description:
    "Every stage of university life brings new opportunities to learn, connect and discover your potential.",
}

export const JOURNEY_STAGES = [
  {
    number: "01",
    title: "First Week",
    description:
      "Settle into campus life, meet your peers and discover the support available to you.",
    icon: "Sparkles",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build knowledge, develop practical skills and make the most of your academic experience.",
    icon: "BookOpen",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Build friendships, join communities and participate in activities beyond the classroom.",
    icon: "UsersRound",
  },
  {
    number: "04",
    title: "Lead",
    description:
      "Develop confidence, leadership abilities and meaningful contributions to university life.",
    icon: "ShieldCheck",
  },
  {
    number: "05",
    title: "Graduate",
    description:
      "Leave KKJSTU prepared to contribute professionally and make a positive difference.",
    icon: "Trophy",
  },
]

export const STUDENT_SUPPORT_SECTION = {
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
  imageAlt: "Students studying together",
  overlayEyebrow: "Student Support",
  overlayTitle: "You are part of a community.",
  eyebrow: "Support & Wellbeing",
  title: "Support That Helps You Thrive",
  description:
    "University can be a transformative experience. KKJSTU aims to provide students with an environment where they can access guidance, build confidence and feel connected throughout their journey.",
  link: { label: "Explore Student Support", href: "/campus-life/student-life" },
}

export const STUDENT_SUPPORT = [
  {
    title: "Orientation",
    description:
      "Start your university journey with guidance, campus information and opportunities to connect.",
    icon: "Sparkles",
  },
  {
    title: "Academic Support",
    description:
      "Access academic guidance and resources that help you stay engaged and progress confidently.",
    icon: "BookOpen",
  },
  {
    title: "Wellbeing",
    description:
      "A supportive university environment that recognizes student wellbeing as part of success.",
    icon: "HeartPulse",
  },
]

export const ACTIVITIES_INTRO = {
  eyebrow: "Beyond the Classroom",
  title: "Find Your Community",
  description:
    "Explore activities and communities that allow you to discover your interests, build relationships and make an impact.",
  cardLinkLabel: "Explore",
}

export const ACTIVITIES = [
  {
    title: "Clubs & Societies",
    description:
      "Connect with students who share your interests and discover new communities across campus.",
    icon: "Users",
  },
  {
    title: "Cultural Activities",
    description:
      "Celebrate creativity, culture and university traditions through student-led activities.",
    icon: "Palette",
  },
  {
    title: "Volunteering",
    description:
      "Take part in community initiatives and create meaningful impact beyond the university.",
    icon: "HeartHandshake",
  },
  {
    title: "Sports & Recreation",
    description:
      "Stay active, build teamwork and enjoy opportunities for sport and recreation.",
    icon: "Volleyball",
  },
]

export const CAREER_SECTION = {
  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  imageAlt: "University students working on a professional project",
  overlayEyebrow: "Career Development",
  overlayTitle: "Prepare for What Comes Next",
  icon: "BriefcaseBusiness",
  title: "Build Skills for Your Future",
  description:
    "Your university experience should help you become ready for the opportunities ahead. Develop practical abilities, leadership qualities and professional confidence through experiences inside and outside the classroom.",
  link: { label: "Explore Career Development", href: "/career" },
}

export const CAREER_FEATURES = [
  "Career guidance and preparation",
  "Practical skills development",
  "Industry and professional engagement",
  "Leadership and teamwork opportunities",
]

export const EVENTS_INTRO = {
  eyebrow: "Campus Life",
  title: "Stay Connected With Campus",
  description:
    "Discover activities, student events and opportunities to participate in the wider university community.",
  link: { label: "View Events", href: "/events" },
}

export const EVENT_CARDS = [
  {
    title: "Student Activities",
    text: "Discover events, clubs and activities happening across campus.",
    icon: "CalendarDays",
  },
  {
    title: "Cultural Life",
    text: "Participate in cultural celebrations, creative activities and student initiatives.",
    icon: "Music",
  },
  {
    title: "Sports & Recreation",
    text: "Stay active, meet friends and experience the energy of campus sports.",
    icon: "Trophy",
  },
]

export const STUDENT_VOICES = {
  icon: "Users",
  eyebrow: "Student Voices",
  title: "Your Experience Matters",
  description:
    "Student stories and testimonials can help future students understand life at KKJSTU. Authentic testimonials should be published only with the student's consent and approved university content.",
}

export const STUDENT_LIFE_CTA = {
  eyebrow: "STUDENT LIFE",
  titleLines: ["Make Your University", "Experience Count."],
  description:
    "Discover the people, activities and opportunities that make student life at KKJSTU meaningful.",
  links: [
    { label: "Explore Clubs", href: "#activities" },
    { label: "Student Support", href: "#support" },
    { label: "View Events", href: "/events" },
  ],
}
