import { useReveal } from '../hooks/useReveal.js'

const CATEGORIES = [
  {
    title: 'Langages',
    items: ['PHP', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    items: ['Symfony', 'React', 'Angular', 'Spring Boot'],
  },
  {
    title: 'Bases de données',
    items: ['MySQL', 'PostgreSQL', 'SQL Server', 'BigQuery'],
  },
  {
    title: 'DevOps & Outils',
    items: ['Git', 'GitLab', 'Docker', 'CI/CD', 'Linux', 'Azure', 'JIRA'],
  },
  {
    title: 'IA & Automatisation',
    items: ['Claude API', 'LangChain', 'Agents LLM', 'MCP', 'n8n', 'Make', 'Copilot', 'Prompt engineering'],
  },
  {
    title: 'Méthodes',
    items: ['Agile', 'Scrum', 'REST API', 'UML', 'MERISE', 'ETL'],
  },
]

function SkillGroup({ title, items, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="font-bold text-lg mb-3 text-brick dark:text-steel">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-ink/5 dark:bg-papaya/10 border border-ink/10 dark:border-papaya/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useReveal()
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <div ref={titleRef} className="reveal">
        <h2 className="text-3xl font-extrabold mb-2">Compétences</h2>
        <p className="text-ink/60 dark:text-papaya/60 mb-10">
          Un profil polyvalent, du développement web à l'IA en passant par la data.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10">
        {CATEGORIES.map((cat, i) => (
          <SkillGroup key={cat.title} title={cat.title} items={cat.items} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
