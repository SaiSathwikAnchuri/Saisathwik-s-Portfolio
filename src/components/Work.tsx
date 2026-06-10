import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Award } from 'lucide-react';

const Work = () => {
  const featuredProjects = [
    {
      title: 'ResolveIQ',
      description: 'RAG-based support triage agent that classifies and auto-resolves customer tickets across three product domains using BGE embeddings over a 774-file knowledge base with 6,632 chunks.',
      impact: '100% status and request-type classification accuracy, CPU retrieval under 100ms, and at most 2 LLM calls per ticket.',
      tech: ['Python', 'Gemini API', 'RAG', 'BGE Embeddings', 'Pydantic', 'Streamlit'],
      github: 'https://github.com/SaiSathwikAnchuri/ResolveIQ',
      external: 'https://github.com/SaiSathwikAnchuri/ResolveIQ',
      image: '/resolveiq-preview.svg'
    },
    {
      title: 'Growth Automation',
      description: 'B2B lead pipeline that scrapes Reddit and Hacker News every 6 hours, filters posts against user-defined ICPs, scores buying intent, and drafts personalized outreach.',
      impact: 'Real-time dashboard built with Next.js App Router and Supabase to track leads from discovery through outreach.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind CSS', 'Vercel Cron'],
      github: 'https://github.com/SaiSathwikAnchuri/Growth-Automation',
      external: 'https://github.com/SaiSathwikAnchuri/Growth-Automation',
      image: '/growth-automation-preview.svg'
    },
    {
      title: 'IoT Network Anomaly Detection',
      description: 'Three-stage ML pipeline on CIC-IoT-2022 that predicts device category, identifies exact device model, and flags behavioral anomalies from network flow features.',
      impact: 'Random Forest and Isolation Forest models served through a modular IoTPredictor interface returning category, identity, and anomaly status.',
      tech: ['Python', 'scikit-learn', 'Random Forest', 'Isolation Forest', 'Pickle'],
      github: 'https://github.com/SaiSathwikAnchuri/Network-Anomaly',
      external: 'https://github.com/SaiSathwikAnchuri/Network-Anomaly',
      image: '/network-anomaly-preview.svg'
    },
    {
      title: 'Student Progress Management System',
      description: 'Admin dashboard that syncs live Codeforces data, renders student rating trends, difficulty heatmaps, and solve history, and sends inactivity reminders.',
      impact: 'Scheduled MongoDB Atlas sync, automated Nodemailer reminders, and bulk CSV export for coaching workflows.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Cron.js', 'Tailwind CSS'],
      github: 'https://github.com/SaiSathwikAnchuri/student-codeforces-progress',
      external: 'https://github.com/SaiSathwikAnchuri/student-codeforces-progress',
      image: '/1.png'
    }
  ];

  const achievements = [
    {
      title: 'HackerRank Orchestrate 2026',
      description: 'Ranked 390th globally in a competitive AI Agent innovation challenge.',
      organization: 'HackerRank',
      date: '2026'
    },
    {
      title: 'SmartInterviews Diamond Rank',
      description: 'Earned top-tier Diamond recognition for Data Structures & Algorithms practice.',
      organization: 'SmartInterviews',
      date: '2026'
    },
    {
      title: 'HackWithAI 2026',
      description: 'Competed in a national 24-hour AI hackathon at KLH Bachupally.',
      organization: 'KLH Bachupally',
      date: '2026'
    },
    {
      title: 'IASF 2026 Project Showcase',
      description: 'Showcased an AI project at the national AI conference hosted at GITAM University.',
      organization: 'GITAM University',
      date: '2026'
    },
    {
      title: 'Google Solution Challenge 2026',
      description: 'Defined evaluation metrics and analyzed AI model outputs for solution validation.',
      organization: 'Google Developer Student Clubs',
      date: '2026'
    },
    {
      title: 'AI, API, and JavaScript Certifications',
      description: 'Completed IBM SkillsBuild Introduction to Generative AI, Be10x AI Tools Workshop, Cisco JavaScript Essentials 1 and 2, and Postman API Fundamentals Student Expert.',
      organization: 'IBM, Be10x, Cisco, Postman',
      date: '2025 - 2026'
    }
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">Some Things I've Built</h2>

      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <div key={project.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
              <a href={project.external} target="_blank" rel="noopener noreferrer" className="relative group block">
                <div className="bg-green rounded overflow-hidden border border-lightest-navy/40 shadow-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="w-full aspect-video object-cover transition-all duration-300 mix-blend-multiply grayscale group-hover:mix-blend-normal group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-navy/75 group-hover:bg-transparent transition-all duration-300 rounded" />
              </a>
            </div>

            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-4`}>
              <p className="overline">Project</p>
              <h3 className="text-2xl font-semibold text-lightest-slate">{project.title}</h3>

              <div className="bg-light-navy p-6 rounded shadow-lg max-w-xl mx-auto">
                <p className="text-lightest-slate text-left leading-relaxed">{project.description}</p>
              </div>

              <ul className={`flex flex-wrap gap-3 font-mono text-sm text-light-slate ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                <a href={project.github} className="text-lightest-slate hover:text-green transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                  <Github size={20} />
                </a>
                <a href={project.external} className="text-lightest-slate hover:text-green transition-colors" target="_blank" rel="noopener noreferrer" aria-label={`${project.title} project link`}>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-semibold text-lightest-slate mb-12 text-center">
          Achievements & Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <Card key={item.title} className="bg-light-navy border-none hover:transform hover:translate-y-[-5px] transition-all duration-300 group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Award size={40} className="text-green" />
                </div>

                <h4 className="text-xl font-semibold text-lightest-slate mb-2 group-hover:text-green transition-colors">
                  {item.title}
                </h4>

                <p className="text-light-slate mb-4 flex-grow text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-auto font-mono text-xs text-light-slate">
                  <p><span className="text-green">Org:</span> {item.organization}</p>
                  <p><span className="text-green">Date:</span> {item.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
