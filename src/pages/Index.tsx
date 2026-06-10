import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('hidden');
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-navy flex items-center justify-center z-50">
        <div className="w-24 h-24 border-2 border-green rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-slate">
      <ScrollProgress />
      <Header />
      <main className="pt-nav">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
