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
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 sm:p-8 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Award className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Microsoft AI-900</h3>
            <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
              Azure AI Fundamentals certification demonstrating proficiency in AI concepts,
              machine learning, and responsible AI practices.
            </p>
            <p className="text-xs sm:text-sm text-slate-500">Verified certification</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 sm:p-8 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <BookOpen className="text-blue-600 mb-4" size={36} />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Continuous Learning</h3>
            <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
              Project-based development and hands-on implementation of latest AI/automation
              frameworks. Staying current with industry trends and best practices.
            </p>
            <p className="text-xs sm:text-sm text-slate-500">Always building & learning</p>
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
          <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 text-center px-4 leading-relaxed">
            Whether you need AI-powered automation, backend engineering, or workflow optimization,
            I'm here to help you build solutions that drive real business results.
          </p>

          <div className="bg-white rounded-xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 border border-slate-100">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
              Get In Touch
            </h3>

            <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start sm:items-center gap-4">
                <Mail className="text-blue-600 flex-shrink-0 mt-1 sm:mt-0" size={24} />
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 uppercase font-semibold mb-1">Email</p>
                  <a
                    href="mailto:salmanjoyiaa@gmail.com"
                    className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                  >
                    salmanjoyiaa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <Linkedin className="text-blue-600 flex-shrink-0 mt-1 sm:mt-0" size={24} />
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 uppercase font-semibold mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/salmanjoyiaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                  >
                    linkedin.com/in/salmanjoyiaa
                  </a>
                </div>
              </div>

              <div className="flex items-start sm:items-center gap-4">
                <Github className="text-blue-600 flex-shrink-0 mt-1 sm:mt-0" size={24} />
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 uppercase font-semibold mb-1">GitHub</p>
                  <a
                    href="https://github.com/salmanjoyiaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                  >
                    github.com/salmanjoyiaa
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6 sm:pt-8">
              <p className="text-center text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                Send me an email with details about your project or automation needs. I typically
                respond within 24 hours.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  href="mailto:salmanjoyiaa@gmail.com"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center text-slate-500 text-sm sm:text-base px-4">
            <p>© 2025 Salman Iqbal Joyia. AI Automation Engineer.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
