export default function Hero() {
  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="animate-fadeUp text-brick dark:text-steel font-semibold tracking-wide uppercase text-sm">
        Développeur Full Stack
      </p>

      <h1
        className="animate-fadeUp mt-4 text-4xl sm:text-6xl font-extrabold leading-tight"
        style={{ animationDelay: '80ms' }}
      >
        Salut, je suis Mouad Bouabid.
        <br />
        Je conçois des applications web, data &amp; IA de bout en bout.
      </h1>

      <p
        className="animate-fadeUp mt-6 max-w-2xl text-lg text-ink/70 dark:text-papaya/70"
        style={{ animationDelay: '160ms' }}
      >
        2+ ans d'expérience terrain (ALTEN Maroc, ENTSI), aujourd'hui en Mastère Architecte Web
        à la Digital School of Paris. Actuellement à la recherche d'une{' '}
        <strong className="text-ink dark:text-papaya">alternance M2 dès septembre 2026</strong>,
        mobile sur toute la France.
      </p>

      <div
        className="animate-fadeUp mt-8 flex flex-wrap gap-4"
        style={{ animationDelay: '240ms' }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-brick text-papaya font-semibold hover:bg-lava transition-colors"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-ink/20 dark:border-papaya/20 font-semibold hover:border-brick dark:hover:border-steel transition-colors"
        >
          Me contacter
        </a>
        <a
          href="https://github.com/bouabidmouad"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full border border-ink/20 dark:border-papaya/20 font-semibold hover:border-brick dark:hover:border-steel transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  )
}
