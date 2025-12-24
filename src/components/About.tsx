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
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm an AI Automation Engineer specializing in building intelligent automation
            systems using n8n, Make.com, FastAPI, AI agents, and cloud APIs. I design
            end-to-end automation solutions that reduce manual work, improve operational
            efficiency, and integrate AI into real business workflows.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            With hands-on experience in AI systems, reinforcement learning, computer vision,
            backend engineering, and automation pipelines, I focus on practical, deployable
            solutions that create measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Icon className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Expertise</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Reinforcement Learning</h4>
            <p className="text-slate-700 mb-4">
              Q-Learning, DQN, PPO, SAC, A3C - building intelligent agents that learn from
              environment interactions
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">AI Systems</h4>
            <p className="text-slate-700 mb-4">
              LLM integration, AI chatbots, computer vision, model inference - deploying AI
              into production workflows
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
