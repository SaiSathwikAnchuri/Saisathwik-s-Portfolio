import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Full stack Development Intern @ Ikipendence',
      position: 'Intern',
      period: 'August 2025 - Present',
      url: 'https://www.ikipendence.com/',
      details: [
        'Building and maintaining full-stack web applications using React.js, Node.js, Express, and MongoDB.',
        'Enhanced UI/UX responsiveness and accessibility, improving cross-device performance',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.'
      ]
    },{
      company: 'Open Source Contributor @ GirlScript Summer of Code (GSSOC)',
      position: ' Developer',
      period: 'July 2025-present',
      url: '',
      details: [
        'Contributing to multiple open-source projects, taking ownership of feature development, bug fixes, and documentation improvements.',
        'Applied a strong problem-solving mindset to debug complex issues, optimize API integrations, and improve component reusability.',
        'these projects have allowed me to enhance my skills in full-stack development, particularly with React and Node.js.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">Where I've Worked</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tab buttons */}
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
        
        {/* Tab content */}
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
              {experiences[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-start text-slate">
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