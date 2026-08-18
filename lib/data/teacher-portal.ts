// Teacher Portal page (/teacher-portal) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.
export const TEACHER = {
  name: "Dr. Rahman",
  title: "Faculty Member",
  department: "Department of Computer Science & Engineering",
  email: "rahman.cse@kkjstu.ac.bd",
  phone: "+88 041 7698461-118",
  initials: "DR",
  today: "Sunday · 11 August 2026",
}

export const PORTAL_NAV = [
  { label: "Dashboard", href: "#dashboard", icon: "LayoutDashboard" },
  { label: "My Classes", href: "#classes", icon: "BookOpen" },
  { label: "Class Routine", href: "#routine", icon: "CalendarDays" },
  { label: "Attendance", href: "#attendance", icon: "ClipboardCheck" },
  { label: "Assignments", href: "#assignments", icon: "FileText" },
  { label: "Students", href: "#students", icon: "Users" },
  { label: "Notices", href: "#notices", icon: "Bell" },
  { label: "Messages", href: "#messages", icon: "MessageSquare" },
  { label: "Settings", href: "#settings", icon: "Settings" },
]

export const STAT_TILES = [
  { title: "Active Classes", value: "06", meta: "This semester", icon: "BookOpen" },
  { title: "Total Students", value: "248", meta: "Across all classes", icon: "Users" },
  { title: "Attendance", value: "92.4%", meta: "This month", icon: "BarChart3" },
  { title: "Pending Tasks", value: "08", meta: "Need attention", icon: "ClipboardCheck" },
]

export const MY_CLASSES = [
  "CSE 2101 · Data Structures",
  "CSE 3103 · Database Systems",
  "CSE 4205 · Artificial Intelligence",
  "CSE 2207 · Web Engineering",
  "CSE 3208 · Computer Networks",
  "CSE 4301 · Software Engineering",
]

export const TODAYS_ROUTINE = [
  "09:00 AM · Data Structures",
  "11:30 AM · Database Systems",
  "02:00 PM · AI Lab",
]

export const ATTENDANCE_OVERVIEW = {
  percent: "92.4%",
  present: "228",
  absent: "14",
  late: "06",
}

export const ASSIGNMENT_QUEUE: [string, string][] = [
  ["Database normalization task", "Due tomorrow"],
  ["AI mini project review", "5 submissions"],
  ["Data Structures quiz", "Publish results"],
]

export const STUDENT_SUPPORT = {
  needAdvising: "18",
  messages: "07",
}

export const FACULTY_NOTICES = [
  "Mid-term evaluation schedule updated",
  "Faculty meeting on Thursday",
  "Course file submission reminder",
]
