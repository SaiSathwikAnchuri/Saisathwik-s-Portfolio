import { useState } from 'react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const skills = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'SQL',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Tailwind CSS',
    'MongoDB',
    'MySQL',
    'Supabase',
    'LangChain',
    'LangGraph',
    'RAG',
    'LLM Integration',
    'Postman',
    'Linux',
    'Git',
    'GitHub'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-slate">
            <p>
              I'm currently pursuing a B.Tech in Information Technology at VNR VJIET, Hyderabad, with a CGPA of 9.12/10. My work sits at the intersection of full-stack product engineering and applied AI: clean interfaces, reliable APIs, useful automation, and ML workflows that can be explained and shipped.
            </p>

            <p>
              Recently, I've built projects like{' '}
              <a href="https://github.com/SaiSathwikAnchuri/ResolveIQ" className="inline-link" target="_blank" rel="noopener noreferrer">ResolveIQ</a>,{' '}
              <a href="https://github.com/SaiSathwikAnchuri/Growth-Automation" className="inline-link" target="_blank" rel="noopener noreferrer">Growth Automation</a>, and{' '}
              <a href="https://github.com/SaiSathwikAnchuri/Network-Anomaly" className="inline-link" target="_blank" rel="noopener noreferrer">IoT Network Anomaly Detection</a>. I also contributed to Ikipendence's production website and co-developed Staniya, a geo-tagged cultural stories platform with auth, notifications, media uploads, bilingual support, and ML-assisted state classification.
            </p>

            <p>
              Coursework and practice in Data Structures & Algorithms, OOPS, DBMS, OS, and Computer Networks help me reason through systems beyond the UI layer.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center text-slate">
                <span className="text-green mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative group">
            <div className="relative w-72 h-72 mx-auto">
              <div className="w-full h-full bg-green rounded border-2 border-green relative overflow-hidden">
                <div
                  className={`w-full h-full bg-gradient-to-br from-green to-blue transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  src="/3.jpg"
                  alt="Saisathwik Anchuri"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              <div className="absolute -inset-2 border-2 border-green rounded transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
