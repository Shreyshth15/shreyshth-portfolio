import { toast } from "sonner";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Experience from "../components/portfolio/Experience";
import Projects from "../components/portfolio/Projects";
import Education from "../components/portfolio/Education";
import Interests from "../components/portfolio/Interests";
import Contact from "../components/portfolio/Contact";
import ChatWidget from "../components/portfolio/ChatWidget";

const PORTRAIT = "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHN1aXQlMjBuZXV0cmFsJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3ODI3MjQ5NjF8MA&ixlib=rb-4.1.0&q=85";

export default function Portfolio() {
  const handleDownloadCV = () => {
    toast("CV coming soon", {
      description: "The downloadable PDF is being finalized. Reach out via email for the latest copy.",
    });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 antialiased">
      <Hero onDownloadCV={handleDownloadCV} />
      <main>
        <About portraitUrl={PORTRAIT} />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Interests />
        <Contact onDownloadCV={handleDownloadCV} />
      </main>
      <ChatWidget />
    </div>
  );
}
