import { Section } from './Section';
import { Card } from './Card';
import {
  Camera,
  FileText,
  BarChart3,
  PenTool,
  Workflow,
  Link2,
} from 'lucide-react';

export function UseCases() {
  const useCases = [
    {
      icon: Camera,
      title: 'AI-Powered Camera Monitoring',
      problem: 'Manual monitoring of multiple camera feeds is time-consuming and error-prone',
      solution:
        'AI agents monitor cameras in real-time, detect anomalies, and send instant alerts via email, Slack, or webhooks',
      benefit: '24/7 automated surveillance with human-level accuracy',
      tags: ['Computer Vision', 'n8n', 'Real-time Alerts'],
    },
    {
      icon: FileText,
      title: 'Automated Data Extraction & Reporting',
      problem: 'Manual data extraction from emails, documents, and databases consumes hours daily',
      solution:
        'Automation workflows extract data from multiple sources, transform it, and generate daily/weekly reports',
      benefit: 'Save 10+ hours per week with 99%+ accuracy',
      tags: ['n8n', 'Make.com', 'Data Processing'],
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Chatbot',
      problem: 'Teams spend time running ad-hoc analytics queries and digging through dashboards',
      solution:
        'LLM-powered chatbot understands natural language questions and delivers insights directly',
      benefit: 'Instant analytics access for non-technical team members',
      tags: ['LLM Integration', 'FastAPI', 'Real-time Data'],
    },
    {
      icon: PenTool,
      title: 'AI Content Automation Pipeline',
      problem: 'Content creation is expensive and slow, limiting scalability of marketing efforts',
      solution:
        'AI automates content generation, editing, and scheduling across blogs, social media, and email',
      benefit: '5-10x faster content production at lower cost',
      tags: ['OpenAI', 'Automation', 'Content Strategy'],
    },
    {
      icon: Workflow,
      title: 'Business Workflow Automation',
      problem: 'Disconnected systems create manual handoffs, delays, and data inconsistencies',
      solution:
        'n8n and Make.com connect CRM, accounting, email, and custom APIs into seamless automated workflows',
      benefit: 'Eliminate manual tasks and sync data across all systems',
      tags: ['n8n', 'Make.com', 'API Integration'],
    },
    {
      icon: Link2,
      title: 'API-to-API Integration Systems',
      problem: 'Managing integrations between multiple APIs is complex and requires constant maintenance',
      solution:
        'FastAPI backend automates API synchronization, transforms data, and handles webhooks reliably',
      benefit: 'Reliable, scalable integrations with zero manual intervention',
      tags: ['FastAPI', 'Python', 'Webhooks'],
    },
  ];

  return (
    <Section
      id="use-cases"
      bgColor="light"
      title="Automation Use-Cases"
      subtitle="Real-world scenarios where AI automation delivers measurable business value"
    >
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return (
            <Card key={index}>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3 rounded-lg flex-shrink-0">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">{useCase.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Problem
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{useCase.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{useCase.solution}</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 border border-teal-200/50">
                  <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-2">
                    Business Benefit
                  </h4>
                  <p className="text-slate-700 font-medium leading-relaxed">{useCase.benefit}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
