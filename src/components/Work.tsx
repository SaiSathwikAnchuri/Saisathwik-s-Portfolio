import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Work = () => {
  const featuredProjects = [
    {
      title:'Sorting Visualizer',
      description: 'Developed a sorting visualizer to demonstrate various sorting algorithms with real-time animations, enhancing understanding of algorithm efficiency.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
      github: 'https://github.com/SaiSathwikAnchuri/Sorting-Visualizer',
      external: 'https://interactive-sorting-visualizer.vercel.app/',
      image: '/5.png'
    },
    {
      title: 'Student Progress Management System',
      description: 'Engineered an automated dashboard to analyze Codeforces profiles and visualize performance metrics, aiding 50+ students in tracking coding progress.',
      tech: ['VS Code', 'React', 'Cron.js', 'Tailwind', 'Recharts', 'Lucide-react','Express', 'MongoDB', 'Mongoose'],
      github:'https://github.com/SaiSathwikAnchuri/student-codeforces-progress',
      external: 'https://github.com/SaiSathwikAnchuri/student-codeforces-progress',
      image:'/1.png'
    },
    {
      title: 'Chatterbox-Chat Application',
      description: 'Developed a real-time chat application supporting multi-user communication with dynamic socket integration and responsive UI.',
      tech: ['React', 'Styled Components', 'Express', 'Heroku', 'WebSockets', 'Node.js', 'Bootstrap', 'Socket.io', 'MongoDB', 'Mongoose'],
      github: 'https://github.com/SaiSathwikAnchuri/chatterbox-application',
      external: 'https://github.com/SaiSathwikAnchuri/chatterbox-application',
      image: '/2.png'
    },
    {
      title: 'Techlearn-Dashboard',
      description: 'Created a secure role-based dashboard for company workflows with authentication,for task visibility.',
      tech: ['Next.js', 'Chart.js', 'GitHub API', 'Vercel', 'Tailwind CSS', 'Lucide-react', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      github: 'https://github.com/SaiSathwikAnchuri/Tls-solutions',
      external: 'https://techlearn-frontend-w4xd.onrender.com/',
      image: '/4.png'
    }
  ];
const certifications = [
  {
    title: 'Linux Certification',
    description: 'The Linux Foundation Certified System Administrator (LFCS) certification demonstrates proficiency in Linux system administration.',
    organization: 'The Linux Foundation',
    date: 'July 2025',
    certificateUrl: 'https://drive.google.com/file/d/1JHBUacNRScHtxGWROfyQUq-kj89Na3uT/view?usp=sharing'
  },
  {
    title: 'GFG 160+ Days of Code',
    description: 'GFG 160: ”160 Days of Problem Solving” certification byGeeksforGeeks',
    organization: 'GeeksforGeeks',
    date: 'May 2025',
    certificateUrl: 'https://drive.google.com/file/d/1YJOTj8aDORPQUEf5P3M6dH0BQeUuE3uv/view?usp=sharing'
  },
  {
    title: 'Top 100 in Krithomedh Club Coding Contest',
    description: 'Secured 50th rank in final Round of Krithomedh Club CodingContest at VNRVJIET',
    organization: 'VNRVJIET',
    date: 'Jan-2024',
    certificateUrl: 'https://drive.google.com/file/d/19CilHwHDGY1CoXd-WuRKqQUm219WdNg4/view?usp=drivesdk'
  },
  {
    title: 'Cisco Java Script Essentials-1 and 2',
    description: 'Mastered JavaScript fundamentals, including ES6+ features, asynchronous programming, and DOM manipulation.',
    organization: 'University of Michigan (Coursera)',
    date: 'January 2024',
    certificateUrl: 'https://drive.google.com/file/d/1jXTDL40c8iI1FROHg85MLTgdqE6MbOZN/view?usp=sharing'
  },
  {
    title: 'Google cloud skill badge: Vertex AI',
    description: 'Earned a skill badge for demonstrating proficiency in using Vertex AI for building and deploying machine learning models.',
    organization: 'Google Cloud',
    date: 'May 2025',
    certificateUrl: ''
  },
  {
    title: 'Webathon 2024',
    description: 'Participated in Webathon 2024, a hackathon focused on web development, showcasing skills in building innovative web applications.',
    organization: 'Webathon ACM VNRVJIET',
    date: 'April 2024',
    certificateUrl: 'https://drive.google.com/file/d/1jblJJJ-sC8X5vm1Bwf6iwtiKElk8flEU/view?usp=drivesdk'
  }
];

  return (
    <section id="work" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">Some Things I've Built</h2>
      
      {/* Featured Projects */}
      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <div key={project.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
            {/* Project Image */}
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
              <div className="relative group">
                <div className="bg-green rounded overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto transition-all duration-300 mix-blend-multiply group-hover:mix-blend-normal"
                  />
                </div>
                <div className="absolute inset-0 bg-navy/80 group-hover:bg-transparent transition-all duration-300 rounded" />
              </div>
            </div>
            
            {/* Project Content */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-4`}>
              <p className="overline">Featured Project</p>
              <h3 className="text-2xl font-semibold text-lightest-slate">{project.title}</h3>
              
              <div className="bg-light-navy p-6 rounded shadow-lg max-w-xl mx-auto">
  <p className="text-light text-justify">{project.description}</p>
</div>

              
              <ul className={`flex flex-wrap gap-3 font-mono text-sm text-light-slate ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              
              <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                <a href={project.github} className="text-lightest-slate hover:text-green transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.external} className="text-lightest-slate hover:text-green transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Other Projects */}
      <div className="mt-24">
  <h3 className="text-2xl font-semibold text-lightest-slate mb-2 text-center">
    Certifications & Achievements
  </h3>
  <p className="text-green text-center mb-12">
    <a href="/certifications" className="inline-link font-mono text-sm">view all certifications</a>
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {certifications.slice(0, 6).map((cert) => (
      <Card key={cert.title} className="bg-light-navy border-none hover:transform hover:translate-y-[-5px] transition-all duration-300 group">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <Folder size={40} className="text-green" />
            <a href={cert.certificateUrl} className="text-lightest-slate hover:text-green transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} />
            </a>
          </div>

          <h4 className="text-xl font-semibold text-lightest-slate mb-2 group-hover:text-green transition-colors">
            {cert.title}
          </h4>

          <p className="text-light-slate mb-2 flex-grow text-sm">
            {cert.description}
          </p>

          <div className="mt-auto font-mono text-xs text-light-slate">
            <p><span className="text-green">Org:</span> {cert.organization}</p>
            <p><span className="text-green">Date:</span> {cert.date}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

  <div className="text-center mt-12">
    <Button variant="outline" className="border-green text-green hover:bg-green-tint font-mono">
      Show More
    </Button>
  </div>
</div>

    </section>
  );
};

export default Work;
