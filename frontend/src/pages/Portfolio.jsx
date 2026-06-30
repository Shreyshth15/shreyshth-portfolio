import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import ChatWidget from "../components/portfolio/ChatWidget";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 antialiased">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}
