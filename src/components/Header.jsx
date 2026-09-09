const LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ dark, setDark }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-papaya/80 dark:bg-ink/80 border-b border-ink/10 dark:border-papaya/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-lg tracking-tight">
          Mouad<span className="text-brick">.</span>Bouabid
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brick dark:hover:text-steel transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Basculer le thème clair/sombre"
          className="w-9 h-9 grid place-items-center rounded-full border border-ink/15 dark:border-papaya/20 hover:border-brick dark:hover:border-steel transition-colors"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
