// Campus Life pages (/campus-life, /campus-life/facilities, /campus-life/student-life,
// /campus-life/clubs) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.

// ---- Overview (/campus-life) — "what campus life offers" feature grid ----
export const CAMPUS_OFFERINGS = [
  { icon: "UtensilsCrossed", title: "Dining & Cafeteria", description: "Affordable, hygienic meals and snacks served throughout the day at the central cafeteria and food court." },
  { icon: "Building2", title: "Hostel & Residence", description: "Secure, supervised residence halls for students living away from home, with common rooms and dining facilities." },
  { icon: "Trophy", title: "Sports & Fitness", description: "A full sports complex plus regular inter-department tournaments in cricket, football, badminton and more." },
  { icon: "Users", title: "Clubs & Societies", description: "A dozen student-run clubs spanning technology, culture, sports and community service — something for everyone." },
  { icon: "HeartPulse", title: "Health & Wellness", description: "An on-campus medical center and counseling support to look after student physical and mental wellbeing." },
  { icon: "Trees", title: "Green, Walkable Campus", description: "Open lawns, tree-lined walkways and shaded courtyards that make campus a place students enjoy spending time." },
]

// Editable placeholder figures for the overview "Campus Life at a Glance" stat
// row. Student-club and facility counts are computed from CLUBS.length /
// FACILITIES.length in app/campus-life/page.tsx so they never drift from the
// lists below — only these two are manual placeholders.
export const CAMPUS_LIFE_EXTRA_STATS = [
  { value: "30+", label: "Events Per Year" },
  { value: "Always On", label: "Student Support" },
]

// ---- Facilities (/campus-life/facilities) ----
// `href` is optional — only set it when a dedicated page already exists to link to.
export const FACILITIES: { icon: string; title: string; description: string; href?: string }[] = [
  { icon: "Library", title: "Central Library", description: "A quiet, well-resourced library with print collections, digital resources, journals and dedicated study spaces.", href: "/library" },
  { icon: "Microscope", title: "Science & Research Labs", description: "Modern laboratories across engineering, science and technology departments for hands-on, practical learning." },
  { icon: "Trophy", title: "Sports Complex", description: "Grounds and indoor courts for cricket, football, badminton, table tennis and athletics training." },
  { icon: "UtensilsCrossed", title: "Cafeteria & Dining Hall", description: "A central dining hall and food court offering affordable, hygienic meals throughout the day." },
  { icon: "Building2", title: "Hostel & Residence Halls", description: "Supervised, secure accommodation for students, with common rooms, dining and round-the-clock security." },
  { icon: "HeartPulse", title: "Medical & Wellness Center", description: "On-campus first response, a resident physician and wellness counseling for students and staff." },
  { icon: "Bus", title: "Transport Service", description: "Scheduled campus bus routes connecting residence halls, the city and surrounding neighborhoods." },
  { icon: "CircuitBoard", title: "ICT Center & Campus Wi-Fi", description: "Computer labs and campus-wide wireless internet supporting coursework, research and student projects." },
  { icon: "Presentation", title: "Auditorium & Seminar Halls", description: "Multi-purpose halls for seminars, conferences, cultural programs and guest lectures." },
]

// ---- Student Life (/campus-life/student-life) ----
export const STUDENT_LIFE_HIGHLIGHTS = [
  { icon: "PartyPopper", title: "Cultural Programs & Fests", description: "Annual cultural festivals, freshers' receptions and farewell events bring the whole campus together." },
  { icon: "Trophy", title: "Sports & Recreation", description: "Inter-department leagues and friendly tournaments keep the sports complex busy all year round." },
  { icon: "Lightbulb", title: "Workshops & Skill-Building", description: "Regular seminars and hands-on workshops on top of the curriculum, run by faculty and student clubs." },
  { icon: "Cpu", title: "Tech Fests & Hackathons", description: "Programming contests, robotics showcases and innovation challenges organized with student tech clubs." },
  { icon: "HeartHandshake", title: "Leadership & Volunteering", description: "Student councils, event committees and community-service drives build leadership experience early." },
  { icon: "HeartPulse", title: "Wellness & Support", description: "Counseling, peer-support groups and the on-campus medical center look after student wellbeing." },
]

export const SUPPORT_SERVICES = [
  "Academic advising and mentorship from faculty advisors",
  "Counseling and mental health support services",
  "Career guidance and placement assistance",
  "Financial aid and scholarship information desk",
  "Anti-ragging and student grievance cell",
  "On-campus medical care and emergency response",
]

// Cross-links used on the Student Life page to point at other hubs.
export const CAMPUS_LIFE_LINKS = [
  { icon: "CalendarDays", title: "Upcoming Events", description: "See what's happening on campus this month.", href: "/events" },
  { icon: "Users", title: "Clubs & Organizations", description: "Find a community that matches your interests.", href: "/campus-life/clubs" },
  { icon: "Bell", title: "Notice Board", description: "Official notices, deadlines and announcements.", href: "/notice-board" },
]

// ---- Clubs & Organizations (/campus-life/clubs) ----
export const CLUB_CATEGORIES = ["Academic", "Technology", "Cultural", "Sports", "Community Service"]

export const CLUBS = [
  {
    slug: "computer-robotics-club",
    name: "Computer & Robotics Club",
    category: "Technology",
    icon: "Cpu",
    meets: "Thursdays · Engineering Lab",
    description: "Hands-on robotics builds, competitive programming practice and weekend workshops on AI, IoT and embedded systems.",
  },
  {
    slug: "electronics-innovation-society",
    name: "Electronics & Innovation Society",
    category: "Technology",
    icon: "CircuitBoard",
    meets: "Tuesdays · ICT Center",
    description: "Circuit design and embedded electronics projects, capped by a yearly innovation expo of student prototypes.",
  },
  {
    slug: "debate-public-speaking-society",
    name: "Debate & Public Speaking Society",
    category: "Academic",
    icon: "MessageSquare",
    meets: "Wednesdays · Central Seminar Hall",
    description: "Sharpening argument, research and public-speaking skills through inter-department and national debate competitions.",
  },
  {
    slug: "science-society",
    name: "Science Society",
    category: "Academic",
    icon: "FlaskConical",
    meets: "Fridays · Science Building",
    description: "Science fairs, research showcases and quiz competitions that connect classroom theory with real inquiry.",
  },
  {
    slug: "business-entrepreneurship-club",
    name: "Business & Entrepreneurship Club",
    category: "Academic",
    icon: "BarChart3",
    meets: "Mondays · Business Faculty",
    description: "Case competitions, startup pitch nights and mentorship for students building their first ventures.",
  },
  {
    slug: "cultural-fine-arts-club",
    name: "Cultural & Fine Arts Club",
    category: "Cultural",
    icon: "Palette",
    meets: "Saturdays · Auditorium",
    description: "Music, dance, drama and the visual arts brought to life through campus festivals and showcases.",
  },
  {
    slug: "photography-film-society",
    name: "Photography & Film Society",
    category: "Cultural",
    icon: "Camera",
    meets: "Sundays · Student Activity Center",
    description: "Documenting campus life and producing short films, from orientation week through convocation.",
  },
  {
    slug: "sports-athletics-club",
    name: "Sports & Athletics Club",
    category: "Sports",
    icon: "Trophy",
    meets: "Daily · Sports Complex",
    description: "Inter-department tournaments in cricket, football, badminton and track and field.",
  },
  {
    slug: "chess-strategy-club",
    name: "Chess & Strategy Club",
    category: "Sports",
    icon: "Target",
    meets: "Tuesdays · Student Lounge",
    description: "Weekly matches, rated tournaments and coaching for players of every level.",
  },
  {
    slug: "nss-unit",
    name: "National Service Scheme (NSS) Unit",
    category: "Community Service",
    icon: "HeartHandshake",
    meets: "Monthly · Community Outreach Office",
    description: "Tree plantation drives, blood donation camps and disaster-relief awareness campaigns.",
  },
  {
    slug: "rotaract-club",
    name: "Rotaract Club of KACST",
    category: "Community Service",
    icon: "Handshake",
    meets: "Biweekly · Student Activity Center",
    description: "Community development and leadership training carried out in partnership with Rotary International.",
  },
  {
    slug: "environment-sustainability-club",
    name: "Environment & Sustainability Club",
    category: "Community Service",
    icon: "Leaf",
    meets: "Saturdays · Green Campus Grounds",
    description: "Campus greening, waste-reduction drives and awareness campaigns for a more sustainable KACST.",
  },
]
