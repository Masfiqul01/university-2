export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <div
      className={[
        "mb-10",
        center
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left",
      ].join(" ")}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            center ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-8 bg-brand/50" />

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </p>

          <span className="h-px w-8 bg-brand/50" />
        </div>
      )}

      {/* Title */}
      <h2 className="font-serif text-3xl font-bold leading-[1.12] tracking-tight text-slate-950 text-balance sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base sm:leading-7 ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}