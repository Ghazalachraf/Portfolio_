import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

// Sections Testimonials et Blog masquées tant qu'il n'y a pas de contenu réel.
// Pour les réactiver : réimporter et insérer <Testimonials /> / <Blog /> ci-dessous.

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Nav />
      <main className="flex-1">
        <Hero />
        <ContactCTA />
        <Projects />
        <Services />
        <About />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
