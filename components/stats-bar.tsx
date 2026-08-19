import { ICON_MAP } from "@/lib/icon-map"
import { ICON_MOTION_FILL, lightTileIcon } from "@/lib/icon-colors"
import { CountUp } from "@/components/count-up"
import { HOME_STATS_BAR } from "@/lib/data/home"

export function StatsBar() {
  return (
   <div className="relative z-10 mx-auto -mt-6 max-w-6xl px-4 sm:-mt-10 lg:-mt-16 lg:px-8">
  <div className="grid grid-cols-2 gap-y-8 rounded-2xl bg-white px-6 py-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
    {HOME_STATS_BAR.map(({ icon, value, label }, index) => {
      const Icon = ICON_MAP[icon]
      const color = lightTileIcon(index)

      return (
      <div
        key={label}
        className="group flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left"
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${color.bg} ${color.text} ${color.hoverBg} ${ICON_MOTION_FILL}`}
        >
          <Icon className="h-5 w-5" />
        </span>

        <div>
          <p className="text-lg font-bold text-black">
            <CountUp value={value} />
          </p>
          <p className="text-xs font-bold text-black">{label}</p>
        </div>
      </div>
      )
    })}
  </div>
</div>
  )
}
