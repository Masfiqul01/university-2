// About page (/about) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.
export const VALUES = [
  { icon: "Lightbulb", title: "Innovation", description: "Encouraging creativity and forward-thinking across every discipline." },
  { icon: "ShieldCheck", title: "Integrity", description: "Upholding honesty, ethics, and accountability in all we do." },
  { icon: "Users", title: "Inclusiveness", description: "Building a diverse, welcoming and supportive community." },
  { icon: "Target", title: "Excellence", description: "Pursuing the highest standards in teaching and research." },
  { icon: "Heart", title: "Service", description: "Contributing meaningfully to society and community." },
  { icon: "Eye", title: "Vision", description: "Preparing students to lead in a changing world." },
]

// ---------------------------------------------------------------------------
// Full /about page content — hero, sections, stats, cards, images.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.
// ---------------------------------------------------------------------------

export const ABOUT_HERO = {
  image: "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp",
  imageAlt: "University campus",
  eyebrow: "About KKJSTU",
  title: "A Community Built on Knowledge and Purpose",
  description:
    "We are building an academic community where knowledge, innovation, research, and human values come together to prepare students for a changing world.",
  primary: { label: "Explore Our History", href: "/about/history" },
  secondary: { label: "Meet Our Leadership", href: "/about/leadership" },
}

export const ABOUT_BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "About KKJSTU" },
]

export const ABOUT_INTRO = {
  image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1400&q=85",
  imageAlt: "University academic building",
  eyebrow: "Who We Are",
  title: "An institution shaped by learning, discovery, and purpose.",
  paragraphs: [
    "KKJSTU is committed to creating an academic environment where students can develop strong foundations in knowledge while discovering their own potential.",
    "Our academic community brings together students, faculty, researchers, and professionals across science, engineering, business, humanities, and related disciplines.",
    "Through quality teaching, practical learning, research, and collaboration, we aim to prepare graduates who can contribute meaningfully to their professions and to society.",
  ],
  link: { label: "Discover our story", href: "/about/history" },
}

export const ABOUT_GLANCE_INTRO = {
  eyebrow: "At a Glance",
  title: "A growing academic community",
  description:
    "A snapshot of our academic community, facilities, and research-driven environment.",
}

export const ABOUT_STATS = [
  { value: "06", label: "Faculties", icon: "Building2", iconClass: "bg-[#e7e8f7] text-[#232771]" },
  { value: "30+", label: "Academic Programs", icon: "GraduationCap", iconClass: "bg-[#fdefdc] text-[#8a4b00]" },
  { value: "150+", label: "Faculty Members", icon: "Users", iconClass: "bg-[#e0f3ea] text-[#0d6a46]" },
  { value: "20+", label: "Research Areas", icon: "FlaskConical", iconClass: "bg-[#e2f0fb] text-[#0e5a88]" },
  { value: "15+", label: "Modern Labs", icon: "FlaskConical", iconClass: "bg-[#f0e6fa] text-[#65299b]" },
  { value: "25+", label: "Campus Facilities", icon: "Building2", iconClass: "bg-[#fce6ea] text-[#9b1c39]" },
]

export const ABOUT_DISTINCTIVE_INTRO = {
  eyebrow: "What Makes Us Distinctive",
  title: "More than an institution. A community with purpose.",
  description:
    "Our educational approach combines academic rigor with practical experience, research, innovation, and genuine support for students.",
}

export const ABOUT_DISTINCTIVE = [
  {
    title: "Quality Education",
    text: "A strong academic foundation designed to develop knowledge, confidence, and professional competence.",
    icon: "Award",
    iconClass: "bg-[#e7e8f7] text-[#232771]",
  },
  {
    title: "Applied Learning",
    text: "Hands-on learning opportunities that connect classroom knowledge with real-world challenges.",
    icon: "BookOpen",
    iconClass: "bg-[#fdefdc] text-[#8a4b00]",
  },
  {
    title: "Research & Innovation",
    text: "A growing culture of inquiry, experimentation, discovery, and meaningful innovation.",
    icon: "Lightbulb",
    iconClass: "bg-[#f0e6fa] text-[#65299b]",
  },
  {
    title: "Student-Centered Support",
    text: "An inclusive environment where students receive guidance, support, and opportunities to grow.",
    icon: "HeartHandshake",
    iconClass: "bg-[#fce6ea] text-[#9b1c39]",
  },
]

export const ABOUT_VALUES_INTRO = {
  eyebrow: "Core Values",
  title: "Principles that guide us",
  description:
    "Our values shape the way we teach, learn, collaborate, conduct research, and serve our wider community.",
}

export const ABOUT_VALUES = [
  {
    title: "Innovation",
    text: "We encourage curiosity, creativity, and new ideas.",
    icon: "Lightbulb",
    iconClass: "bg-[#fdefdc] text-[#8a4b00]",
  },
  {
    title: "Integrity",
    text: "We value honesty, responsibility, and ethical conduct.",
    icon: "ShieldCheck",
    iconClass: "bg-[#e2f0fb] text-[#0e5a88]",
  },
  {
    title: "Inclusiveness",
    text: "We create a respectful community where everyone belongs.",
    icon: "Users",
    iconClass: "bg-[#f0e6fa] text-[#65299b]",
  },
  {
    title: "Excellence",
    text: "We pursue high standards in learning, teaching, and research.",
    icon: "Award",
    iconClass: "bg-[#e7e8f7] text-[#232771]",
  },
  {
    title: "Service",
    text: "We use knowledge and education to contribute to society.",
    icon: "HeartHandshake",
    iconClass: "bg-[#fce6ea] text-[#9b1c39]",
  },
  {
    title: "Sustainability",
    text: "We promote responsible thinking for a better future.",
    icon: "Leaf",
    iconClass: "bg-[#e0f3ea] text-[#0d6a46]",
  },
]

export const ABOUT_LEARNING_ENVIRONMENT = {
  eyebrow: "Learning Environment",
  title: "Learning happens beyond the classroom.",
  description:
    "Our learning environment is designed to encourage curiosity, collaboration, experimentation, and independent thinking. Students can engage with modern laboratories, library resources, green spaces, and collaborative academic settings.",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85",
  imageAlt: "Modern university laboratory",
  highlights: [
    { label: "Modern Laboratories", icon: "FlaskConical", iconClass: "text-[#65299b]" },
    { label: "Learning Resources", icon: "BookOpen", iconClass: "text-[#8a4b00]" },
    { label: "Collaboration", icon: "Users", iconClass: "text-[#0e5a88]" },
    { label: "Global Outlook", icon: "Globe2", iconClass: "text-[#0d6a46]" },
  ],
}

export const ABOUT_LEADERSHIP = {
  image: "https://res.cloudinary.com/pnlsyo5i/image/upload/v1786707383/principal.webp",
  imageAlt: "University leadership",
  eyebrow: "Leadership",
  title: "Guided by vision. Driven by purpose.",
  description:
    "Our leadership works to create an institution where academic excellence, innovation, integrity, and service remain at the heart of university life.",
  quote:
    "Our purpose is to create opportunities for every student to learn, discover, and build a meaningful future.",
  personName: "Tahasin",
  personRole: "Vice Chancellor / Principal",
  link: { label: "Meet Our Leadership", href: "/about/leadership" },
}

export const ABOUT_CTA = {
  icon: "Rocket",
  eyebrow: "Your Future Starts Here",
  title: "Start Your Journey at KKJSTU",
  description:
    "Explore academic opportunities, discover your interests, and take the next step toward building your future with us.",
  primary: { label: "Explore Programs", href: "/academics/programs" },
  secondary: { label: "Apply Now", href: "/admissions/apply" },
}
