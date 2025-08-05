import { Github, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SaiSathwikAnchuri',
      icon: Github
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saisathwik_14/',
      icon: Instagram
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/your_username', // Replace with your actual username
      icon: Twitter
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saisathwik-anchuri-604b85292/',
      icon: Linkedin
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ANCHURI-SAI-SATHWIK',
      icon: ExternalLink
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10">
      {/* Left side social links */}
      <div className="fixed left-4 bottom-0">
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

      {/* Right side email */}
      <div className="fixed right-4 bottom-0">
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