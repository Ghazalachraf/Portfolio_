import Image from "next/image";
import { about, profile, socialLinks } from "@/data/content";
import Reveal from "@/components/Reveal";
import Certifications from "@/components/Certifications";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      {/* headline */}
      <Reveal>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-slate-400">{about.headlineTop}</span>{" "}
          <span className="text-slate-900">{about.headlineBottom}</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
        {/* photo + socials + name */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={600}
              height={720}
              unoptimized
              className="aspect-4/5 w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-white backdrop-blur transition hover:bg-slate-900"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <p className="mt-5 text-2xl font-bold text-slate-900">{profile.name}</p>
          <p className="text-sm font-medium text-slate-500">{profile.title}</p>
        </Reveal>

        {/* bio */}
        <Reveal delay={0.1} className="space-y-6">
          {about.bio.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-900">{p.lead}</span>{" "}
              {p.rest}
            </p>
          ))}
          <p
            className="signature select-none pt-2 text-5xl text-slate-900 sm:text-6xl"
            aria-label={`Signature ${profile.name}`}
          >
            {profile.name}
          </p>
        </Reveal>
      </div>

      {/* certifications */}
      <Reveal delay={0.1} className="mt-16">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-violet-600">
            Certifications
          </h3>
          <Certifications />
        </div>
      </Reveal>
    </section>
  );
}
