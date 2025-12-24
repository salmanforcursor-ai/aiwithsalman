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
      gradient: 'from-blue-500/10 to-blue-600/5',
      iconColor: 'text-blue-600',
      accentColor: 'bg-blue-500',
    },
    {
      title: 'Backend & Systems',
      skills: ['FastAPI', 'Python', 'REST APIs', 'WebSockets', 'Background Tasks'],
      icon: Code2,
      gradient: 'from-purple-500/10 to-purple-600/5',
      iconColor: 'text-purple-600',
      accentColor: 'bg-purple-500',
    },
    {
      title: 'AI & Data',
      skills: ['Computer Vision', 'LLM Integration', 'Model Inference', 'OpenAI', 'HuggingFace'],
      icon: Zap,
      gradient: 'from-amber-500/10 to-amber-600/5',
      iconColor: 'text-amber-600',
      accentColor: 'bg-amber-500',
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS / Azure', 'Git & GitHub', 'Docker', 'Webhooks'],
      icon: Cloud,
      gradient: 'from-teal-500/10 to-teal-600/5',
      iconColor: 'text-teal-600',
      accentColor: 'bg-teal-500',
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
              className={`group relative bg-gradient-to-br ${category.gradient} rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-slate-200 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.accentColor.replace('bg-', 'from-')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Icon container */}
              <div className={`w-14 h-14 rounded-lg bg-white/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`${category.iconColor} transition-colors`} size={32} />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 group-hover:text-slate-950 transition-colors">{category.title}</h3>

              {/* Skills list */}
              <ul className="space-y-2.5 sm:space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 group/item">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${category.accentColor} group-hover/item:scale-125 transition-transform`}></div>
                    <span className="text-slate-700 font-medium text-sm sm:text-base group-hover/item:text-slate-900 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent gradient */}
              <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-5 transition-opacity blur-xl" style={{ background: 'currentColor' }}></div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
