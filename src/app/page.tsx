import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar />
      <Hero />
      <About />

      <Experience />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
