/**
 * Per-icon colour palettes.
 *
 * Every icon on a page gets its own hue instead of the whole grid sharing one
 * brand colour. Palettes are cycled by index, so a section with four icons and
 * a section with twelve both stay varied without hand-picking colours per item.
 *
 * Two palettes exist because the site places icons on two very different
 * surfaces, and each needs its own contrast target:
 *
 * - `LIGHT_TILE_ICONS`  — tinted chip on a white/very light card. Uses a 100
 *   tint background with a 600/700 foreground.
 * - `DARK_TILE_ICONS`   — icon sitting on the navy brand tile. Uses 300-level
 *   foregrounds, which stay legible against `--brand-dark` (#0b0754).
 *
 * Colours are Tailwind palette classes written out in full so the JIT compiler
 * can see them; do not build these strings dynamically.
 */

export type LightTileIcon = {
  /** Chip background tint. */
  bg: string
  /** Icon foreground. */
  text: string
  /** Chip background on hover of the enclosing `group`. */
  hoverBg: string
}

export const LIGHT_TILE_ICONS: LightTileIcon[] = [
  { bg: "bg-blue-100", text: "text-blue-600", hoverBg: "group-hover:bg-blue-600" },
  { bg: "bg-emerald-100", text: "text-emerald-600", hoverBg: "group-hover:bg-emerald-600" },
  { bg: "bg-violet-100", text: "text-violet-600", hoverBg: "group-hover:bg-violet-600" },
  { bg: "bg-orange-100", text: "text-orange-600", hoverBg: "group-hover:bg-orange-600" },
  { bg: "bg-rose-100", text: "text-rose-600", hoverBg: "group-hover:bg-rose-600" },
  { bg: "bg-cyan-100", text: "text-cyan-700", hoverBg: "group-hover:bg-cyan-600" },
  { bg: "bg-fuchsia-100", text: "text-fuchsia-600", hoverBg: "group-hover:bg-fuchsia-600" },
  { bg: "bg-teal-100", text: "text-teal-600", hoverBg: "group-hover:bg-teal-600" },
  { bg: "bg-amber-100", text: "text-amber-700", hoverBg: "group-hover:bg-amber-600" },
  { bg: "bg-indigo-100", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600" },
  { bg: "bg-lime-100", text: "text-lime-700", hoverBg: "group-hover:bg-lime-600" },
  { bg: "bg-sky-100", text: "text-sky-600", hoverBg: "group-hover:bg-sky-600" },
]

/** Foreground colours for icons drawn on the navy brand tile. */
export const DARK_TILE_ICONS: string[] = [
  "text-amber-300",
  "text-sky-300",
  "text-emerald-300",
  "text-rose-300",
  "text-violet-300",
  "text-orange-300",
  "text-teal-300",
  "text-fuchsia-300",
  "text-lime-300",
  "text-cyan-300",
  "text-indigo-300",
  "text-pink-300",
]

/** Plain foreground colours for bare icons on a light background (no chip). */
export const PLAIN_ICONS: string[] = [
  "text-blue-600",
  "text-emerald-600",
  "text-violet-600",
  "text-orange-600",
  "text-rose-600",
  "text-cyan-700",
  "text-fuchsia-600",
  "text-teal-600",
  "text-amber-700",
  "text-indigo-600",
  "text-lime-700",
  "text-sky-600",
]

export const lightTileIcon = (index: number) =>
  LIGHT_TILE_ICONS[index % LIGHT_TILE_ICONS.length]

export const darkTileIcon = (index: number) =>
  DARK_TILE_ICONS[index % DARK_TILE_ICONS.length]

export const plainIcon = (index: number) => PLAIN_ICONS[index % PLAIN_ICONS.length]

/**
 * Transition + hover motion shared by every coloured icon chip, so the whole
 * site animates identically. Pair with `group` on the enclosing card.
 */
export const ICON_MOTION =
  "transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"

/** Same motion, plus the chip filling with its hue and the glyph going white. */
export const ICON_MOTION_FILL = `${ICON_MOTION} group-hover:text-white`
