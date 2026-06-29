import Image from "next/image";
import { faq, discoveryCta, profile } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-slate-900">Vos questions,</span>{" "}
          <span className="text-slate-400">mes réponses.</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* FAQ list */}
        <Reveal className="space-y-3">
          {faq.map((item, i) => (
            <details
              key={item.question}
              open={i === 0}
              className="group rounded-2xl border border-slate-200/80 bg-white/70 px-5 backdrop-blur transition hover:border-slate-300"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-base font-semibold text-slate-900">
                <span className="text-sm font-medium text-slate-400 group-open:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{item.question}</span>
                <span className="text-xl leading-none text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xl leading-none text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>

        {/* discovery-call card */}
        <Reveal delay={0.1}>
          <aside className="h-fit rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl shadow-slate-900/5 backdrop-blur lg:sticky lg:top-24">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={64}
              height={64}
              unoptimized
              className="h-16 w-16 rounded-full object-cover"
            />
            <h3 className="mt-6 text-2xl font-bold leading-tight">
              <span className="text-slate-400">{discoveryCta.eyebrow}</span>
              <br />
              <span className="text-slate-900">{discoveryCta.headline}</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {discoveryCta.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={discoveryCta.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {discoveryCta.cta.label}
              </a>
              <span className="text-sm text-slate-400">Cal.com</span>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
