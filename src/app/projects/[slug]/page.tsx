import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, profile } from "@/data/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.name} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-6 pt-12 pb-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            Retour aux projets
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-blue-600">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-2 text-slate-500">{project.role}</p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl shadow-slate-900/5">
            <Image
              src={project.image}
              alt={project.name}
              width={1280}
              height={800}
              unoptimized
              className="aspect-16/10 w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-slate-900">Le projet</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">
                {project.description}
              </p>

              <h2 className="mt-8 text-lg font-semibold text-slate-900">
                Ce que j&apos;ai fait
              </h2>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-blue-500 to-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                  Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Visiter le site
                </a>
              )}
              <Link
                href="/#contact"
                className="flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:shadow-xl"
              >
                Discuter d&apos;un projet similaire
              </Link>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
