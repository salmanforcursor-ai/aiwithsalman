import { Section } from './Section';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Salman automated our invoice processing workflow using n8n and Python. What previously took our accounting team 3 days of manual data entry now completes in 3 hours with 98% accuracy. His ability to understand our business processes and translate them into efficient automation was impressive. The ROI was evident within the first month.",
      name: 'Sarah Mitchell',
      title: 'VP OF OPERATIONS',
      company: 'Global Tech Solutions',
      rating: 5,
    },
    {
      quote:
        "We needed to streamline our month-end financial close process. Salman designed an AI-powered solution using Make.com that integrated our ERP accounting software and reporting tools. The close time dropped from 10 days to 2 days, and our finance team can now focus on analysis instead of data entry. His documentation and knowledge transfer were excellent.",
      name: 'James Chen',
      title: 'FINANCE DIRECTOR',
      company: 'Financial Services Group',
      rating: 5,
    },
    {
      quote:
        "Salman implemented RPA solutions across our HR and Finance departments, automating employee onboarding, payroll processing, and vendor management. We've saved over 2,000 hours annually, and the error rate dropped to near zero. His strategic thinking about process optimization and change management helped ensure smooth adoption across our organization.",
      name: 'Lisa Rodriguez',
      title: 'CHIEF DIGITAL OFFICER',
      company: 'Manufacturing Corp',
      rating: 5,
    },
    {
      quote:
        "We started with a single audit automation project, but Salman's work was so effective that we expanded to 15 workflows across compliance, claims processing, and patient data management. His expertise in combining RPA with AI for intelligent document processing has been transformative. He's responsive, professional, and delivers on time.",
      name: 'Michael Thompson',
      title: 'OPERATIONS MANAGER',
      company: 'Healthcare Services Inc',
      rating: 5,
    },
  ];

  const stats = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '5.0', label: 'Average Rating' },
    { number: '95%', label: 'Would Recommend' },
  ];

  return (
    <Section
      id="testimonials"
      bgColor="light"
      title="What Clients Say"
      subtitle="Real feedback from teams who transformed their operations through AI and automation solutions."
    >
      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base italic mb-6">
              "{testimonial.quote}"
            </p>

            {/* Client Info */}
            <div className="pt-6 border-t border-slate-200">
              <p className="font-bold text-slate-900 text-sm sm:text-base">
                {testimonial.name}
              </p>
              <p className="text-xs sm:text-sm text-blue-600 font-semibold uppercase tracking-wide">
                {testimonial.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stat.number}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
