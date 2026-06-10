import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full h-nav transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-6 lg:px-12 h-full flex items-center justify-between bg-navy/80 backdrop-blur-sm">
        <div className="flex-shrink-0">
          <a href="/" className="text-green font-mono text-xl font-semibold" onClick={handleNavClick}>
            SAISATHWIK
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-sm text-lightest-slate hover:text-green transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-green text-xs">0{index + 1}.</span> {item.name}
            </a>
          ))}
          <Button
            variant="outline"
            className="ml-4 border-green text-green hover:bg-green-tint"
            onClick={() => window.open('/sai-anchuri-resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-green"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-sm border-t border-lightest-navy px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="font-mono text-sm text-lightest-slate hover:text-green transition-colors duration-300"
              >
                <span className="text-green text-xs">0{index + 1}.</span> {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-green text-green hover:bg-green-tint w-full"
              onClick={() => {
                setIsMenuOpen(false);
                window.open('/sai-anchuri-resume.pdf', '_blank');
              }}
            >
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
