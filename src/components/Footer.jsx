export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink/50 dark:text-papaya/50">
      <p>© {new Date().getFullYear()} Mouad Bouabid. Tous droits réservés.</p>
      <p>Construit avec React &amp; Tailwind CSS.</p>
    </footer>
  )
}
