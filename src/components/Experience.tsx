import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Ikipendence',
      position: 'Full Stack Development Intern',
      period: 'August 2025 - December 2025',
      url: 'https://www.ikipendence.com/',
      details: [
        "Contributed to Ikipendence's live production website with the core team, implementing UI components and resolving bugs in an active codebase serving real users.",
        'Co-developed Staniya, a community platform for sharing and discovering geo-tagged cultural stories across Indian states.',
        'Built auth flows, real-time notifications, media uploads, bilingual English/Hindi support, and end-to-end product features across the stack.',
        'Integrated an ML-powered state classifier using TF-IDF and Multinomial Naive Bayes to predict Indian state categories for new story submissions.'
      ]
    },
    {
      company: 'Hacktoberfest',
      position: 'Open Source Contributor',
      period: 'October 2025',
      url: 'https://hacktoberfest.com/',
      details: [
        'Onboarded repeatedly to unfamiliar codebases across 9 open-source repositories and delivered targeted bug fixes.',
        'Diagnosed root causes independently while preserving existing functionality and project structure.',
        'Had contributions accepted by maintainers across diverse tech stacks during Hacktoberfest 2025.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">Where I've Worked</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
          <div className="flex lg:flex-col border-b-2 lg:border-b-0 lg:border-l-2 border-lightest-navy">
            {experiences.map((exp, index) => (
              <Button
                key={exp.company}
                variant="ghost"
                className={`text-left justify-start font-mono text-sm px-4 lg:px-6 py-3 whitespace-nowrap lg:whitespace-normal rounded-none border-l-2 lg:border-l-0 lg:border-b-2 transition-all duration-300 ${
                  activeTab === index
                    ? 'border-green text-green bg-green-tint'
                    : 'border-transparent text-slate hover:text-green hover:bg-green-tint'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-[300px]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-lightest-slate">
              {experiences[activeTab].position}{' '}
              <span className="text-green">@ </span>
              <a
                href={experiences[activeTab].url}
                className="inline-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experiences[activeTab].company}
              </a>
            </h3>

            <p className="font-mono text-sm text-slate">
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-3">
              {experiences[activeTab].details.map((detail) => (
                <li key={detail} className="flex items-start text-slate">
                  <span className="text-green mr-3 mt-1 flex-shrink-0">▹</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
