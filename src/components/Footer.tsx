import { Github, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SaiSathwikAnchuri', icon: Github },
    { name: 'Instagram', url: 'https://www.instagram.com/saisathwik_14/', icon: Instagram },
    { name: 'Twitter', url: 'https://twitter.com/your_username', icon: Twitter },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saisathwik-anchuri-604b85292/', icon: Linkedin },
    { name: 'Codepen', url: 'https://codepen.io/ANCHURI-SAI-SATHWIK', icon: ExternalLink }
  ];

  return (
    <footer className="py-8 px-6 lg:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-green transition-colors duration-300"
              aria-label={name}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Email and built info */}
        <div className="space-y-2">
          <a
            href="mailto:saisathwik1402@gmail.com"
            className="font-mono text-sm text-light-slate hover:text-green transition-colors duration-300 block"
          >
            saisathwik1402@gmail.com
          </a>

          <p className="font-mono text-xs text-light-slate">
           © 2025 Saisathwik Anchuri. Crafted with ❤️ and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;