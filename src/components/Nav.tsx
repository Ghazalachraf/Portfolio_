import Link from "next/link";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/80 px-5 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-md">
        <Link
          href="/"
          className="whitespace-nowrap text-sm font-semibold tracking-tight text-slate-900"
        >
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Réserver un appel
        </Link>
      </nav>
    </header>
  );
}
