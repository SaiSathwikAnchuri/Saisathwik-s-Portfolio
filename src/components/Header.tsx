import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
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

  return (
    <header
      className={`fixed top-0 z-50 w-full h-nav transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-6 lg:px-12 h-full flex items-center justify-between bg-navy/80 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-green font-mono text-xl font-semibold">
            SAISATHWIK
          </a>
        </div>

        {/* Navigation */}
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
  onClick={() => window.location.href = "/atlan-frontend-resume.pdf"}
>
  Resume
</Button>

        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span className="w-6 h-0.5 bg-green transition-all"></span>
          <span className="w-6 h-0.5 bg-green transition-all"></span>
          <span className="w-6 h-0.5 bg-green transition-all"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;