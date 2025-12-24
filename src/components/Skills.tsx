import { Section } from './Section';
import {
  Zap,
  Code2,
  Database,
  Cloud,
  Bot,
  GitBranch,
  Workflow,
  Eye,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'AI & Automation',
      skills: ['n8n', 'Make.com', 'AI Agents', 'Workflow Automation', 'API Integrations'],
      icon: Bot,
    },
    {
      title: 'Backend & Systems',
      skills: ['FastAPI', 'Python', 'REST APIs', 'WebSockets', 'Background Tasks'],
      icon: Code2,
    },
    {
      title: 'AI & Data',
      skills: ['Computer Vision', 'LLM Integration', 'Model Inference', 'OpenAI', 'HuggingFace'],
      icon: Zap,
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS / Azure', 'Git & GitHub', 'Docker', 'Webhooks'],
      icon: Cloud,
    },
  ];

  return (
    <Section
      id="skills"
      title="Core Skills"
      subtitle="Technical expertise across AI, automation, and backend engineering"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:-translate-y-1"
            >
              <Icon className="text-blue-600 mb-4" size={36} />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">{category.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
