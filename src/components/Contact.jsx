import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div
        ref={ref}
        className="reveal rounded-3xl bg-ink text-papaya dark:bg-papaya dark:text-ink px-8 py-14 sm:px-14 text-center"
      >
        <h2 className="text-3xl font-extrabold">Discutons de votre prochaine alternance</h2>
        <p className="mt-3 max-w-xl mx-auto text-papaya/75 dark:text-ink/75">
          En recherche active d'une alternance M2 à partir de septembre 2026. Mobile sur toute la
          France — n'hésitez pas à me contacter.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:bouabidmouad2000@gmail.com"
            className="px-6 py-3 rounded-full bg-brick text-papaya font-semibold hover:bg-lava transition-colors"
          >
            bouabidmouad2000@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/mouad-bouabid"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-papaya/30 dark:border-ink/30 font-semibold hover:border-steel transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/bouabidmouad"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-papaya/30 dark:border-ink/30 font-semibold hover:border-steel transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
