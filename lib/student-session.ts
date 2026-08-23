// Shared between /student-login and /student-portal — sessionStorage key and
// shape for the signed-in student. No backend yet, so this is the session of
// record.

export const STUDENT_SESSION_KEY = "kacst.student.session"

export type StudentSession = {
  id: string
  name: string
  program: string
  year: string
  loginAt: string
}
