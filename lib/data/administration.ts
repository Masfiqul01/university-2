// Administration page (/administration) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.
export const OFFICES = [
  { title: "Vice-Chancellor", href: "/administration/vice-chancellor", icon: "Users" },
  { title: "Pro Vice-Chancellor", href: "/administration/pro-vice-chancellor", icon: "GraduationCap" },
  { title: "Registrar", href: "/administration/registrar", icon: "Landmark" },
  { title: "Treasurer", href: "/administration/treasurer", icon: "ShieldCheck" },
  { title: "Controller of Examinations", href: "/administration/controller-of-examinations", icon: "Briefcase" },
  { title: "Deans & Heads", href: "/administration/deans-heads", icon: "Building2" },
]

// Detail-page content for the named leadership profiles below (Chancellor,
// Vice-Chancellor, Pro Vice-Chancellor, Treasurer). Name/title/description and
// photos for these live in lib/data/leadership.ts (CHANCELLOR, LEADERS) — these
// objects supply only the additional message/responsibilities/contact content.
export const CHANCELLOR_PROFILE = {
  message:
    "The Chancellor serves as the ceremonial and constitutional head of the university, upholding the values, integrity and vision set out in its founding charter. This office exists to safeguard academic freedom and institutional excellence for every student and faculty member who calls this university home.",
  responsibilities: [
    "Serves as the ceremonial head of the university under the University Act",
    "Presides over Convocation and confers degrees on graduating students",
    "Approves the appointment of the Vice-Chancellor on recommendation of the Syndicate",
    "Upholds the university's charter, statutes and academic integrity",
    "Provides guidance on national higher-education policy alignment",
  ],
  contact: {
    office: "Chancellor's Secretariat, c/o Vice-Chancellor's Office, Administrative Building",
    phone: "+88 041 7698461-001",
    email: "chancellor@kkjstu.ac.bd",
    hours: "Correspondence coordinated Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

export const VICE_CHANCELLOR_PROFILE = {
  message:
    "It is my privilege to lead a university community defined by curiosity, discipline and care for one another. Our priority is simple: give every student the tools, mentorship and opportunity to grow into confident professionals and principled citizens, while building a research culture that serves Bangladesh and beyond.",
  responsibilities: [
    "Serves as the chief academic and executive officer of the university",
    "Chairs the Academic Council and the Syndicate",
    "Directs strategic planning, quality assurance and institutional policy",
    "Oversees faculty recruitment, promotion and academic standards",
    "Represents the university in national and international forums",
  ],
  priorities: [
    { icon: "Target", title: "Academic Excellence", description: "Strengthening curricula, teaching quality and learning outcomes across every faculty." },
    { icon: "Microscope", title: "Research & Innovation", description: "Growing a research culture that produces work of real national and global relevance." },
    { icon: "TrendingUp", title: "Institutional Growth", description: "Expanding programs, partnerships and infrastructure to serve more students well." },
  ],
  contact: {
    office: "Vice-Chancellor's Office, 2nd Floor, Administrative Building",
    phone: "+88 041 7698461-002",
    email: "vc@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

export const PRO_VICE_CHANCELLOR_PROFILE = {
  message:
    "My role is to translate the university's academic vision into everyday practice — stronger curricula, active research supervision and a quality-assurance culture that never loses sight of the student experience. I work closely with every faculty to make that vision real.",
  responsibilities: [
    "Assists the Vice-Chancellor in academic administration and governance",
    "Coordinates research initiatives and institutional quality assurance",
    "Oversees curriculum development and review across all faculties",
    "Acts on behalf of the Vice-Chancellor when duties are delegated",
    "Supports long-term institutional planning and strategic development",
  ],
  contact: {
    office: "Pro Vice-Chancellor's Office, 2nd Floor, Administrative Building",
    phone: "+88 041 7698461-003",
    email: "pvc@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

export const TREASURER_PROFILE = {
  message:
    "Sound financial stewardship is what allows this university to invest confidently in its students, faculty and facilities. My office is committed to transparent budgeting, careful resource management and full accountability to the university community.",
  responsibilities: [
    "Oversees university financial planning and annual budget administration",
    "Ensures transparent and accountable use of institutional funds",
    "Supervises accounts, internal audit and financial reporting",
    "Manages endowments, grants and revenue from university resources",
    "Advises the Syndicate on financial policy and resource allocation",
  ],
  pillars: [
    { icon: "Wallet", title: "Transparent Budgeting", description: "Clear, accountable planning and allocation of institutional funds each fiscal year." },
    { icon: "ClipboardCheck", title: "Audit & Compliance", description: "Regular internal and external audits that safeguard financial integrity." },
    { icon: "BarChart3", title: "Resource Planning", description: "Long-term financial planning that supports sustainable institutional growth." },
  ],
  contact: {
    office: "Treasurer's Office, 1st Floor, Administrative Building",
    phone: "+88 041 7698461-004",
    email: "treasurer@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

// Office-overview pages that don't have a named individual yet — Registrar,
// Controller of Examinations, and Deans & Heads read as institutional office
// profiles (role/mandate, responsibilities, services, contact) rather than a
// fabricated person.
export const REGISTRAR_OFFICE = {
  title: "Office of the Registrar",
  mandate:
    "The Registrar's Office is the university's principal administrative authority and the custodian of academic records, official correspondence and the university seal. It is often a student's or alumnus's first point of contact for anything documentary.",
  responsibilities: [
    "Maintains official student records, transcripts and certificates",
    "Coordinates admissions processing and enrolment verification",
    "Prepares and issues official notices, circulars and correspondence",
    "Serves as secretary to the Syndicate and Academic Council",
    "Acts as custodian of the university seal and official documents",
    "Coordinates Convocation and other formal university ceremonies",
  ],
  services: [
    "Transcript and academic certificate issuance",
    "Verification of student records for employers and institutions",
    "Provisional and original certificate collection",
    "Attestation of academic documents",
    "General correspondence and information requests",
  ],
  process: [
    { title: "Submit a Written Request", description: "Complete a transcript or certificate request form available at the Registrar's Office or by email, including student ID and program details." },
    { title: "Pay the Applicable Fee", description: "Settle the processing fee at the university accounts section and retain the payment receipt." },
    { title: "Processing & Verification", description: "The Registrar's Office verifies the academic record and prepares the official document for signature and sealing." },
    { title: "Collection or Dispatch", description: "Collect the document in person with valid ID, or request postal dispatch to an institution or employer." },
  ],
  contact: {
    office: "Registrar's Office, Ground Floor, Administrative Building",
    phone: "+88 041 7698461-005",
    email: "registrar@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

export const CONTROLLER_OF_EXAMINATIONS_OFFICE = {
  title: "Office of the Controller of Examinations",
  mandate:
    "The Office of the Controller of Examinations plans, conducts and safeguards the integrity of every university examination — from question-paper preparation to final result publication — in line with Academic Council regulations.",
  responsibilities: [
    "Schedules and administers semester and annual examinations",
    "Ensures the confidentiality and security of question papers",
    "Coordinates examination venues, invigilation and seating arrangements",
    "Processes scripts, tabulates marks and publishes official results",
    "Handles rechecking, re-evaluation and result-correction requests",
    "Issues mark sheets, grade sheets and examination certificates",
  ],
  services: [
    "Examination routines and admit card distribution",
    "Result publication and grade sheet issuance",
    "Rechecking and re-evaluation applications",
    "Duplicate mark sheet and certificate requests",
    "Examination-related complaints and support",
  ],
  process: [
    { title: "Script Collection & Coding", description: "Answer scripts are collected from examination centers and coded to keep evaluation anonymous." },
    { title: "Evaluation & Moderation", description: "Scripts are marked by subject examiners and moderated to ensure consistent, fair grading." },
    { title: "Tabulation & Verification", description: "Marks are tabulated, cross-checked and verified by the examination committee before approval." },
    { title: "Result Publication", description: "Approved results are published through the Student Portal and official notice board, with mark sheets issued shortly after." },
  ],
  contact: {
    office: "Examinations Building, Ground Floor",
    phone: "+88 041 7698461-006",
    email: "controller.exams@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

export const DEANS_HEADS_OFFICE = {
  title: "Deans & Heads",
  mandate:
    "Deans and Heads of Department provide academic leadership within their faculties and departments, translating university policy into day-to-day teaching, research supervision and student support.",
  responsibilities: [
    "Leads academic planning and curriculum oversight within each faculty",
    "Supervises department heads, faculty workload and recruitment",
    "Chairs faculty boards and departmental academic committees",
    "Monitors teaching quality, research output and student progression",
    "Represents faculty interests on the Academic Council",
    "Coordinates internal examination arrangements with the Controller of Examinations",
  ],
  services: [
    "Faculty and departmental academic advising",
    "Course and curriculum enquiries",
    "Research supervision coordination",
    "Student academic grievance handling",
    "Faculty meeting and committee scheduling",
  ],
  contact: {
    office: "Deans' Secretariat, Academic Building",
    phone: "+88 041 7698461-007",
    email: "deans@kkjstu.ac.bd",
    hours: "Sunday–Thursday, 9:00 AM – 5:00 PM",
  },
}

// /administration/offices — full directory of leadership offices and
// administrative units. Entries without an `href` don't have a dedicated page
// yet (kept as informational cards, per the hub page's "Add official offices
// such as Finance, Planning, ICT, Student Affairs..." note).
export const ADMIN_DIRECTORY = [
  { title: "Office of the Chancellor", description: "Ceremonial head of the university and custodian of its charter.", icon: "Award", href: "/administration/chancellor" },
  { title: "Office of the Vice-Chancellor", description: "Chief academic and executive officer of the university.", icon: "Users", href: "/administration/vice-chancellor" },
  { title: "Office of the Pro Vice-Chancellor", description: "Academic coordination, research and quality assurance.", icon: "GraduationCap", href: "/administration/pro-vice-chancellor" },
  { title: "Office of the Treasurer", description: "Financial planning, budgeting and institutional accountability.", icon: "ShieldCheck", href: "/administration/treasurer" },
  { title: "Office of the Registrar", description: "Academic records, admissions processing and official correspondence.", icon: "Landmark", href: "/administration/registrar" },
  { title: "Controller of Examinations", description: "Examination scheduling, results and academic assessment integrity.", icon: "Briefcase", href: "/administration/controller-of-examinations" },
  { title: "Deans & Heads", description: "Faculty and departmental academic leadership.", icon: "Building2", href: "/administration/deans-heads" },
  { title: "Finance & Accounts", description: "Institutional accounting, payroll and financial operations.", icon: "Wallet" },
  { title: "Planning & Development", description: "Infrastructure planning and institutional development projects.", icon: "TrendingUp" },
  { title: "ICT Cell", description: "Campus network, digital systems and IT support services.", icon: "CircuitBoard" },
  { title: "Student Affairs", description: "Student welfare, discipline and extracurricular coordination.", icon: "HeartHandshake" },
  { title: "Library", description: "Books, journals, digital resources and study spaces.", icon: "Library", href: "/library" },
  { title: "Transport", description: "University bus routes and campus transport services.", icon: "Bus", href: "/transport" },
]
