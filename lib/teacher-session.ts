// Shared between /teacher-login and /teacher-portal — sessionStorage key and
// shape for the signed-in teacher. No backend yet, so this is the session of
// record.

export const TEACHER_SESSION_KEY = "kacst.teacher.session"

export type TeacherSession = {
  id: string
  name: string
  department: string
  designation: string
  loginAt: string
}
