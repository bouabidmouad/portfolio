# Portfolio — Mouad Bouabid

Portfolio personnel présentant mon parcours, mes compétences et mes projets GitHub.

Construit avec **React + Vite + Tailwind CSS**, animations légères (fade-in au scroll via `IntersectionObserver`, transitions CSS).

## Lancer le projet

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` généré peut être déployé tel quel sur Vercel, Netlify, GitHub Pages, etc.

## Structure

- `src/data/projects.js` — liste des projets à afficher (nom, description, stack, lien GitHub). Pour ajouter un projet, il suffit d'ajouter une entrée ici.
- `src/components/` — sections de la page (Hero, À propos, Compétences, Projets, Contact).
- `tailwind.config.js` — palette de couleurs personnalisée.
