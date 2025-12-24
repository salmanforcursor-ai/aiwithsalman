import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { UseCases } from './components/UseCases';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <UseCases />
      <Projects />
      <Testimonials />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
