import { contactCta } from "@/data/content";
import CalendarEmbed from "@/components/CalendarEmbed";
import Reveal from "@/components/Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-blue-600 via-violet-600 to-blue-700 px-6 py-12 text-center text-white shadow-2xl shadow-violet-600/20 sm:px-10">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            {contactCta.headline}
          </h2>
          <div className="relative">
            <CalendarEmbed />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
