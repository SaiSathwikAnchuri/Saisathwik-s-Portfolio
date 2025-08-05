import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('hidden');
    }, 1000);
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
      <Header />
      <main className="pt-nav">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <SocialLinks /> {/* ⬅️ Now outside <main> */}
      <Footer />       {/* ⬅️ Now outside <main> */}
    </div>
  );
};

export default Index;