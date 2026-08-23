// Student Login (/student-login) and Student Portal (/student-portal) data.
// The portal page itself renders the <StudentPortal /> component from
// components/student-portal.tsx; only the route metadata and login content
// live here. `icon` values are keys into lib/icon-map.tsx's ICON_MAP.

export const STUDENT_PORTAL_METADATA = {
  title: "Student Portal",
  description:
    "KACST student services portal for academic resources, registration, results, notices and support.",
}

/**
 * Demo credentials only — there is no authentication backend yet. Swap this
 * for a real API call once the university issues student accounts.
 */
export const STUDENT_DEMO_ACCOUNTS = [
  {
    id: "STU-CSE-101",
    password: "kacst2026",
    name: "Rafiul Islam",
    program: "BSc in Computer Science & Engineering",
    year: "3rd Year",
  },
  {
    id: "STU-EEE-102",
    password: "kacst2026",
    name: "Nusrat Jahan",
    program: "BSc in Electrical & Electronic Engineering",
    year: "2nd Year",
  },
  {
    id: "STU-BBA-103",
    password: "kacst2026",
    name: "Tanvir Ahmed",
    program: "BBA in Business Administration",
    year: "1st Year",
  },
]

export const STUDENT_LOGIN_METADATA = {
  title: "Student Login",
  description: "Secure sign-in for KACST students to access the student portal.",
}

export const STUDENT_LOGIN_CONTENT = {
  eyebrow: "Student Access",
  title: "Student Login",
  description: "Sign in to access registration, results, notices and student services.",
  idLabel: "Student ID",
  idPlaceholder: "e.g. STU-CSE-101",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  submitLabel: "Sign In",
  submitLoadingLabel: "Signing in...",
  missingMessage: "Enter your Student ID and password.",
  errorMessage: "Invalid Student ID or password. Please try again.",
  demoNote: "Demo access — no backend connected yet",
  demoAccounts: [
    { id: "STU-CSE-101", password: "kacst2026", label: "Computer Science & Engineering" },
    { id: "STU-EEE-102", password: "kacst2026", label: "Electrical & Electronic Engineering" },
    { id: "STU-BBA-103", password: "kacst2026", label: "Business Administration" },
  ],
  highlights: [
    {
      icon: "FileText",
      title: "Course Registration",
      text: "Register for courses and manage your semester enrollment.",
    },
    {
      icon: "BarChart3",
      title: "Results",
      text: "View examination results and track your academic performance.",
    },
    {
      icon: "Bell",
      title: "Notices & Services",
      text: "Stay updated with notices and reach student support quickly.",
    },
  ],
}
