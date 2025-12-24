import { Button } from './Button';
import { ImageCarousel } from './ImageCarousel';
import { Zap } from 'lucide-react';

export function Hero() {
  const projectImages = [
    {
      src: '/projects/fastapi-backend.png',
      alt: 'FastAPI Backend Code',
      title: 'FastAPI + Python Backend',
    },
    {
      src: '/projects/n8n-workflow.png',
      alt: 'n8n Automation Workflow',
      title: 'n8n Automation Workflows',
    },
  ];

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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Left Content - Text */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Zap className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold text-sm sm:text-base">AI Automation Specialist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              I Build AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mt-2">
                Automation Systems
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              I build AI-powered automation systems that save time, reduce cost, and scale operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" onClick={handleViewAutomations}>
                View Automations
              </Button>
              <Button variant="secondary" onClick={handleContactMe}>
                Contact Me
              </Button>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm">
              FastAPI • Python • n8n • Make.com • AI Agents • LLM Integration
            </p>
          </div>

          {/* Right Content - Carousel */}
          <div className="hidden md:block h-96 lg:h-[450px]">
            <ImageCarousel images={projectImages} autoPlay={true} autoPlayInterval={5000} />
          </div>
        </div>

        {/* Mobile Carousel - Below text on smaller screens */}
        <div className="md:hidden mt-12 h-80 sm:h-96">
          <ImageCarousel images={projectImages} autoPlay={true} autoPlayInterval={5000} />
        </div>
      </div>
    </section>
  );
}
