import { Button } from './Button';
import { Zap } from 'lucide-react';

export function Hero() {
  const handleViewAutomations = () => {
    const element = document.querySelector('#use-cases');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <Zap className="text-yellow-400" size={24} />
          <span className="text-yellow-400 font-semibold">AI Automation Specialist</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
          I Build AI-Powered
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Automation Systems
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-center mb-12">
          I build AI-powered automation systems that save time, reduce cost, and scale operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button variant="primary" onClick={handleViewAutomations}>
            View Automations
          </Button>
          <Button variant="secondary" onClick={handleContactMe}>
            Contact Me
          </Button>
        </div>

        <p className="text-center text-slate-400 text-sm">
          FastAPI • Python • n8n • Make.com • AI Agents • LLM Integration
        </p>
      </div>
    </section>
  );
}
