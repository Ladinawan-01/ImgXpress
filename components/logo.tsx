export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle with gradient */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient)" stroke="currentColor" strokeWidth="2" />

      {/* Express arrow/lightning bolt */}
      <path d="M15 12L25 20L18 20L22 28L12 20L19 20L15 12Z" fill="white" stroke="none" />

      {/* Image frame corners */}
      <path d="M8 8H12V10H10V12H8V8Z" fill="currentColor" opacity="0.7" />
      <path d="M32 8H28V10H30V12H32V8Z" fill="currentColor" opacity="0.7" />
      <path d="M8 32H12V30H10V28H8V32Z" fill="currentColor" opacity="0.7" />
      <path d="M32 32H28V30H30V28H32V32Z" fill="currentColor" opacity="0.7" />

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  )
}
