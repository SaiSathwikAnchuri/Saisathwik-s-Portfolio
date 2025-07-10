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
          Nilanjan Mitra.
        </h2>
        
        <h3 
          className="big-heading text-slate mb-5 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          I build things for the web.
        </h3>
        
        <p 
          className="text-slate max-w-xl mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          I'm a full stack developer & sophomore @ IIIT Gwalior who specializes in 
          building scalable backends and managing deployments with DevOps. Currently, 
          I'm focused on building accessible, human-centered products.
        </p>
        
        <div 
          className="animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-green text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4 text-sm"
          >
            Check out my work!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;