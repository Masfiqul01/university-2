// Faculties & Departments page (/about/faculties) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.
export type FacultyEntry = {
  title: string
  description: string
  departments: number
  icon: string
  accent: string
}

export const FACULTIES_LIST: FacultyEntry[] = [
  {
    title: "Faculty of Science & Engineering",
    description: "Advancing scientific knowledge and engineering excellence through quality education, innovation and research.",
    departments: 7,
    icon: "Atom",
    accent: "border-blue-500",
  },
  {
    title: "Faculty of Computer Science & IT",
    description: "Empowering the next generation of technology leaders, developers and digital innovators.",
    departments: 5,
    icon: "Computer",
    accent: "border-indigo-500",
  },
  {
    title: "Faculty of Business Studies",
    description: "Shaping future business leaders with modern knowledge, strategic thinking and ethical values.",
    departments: 4,
    icon: "BriefcaseBusiness",
    accent: "border-emerald-500",
  },
  {
    title: "Faculty of Arts & Humanities",
    description: "Promoting human values, culture, languages and creative excellence for a better society.",
    departments: 3,
    icon: "BookOpen",
    accent: "border-purple-500",
  },
  {
    title: "Faculty of Agricultural Science",
    description: "Advancing sustainable agriculture through research, innovation, education and practical knowledge.",
    departments: 3,
    icon: "Leaf",
    accent: "border-green-600",
  },
]

export type DepartmentEntry = {
  name: string
  faculty: string
  description: string
  icon: string
}

export const DEPARTMENTS_LIST: DepartmentEntry[] = [
  {
    name: "Department of Civil Engineering",
    faculty: "Science & Engineering",
    description: "Building the foundations for a better tomorrow.",
    icon: "Building2",
  },
  {
    name: "Department of Electrical & Electronic Engineering",
    faculty: "Science & Engineering",
    description: "Powering innovation and sustainable solutions.",
    icon: "Zap",
  },
  {
    name: "Department of Computer Science & Engineering",
    faculty: "Computer Science & IT",
    description: "Where code meets creativity and innovation.",
    icon: "Computer",
  },
  {
    name: "Department of Mechanical Engineering",
    faculty: "Science & Engineering",
    description: "Designing, innovating and building the future.",
    icon: "Settings",
  },
  {
    name: "Department of Business Administration",
    faculty: "Business Studies",
    description: "Developing leaders for the global economy.",
    icon: "BriefcaseBusiness",
  },
  {
    name: "Department of English",
    faculty: "Arts & Humanities",
    description: "Inspiring minds through language, literature and communication.",
    icon: "BookOpen",
  },
  {
    name: "Department of Environmental Science",
    faculty: "Science & Engineering",
    description: "Creating solutions for a sustainable future.",
    icon: "FlaskConical",
  },
  {
    name: "Department of Information Technology",
    faculty: "Computer Science & IT",
    description: "Building secure and intelligent digital experiences.",
    icon: "Computer",
  },
  {
    name: "Department of Accounting",
    faculty: "Business Studies",
    description: "Developing financial expertise for modern organizations.",
    icon: "BriefcaseBusiness",
  },
]

export const DEPARTMENT_FILTERS = [
  "All Departments",
  "Science & Engineering",
  "Computer Science & IT",
  "Business Studies",
  "Arts & Humanities",
  "Agricultural Science",
]
