// Academic Calendar page (/academics/calendar) data — edit or add items here.
// `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const CALENDAR_HERO = {
  eyebrow: "Academic Calendar",
  title: "Plan Your Academic Journey With Confidence",
  description:
    "Stay informed about semester schedules, registration, examinations, results, vacations and important academic deadlines at KKJSTU.",
  image:
    "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp",
  imageAlt: "KACST campus",
}

export const CALENDAR_SELECTOR = {
  yearLabel: "Academic Year",
  years: ["2026", "2025", "2024"],
  semesterLabel: "Semester",
  semesters: ["Spring Semester", "Summer Semester", "Fall Semester"],
  noticeLabel: "Current Academic Year",
}

export const KEY_DATES_INTRO = {
  eyebrow: "Key Academic Dates",
  title: "Important Dates at a Glance",
  description:
    "Keep track of the major academic milestones throughout the semester.",
}

export const SUMMARY_CARDS = [
  {
    title: "Registration Opens",
    date: "05 January",
    description: "Spring Semester 2026",
    icon: "ClipboardCheck",
  },
  {
    title: "Classes Begin",
    date: "18 January",
    description: "Spring Semester 2026",
    icon: "BookOpen",
  },
  {
    title: "Mid-Term",
    date: "15 March",
    description: "Examination Week",
    icon: "Clock3",
  },
  {
    title: "Final Examination",
    date: "10 May",
    description: "End Semester Examination",
    icon: "GraduationCap",
  },
  {
    title: "Result Publication",
    date: "15 June",
    description: "Semester Results",
    icon: "Trophy",
  },
  {
    title: "Vacation",
    date: "20 June",
    description: "Summer Vacation",
    icon: "Plane",
  },
]

export const SCHEDULE_INTRO = {
  eyebrow: "Semester Calendar",
  title: "Academic Schedule",
  monthFilterAll: "All Months",
  tableHeaders: ["Event", "Start Date", "End Date", "Audience", "Notice"],
  downloadLabel: "Download",
  downloadNoticeLabel: "Download Notice",
  detailLabels: { start: "Start", end: "End", audience: "Audience" },
}

export const CALENDAR_EVENTS = [
  {
    event: "Spring Semester Registration",
    start: "05 January 2026",
    end: "15 January 2026",
    audience: "All Students",
    type: "registration",
  },
  {
    event: "Spring Semester Classes Begin",
    start: "18 January 2026",
    end: "18 January 2026",
    audience: "Students & Faculty",
    type: "class",
  },
  {
    event: "Mid-Term Examination",
    start: "15 March 2026",
    end: "21 March 2026",
    audience: "Students",
    type: "exam",
  },
  {
    event: "Final Examination",
    start: "10 May 2026",
    end: "23 May 2026",
    audience: "Students",
    type: "exam",
  },
  {
    event: "Result Publication",
    start: "15 June 2026",
    end: "15 June 2026",
    audience: "Students",
    type: "result",
  },
  {
    event: "Summer Vacation",
    start: "20 June 2026",
    end: "15 July 2026",
    audience: "Students & Faculty",
    type: "vacation",
  },
]

// Icon used per calendar event `type`.
export const EVENT_TYPE_ICONS: Record<string, string> = {
  registration: "ClipboardCheck",
  class: "BookOpen",
  exam: "FileText",
  result: "Trophy",
  vacation: "Plane",
  default: "CalendarDays",
}

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const CALENDAR_DOWNLOAD = {
  icon: "Download",
  title: "Download Academic Calendar",
  description:
    "Download the complete academic calendar for the current academic year and keep a copy for your reference.",
  buttonLabel: "Download PDF",
}

export const CALENDAR_STAY_UPDATED = {
  icon: "Bell",
  title: "Stay Updated",
  description:
    "Check the university notice board regularly for schedule changes and important academic announcements.",
  linkLabel: "View Notices",
}

export const CALENDAR_HELP_CTA = {
  eyebrow: "Academic Support",
  title: "Need Help With the Academic Schedule?",
  description:
    "Our Academic Office is available to help students, faculty and guardians with questions about registration, examinations, results and important academic deadlines.",
  primary: { label: "Contact Academic Office", icon: "Mail" },
  secondary: { label: "Get Assistance", icon: "Phone" },
}
