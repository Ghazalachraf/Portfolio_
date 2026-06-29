import { testimonials } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-white via-violet-50/40 to-white" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Témoignages
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient">Ce qu&apos;ils en disent</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-amber-700">
            {testimonials.note}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-dashed border-slate-300 bg-white/60 p-7 backdrop-blur">
                <div className="text-4xl leading-none text-violet-300">&ldquo;</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium text-slate-900">{t.author}</span>
                  <span className="block text-slate-500">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
