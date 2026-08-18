// `icon` is a key into lib/icon-map.tsx's ICON_MAP — shown next to each
// dropdown/mega-menu item in the navbar.
export type NavChild = { label: string; href: string; icon: string }
export type NavItem = { label: string; href: string; children?: NavChild[]; mega?: boolean }

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About KACST", href: "/about", icon: "Info" },
      { label: "History", href: "/about/history", icon: "History" },
      { label: "Mission & Vision", href: "/about/mission-vision", icon: "Target" },
      { label: "Leadership", href: "/about/leadership", icon: "Users" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Academic Programs", href: "/academics/programs", icon: "BookOpen" },
      { label: "Faculties & Departments", href: "/academics/faculties", icon: "Building2" },
      { label: "Academic Calendar", href: "/academics/calendar", icon: "CalendarDays" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Undergraduate", href: "/admissions/undergraduate", icon: "GraduationCap" },
      { label: "Postgraduate", href: "/admissions/postgraduate", icon: "Award" },
      { label: "Admission Requirements", href: "/admissions/requirements", icon: "ClipboardList" },
      { label: "Apply Now", href: "/admissions/apply", icon: "Send" },
    ],
  },
  // শুধু Administration-এর জন্য mega menu যোগ করা হয়েছে; বাকি navbar items আগের মতোই রাখা হয়েছে।
  {
    label: "Administration",
    href: "/administration",
    mega: true,
    children: [
      { label: "Administration Overview", href: "/administration", icon: "LayoutGrid" },
      { label: "Vice-Chancellor", href: "/administration/vice-chancellor", icon: "Users" },
      { label: "Pro Vice-Chancellor", href: "/administration/pro-vice-chancellor", icon: "UserCog" },
      { label: "Registrar", href: "/administration/registrar", icon: "Landmark" },
      { label: "Treasurer", href: "/administration/treasurer", icon: "Wallet" },
      { label: "Controller of Examinations", href: "/administration/controller-of-examinations", icon: "ClipboardCheck" },
      { label: "Deans & Heads", href: "/administration/deans-heads", icon: "Building2" },
      { label: "Administrative Offices", href: "/administration/offices", icon: "Briefcase" },
      { label: "Student Portal", href: "/student-portal", icon: "GraduationCap" },
      { label: "Teacher Portal", href: "/teacher-portal", icon: "Presentation" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research", href: "/research", icon: "FlaskConical" },
      { label: "Research Centers", href: "/research/centers", icon: "Building2" },
      { label: "Publications", href: "/research/publications", icon: "ScrollText" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Campus Life", href: "/campus-life", icon: "Trees" },
      { label: "Facilities", href: "/campus-life/facilities", icon: "Building2" },
      { label: "Student Life", href: "/campus-life/student-life", icon: "Users" },
      { label: "Clubs & Organizations", href: "/campus-life/clubs", icon: "Handshake" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news", icon: "Newspaper" },
      { label: "Events", href: "/events", icon: "CalendarDays" },
      { label: "Notice Board", href: "/notice-board", icon: "Bell" },
    ],
  },
  { label: "Contact", href: "/contact" },
]
