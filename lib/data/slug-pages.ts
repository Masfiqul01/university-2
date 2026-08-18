// Catch-all page (app/[...slug]/page.tsx) data — edit or add items here.
// `icon` fields are keys into lib/icon-map.tsx's ICON_MAP.

export type PageConfig = {
  title: string
  eyebrow: string
  subtitle: string
  image?: string
  crumbs: {label:string, href?:string}[]
}

export type CardItem = {
  title: string
  description: string
  icon?: string
}

// Generic top-level routes (e.g. /career, /sitemap) — hero config per route key.
export const GENERIC_PAGE_MAP: Record<string, PageConfig> = {
  academics: {title:"Academics", eyebrow:"Academic Excellence", subtitle:"Explore programs, faculties, departments, learning resources and the academic experience at KACST.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Academics"}]},
  admissions: {title:"Admissions", eyebrow:"Join KACST", subtitle:"Discover your path to a future shaped by knowledge, innovation and opportunity.", image:"/images/admissions-building.png", crumbs:[{label:"Home",href:"/"},{label:"Admissions"}]},
  research: {title:"Research & Innovation", eyebrow:"Research", subtitle:"Building knowledge through curiosity, collaboration and meaningful discovery.", image:"/images/campus-library.png", crumbs:[{label:"Home",href:"/"},{label:"Research"}]},
  "campus-life": {title:"Campus Life", eyebrow:"Life at KACST", subtitle:"A welcoming campus where learning, friendship, creativity and leadership grow together.", image:"/images/campus-green.png", crumbs:[{label:"Home",href:"/"},{label:"Campus Life"}]},
  news: {title:"University News", eyebrow:"News & Updates", subtitle:"Stay connected with the latest stories, achievements and announcements from KACST.", image:"/images/news-1.png", crumbs:[{label:"Home",href:"/"},{label:"News"}]},
  events: {title:"Events", eyebrow:"What's Happening", subtitle:"Explore academic, cultural, research and student events across the university.", image:"/images/news-2.png", crumbs:[{label:"Home",href:"/"},{label:"Events"}]},
  "notice-board": {title:"Notice Board", eyebrow:"Official Notices", subtitle:"Important academic, administrative, admission and campus notices in one place.", image:"/images/news-3.png", crumbs:[{label:"Home",href:"/"},{label:"Notice Board"}]},
  career: {title:"Career Opportunities", eyebrow:"Work With Us", subtitle:"Explore opportunities to contribute to teaching, research, administration and university life.", image:"/images/news-4.png", crumbs:[{label:"Home",href:"/"},{label:"Career"}]},
  library: {title:"University Library", eyebrow:"Learning Resources", subtitle:"A gateway to books, journals, digital resources and spaces for focused learning.", image:"/images/campus-library.png", crumbs:[{label:"Home",href:"/"},{label:"Library"}]},
  "student-portal": {title:"Student Portal", eyebrow:"Student Services", subtitle:"Quick access to academic information, registration, results, notices and student services.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Student Portal"}]},
  faculty: {title:"Faculty Directory", eyebrow:"Our People", subtitle:"Meet the academic community supporting teaching, research and student development.", image:"/images/campus-green.png", crumbs:[{label:"Home",href:"/"},{label:"Faculty"}]},
  contact: {title:"Contact KACST", eyebrow:"Get In Touch", subtitle:"Connect with the university for admissions, academics, research and general enquiries.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Contact"}]},
  login: {title:"University Login", eyebrow:"Secure Access", subtitle:"Sign in to access university services and personalized dashboards.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Login"}]},
  dashboard: {title:"Student Dashboard", eyebrow:"Student Services", subtitle:"Your central workspace for academic services, notices and account information.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Dashboard"}]},
  result: {title:"Result Portal", eyebrow:"Academic Results", subtitle:"View examination results and academic performance information.", image:"/images/news-2.png", crumbs:[{label:"Home",href:"/"},{label:"Result Portal"}]},
  "pay-fees": {title:"Pay Fees", eyebrow:"Student Finance", subtitle:"Review your fee information and continue to the university payment service.", image:"/images/admissions-building.png", crumbs:[{label:"Home",href:"/"},{label:"Pay Fees"}]},
  "hod-login": {title:"HOD Login", eyebrow:"Department Access", subtitle:"Secure access for heads of departments and authorized academic administrators.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"HOD Login"}]},
  "track-status": {title:"Track Application Status", eyebrow:"Admissions", subtitle:"Check the current status of your admission application using your application reference.", image:"/images/news-3.png", crumbs:[{label:"Home",href:"/"},{label:"Track Status"}]},
  iqac: {title:"IQAC", eyebrow:"Quality Assurance", subtitle:"Institutional quality assurance information, activities and resources.", image:"/images/campus-library.png", crumbs:[{label:"Home",href:"/"},{label:"IQAC"}]},
  transport: {title:"University Transport", eyebrow:"Campus Services", subtitle:"Information about university transport services, routes and schedules.", image:"/images/campus-green.png", crumbs:[{label:"Home",href:"/"},{label:"Transport"}]},
  privacy: {title:"Privacy Policy", eyebrow:"Legal", subtitle:"How university website information and submitted data are handled.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Privacy Policy"}]},
  terms: {title:"Terms & Conditions", eyebrow:"Legal", subtitle:"Terms governing the use of this university website and its online services.", image:"/images/hero-campus.png", crumbs:[{label:"Home",href:"/"},{label:"Terms & Conditions"}]},
  accessibility: {title:"Accessibility", eyebrow:"Website Standards", subtitle:"Our commitment to making university information accessible to all visitors.", image:"/images/campus-green.png", crumbs:[{label:"Home",href:"/"},{label:"Accessibility"}]},
  sitemap: {title:"Sitemap", eyebrow:"Website Directory", subtitle:"A complete directory of the main pages and services available on the university website.", image:"/images/campus-library.png", crumbs:[{label:"Home",href:"/"},{label:"Sitemap"}]},
}

// Nested routes (e.g. /about/history, /administration/registrar) — hero config per route key.
export const SUB_PAGE_MAP: Record<string, PageConfig> = {
  "about/history": {title:"History & Background",eyebrow:"About KACST",subtitle:"The story, aspirations and academic journey of Khulna Khan Jahan Science and Technology University.",image:"/images/hero-campus.png",crumbs:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"History"}]},
  "about/mission-vision": {title:"Mission & Vision",eyebrow:"Our Direction",subtitle:"The principles and aspirations guiding KACST's academic and institutional development.",image:"/images/campus-green.png",crumbs:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Mission & Vision"}]},
  "about/leadership": {title:"University Leadership",eyebrow:"Leadership",subtitle:"A dedicated leadership team committed to academic quality, responsible governance and innovation.",image:"/images/hero-campus.png",crumbs:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Leadership"}]},
  "academics/programs": {title:"Academic Programs",eyebrow:"Programs",subtitle:"Explore undergraduate and postgraduate study opportunities across disciplines.",image:"/images/hero-campus.png",crumbs:[{label:"Home",href:"/"},{label:"Academics",href:"/academics"},{label:"Programs"}]},
  "academics/faculties": {title:"Faculties & Departments",eyebrow:"Academics",subtitle:"Discover the academic units and departments available at KACST.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Academics",href:"/academics"},{label:"Faculties"}]},
  "academics/calendar": {title:"Academic Calendar",eyebrow:"Academic Planning",subtitle:"Key academic milestones, registration periods, examinations and university activities.",image:"/images/news-2.png",crumbs:[{label:"Home",href:"/"},{label:"Academics",href:"/academics"},{label:"Academic Calendar"}]},
  "admissions/undergraduate": {title:"Undergraduate Admission",eyebrow:"Admissions",subtitle:"Start your undergraduate journey with a strong academic foundation and a supportive university community.",image:"/images/admissions-building.png",crumbs:[{label:"Home",href:"/"},{label:"Admissions",href:"/admissions"},{label:"Undergraduate"}]},
  "admissions/postgraduate": {title:"Postgraduate Admission",eyebrow:"Admissions",subtitle:"Advance your expertise through postgraduate study, research and professional development.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Admissions",href:"/admissions"},{label:"Postgraduate"}]},
  "admissions/requirements": {title:"Admission Requirements",eyebrow:"Admissions",subtitle:"Review the general application information and prepare the documents required for your chosen program.",image:"/images/news-3.png",crumbs:[{label:"Home",href:"/"},{label:"Admissions",href:"/admissions"},{label:"Requirements"}]},
  "admissions/apply": {title:"Apply to KACST",eyebrow:"Online Application",subtitle:"Complete the application process using the information and instructions provided by the university.",image:"/images/admissions-building.png",crumbs:[{label:"Home",href:"/"},{label:"Admissions",href:"/admissions"},{label:"Apply Now"}]},
  "research/centers": {title:"Research Centers",eyebrow:"Research",subtitle:"Collaborative spaces for interdisciplinary research, experimentation and innovation.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Research",href:"/research"},{label:"Centers"}]},
  "research/publications": {title:"Research & Publications",eyebrow:"Research",subtitle:"A showcase for scholarly work, publications and research outputs from the KACST community.",image:"/images/news-1.png",crumbs:[{label:"Home",href:"/"},{label:"Research",href:"/research"},{label:"Publications"}]},
  "campus-life/facilities": {title:"Campus Facilities",eyebrow:"Campus Life",subtitle:"Explore learning, research, recreation and student-support facilities.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Campus Life",href:"/campus-life"},{label:"Facilities"}]},
  "campus-life/student-life": {title:"Student Life",eyebrow:"Campus Life",subtitle:"Learning extends beyond the classroom through community, culture, leadership and activity.",image:"/images/campus-green.png",crumbs:[{label:"Home",href:"/"},{label:"Campus Life",href:"/campus-life"},{label:"Student Life"}]},
  "campus-life/clubs": {title:"Clubs & Organizations",eyebrow:"Student Engagement",subtitle:"Find communities where students can develop skills, friendships and leadership experience.",image:"/images/news-4.png",crumbs:[{label:"Home",href:"/"},{label:"Campus Life",href:"/campus-life"},{label:"Clubs"}]},
  "administration/vice-chancellor": {title:"Office of the Vice-Chancellor",eyebrow:"Administration",subtitle:"Leadership, academic direction and institutional governance at KACST.",image:"/images/hero-campus.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Vice-Chancellor"}]},
  "administration/pro-vice-chancellor": {title:"Office of the Pro Vice-Chancellor",eyebrow:"Administration",subtitle:"Academic coordination, quality and institutional development.",image:"/images/hero-campus.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Pro Vice-Chancellor"}]},
  "administration/registrar": {title:"Registrar's Office",eyebrow:"Administration",subtitle:"Academic records, registration, official correspondence and administrative services.",image:"/images/admissions-building.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Registrar"}]},
  "administration/treasurer": {title:"Treasurer's Office",eyebrow:"Administration",subtitle:"Financial administration, budgeting and responsible resource management.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Treasurer"}]},
  "administration/controller-of-examinations": {title:"Controller of Examinations",eyebrow:"Administration",subtitle:"Examination schedules, results, academic assessment and examination services.",image:"/images/news-2.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Controller of Examinations"}]},
  "administration/deans-heads": {title:"Deans & Heads",eyebrow:"Administration",subtitle:"Faculty and departmental leadership supporting teaching, research and student development.",image:"/images/campus-green.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Deans & Heads"}]},
  "administration/offices": {title:"Administrative Offices",eyebrow:"Administration",subtitle:"Explore the university offices and support units that keep campus services running effectively.",image:"/images/campus-library.png",crumbs:[{label:"Home",href:"/"},{label:"Administration",href:"/administration"},{label:"Administrative Offices"}]},
}

// /administration/* branch — quick-links panel.
export const ADMIN_QUICK_LINKS: [string, string][] = [
  ["Administration Home","/administration"],
  ["Administrative Offices","/administration/offices"],
  ["Teacher Portal","/teacher-portal"],
  ["Student Portal","/student-portal"],
]

// /academics (and /academics/faculties) branch — intro cards above the Faculties list.
export const ACADEMICS_CARDS: CardItem[] = [
  {title:"Undergraduate Education",description:"Build a strong foundation through structured coursework, practical learning and academic support.",icon:"GraduationCap"},
  {title:"Postgraduate Study",description:"Deepen expertise through advanced study, research and independent inquiry.",icon:"BookOpen"},
  {title:"Interdisciplinary Learning",description:"Connect ideas across science, technology, business and society.",icon:"Globe2"},
]

// /about/mission-vision branch — "Values" cards.
export const MISSION_VALUES: CardItem[] = [
  {title:"Excellence",description:"Pursue high standards in learning, research and service."},
  {title:"Integrity",description:"Act with honesty, fairness, responsibility and accountability."},
  {title:"Innovation",description:"Encourage creative thinking and solutions to real problems."},
  {title:"Inclusion",description:"Create a respectful environment where every learner can thrive."},
  {title:"Service",description:"Use knowledge to contribute positively to society.",icon:"HeartHandshake"},
  {title:"Sustainability",description:"Make responsible choices for people, communities and the environment."},
]

// /about/leadership branch — placeholder role cards.
export const LEADERSHIP_ROLES: string[] = [
  "Vice Chancellor",
  "Pro-Vice Chancellor",
  "Treasurer",
  "Registrar",
  "Deans of Faculties",
  "Controller of Examinations",
]

// /admissions branch — process steps.
export const ADMISSIONS_STEPS: string[] = [
  "Explore programs",
  "Check requirements",
  "Submit application",
  "Complete enrolment",
]

// /admissions branch — general checklist.
export const ADMISSIONS_CHECKLIST: string[] = [
  "Academic certificates and transcripts",
  "Valid identification document",
  "Recent photograph",
  "Application information and supporting documents",
  "Program-specific requirements",
]

// /admissions branch — important dates.
export const ADMISSIONS_DATES: string[] = [
  "Application opening — official date to be announced",
  "Application deadline — official date to be announced",
  "Admission test/interview — if applicable",
  "Final enrolment — official date to be announced",
]

// /research branch — icons cycled (by index % length) across RESEARCH_AREAS cards.
export const RESEARCH_AREA_ICONS: string[] = ["FlaskConical", "Globe2", "HeartHandshake", "Building2"]

// /research branch — "Research Pathways" cards.
export const RESEARCH_PATHWAYS: string[] = [
  "Research groups",
  "Innovation & collaboration",
  "Publications & dissemination",
]

// /career branch — opportunity cards.
export const CAREER_CARDS: string[] = [
  "Faculty positions",
  "Administrative positions",
  "Research opportunities",
  "Professional services",
]

// /library branch — feature list.
export const LIBRARY_FEATURES: string[] = [
  "Digital Library",
  "E-books & Journals",
  "Research Databases",
  "Study Spaces",
]

// /sitemap branch — grouped site directory links.
export const SITEMAP_GROUPS: { title: string; links: [string, string][] }[] = [
  {title:"University",links:[["Home","/"],["About","/about"],["Administration","/administration"],["Contact","/contact"]]},
  {title:"Academics",links:[["Programs","/academics/programs"],["Faculties","/academics/faculties"],["Academic Calendar","/academics/calendar"],["Library","/library"]]},
  {title:"Admissions",links:[["Undergraduate","/admissions/undergraduate"],["Postgraduate","/admissions/postgraduate"],["Requirements","/admissions/requirements"],["Track Status","/track-status"]]},
  {title:"Student Services",links:[["Student Portal","/student-portal"],["Teacher Portal","/teacher-portal"],["Result Portal","/result"],["Pay Fees","/pay-fees"]]},
  {title:"Campus & Research",links:[["Campus Life","/campus-life"],["Research","/research"],["News","/news"],["Events","/events"]]},
  {title:"Policies",links:[["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["Accessibility","/accessibility"],["Sitemap","/sitemap"]]},
]

// /campus-life branch — feature cards.
export const CAMPUS_LIFE_CARDS: CardItem[] = [
  {title:"Modern Facilities",description:"Learning, laboratory, library and student-support spaces designed around academic needs.",icon:"Building2"},
  {title:"Student Activities",description:"Clubs, events, sports and leadership opportunities help students build confidence.",icon:"Users"},
  {title:"Sports & Recreation",description:"Encourage wellbeing, teamwork and community through recreation and athletics.",icon:"Trophy"},
  {title:"Library & Learning",description:"Quiet study areas and access to academic resources support independent learning.",icon:"Library"},
  {title:"Student Services",description:"Guidance and support services help students navigate university life.",icon:"HeartHandshake"},
  {title:"Green Campus",description:"A welcoming environment that supports wellbeing and responsible stewardship.",icon:"Globe2"},
]

// /contact branch — address/phone/email and the Google Maps embed URL.
export const CONTACT_INFO = {
  address: "Khulna, Bangladesh (editable)",
  phone: "+880 000 000000 (editable)",
  email: "info@kacst.edu.bd (editable)",
  mapsUrl: "https://www.google.com/maps?q=22.836416,89.5319257&z=16&output=embed",
}
