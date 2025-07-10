import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Upstatement',
      position: 'Engineer',
      period: 'May 2018 - Present',
      url: 'https://upstatement.com/',
      details: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
      ]
    },
    {
      company: 'MullenLowe',
      position: 'Creative Technologist',
      period: 'July 2017 - May 2018',
      url: 'https://us.mullenlowe.com/',
      details: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
      ]
    },
    {
      company: 'Starry',
      position: 'Software Engineer Co-op',
      period: 'December 2016 - June 2017',
      url: 'https://starry.com/',
      details: [
        'Engineered and maintained major features of Starry\'s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS',
        'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with existing databases',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry\'s iOS and Android mobile apps'
      ]
    },
    {
      company: 'Scout Studio',
      position: 'Developer',
      period: 'January 2015 - December 2016',
      url: 'https://scout-studio.com/',
      details: [
        'Developed and shipped highly interactive web applications for Fortune 500 companies like MassMutual',
        'Built custom online travel booking applications for JetBlue using modern web technologies',
        'Worked alongside a small team of designers and developers to build beautiful, functional websites and applications'
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