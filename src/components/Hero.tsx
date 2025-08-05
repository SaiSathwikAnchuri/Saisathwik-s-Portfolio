import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="animate-fade-up">
        <h1 className="overline mb-5 animate-fade-down" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </h1>
        
        <h2 
          className="big-heading text-lightest-slate mb-5 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Saisathwik Anchuri.
        </h2>
        
       
        
        <p 
          className="text-slate max-w-xl mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
         I'm a full-stack MERN developer and UI/UX designer with a solid foundation in Data Structures & Algorithms and strong proficiency in Linux. I specialize in building scalable, user-focused web applications that combine clean backend logic with seamless frontend experiences.

My knowledge of DSA helps me write optimized and high-performance code, while my Linux skills allow me to work efficiently in development and deployment environments. I also use tools like Figma and Adobe XD to design interfaces that are both intuitive and impactful.
        </p>
        
        <div 
          className="animate-fade-up flex gap-4"
          style={{ animationDelay: '500ms' }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-green text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4 text-sm"
            onClick={() => window.location.href = '#work'}
          >
            Check out my work!
            
          </Button>
          <Button 
  variant="ghost" 
  size="lg"
  className="text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4 text-sm"
  onClick={() => window.location.href = 'https://linktr.ee/Saisathwik1414'}
>
  Coding Profiles
</Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;