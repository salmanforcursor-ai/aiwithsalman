import { Section } from './Section';
import { Button } from './Button';
import { Mail, Linkedin, Github, Award, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <>
      <Section
        id="certifications"
        bgColor="white"
        title="Certifications & Learning"
        subtitle="Committed to continuous growth and professional development"
      >
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200">
            <Award className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Microsoft AI-900</h3>
            <p className="text-slate-600 mb-4">
              Azure AI Fundamentals certification demonstrating proficiency in AI concepts,
              machine learning, and responsible AI practices.
            </p>
            <p className="text-sm text-slate-500">Verified certification</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-200">
            <BookOpen className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Continuous Learning</h3>
            <p className="text-slate-600 mb-4">
              Project-based development and hands-on implementation of latest AI/automation
              frameworks. Staying current with industry trends and best practices.
            </p>
            <p className="text-sm text-slate-500">Always building & learning</p>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        bgColor="light"
        title="Let's Automate Your Workflow"
        subtitle="Ready to reduce costs, save time, and scale your operations?"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-slate-600 mb-12 text-center">
            Whether you need AI-powered automation, backend engineering, or workflow optimization,
            I'm here to help you build solutions that drive real business results.
          </p>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600 flex-shrink-0" size={28} />
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">Email</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    salman@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-600 flex-shrink-0" size={28} />
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/salman-iqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    linkedin.com/in/salman-iqbal
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Github className="text-blue-600 flex-shrink-0" size={28} />
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold">GitHub</p>
                  <a
                    href="https://github.com/salman-iqbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    github.com/salman-iqbal
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-center text-slate-600 mb-6">
                Send me an email with details about your project or automation needs. I typically
                respond within 24 hours.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  href="mailto:salman@example.com"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center text-slate-500">
            <p>© 2024 Salman Iqbal. AI Automation Engineer.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
