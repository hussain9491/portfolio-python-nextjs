import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import About from '../../components/About';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}