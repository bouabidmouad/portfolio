import { projects } from '../data/projects.js'
import { useReveal } from '../hooks/useReveal.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const titleRef = useReveal()
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <div ref={titleRef} className="reveal">
        <h2 className="text-3xl font-extrabold mb-2">Projets</h2>
        <p className="text-ink/60 dark:text-papaya/60 mb-10 max-w-2xl">
          Une sélection de projets personnels et académiques, du backend PHP/Symfony aux
          applications React et mobiles.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={(i % 2) * 80} />
        ))}
      </div>
    </section>
  )
}
