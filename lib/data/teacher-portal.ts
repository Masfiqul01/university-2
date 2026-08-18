// Teacher Portal page (/teacher-portal) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const TEACHER_PORTAL_BRAND = {
  eyebrow: "KACST",
  title: "Teacher Portal",
}

export const TEACHER_NAV = [
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

export const TEACHER_QUICK_ACCESS = {
  label: "Quick access",
  links: [
    { label: "Student Portal", href: "/student-portal" },
    { label: "Administration", href: "/administration" },
  ],
}

export const TEACHER_TOPBAR = {
  searchPlaceholder: "Search classes, students, notices...",
  userInitials: "DR",
  userName: "Dr. Rahman",
  userRole: "Faculty Member",
}

export const TEACHER_DASHBOARD = {
  eyebrow: "Teacher Dashboard",
  title: "Good morning, Dr. Rahman",
  description:
    "Manage your classes, attendance, assignments and student communication from one place.",
  dateLabel: "Today",
  dateValue: "Sunday · 11 August 2026",
}

export const TEACHER_STATS = [
  { title: "Active Classes", value: "06", meta: "This semester", icon: "BookOpen" },
  { title: "Total Students", value: "248", meta: "Across all classes", icon: "Users" },
  { title: "Attendance", value: "92.4%", meta: "This month", icon: "BarChart3" },
  { title: "Pending Tasks", value: "08", meta: "Need attention", icon: "ClipboardCheck" },
]

export const TEACHER_CLASSES = {
  eyebrow: "Teaching",
  title: "My Classes",
  viewAllLabel: "View all",
  items: [
    "CSE 2101 · Data Structures",
    "CSE 3103 · Database Systems",
    "CSE 4205 · Artificial Intelligence",
    "CSE 2207 · Web Engineering",
  ],
}

export const TEACHER_ROUTINE = {
  eyebrow: "Schedule",
  title: "Today's Routine",
  items: [
    "09:00 AM · Data Structures",
    "11:30 AM · Database Systems",
    "02:00 PM · AI Lab",
  ],
}

export const TEACHER_ATTENDANCE = {
  eyebrow: "Overview",
  title: "Attendance",
  rate: "92.4%",
  breakdown: [
    { value: "228", label: "Present" },
    { value: "14", label: "Absent" },
    { value: "06", label: "Late" },
  ],
}

export const TEACHER_ASSIGNMENTS = {
  eyebrow: "Tasks",
  title: "Assignment Queue",
  items: [
    { title: "Database normalization task", meta: "Due tomorrow" },
    { title: "AI mini project review", meta: "5 submissions" },
    { title: "Data Structures quiz", meta: "Publish results" },
  ],
}

export const TEACHER_STUDENTS = {
  eyebrow: "Students",
  title: "Student Support",
  stats: [
    { value: "18", label: "Need advising" },
    { value: "07", label: "Messages" },
  ],
}

export const TEACHER_NOTICES = {
  eyebrow: "Notices",
  title: "Latest Faculty Notices",
  items: [
    "Mid-term evaluation schedule updated",
    "Faculty meeting on Thursday",
    "Course file submission reminder",
  ],
}

export const TEACHER_MESSAGES = {
  eyebrow: "Communication",
  title: "Messages",
  primaryText: "Student and department messages will appear here.",
  secondaryText:
    "Connect this section to the university backend when authentication and messaging are ready.",
}

export const TEACHER_SETTINGS = {
  eyebrow: "Account",
  title: "Teacher Settings",
  items: ["Profile & contact", "Notification preferences", "Security"],
}
