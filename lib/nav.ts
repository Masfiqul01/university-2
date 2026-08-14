export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[]; mega?: boolean }

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About KKJSTU", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Faculties & Departments", href: "/about/faculties" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Academic Programs", href: "/academics/programs" },
      { label: "Faculties & Departments", href: "/academics/faculties" },
      { label: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Undergraduate", href: "/admissions/undergraduate" },
      { label: "Postgraduate", href: "/admissions/postgraduate" },
      { label: "Admission Requirements", href: "/admissions/requirements" },
      { label: "Apply Now", href: "/admissions/apply" },
    ],
  },
  // শুধু Administration-এর জন্য mega menu যোগ করা হয়েছে; বাকি navbar items আগের মতোই রাখা হয়েছে।
  {
    label: "Administration",
    href: "/administration",
    mega: true,
    children: [
      { label: "Administration Overview", href: "/administration" },
      { label: "Vice-Chancellor", href: "/administration/vice-chancellor" },
      { label: "Pro Vice-Chancellor", href: "/administration/pro-vice-chancellor" },
      { label: "Registrar", href: "/administration/registrar" },
      { label: "Treasurer", href: "/administration/treasurer" },
      { label: "Controller of Examinations", href: "/administration/controller-of-examinations" },
      { label: "Deans & Heads", href: "/administration/deans-heads" },
      { label: "Administrative Offices", href: "/administration/offices" },
      { label: "Student Portal", href: "/student-portal" },
      { label: "Teacher Portal", href: "/teacher-portal" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research", href: "/research" },
      { label: "Research Centers", href: "/research/centers" },
      { label: "Publications", href: "/research/publications" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      { label: "Campus Life", href: "/campus-life" },
      { label: "Facilities", href: "/campus-life/facilities" },
      { label: "Student Life", href: "/campus-life/student-life" },
      { label: "Clubs & Organizations", href: "/campus-life/clubs" },
    ],
  },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Notice Board", href: "/notice-board" },
    ],
  },
  { label: "Contact", href: "/contact" },
]
