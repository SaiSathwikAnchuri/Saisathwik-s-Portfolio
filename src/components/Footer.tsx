import { Github, Instagram, Linkedin, ExternalLink, Code2 } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SaiSathwikAnchuri', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saisathwik-anchuri-604b85292/', icon: Linkedin },
    { name: 'LeetCode', url: 'https://leetcode.com/u/saisathwik1414/', icon: Code2 },
    { name: 'Instagram', url: 'https://www.instagram.com/saisathwik_14/', icon: Instagram },
    { name: 'Coding Profiles', url: 'https://linktr.ee/Saisathwik1414', icon: ExternalLink }
  ];

  return (
    <footer className="py-8 px-6 lg:px-12 text-center">
      <div className="max-w-6xl mx-auto">
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

        <div className="space-y-2">
          <a
            href="mailto:saisathwik1402@gmail.com"
            className="font-mono text-sm text-light-slate hover:text-green transition-colors duration-300 block"
          >
            saisathwik1402@gmail.com
          </a>

          <p className="font-mono text-xs text-light-slate">
            Built by Saisathwik Anchuri with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
