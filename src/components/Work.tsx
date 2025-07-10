import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Work = () => {
  const featuredProjects = [
    {
      title: 'Halcyon Theme',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: 'https://github.com/bchiang7/halcyon-vscode',
      external: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com/bchiang7/spotify-profile',
      external: 'https://spotify-profile.herokuapp.com/',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'OctoProfile',
      description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      tech: ['Next.js', 'Chart.js', 'GitHub API', 'Vercel'],
      github: 'https://github.com/bchiang7/octoprofile',
      external: 'https://octoprofile.vercel.app/',
      image: '/api/placeholder/600/400'
    }
  ];

  const otherProjects = [
    {
      title: 'Integrating Algolia Search with WordPress Multisite',
      description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      tech: ['Algolia', 'WordPress', 'PHP'],
      github: 'https://github.com/',
      external: 'https://github.com/'
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with React and Firebase for online note storage',
      tech: ['React', 'Firebase', 'CSS3'],
      github: 'https://github.com/',
      external: 'https://github.com/'
    },
    {
      title: 'Apple Music Clone',
      description: 'A Spotify web player lookalike built with React and the Spotify Web API',
      tech: ['React', 'Spotify API', 'Styled Components'],
      github: 'https://github.com/',
      external: 'https://github.com/'
    },
    {
      title: 'Headless CMS Comparison',
      description: 'A comparison of popular headless CMS options like Contentful, Strapi, and Sanity',
      tech: ['Gatsby', 'Contentful', 'GraphQL'],
      github: 'https://github.com/',
      external: 'https://github.com/'
    },
    {
      title: 'Course Source',
      description: 'A web app for browsing and searching for courses at Northeastern University',
      tech: ['Python', 'Flask', 'SQLite'],
      github: 'https://github.com/',
      external: 'https://github.com/'
    },
    {
      title: 'Personal Website',
      description: 'My personal portfolio website built with Gatsby and styled with CSS',
      tech: ['Gatsby', 'React', 'SCSS'],
      github: 'https://github.com/',
      external: 'https://brittanychiang.com/'
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
              
              <div className="bg-light-navy p-6 rounded shadow-lg">
                <p className="text-light-slate">{project.description}</p>
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
        <h3 className="text-2xl font-semibold text-lightest-slate mb-2 text-center">Other Noteworthy Projects</h3>
        <p className="text-green text-center mb-12">
          <a href="/archive" className="inline-link font-mono text-sm">view the archive</a>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.slice(0, 6).map((project) => (
            <Card key={project.title} className="bg-light-navy border-none hover:transform hover:translate-y-[-5px] transition-all duration-300 group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <Folder size={40} className="text-green" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-lightest-slate hover:text-green transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.external} className="text-lightest-slate hover:text-green transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-lightest-slate mb-3 group-hover:text-green transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-light-slate mb-6 flex-grow">{project.description}</p>
                
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-light-slate">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
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
