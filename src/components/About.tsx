import { Section } from './Section';
import {
  Brain,
  Code2,
  Zap,
  TrendingUp,
} from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & ML Expertise',
      description: 'Reinforcement learning, LLM fine-tuning, and intelligent system design',
    },
    {
      icon: Code2,
      title: 'Backend Engineering',
      description: 'FastAPI development, REST APIs, WebSockets, and production-grade systems',
    },
    {
      icon: Zap,
      title: 'Automation Specialist',
      description: 'n8n, Make.com, and workflow automation for enterprise solutions',
    },
    {
      icon: TrendingUp,
      title: 'Business-Focused',
      description: 'SaaS mindset with proven freelance and consulting experience',
    },
  ];

  return (
    <Section
      id="about"
      bgColor="light"
      title="About Me"
      subtitle="Building intelligent automation systems that drive real business results"
    >
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
        <div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            I'm an AI Automation Engineer specializing in building intelligent automation
            systems using n8n, Make.com, FastAPI, AI agents, and cloud APIs. I design
            end-to-end automation solutions that reduce manual work, improve operational
            efficiency, and integrate AI into real business workflows.
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            With hands-on experience in AI systems, reinforcement learning, computer vision,
            backend engineering, and automation pipelines, I focus on practical, deployable
            solutions that create measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100">
                <Icon className="text-blue-600 mb-3" size={28} />
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 sm:p-8 border border-blue-200 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Core Expertise</h3>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-base sm:text-lg">Reinforcement Learning</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Q-Learning, DQN, PPO, SAC, A3C - building intelligent agents that learn from
              environment interactions
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-base sm:text-lg">AI Systems</h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              LLM integration, AI chatbots, computer vision, model inference - deploying AI
              into production workflows
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
