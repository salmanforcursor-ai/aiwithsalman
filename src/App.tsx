import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { UseCases } from './components/UseCases';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
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
      <Process />
      <Footer />
    </div>
  );
}

export default App;
