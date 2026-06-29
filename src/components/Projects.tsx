import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">Projets récents</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group block">
              {/* preview frame */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-slate-900/5">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1280}
                  height={800}
                  unoptimized
                  className="aspect-16/10 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition duration-300 group-hover:bg-slate-900/15 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg backdrop-blur">
                    Voir le projet
                  </span>
                </div>
              </div>

              {/* meta */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-500">{project.category}</p>
                </div>
                <span className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-700 transition group-hover:text-blue-600">
                  Voir le projet
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
