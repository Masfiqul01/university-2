// Admissions pages (/admissions/*) data — edit or add items here.
// `icon` is a key into lib/icon-map.tsx's ICON_MAP.

export const ADMISSIONS_HIGHLIGHTS = [
  { icon: "GraduationCap", title: "Diverse Academic Programs", description: "Choose from undergraduate and postgraduate programs across engineering, science, business, technology and the humanities." },
  { icon: "Users", title: "Experienced Faculty", description: "Learn from dedicated academics committed to mentorship, research and student success." },
  { icon: "FlaskConical", title: "Modern Labs & Facilities", description: "Access well-equipped laboratories, a growing digital library and dedicated research spaces." },
  { icon: "Award", title: "Scholarships & Waivers", description: "Merit-based scholarships and fee waivers help talented students pursue their education." },
  { icon: "Building2", title: "Vibrant Campus Life", description: "Clubs, cultural events and sports keep campus life active well beyond the classroom." },
  { icon: "TrendingUp", title: "Career-Ready Curriculum", description: "Industry-aligned coursework and practical training prepare graduates for the job market." },
]

export const ADMISSIONS_LINKS = [
  { title: "Undergraduate Admissions", description: "Eligibility and programs for HSC / A-Level graduates entering their first degree.", href: "/admissions/undergraduate", icon: "GraduationCap" },
  { title: "Postgraduate Admissions", description: "MSc, MBA, MA and PhD programs for bachelor's and master's degree holders.", href: "/admissions/postgraduate", icon: "Award" },
  { title: "Admission Requirements", description: "General eligibility, required documents and program-level requirements.", href: "/admissions/requirements", icon: "ClipboardList" },
  { title: "Apply Now", description: "Start your online application in a few guided steps.", href: "/admissions/apply", icon: "Send" },
]

export const ADMISSION_PROCESS_STEPS = [
  { title: "Explore Programs", description: "Browse undergraduate and postgraduate programs to find the right fit for your goals." },
  { title: "Check Requirements", description: "Review eligibility criteria and gather the required academic documents." },
  { title: "Submit Online Application", description: "Complete the online application with your personal, academic and program details." },
  { title: "Document Verification", description: "The admissions office reviews your application and verifies submitted documents." },
  { title: "Offer & Enrollment", description: "Successful applicants receive an admission offer and complete enrollment and orientation." },
]

export const INTAKE_OPTIONS = [
  { value: "spring-2027", label: "Spring 2027" },
  { value: "fall-2027", label: "Fall 2027" },
]

export const KEY_DATES_HEADERS = ["Intake", "Application Opens", "Application Deadline", "Classes Begin"]
export const KEY_DATES_ROWS = [
  ["Spring 2027", "Nov 01, 2026", "Jan 15, 2027", "Feb 01, 2027"],
  ["Fall 2027", "May 01, 2027", "Jul 20, 2027", "Aug 15, 2027"],
]

export const UNDERGRADUATE_ELIGIBILITY = [
  "Successful completion of Higher Secondary Certificate (HSC) or equivalent (A-Level) from a recognized board or institution.",
  "Minimum GPA of 3.00 (or equivalent) in both SSC and HSC examinations, with no grade below C in relevant subjects.",
  "Applicants awaiting final HSC results may apply provisionally with SSC transcripts and a certificate of appearance.",
  "Foreign qualification holders must submit an equivalence certificate from the relevant education authority.",
  "Program-specific subject prerequisites apply for select engineering and science programs.",
]

export const UNDERGRADUATE_APPLICATION_STEPS = [
  { title: "Complete the Online Application", description: "Fill out the online application form with your personal, academic and program details." },
  { title: "Upload Required Documents", description: "Submit scanned copies of SSC and HSC certificates, mark sheets and a recent photograph." },
  { title: "Admission Test / Interview", description: "Shortlisted applicants may be invited to a subject-based admission test or interview, depending on the program." },
  { title: "Merit List & Offer Letter", description: "Selected candidates are notified by email and issued a conditional offer letter." },
  { title: "Confirm Seat & Enroll", description: "Pay the admission fee and complete enrollment formalities to confirm your seat." },
]

export const POSTGRADUATE_ELIGIBILITY = [
  "A relevant bachelor's degree (Honours) from a recognized university with a minimum CGPA of 2.50 out of 4.00 (or equivalent).",
  "MBA applicants may apply from any discipline; relevant professional experience is preferred but not mandatory.",
  "PhD applicants must hold a master's degree in a relevant field with a strong academic and research background.",
  "Provisional candidates awaiting final results may apply with an official transcript and a letter from their institution.",
  "International applicants require an equivalence certificate and proof of English proficiency where applicable.",
]

export const POSTGRADUATE_APPLICATION_STEPS = [
  { title: "Submit the Online Application", description: "Complete the application with your personal, academic and program details, including your area of research interest." },
  { title: "Upload Transcripts & Certificates", description: "Provide your bachelor's (and master's, for PhD) transcripts, certificates and a statement of purpose." },
  { title: "Departmental Review", description: "The relevant academic department reviews your application and research interests." },
  { title: "Interview / Written Assessment", description: "Shortlisted candidates may be called for an interview or a written assessment." },
  { title: "Admission Offer & Registration", description: "Successful applicants receive an offer letter and complete registration for the upcoming semester." },
]

export const GENERAL_ELIGIBILITY = [
  "Completed academic transcripts and certificates for the qualification relevant to your chosen program level.",
  "Minimum grade requirements as specified for undergraduate, postgraduate, or doctoral programs.",
  "A valid National ID (NID) or birth certificate, and a valid passport for international applicants.",
  "Good academic standing, with no unresolved disciplinary record at a previous institution.",
  "Ability to meet any program-specific prerequisites, admission tests or interview requirements.",
]

export const REQUIRED_DOCUMENTS = [
  "Completed online application form",
  "Attested copies of SSC/O-Level and HSC/A-Level certificates and mark sheets (or bachelor's/master's transcripts for postgraduate applicants)",
  "Recent passport-size photographs (2 copies)",
  "Photocopy of National ID card or birth certificate",
  "Migration certificate from the previous institution, where applicable",
  "Character certificate from the last educational institution attended",
  "Equivalence certificate for foreign qualifications, where applicable",
  "Proof of payment of the application fee",
]

export const REQUIREMENTS_TABLE_HEADERS = ["Program Level", "Minimum Requirement", "Application Fee", "Application Deadline"]
export const REQUIREMENTS_TABLE_ROWS = [
  ["Undergraduate", "HSC/A-Level with minimum GPA 3.00 (or equivalent)", "BDT 1,000", "Jan 15, 2027"],
  ["Postgraduate", "Bachelor's degree with minimum CGPA 2.50", "BDT 1,500", "Jan 15, 2027"],
  ["PhD / Doctoral", "Master's degree with a relevant research background", "BDT 2,000", "Feb 01, 2027"],
  ["Diploma", "SSC/O-Level or equivalent", "BDT 800", "Jan 15, 2027"],
]

export const ADMISSIONS_FAQ = [
  { q: "When do admissions open for each semester?", a: "KACST admits students twice a year, for the Spring and Fall intakes. Application windows and key dates are published on the Admissions page ahead of each intake." },
  { q: "Can I apply if I'm waiting for my final results?", a: "Yes. Applicants awaiting final HSC or bachelor's results may apply provisionally with their most recent transcript and a certificate of appearance, and must submit final results before enrollment." },
  { q: "Is there an entrance exam?", a: "Some programs, particularly in Engineering and Science, may require a subject-based admission test or interview. Requirements vary by program and are confirmed after your application is reviewed." },
  { q: "How do I pay the application fee?", a: "The application fee can be paid online during the application process, or via bank deposit / mobile banking using the instructions on your application confirmation." },
  { q: "Are scholarships available?", a: "Merit-based scholarships and fee waivers are available for eligible undergraduate and postgraduate students. Details are shared with admitted students during enrollment." },
  { q: "Can international students apply?", a: "Yes. International applicants should submit an equivalence certificate for their qualifications and, where applicable, proof of English language proficiency, along with the standard required documents." },
]

export const APPLICATION_FORM_STEPS = [
  { number: 1, title: "Personal Information", description: "Tell us who you are" },
  { number: 2, title: "Academic Information", description: "Your academic background" },
  { number: 3, title: "Program Selection", description: "Choose your program" },
  { number: 4, title: "Contact Information", description: "Guardian & address details" },
  { number: 5, title: "Review & Submit", description: "Confirm your application" },
]
