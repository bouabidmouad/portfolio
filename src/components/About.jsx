import { useReveal } from '../hooks/useReveal.js'

const TIMELINE = [
  {
    period: '2025 — En cours',
    title: 'Mastère Architecte Web',
    place: 'Digital School of Paris',
    desc: "En recherche d'alternance M2, rythme 1 semaine école / 3 semaines entreprise.",
  },
  {
    period: '09/2024 — 09/2025',
    title: 'Développeur Full Stack',
    place: 'ALTEN Maroc',
    desc: "Java (Spring Boot) et React pour des applications métier, intégration d'APIs REST, déploiement Docker sur Linux, méthode Agile/Scrum.",
  },
  {
    period: '09/2022 — 09/2024',
    title: 'Développeur Web Full Stack',
    place: 'ENTSI',
    desc: 'PHP/Symfony/React/MySQL, APIs REST, pipelines ETL, automatisation de processus (Python, n8n, Make).',
  },
  {
    period: 'Juillet 2019',
    title: 'Stagiaire Data Analyst',
    place: 'PEPSI',
    desc: 'Analyse de données SAP, modélisation MERISE, gestion des commandes clients.',
  },
]

export default function About() {
  const titleRef = useReveal()
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div ref={titleRef} className="reveal">
        <h2 className="text-3xl font-extrabold mb-2">À propos</h2>
        <p className="text-ink/60 dark:text-papaya/60 mb-10 max-w-2xl">
          De l'expérience terrain en entreprise à une spécialisation en architecture web — un
          parcours full stack qui couvre le web, la data et l'IA.
        </p>
      </div>

      <ol>
        {TIMELINE.map((item, i) => (
          <TimelineItem
            key={item.title + item.period}
            item={item}
            delay={i * 100}
            isLast={i === TIMELINE.length - 1}
          />
        ))}
      </ol>
    </section>
  )
}

function TimelineItem({ item, delay, isLast }) {
  const ref = useReveal()
  return (
    <li ref={ref} className="reveal flex gap-5" style={{ transitionDelay: `${delay}ms` }}>
      {/* dot + connecting line, laid out with flex so nothing needs pixel-perfect absolute offsets */}
      <div className="flex flex-col items-center">
        <span className="mt-1.5 w-3 h-3 shrink-0 rounded-full bg-brick dark:bg-steel" />
        {!isLast && <span className="w-px flex-1 bg-ink/15 dark:bg-papaya/15" />}
      </div>

      <div className={isLast ? 'pb-1' : 'pb-10'}>
        <p className="text-sm font-semibold text-brick dark:text-steel">{item.period}</p>
        <h3 className="text-lg font-bold mt-1">{item.title}</h3>
        <p className="text-sm text-ink/60 dark:text-papaya/60">{item.place}</p>
        <p className="mt-1 text-ink/70 dark:text-papaya/70">{item.desc}</p>
      </div>
    </li>
  )
}
