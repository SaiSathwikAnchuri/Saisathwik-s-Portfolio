import { useState } from 'react';

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Kubernetes'
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <div className="space-y-4 text-slate">
            <p>
              Hello! My name is Nilanjan and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2019 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught me 
              a lot about HTML & CSS!
            </p>
            
            <p>
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="#" className="inline-link">an advertising agency</a>,{' '}
              <a href="#" className="inline-link">a start-up</a>,{' '}
              <a href="#" className="inline-link">a huge corporation</a>, and{' '}
              <a href="#" className="inline-link">a student-led design studio</a>. 
              My main focus these days is building accessible, inclusive products and 
              digital experiences for a variety of clients.
            </p>
            
            <p>
              I also recently{' '}
              <a href="#" className="inline-link">launched a course</a> that covers 
              everything you need to build a web app with the Spotify API using Node & React.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          
          <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            {skills.map((skill, index) => (
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
              {/* Image placeholder with subtle animation */}
              <div className="w-full h-full bg-green rounded border-2 border-green relative overflow-hidden">
                <div 
                  className={`w-full h-full bg-gradient-to-br from-green to-blue transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  src="/api/placeholder/300/300"
                  alt="Nilanjan Mitra"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
              
              {/* Border effect */}
              <div className="absolute -inset-2 border-2 border-green rounded transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;