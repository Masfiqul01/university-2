import Image from "next/image"

const LEADERS = [
  {
    role: "Hon'ble Chancellor",
    name: "His Excellency Hafiz Uddin Ahmad",
    description: "The Hon'ble President (Acting) of the People's Republic of Bangladesh",
    image: "/images/administration/chancellor.png",
    featured: true,
  },
  {
    role: "Vice-Chancellor",
    name: "Prof. Dr. Mohammad Ali Azadi",
    description: "Hon'ble VC International Islamic University Chittagong",
    image: "/images/administration/vice-chancellor.png",
  },
  {
    role: "Pro Vice-Chancellor",
    name: "Prof. Dr. Mohammad Hasmat Ali",
    description: "Hon'ble Pro VC International Islamic University Chittagong",
    image: "/images/administration/pro-vice-chancellor.png",
  },
  {
    role: "Treasurer",
    name: "Prof. Dr. Muhammad Mahbubur Rahman",
    description: "Hon'ble Treasurer International Islamic University Chittagong",
    image: "/images/administration/treasurer.png",
  },
]

export function AdministrationLeadership({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact
        ? "relative overflow-hidden rounded-[18px] bg-white/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
        : "relative overflow-hidden bg-white/20 p-4 sm:p-6 lg:p-8"
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:url('/images/kkjstu-background-pattern.png')] [background-size:420px_420px]" />

      <div className={compact
  ? "relative bg-transparent px-4 py-5 sm:px-6"
  : "relative mx-auto max-h-[540px] max-w-[1080px] overflow-y-auto rounded-[20px] border border-slate-200/80 bg-white px-5 py-7 shadow-[0_20px_70px_rgba(15,23,42,0.18)] sm:px-8 lg:px-10"
}>
        <div className="text-center">
          <Image
            src={LEADERS[0].image}
            alt={LEADERS[0].role}
            width={140}
            height={120}
            className={compact ? "mx-auto h-[92px] w-[108px] object-cover" : "mx-auto h-[116px] w-[136px] object-cover"}
          />
          <p className="mt-3 text-sm font-bold text-emerald-700">{LEADERS[0].role}</p>
          <h3 className={compact ? "mt-1 text-sm font-bold text-slate-900" : "mt-1 text-lg font-bold text-slate-900"}>{LEADERS[0].name}</h3>
          <p className="mx-auto mt-1 max-w-2xl text-[11px] leading-5 text-slate-500">{LEADERS[0].description}</p>
        </div>

        <div className="my-4 border-t border-slate-200" />

        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {LEADERS.slice(1).map((leader) => (
            <article key={leader.role} className="px-4 py-4 text-center sm:px-5">
              <Image
                src={leader.image}
                alt={leader.role}
                width={118}
                height={132}
                className={compact ? "mx-auto h-[88px] w-[80px] object-cover" : "mx-auto h-[126px] w-[112px] object-cover"}
              />
              <p className="mt-3 text-sm font-bold text-emerald-700">{leader.role}</p>
              <h3 className={compact ? "mt-1 text-xs font-bold leading-5 text-slate-900" : "mt-1 text-sm font-bold leading-5 text-slate-900"}>{leader.name}</h3>
              <p className="mt-1 text-[10px] leading-5 text-slate-500">{leader.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
