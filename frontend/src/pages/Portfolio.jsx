import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Interests from "../components/portfolio/Interests";
import Contact from "../components/portfolio/Contact";
import ChatWidget from "../components/portfolio/ChatWidget";
import { MARQUEE } from "../data/portfolio";

const Ticker = () => (
  <div className="relative flex overflow-hidden border-y border-white/10 bg-[#050b1c] py-5">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...MARQUEE, ...MARQUEE].map((m, i) => (
        <span key={i} className="mx-6 flex items-center gap-6 font-display text-lg font-medium text-slate-400 md:text-2xl">
          {m}
          <span className="text-blue-500">◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 antialiased">
      <Navbar />
      <Hero />
      <Ticker />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}
