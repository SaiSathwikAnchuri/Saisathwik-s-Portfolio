import { Github, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/nilanjanmitra', icon: Github },
    { name: 'Instagram', url: 'https://instagram.com/darkphoenix645', icon: Instagram },
    { name: 'Twitter', url: 'https://twitter.com/darkphoenix645', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nilanjanmitra', icon: Linkedin },
    { name: 'Codepen', url: 'https://codepen.io/nilanjanmitra', icon: ExternalLink }
  ];

  return (
    <footer className="py-8 px-6 lg:px-12 text-center lg:hidden">
      <div className="max-w-6xl mx-auto">
        {/* Mobile social links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-slate hover:text-green transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <div className="space-y-2">
          <a
            href="mailto:hello@nilanjanmitra.co"
            className="font-mono text-sm text-light-slate hover:text-green transition-colors duration-300 block"
          >
            hello@nilanjanmitra.co
          </a>
          
          <p className="font-mono text-xs text-light-slate">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;