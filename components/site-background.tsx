export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,7,84,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,7,84,0.06) 1px, transparent 1px), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "140px 140px, 140px 140px, cover",
        backgroundPosition: "center",
      }}
    />
  )
}
