import { pricingIntro, pricingServices } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Services
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gradient">{pricingIntro.headline}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          {pricingIntro.description}
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingServices.map((service, i) => (
          <Reveal key={service.name} delay={i * 0.06}>
            <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10">
              <div>
                <div className="mb-4 h-1 w-10 rounded-full bg-linear-to-r from-blue-500 to-violet-500" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
              >
                Demander un devis
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
