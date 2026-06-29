# Analyse SWOT & Benchmark — Portfolio Achraf Ghazal

> Comparaison entre le portfolio (Next.js + React Three Fiber, codé sur mesure)
> et le template de référence **LaunchFolio** (https://launchfolio.framer.website/).
> Date : 2026-06-29.

## Benchmark (note /5)

| Critère | Mon portfolio | LaunchFolio | Commentaire |
|---|:---:|:---:|---|
| Originalité / effet "wow" | 5 | 3 | Hero 3D interactif unique vs template vu des centaines de fois. |
| Polish visuel / finition | 3 | 5 | Eux : typographie et micro-animations ultra léchées. |
| Richesse visuelle (images) | 2 | 5 | Aucun visuel de projet de mon côté (cartes texte seulement). |
| Complétude du contenu | 2 | 5 | Témoignages + blog en placeholder, liens projets en `#`. |
| Démonstration de compétence | 5 | 3 | Méta-avantage : le site EST codé → il prouve mes compétences. |
| Performance / SEO | 3 | 4 | Le 3D peut peser sur mobile ; Framer optimise/CDN auto. |
| Conversion (prise de RDV) | 4 | 4 | Cal.com intégré en 2ᵉ section vs bouton "Book a call". |
| Coût / indépendance | 5 | 3 | 0 abonnement, code 100 % à moi, déployable partout. |
| Maintenabilité | 3 | 4 | Framer = no-code ; moi = code (mais je sais coder). |
| Mobile | 3 | 5 | Canvas 3D + grille d'icônes à fiabiliser sur petit écran. |

**Score global : Moi ≈ 35/50 · LaunchFolio ≈ 41/50.**
LaunchFolio gagne sur la finition et le contenu (produit fini).
Je gagne sur l'originalité, la preuve de compétence et l'indépendance —
ce qui compte le plus pour un dev qui se vend lui-même.

## SWOT

### Forces (internes +)
- Hero 3D interactif unique (constellation de technologies).
- Le médium = le message : un site codé en Next.js + Three.js prouve ma valeur.
- Stack moderne maîtrisée (Next 16, React 19, Tailwind v4, Framer Motion, R3F).
- Indépendance totale : pas d'abonnement, code versionné, hébergeable partout.
- Booking Cal.com intégré + carrousel de certifications dynamique.

### Faiblesses (internes −)
- Contenu placeholder : témoignages et blog factices, liens projets `#`, photo placeholder.
- Aucun visuel de projet (captures, mockups, métriques de résultats).
- Pas de pages de détail / études de cas par projet.
- Risque de performance/mobile lié au 3D (LCP, bundle, batterie).
- Pricing vague ("sur devis") — moins rassurant qu'une offre cadrée.

### Opportunités (externes +)
- Ajouter 2-3 vraies études de cas (LOVAG, CRM Odoo, chatbot) avec visuels + résultats chiffrés.
- Version bilingue FR/EN (niveau C1) pour viser des clients internationaux.
- Blog réel pour le SEO et l'autorité.
- Déploiement Vercel + domaine achrafghazal.com + meta SEO + image OG.
- Mode sombre, `prefers-reduced-motion`, fallback 2D mobile.

### Menaces (externes −)
- Barre visuelle très haute : milliers de templates Framer ultra-finis à bas prix.
- Contenu vide = perte de confiance immédiate.
- Charge de maintenance (tout repose sur du code).
- 3D mal optimisé → bounce mobile en hausse.

## Priorités recommandées (par ROI)
1. Remplacer tout le placeholder (photo, liens projets, masquer témoignages/blog vides). — *critique avant mise en ligne*
2. Ajouter visuels + résultats chiffrés sur 2-3 projets.
3. Fiabiliser le mobile (fallback 2D + `prefers-reduced-motion`).
4. Déployer sur Vercel + domaine + SEO.
5. Version EN pour élargir la cible.
