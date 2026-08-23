// HOD Login (/hod-login) and HOD Portal (/hod-portal) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

/**
 * Demo credentials only — there is no authentication backend yet. Swap this
 * for a real API call once the university issues HOD accounts.
 */
export const HOD_DEMO_ACCOUNTS = [
  {
    id: "HOD-CSE-01",
    password: "kacst2026",
    name: "Dr. Rezaul Karim",
    department: "Computer Science & Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: "HOD-EEE-01",
    password: "kacst2026",
    name: "Dr. Farida Yasmin",
    department: "Electrical & Electronic Engineering",
    faculty: "Faculty of Engineering",
  },
  {
    id: "HOD-BBA-01",
    password: "kacst2026",
    name: "Dr. Shahin Alam",
    department: "Business Administration",
    faculty: "Faculty of Business Studies",
  },
]

export const HOD_LOGIN_METADATA = {
  title: "HOD Login",
  description:
    "Secure sign-in for heads of departments and authorized academic administrators at KACST.",
}

export const HOD_LOGIN_CONTENT = {
  eyebrow: "Department Access",
  title: "HOD Login",
  description:
    "Sign in to manage your department's faculty, courses, approvals and academic performance.",
  idLabel: "HOD ID",
  idPlaceholder: "e.g. HOD-CSE-01",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  submitLabel: "Sign In",
  submitLoadingLabel: "Signing in...",
  missingMessage: "Enter your HOD ID and password.",
  errorMessage: "Invalid HOD ID or password. Please try again.",
  demoNote: "Demo access — no backend connected yet",
  demoAccounts: [
    { id: "HOD-CSE-01", password: "kacst2026", label: "Computer Science & Engineering" },
    { id: "HOD-EEE-01", password: "kacst2026", label: "Electrical & Electronic Engineering" },
    { id: "HOD-BBA-01", password: "kacst2026", label: "Business Administration" },
  ],
  highlights: [
    {
      icon: "Users",
      title: "Faculty Management",
      text: "Review workload, attendance and staff records for your department.",
    },
    {
      icon: "ClipboardCheck",
      title: "Approvals",
      text: "Approve leave, course and requisition requests in one queue.",
    },
    {
      icon: "BarChart3",
      title: "Department Reports",
      text: "Track enrollment, results and academic performance at a glance.",
    },
  ],
}

export const HOD_PORTAL_BRAND = {
  eyebrow: "KACST",
  title: "HOD Portal",
}

export const HOD_NAV = [
  { label: "Dashboard", href: "#dashboard", icon: "LayoutDashboard" },
  { label: "Faculty", href: "#faculty", icon: "Users" },
  { label: "Approvals", href: "#approvals", icon: "ClipboardCheck" },
  { label: "Courses", href: "#courses", icon: "BookOpen" },
  { label: "Students", href: "#students", icon: "GraduationCap" },
  { label: "Meetings", href: "#meetings", icon: "CalendarDays" },
  { label: "Notices", href: "#notices", icon: "Bell" },
  { label: "Reports", href: "#reports", icon: "BarChart3" },
  { label: "Settings", href: "#settings", icon: "Settings" },
]

export const HOD_QUICK_ACCESS = {
  label: "Quick access",
  links: [
    { label: "Teacher Portal", href: "/teacher-portal" },
    { label: "Administration", href: "/administration" },
  ],
}

export const HOD_TOPBAR = {
  searchPlaceholder: "Search faculty, courses, requests...",
}

export const HOD_DASHBOARD = {
  eyebrow: "HOD Dashboard",
  description:
    "Manage your department's faculty, courses, approvals and academic performance from one place.",
  dateLabel: "Today",
  dateValue: "Sunday · 23 August 2026",
}

export const HOD_STATS = [
  { title: "Department Faculty", value: "14", meta: "Full-time staff", icon: "Users" },
  { title: "Enrolled Students", value: "412", meta: "Across all batches", icon: "GraduationCap" },
  { title: "Active Courses", value: "18", meta: "This semester", icon: "BookOpen" },
]

export const HOD_FACULTY = {
  eyebrow: "Faculty",
  title: "Faculty Management",
  viewAllLabel: "View all",
  items: [
    { name: "Dr. R. Karim", designation: "Associate Professor", courses: 3, status: "Active" },
    { name: "Dr. F. Sultana", designation: "Assistant Professor", courses: 2, status: "Active" },
    { name: "Dr. K. Ahmed", designation: "Lecturer", courses: 4, status: "On Leave" },
    { name: "Dr. J. Begum", designation: "Assistant Professor", courses: 3, status: "Active" },
  ],
}

export const HOD_APPROVALS = {
  eyebrow: "Requests",
  title: "Pending Approvals",
  items: [
    { title: "Leave request — Dr. K. Ahmed", meta: "3 days · Submitted yesterday" },
    { title: "Course syllabus update — CSE 3103", meta: "Awaiting review" },
    { title: "Lab equipment requisition", meta: "Software Engineering Lab" },
    { title: "Exam question moderation — CSE 4205", meta: "2 papers pending" },
  ],
}

export const HOD_COURSES = {
  eyebrow: "Academics",
  title: "Course Oversight",
  items: [
    { code: "CSE 2101", title: "Data Structures", teacher: "Dr. Rahman", students: 56 },
    { code: "CSE 3103", title: "Database Systems", teacher: "Dr. F. Sultana", students: 48 },
    { code: "CSE 4205", title: "Artificial Intelligence", teacher: "Dr. R. Karim", students: 39 },
  ],
}

export const HOD_MEETINGS = {
  eyebrow: "Schedule",
  title: "Upcoming Meetings",
  items: [
    "Thu · 10:00 AM · Department faculty meeting",
    "Fri · 02:00 PM · Curriculum review committee",
    "Mon · 11:30 AM · Student academic council",
  ],
}

export const HOD_STUDENTS = {
  eyebrow: "Students",
  title: "Student Overview",
  stats: [
    { value: "412", label: "Total enrolled" },
    { value: "23", label: "Need advising" },
  ],
}

export const HOD_NOTICES = {
  eyebrow: "Notices",
  title: "Department Notices",
  items: [
    "Mid-term evaluation schedule updated",
    "Faculty meeting rescheduled to Thursday",
    "Course file submission deadline — 30 August",
  ],
}

export const HOD_REPORTS = {
  eyebrow: "Performance",
  title: "Department Reports",
  primaryText: "Enrollment, results and faculty performance analytics will appear here.",
  secondaryText:
    "Connect this section to the university backend when reporting data is available.",
}

export const HOD_SETTINGS = {
  eyebrow: "Account",
  title: "HOD Settings",
  items: ["Profile & contact", "Notification preferences", "Security"],
}
