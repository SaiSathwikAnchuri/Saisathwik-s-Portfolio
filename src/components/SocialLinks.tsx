import { Github, Instagram, Linkedin, ExternalLink, Code2 } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SaiSathwikAnchuri',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saisathwik-anchuri-604b85292/',
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/saisathwik1414/',
      icon: Code2
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saisathwik_14/',
      icon: Instagram
    },
    {
      name: 'Coding Profiles',
      url: 'https://linktr.ee/Saisathwik1414',
      icon: ExternalLink
    }
  ];

  return (
    <div className="hidden lg:block fixed bottom-0 left-0 right-0 z-10 pointer-events-none">
      <div className="fixed left-4 bottom-0 pointer-events-auto">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="text-light-slate hover:text-green transform transition-all duration-300 hover:-translate-y-1"
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed right-4 bottom-0 pointer-events-auto">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
          <a
            href="mailto:saisathwik1402@gmail.com"
            className="font-mono text-sm text-light-slate hover:text-green transform transition-all duration-300 hover:-translate-y-1 mb-6"
            style={{ writingMode: 'vertical-rl' }}
          >
            saisathwik1402@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
