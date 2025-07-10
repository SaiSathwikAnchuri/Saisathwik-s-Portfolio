import { Github, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/nilanjanmitra',
      icon: Github
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/darkphoenix645',
      icon: Instagram
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/darkphoenix645',
      icon: Twitter
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nilanjanmitra',
      icon: Linkedin
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/nilanjanmitra',
      icon: ExternalLink
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10">
      {/* Left side social links */}
      <div className="fixed left-10 bottom-0 hidden lg:block">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate hover:text-green hover:transform hover:translate-y-[-3px] transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right side email */}
      <div className="fixed right-10 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-light-slate after:mt-6">
          <a
            href="mailto:hello@nilanjanmitra.co"
            className="font-mono text-sm text-light-slate hover:text-green hover:transform hover:translate-y-[-3px] transition-all duration-300 mb-6"
            style={{ writingMode: 'vertical-rl' }}
          >
            hello@nilanjanmitra.co
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;