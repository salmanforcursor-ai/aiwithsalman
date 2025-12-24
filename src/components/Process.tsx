import { Section } from './Section';
import { Lightbulb, Workflow, Zap, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Understand Problem',
      description:
        'We dive deep into your business challenges, goals, and current workflows to identify automation opportunities.',
    },
    {
      number: '02',
      icon: Workflow,
      title: 'Design Workflow',
      description:
        'I architect a clear automation solution, mapping out data flows, integrations, and AI components needed.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Build & Integrate',
      description:
        'Using n8n, Make.com, FastAPI, or custom code, I build the automation system and integrate all necessary APIs and services.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Test & Optimize',
      description:
        'Thorough testing, performance optimization, and deployment to production with ongoing monitoring and support.',
    },
  ];

  return (
    <Section
      id="process"
      bgColor="light"
      title="How I Work"
      subtitle="A proven 4-step process for building automation solutions"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-slate-100 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-blue-200 mb-3 sm:mb-4">{step.number}</div>

                <Icon className="text-blue-600 mb-3 sm:mb-4" size={36} />

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-teal-400"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 sm:p-8 border border-blue-200">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">Timeline & Support</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 text-sm sm:text-base">Scope Analysis</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Simple workflows: 1-2 weeks. Complex integrations: 2-4 weeks.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 text-sm sm:text-base">Development</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Agile approach with regular updates and adjustments based on feedback.
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-blue-600 mb-2 text-sm sm:text-base">Ongoing Support</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Post-launch monitoring, optimization, and maintenance for long-term success.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
