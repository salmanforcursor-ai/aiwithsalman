import { Section } from './Section';
import { Card } from './Card';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'AI-Powered Automation Workflows',
      description:
        'Built end-to-end automation workflows using n8n and Make.com for enterprise clients, integrating multiple APIs and services.',
      techStack: ['n8n', 'Make.com', 'APIs', 'Webhooks'],
      outcome: 'Reduced manual data entry by 95% and saved 15+ hours per week',
    },
    {
      title: 'FastAPI-Based AI Backend',
      description:
        'Developed high-performance FastAPI backend for AI inference, supporting real-time model predictions and webhook integrations.',
      techStack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker'],
      outcome: '< 100ms response times for AI inference with 99.9% uptime',
    },
    {
      title: 'AI Passport Photo SaaS',
      description:
        'Built a SaaS platform that uses computer vision and AI to automatically generate professional passport photos from uploaded images.',
      techStack: ['FastAPI', 'Computer Vision', 'LLM', 'React'],
      outcome: 'Automated photo processing from 30 mins to 30 seconds per image',
    },
    {
      title: 'AI Analytics Chatbot',
      description:
        'Created an LLM-powered chatbot that answers business analytics questions in natural language, querying data warehouses in real-time.',
      techStack: ['OpenAI', 'LLM Fine-tuning', 'FastAPI', 'Python'],
      outcome: 'Enabled non-technical stakeholders to access data independently',
    },
    {
      title: 'Monitoring & Alerting System',
      description:
        'Built a real-time monitoring system that tracks system health, detects anomalies, and sends intelligent alerts via multiple channels.',
      techStack: ['Python', 'WebSockets', 'n8n', 'Slack Integration'],
      outcome: '24/7 automated monitoring with 10s response time for critical issues',
    },
  ];

  return (
    <Section
      id="projects"
      bgColor="light"
      title="Featured Projects"
      subtitle="Proven implementations across AI, automation, and backend engineering"
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed">{project.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-2">
                  Outcome
                </h4>
                <p className="text-slate-700 font-medium text-lg">{project.outcome}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
