// Faculties & Departments page (/academics) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.

export const HERO_IMAGE =
  "https://res.cloudinary.com/dhtavcr26/image/upload/v1786606085/banner1_cy6kuf.webp"

export const SPOTLIGHT_IMAGE =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"

export type Faculty = {
  name: string
  dean: string
  phone: string
  email: string
  departments: number
  disciplines: string
  icon: string
  iconBg: string
  iconColor: string
}

export type Department = {
  name: string
  faculty: string
  discipline: string
  degrees: string
  programs: string
  phone: string
  email: string
  icon: string
  iconBg: string
  iconColor: string
}

export const FACULTIES: Faculty[] = [
  {
    name: "Faculty of Engineering",
    dean: "Dean's Office",
    phone: "+88 041 7698461-101",
    email: "eng.dean@kkjstu.ac.bd",
    departments: 8,
    disciplines:
      "Civil, Mechanical, EEE, CSE, Industrial, Architecture, Marine, Textile",
    icon: "Settings",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Faculty of Science",
    dean: "Dean's Office",
    phone: "+88 041 7698461-201",
    email: "science.dean@kkjstu.ac.bd",
    departments: 6,
    disciplines:
      "Physics, Chemistry, Mathematics, Statistics, Biotechnology, Environmental Science",
    icon: "Atom",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    name: "Faculty of Business Studies",
    dean: "Dean's Office",
    phone: "+88 041 7698461-301",
    email: "business.dean@kkjstu.ac.bd",
    departments: 4,
    disciplines:
      "Accounting, Finance, Marketing, Management, Economics",
    icon: "Calculator",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    name: "Faculty of Humanities & Social Science",
    dean: "Dean's Office",
    phone: "+88 041 7698461-401",
    email: "dean.hss@kkjstu.ac.bd",
    departments: 5,
    disciplines:
      "English, Economics, Sociology, History, Philosophy",
    icon: "Building2",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    name: "Faculty of Technology",
    dean: "Dean's Office",
    phone: "+88 041 7698461-501",
    email: "dean.tech@kkjstu.ac.bd",
    departments: 7,
    disciplines:
      "Computer Science, IT, Software Engineering, Data Science, Telecommunication, Electronics",
    icon: "Cpu",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
]

export const DEPARTMENTS: Department[] = [
  {
    name: "Department of Computer Science & Engineering",
    faculty: "Faculty of Engineering",
    discipline: "Computer Science & Engineering",
    degrees: "BSc, MSc, PhD",
    programs: "6 Programs",
    phone: "+88 041 7698461-105",
    email: "cse@kkjstu.ac.bd",
    icon: "Code2",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Department of Physics",
    faculty: "Faculty of Science",
    discipline: "Physical Sciences",
    degrees: "BSc, MSc, PhD",
    programs: "4 Programs",
    phone: "+88 041 7698461-205",
    email: "physics@kkjstu.ac.bd",
    icon: "Atom",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    name: "Department of Business Administration",
    faculty: "Faculty of Business Studies",
    discipline: "Business & Management",
    degrees: "BBA, MBA, PhD",
    programs: "5 Programs",
    phone: "+88 041 7698461-305",
    email: "ba@kkjstu.ac.bd",
    icon: "Calculator",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    name: "Department of English",
    faculty: "Faculty of Humanities & Social Science",
    discipline: "Language & Literature",
    degrees: "BA, MA",
    programs: "3 Programs",
    phone: "+88 041 7698461-405",
    email: "english@kkjstu.ac.bd",
    icon: "Building2",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    name: "Department of Information Technology",
    faculty: "Faculty of Technology",
    discipline: "Information Technology",
    degrees: "BSc, MSc",
    programs: "4 Programs",
    phone: "+88 041 7698461-505",
    email: "it@kkjstu.ac.bd",
    icon: "CircuitBoard",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
]

export const HERO_STATS = [
  { value: "5", label: "Faculties", icon: "GraduationCap" },
  { value: "30+", label: "Departments", icon: "Settings" },
  { value: "100+", label: "Programs", icon: "Building2" },
]

export const ACADEMICS_STATS = [
  { value: "5", label: "Faculties", icon: "GraduationCap" },
  { value: "30+", label: "Departments", icon: "Settings" },
  { value: "100+", label: "Academic Programs", icon: "Calculator" },
  { value: "650+", label: "Faculty Members", icon: "Building2" },
  { value: "8,000+", label: "Students", icon: "Users" },
]

export const SPOTLIGHT_POINTS = [
  {
    icon: "GraduationCap",
    title: "Experienced Faculty",
    text: "Highly qualified and industry connected.",
  },
  {
    icon: "Microscope",
    title: "Research & Innovation",
    text: "Driving discoveries that create real impact.",
  },
  {
    icon: "Award",
    title: "Global Perspective",
    text: "Preparing graduates for a global future.",
  },
]
