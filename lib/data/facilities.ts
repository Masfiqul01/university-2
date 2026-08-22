// Campus Facilities page (/campus-life/facilities) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const FACILITIES_HERO = {
  image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90",
  imageAlt: "University campus facilities",
  eyebrow: "Campus Facilities",
  titleLines: ["Spaces That Support", "Learning, Life & Growth."],
  description:
    "Discover the academic, recreational, health and community facilities that help create a complete university experience at KKJSTU.",
  primary: { label: "Explore Facilities", href: "#facilities" },
  secondary: { label: "View Campus Map", href: "#campus-map" },
}

export const FACILITIES_INTRO = {
  eyebrow: "Facilities at KKJSTU",
  titleLines: ["Everything You Need", "Within Reach"],
  paragraphs: [
    "A university campus is more than classrooms and lecture halls. It is a collection of spaces where students learn, research, meet friends, stay active and build meaningful experiences.",
    "Explore the facilities available across KKJSTU and discover the places that support academic success, wellbeing and everyday campus life.",
  ],
}

export const FACILITY_STATS = [
  { number: "09+", label: "Key Facilities", icon: "Building2" },
  { number: "24/7", label: "Campus Community", icon: "Users" },
  { number: "01", label: "Connected Campus", icon: "MapPin" },
  { number: "100%", label: "Student Focused", icon: "Accessibility" },
]

export const FACILITY_DIRECTORY_INTRO = {
  eyebrow: "Facility Directory",
  title: "Explore Campus Facilities",
  description:
    "Find the spaces and services that support learning, research, wellbeing, recreation and student life at KKJSTU.",
  cardLabels: {
    hours: "Opening Hours",
    location: "Location",
    contact: "Contact",
    services: "Available Services",
    link: "Facility Details",
  },
}

export const FACILITIES = [
  {
    title: "Central Library",
    category: "Academic & Learning",
    description:
      "A dedicated academic space for reading, independent study, research and access to learning resources.",
    icon: "Library",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
    services: ["Reading spaces", "Study areas", "Research support"],
    hours: "Sun – Thu, 8:00 AM – 8:00 PM",
    location: "Academic Campus",
    contact: "library@kkjstu.ac.bd",
  },
  {
    title: "Science Laboratories",
    category: "Research & Practical Learning",
    description:
      "Practical learning environments supporting laboratory classes, experimentation and academic research.",
    icon: "FlaskConical",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    services: ["Teaching laboratories", "Research facilities", "Practical sessions"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Science & Engineering Zone",
    contact: "labs@kkjstu.ac.bd",
  },
  {
    title: "ICT & Computing Facilities",
    category: "Technology",
    description:
      "Technology-enabled spaces supporting computing education, digital learning, programming and academic projects.",
    icon: "Monitor",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    services: ["Computer labs", "Digital learning", "ICT support"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Technology Building",
    contact: "ict@kkjstu.ac.bd",
  },
  {
    title: "Auditorium",
    category: "Events & Community",
    description:
      "A central venue for academic events, seminars, cultural programs, orientations and university gatherings.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
    services: ["Seminars", "Conferences", "Cultural events"],
    hours: "By event schedule",
    location: "Central Campus",
    contact: "events@kkjstu.ac.bd",
  },
  {
    title: "Sports & Recreation",
    category: "Student Life",
    description:
      "Spaces that encourage physical activity, teamwork, recreation and a balanced university experience.",
    icon: "Dumbbell",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    services: ["Sports activities", "Recreation", "Student competitions"],
    hours: "Sun – Thu, 7:00 AM – 8:00 PM",
    location: "Sports & Recreation Area",
    contact: "sports@kkjstu.ac.bd",
  },
  {
    title: "Cafeteria",
    category: "Food & Community",
    description:
      "Convenient dining and social spaces where students and staff can enjoy meals and connect with one another.",
    icon: "Coffee",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    services: ["Meals & refreshments", "Seating areas", "Student gathering"],
    hours: "Sun – Thu, 8:00 AM – 7:00 PM",
    location: "Student Activity Zone",
    contact: "cafeteria@kkjstu.ac.bd",
  },
  {
    title: "Medical & Wellness",
    category: "Health & Wellbeing",
    description:
      "Student-focused health and wellbeing support designed to help maintain a safe and supportive campus environment.",
    icon: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85",
    services: ["Basic health support", "Wellness guidance", "Emergency assistance"],
    hours: "Sun – Thu, 9:00 AM – 5:00 PM",
    location: "Student Services Area",
    contact: "health@kkjstu.ac.bd",
  },
  {
    title: "Campus Transport",
    category: "Mobility & Access",
    description:
      "Transport support designed to make daily travel between the university and surrounding areas more convenient.",
    icon: "Bus",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    services: ["Scheduled routes", "Student transport", "Transport assistance"],
    hours: "According to route schedule",
    location: "Main Campus Gate",
    contact: "transport@kkjstu.ac.bd",
  },
  {
    title: "Student Residence",
    category: "Student Community",
    description:
      "Residential spaces that support student living, community building and a comfortable university experience.",
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85",
    services: ["Residential support", "Common spaces", "Student community"],
    hours: "According to residence policy",
    location: "Residential Area",
    contact: "residence@kkjstu.ac.bd",
  },
]

export const QUICK_SERVICES_INTRO = {
  eyebrow: "Essential Services",
  titleLines: ["Designed Around", "Student Needs"],
  description:
    "From quiet places to study to spaces for sport, technology, health and community, campus facilities are designed to support different parts of student life.",
  link: { label: "Contact Facilities Office", href: "/contact" },
}

export const QUICK_LINKS = [
  {
    title: "Library Services",
    description:
      "Find study spaces, learning resources and information about library services.",
    icon: "BookOpen",
  },
  {
    title: "Laboratory Access",
    description:
      "Explore practical learning and research environments across academic disciplines.",
    icon: "FlaskConical",
  },
  {
    title: "Sports & Recreation",
    description:
      "Discover opportunities to stay active and participate in campus activities.",
    icon: "Trophy",
  },
  {
    title: "Student Services",
    description:
      "Access essential support services that help make campus life easier.",
    icon: "ShieldCheck",
  },
]

export const CAMPUS_EXPERIENCE_FEATURE = {
  image: "/images/campus-green.png",
  imageAlt: "Students walking across a university campus",
  overlayEyebrow: "Campus Experience",
  overlayTitle: "Places where academic life and community come together.",
  icon: "MapPin",
  title: "Navigate Your Campus",
  description:
    "Find academic buildings, learning facilities, student spaces, recreation areas and essential services across the KKJSTU campus.",
  items: [
    { title: "Library", icon: "Library" },
    { title: "Laboratories", icon: "FlaskConical" },
    { title: "Sports", icon: "Dumbbell" },
    { title: "Cafeteria", icon: "Utensils" },
  ],
  link: { label: "View Campus Map", href: "#" },
}

export const ACCESSIBILITY_SECTION = {
  image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85",
  imageAlt: "University campus walkway",
  icon: "Accessibility",
  eyebrow: "Accessible Campus",
  titleLines: ["A Campus Designed", "for Everyone"],
  description:
    "Campus facilities should help every student participate in academic and community life. KKJSTU's campus experience brings together learning, movement, support and shared spaces.",
  points: [
    "Accessible learning and common spaces",
    "Student-focused support services",
    "Connected academic and recreational areas",
    "Safe and welcoming campus environment",
  ],
}

export const FACILITIES_CTA = {
  icon: "Building2",
  eyebrow: "CAMPUS FACILITIES",
  titleLines: ["Explore Your Campus.", "Make It Your Own."],
  description:
    "Discover the places, services and facilities that make everyday life at KKJSTU easier, more connected and more meaningful.",
  links: [
    { label: "View Campus Map", href: "#campus-map" },
    { label: "Check Library Hours", href: "/library" },
    { label: "Contact Facilities Office", href: "/contact" },
  ],
}
