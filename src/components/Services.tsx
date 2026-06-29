import Image from "next/image";
import { services } from "@/data/content";
import Reveal from "@/components/Reveal";

// Map each technology label to a brand logo in /public/icons (if one exists).
const ICON_MAP: Record<string, string> = {
  Python: "python",
  JavaScript: "javascript",
  PHP: "php",
  Java: "java",
  HTML: "html5",
  CSS: "css3",
  Laravel: "laravel",
  React: "react",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  Bootstrap: "bootstrap",
  Sass: "sass",
  Tailwind: "tailwindcss",
  MySQL: "mysql",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  MariaDB: "mariadb",
  Supabase: "supabase",
  Oracle: "oracle",
  WordPress: "wordpress",
  Git: "git",
  Docker: "docker",
  Linux: "linux",
  Figma: "figma",
  Jira: "jira",
};

const iconGroups = [
  { label: "Langages", items: services.languages },
  { label: "Frameworks", items: services.frameworks },
  { label: "Bases de données", items: services.databases },
  { label: "CMS / CRM", items: services.cms },
  { label: "Outils", items: services.tools },
];

function TechTile({ name }: { name: string }) {
  const icon = ICON_MAP[name];
  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-600/10">
        {icon ? (
          <Image
            src={`/icons/${icon}.svg`}
            alt={name}
            width={36}
            height={36}
            unoptimized
            className="h-9 w-9 object-contain transition group-hover:scale-110"
          />
        ) : (
          <span className="text-xs font-semibold text-slate-500">
            {name.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="text-center text-xs font-medium text-slate-600">{name}</span>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white via-blue-50/40 to-white" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Compétences
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient">Stack &amp; technologies</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">{services.intro}</p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {iconGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-violet-600">
                  {group.label}
                </h3>
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
                  {group.items.map((item) => (
                    <TechTile key={item} name={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Methods have no brand logos — show as gradient pills */}
          <Reveal delay={0.1}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-violet-600">
                Méthodes
              </h3>
              <div className="flex flex-wrap gap-2">
                {services.methods.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
