import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Chat />
        <Contact />
      </main>
    </>
  );
}
