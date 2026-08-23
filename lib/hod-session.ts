// Shared between /hod-login and /hod-portal — sessionStorage key and shape
// for the signed-in HOD. No backend yet, so this is the session of record.

export const HOD_SESSION_KEY = "kacst.hod.session"

export type HodSession = {
  id: string
  name: string
  department: string
  faculty: string
  loginAt: string
}
