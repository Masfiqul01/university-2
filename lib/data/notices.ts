// Notice Board page (/notice-board) data — edit or add items here.
// date must be "Mon DD, YYYY" text (used for display only, no parsing needed).
export type NoticeCategory = "Academic" | "Administrative" | "Admission" | "Exam" | "Others"

export const NOTICE_CATEGORIES: NoticeCategory[] = ["Academic", "Administrative", "Admission", "Exam", "Others"]

export const NOTICES_LIST = [
  {
    slug: "class-routine-spring-2025",
    category: "Academic" as NoticeCategory,
    date: "May 19, 2025",
    title: "Class Routine for Spring Semester 2025",
    description: "This is to inform all students that the class routine for Spring Semester 2025 has been published. Please check the routine and follow accordingly.",
  },
  {
    slug: "college-office-closed-21-may",
    category: "Administrative" as NoticeCategory,
    date: "May 18, 2025",
    title: "College Office Closed on 21 May 2025",
    description: "This is for general information that the college office will remain closed on Wednesday, 21 May 2025 on the occasion of a public holiday.",
  },
  {
    slug: "admission-open-fall-2025-26",
    category: "Admission" as NoticeCategory,
    date: "May 15, 2025",
    title: "Admission Open for Fall Semester 2025-26",
    description: "Applications are invited for admission in various undergraduate programs. Apply online within the given deadlines.",
  },
  {
    slug: "final-examination-form-fillup",
    category: "Exam" as NoticeCategory,
    date: "May 12, 2025",
    title: "Final Examination Form Fill-up Notice",
    description: "All eligible students are requested to complete the final examination form fill-up within the specified date.",
  },
  {
    slug: "national-memorial-day-observed",
    category: "Others" as NoticeCategory,
    date: "May 12, 2025",
    title: "National Memorial Day Observed",
    description: "The college will observe National Memorial Day on 15 August 2025 to honor the martyrs of our nation.",
  },
  {
    slug: "workshop-research-methodology",
    category: "Academic" as NoticeCategory,
    date: "May 08, 2025",
    title: "Workshop on Research Methodology",
    description: "A workshop on Research Methodology will be held on 28 May 2025. All interested students are encouraged to participate.",
  },
  {
    slug: "tuition-fee-payment-notice",
    category: "Administrative" as NoticeCategory,
    date: "May 05, 2025",
    title: "Tuition Fee Payment Notice",
    description: "Students are advised to complete their tuition fee payment for the current semester before the due date to avoid late fees.",
  },
  {
    slug: "scholarship-application-deadline",
    category: "Admission" as NoticeCategory,
    date: "Apr 28, 2025",
    title: "Scholarship Application Deadline Extended",
    description: "The deadline for merit and need-based scholarship applications has been extended by two weeks.",
  },
  {
    slug: "midterm-examination-schedule",
    category: "Exam" as NoticeCategory,
    date: "Apr 20, 2025",
    title: "Mid-Term Examination Schedule Published",
    description: "The mid-term examination schedule for all departments has been published on the student portal. Please check your routine.",
  },
]

export const IMPORTANT_LINKS = [
  { label: "Academic Calendar", href: "/academics/calendar" },
  { label: "Class Routine", href: "/notice-board" },
  { label: "Exam Routine", href: "/notice-board" },
  { label: "Result Portal", href: "/result-portal" },
  { label: "Student Handbook", href: "/notice-board" },
]

export const NOTICE_ARCHIVE = [
  { label: "May 2025", count: 12 },
  { label: "April 2025", count: 9 },
  { label: "March 2025", count: 7 },
  { label: "February 2025", count: 5 },
]
