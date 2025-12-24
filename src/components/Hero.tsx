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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center">
          <Zap className="text-yellow-400" size={20} />
          <span className="text-yellow-400 font-semibold text-sm sm:text-base">AI Automation Specialist</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-center leading-tight px-2">
          I Build AI-Powered
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mt-2">
            Automation Systems
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-center mb-8 sm:mb-12 px-4 leading-relaxed">
          I build AI-powered automation systems that save time, reduce cost, and scale operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
          <Button variant="primary" onClick={handleViewAutomations}>
            View Automations
          </Button>
          <Button variant="secondary" onClick={handleContactMe}>
            Contact Me
          </Button>
        </div>

        <p className="text-center text-slate-400 text-xs sm:text-sm px-4">
          FastAPI • Python • n8n • Make.com • AI Agents • LLM Integration
        </p>
      </div>
    </section>
  );
}
