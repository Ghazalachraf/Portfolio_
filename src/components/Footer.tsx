import Link from "next/link";
import { profile, navLinks, socialLinks } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* top CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Disponible pour de nouveaux projets
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Travaillons{" "}
              <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                ensemble
              </span>
              .
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-lg text-slate-300 transition hover:text-white"
            >
              {profile.email}
            </a>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            Réserver un appel
          </Link>
        </div>

        {/* columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="signature text-4xl text-white">{profile.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Développeur Full-Stack basé à Rabat. Applications web,
              automatisation et outils IA, du cahier des charges à la production.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition hover:text-white"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
              <li>{profile.site}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Réseaux</h3>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <p>Conçu &amp; développé avec Next.js</p>
        </div>
      </div>
    </footer>
  );
}
