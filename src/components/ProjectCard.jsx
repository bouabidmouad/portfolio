import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, delay }) {
  const ref = useReveal()
  return (
    <article
      ref={ref}
      className="reveal group rounded-2xl border border-ink/10 dark:border-papaya/10 bg-white/60 dark:bg-papaya/5 p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5 dark:hover:shadow-black/30 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold group-hover:text-brick dark:group-hover:text-steel transition-colors">
          {project.name}
        </h3>
        <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-brick/10 text-brick dark:bg-steel/15 dark:text-steel">
          {project.badge}
        </span>
      </div>

      <p className="text-sm font-medium text-ink/50 dark:text-papaya/50 mt-1">
        {project.tagline}
      </p>

      <p className="mt-3 text-ink/75 dark:text-papaya/75 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-ink/5 dark:bg-papaya/10 text-ink/70 dark:text-papaya/70"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brick dark:text-steel hover:gap-2.5 transition-all"
      >
        Voir le code sur GitHub ↗
      </a>
    </article>
  )
}
