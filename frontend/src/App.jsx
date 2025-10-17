import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 scroll-smooth">
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact/>
      </section>

      <Footer />
    </div>
  );
}
