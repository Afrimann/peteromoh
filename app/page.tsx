import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}