export const profile = {
  name: "Achraf Ghazal",
  title: "Full-Stack Developer",
  location: "Ifrane | Rabat, Maroc",
  email: "achraf.ghazal.it@gmail.com",
  github: "https://github.com/Ghazalachraf",
  linkedin: "https://linkedin.com/in/achraf-ghazal-16a51333a",
  instagram: "https://instagram.com/achraf.gzl",
  site: "achrafghazal.com",
  // Remplacez ce fichier par votre photo (ex: /profile.jpg) dans le dossier public/
  photo: "/profile.svg",
};

export const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Instagram",
    href: profile.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    path: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z",
  },
];

export const navLinks = [
  { label: "Projets", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Tarifs", href: "/#pricing" },
  { label: "À propos", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  badge: "Disponible pour de nouveaux projets",
  headline: "Du code qui fait avancer votre projet.",
  subheadline:
    "Développeur Full-Stack basé à Rabat. Je conçois et construis des applications web, des automatisations et des outils IA, du cahier des charges jusqu'à la mise en production.",
  ctaPrimary: { label: "Réserver un appel", href: "#contact" },
  ctaSecondary: { label: "Voir mes projets", href: "#projects" },
};

export const projects = [
  {
    slug: "lovag",
    name: "LOVAG",
    role: "Projet personnel",
    category: "Agence digitale B2B",
    image: "/projects/lovag.svg",
    description:
      "Agence digitale B2B au Maroc. Site et back-office construits en React et Laravel, pensés pour la conversion et la gestion de leads.",
    highlights: [
      "Front-end en React, back-end en Laravel, base MySQL",
      "Back-office pour gérer les leads et les demandes entrantes",
      "Interface pensée pour la conversion B2B",
    ],
    stack: ["React", "Laravel", "MySQL"],
    link: "",
  },
  {
    slug: "crm-odoo",
    name: "CRM Odoo",
    role: "Étude de cas — Adfectus",
    category: "CRM & Gestion",
    image: "/projects/crm-odoo.svg",
    description:
      "Mise en place et personnalisation d'un CRM Odoo pour la gestion commerciale, avec scripts Python/SQL pour automatiser l'import et le nettoyage des données.",
    highlights: [
      "Configuration et personnalisation d'Odoo CRM",
      "Scripts Python/SQL pour l'import et le nettoyage des données",
      "Automatisation de la gestion commerciale au quotidien",
    ],
    stack: ["Odoo", "Python", "SQL"],
    link: "",
  },
  {
    slug: "chatbot-ia",
    name: "Chatbot IA",
    role: "Étude de cas — Adfectus",
    category: "IA & Automatisation",
    image: "/projects/chatbot-ia.svg",
    description:
      "Conception d'un chatbot IA pour automatiser les réponses client et qualifier les demandes entrantes, intégré aux outils internes de l'entreprise.",
    highlights: [
      "Chatbot IA pour automatiser le support client",
      "Qualification automatique des demandes entrantes",
      "Intégration aux outils internes de l'entreprise",
    ],
    stack: ["Python", "IA", "Automatisation"],
    link: "",
  },
  {
    slug: "automatisation-bdd",
    name: "Automatisation BDD",
    role: "Étude de cas — Adfectus",
    category: "Data & Scripts",
    image: "/projects/automatisation.svg",
    description:
      "Scripts d'automatisation pour fiabiliser et synchroniser les bases de données métier, réduisant les tâches manuelles répétitives.",
    highlights: [
      "Scripts d'automatisation en Python et SQL",
      "Synchronisation et fiabilisation des bases métier",
      "Réduction des tâches manuelles répétitives",
    ],
    stack: ["Python", "SQL", "Automatisation"],
    link: "",
  },
];

export const services = {
  intro:
    "Du développement web à l'automatisation, voici les domaines sur lesquels je peux intervenir.",
  languages: ["Python", "JavaScript", "PHP", "Java", "HTML", "CSS"],
  frameworks: ["Laravel", "React", "Next.js", "Node.js", "Bootstrap", "Sass", "Tailwind"],
  databases: ["MySQL", "MongoDB", "PostgreSQL", "MariaDB", "Supabase", "Oracle", "PL/SQL"],
  cms: ["WordPress", "Odoo", "PrestaShop"],
  tools: ["Git", "Docker", "Linux", "Figma", "Jira", "Google Analytics"],
  methods: ["Agile", "Scrum", "Kanban", "SEO", "SWOT", "Benchmarking"],
};

export const about = {
  headlineTop: "Je construis des produits",
  headlineBottom: "qui résolvent de vrais problèmes.",
  bio: [
    {
      lead: "J'ai 21 ans, basé entre Ifrane et Rabat,",
      rest: "et je construis des applications web depuis ma formation de Technicien Spécialisé Web Full Stack à l'ISTA d'Ifrane.",
    },
    {
      lead: "Aujourd'hui en Licence Pro Génie Informatique à Hightech (Rabat),",
      rest: "je continue de monter en compétences tout en travaillant comme chargé de projet Full Stack chez Adfectus, où j'interviens sur des CRM Odoo, des chatbots IA et des scripts d'automatisation.",
    },
    {
      lead: "Ce qui m'intéresse, c'est construire des outils qui résolvent un vrai problème métier",
      rest: "— pas juste écrire du code. J'aime comprendre le besoin, proposer une solution propre, et la livrer jusqu'au bout.",
    },
  ],
  experience: [
    {
      role: "Chargé de projet Full Stack",
      company: "Adfectus, Ifrane",
      period: "Mars 2025 — présent",
    },
    {
      role: "Chargé de projet Full Stack",
      company: "Adfectus, Ifrane",
      period: "Juillet — Septembre 2024",
    },
  ],
  education: [
    {
      degree: "Licence Pro Génie Informatique",
      school: "Hightech, Rabat",
      period: "En cours",
    },
    {
      degree: "Technicien Spécialisé Web Full Stack",
      school: "ISTA, Ifrane",
      period: "",
    },
  ],
  certifications: [
    "EF SET English C1",
    "Python Essentials 1 & 2 — Cisco",
    "Cybersecurity Fundamentals — IBM",
    "AI Fundamentals — IBM",
  ],
  languages: [
    { name: "Arabe", level: "Natif" },
    { name: "Français", level: "B2" },
    { name: "Anglais", level: "C1" },
  ],
};

export const certifications = [
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    detail: "Intelligence artificielle",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    detail: "Cybersécurité",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Python Essentials 1 & 2",
    issuer: "Cisco",
    detail: "Programmation Python",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "EF SET English",
    issuer: "EF SET",
    detail: "Niveau C1",
    accent: "from-orange-500 to-amber-500",
  },
];

export const pricingIntro = {
  headline: "Des services clairs, sur devis.",
  description:
    "Chaque projet est différent. Décrivez-moi votre besoin et je vous propose un devis adapté, sans tarif générique.",
};

export const pricingServices = [
  {
    name: "Développement Full-Stack",
    description: "Sites web, applications et back-offices sur mesure (React, Next.js, Laravel, Node.js).",
  },
  {
    name: "CRM & Odoo",
    description: "Mise en place, configuration et automatisation de CRM, notamment sous Odoo.",
  },
  {
    name: "Chatbots & IA",
    description: "Conception de chatbots et d'outils IA pour automatiser le support et la qualification de leads.",
  },
  {
    name: "Scripts & automatisation",
    description: "Scripts Python/SQL pour automatiser la gestion et le nettoyage de bases de données.",
  },
  {
    name: "SEO & Analytics",
    description: "Optimisation SEO et mise en place de suivi via Google Analytics.",
  },
];

export const testimonials = {
  note: "Espace réservé — à remplacer par de vrais témoignages clients.",
  items: [
    {
      quote: "Exemple de témoignage client à venir.",
      author: "Nom du client",
      role: "Poste, Entreprise",
    },
    {
      quote: "Exemple de témoignage client à venir.",
      author: "Nom du client",
      role: "Poste, Entreprise",
    },
    {
      quote: "Exemple de témoignage client à venir.",
      author: "Nom du client",
      role: "Poste, Entreprise",
    },
  ],
};

export const discoveryCta = {
  eyebrow: "Pas encore sûr ?",
  headline: "Réservez un appel découverte gratuit.",
  description:
    "Apprenez-en plus sur ma façon de travailler et comment je peux aider votre projet à passer à l'étape suivante.",
  cta: { label: "Réserver maintenant", href: "#contact" },
};

export const faq = [
  {
    question: "Combien de temps prend un projet en moyenne ?",
    answer:
      "Cela dépend de la complexité : un site vitrine peut prendre 2-3 semaines, un projet plus complexe (CRM, automatisation) peut prendre 1 à 2 mois. Je donne une estimation précise après un premier échange.",
  },
  {
    question: "Peux-tu reprendre un projet existant ?",
    answer:
      "Oui, je travaille régulièrement sur des bases de code et systèmes existants (notamment Odoo, CRM, sites WordPress/PrestaShop) sans tout reconstruire à zéro.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer:
      "Je travaille en méthode Agile/Kanban : cadrage du besoin, points réguliers, livraisons par étapes pour ajuster en cours de route plutôt qu'à la fin.",
  },
  {
    question: "Proposes-tu du support après livraison ?",
    answer:
      "Oui, un support pour les ajustements mineurs est inclus après la livraison. Pour un suivi plus long, on peut discuter d'un accompagnement régulier.",
  },
  {
    question: "Dans quelles langues peux-tu travailler ?",
    answer: "Je travaille aussi bien en français, en anglais qu'en arabe.",
  },
];

export const blogPosts = {
  note: "Espace réservé pour de futurs articles.",
  posts: [
    {
      title: "À venir : retour d'expérience sur l'automatisation d'un CRM Odoo",
      excerpt: "Premier article à publier prochainement.",
    },
    {
      title: "À venir : construire un chatbot IA utile, pas juste impressionnant",
      excerpt: "Premier article à publier prochainement.",
    },
  ],
};

export const contactCta = {
  headline: "Un projet en tête ? Réservons un appel.",
  description: "Choisissez un créneau qui vous convient, on en discute directement.",
  cta: { label: "Envoyer un email", href: "mailto:achraf.ghazal.it@gmail.com" },
};
