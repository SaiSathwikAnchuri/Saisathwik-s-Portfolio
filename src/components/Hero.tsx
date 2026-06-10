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

        <h3
          className="medium-heading text-slate mb-6 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          I build software where full-stack engineering meets AI.
        </h3>

        <p
          className="text-slate max-w-xl mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          I'm an Information Technology student at VNR VJIET and a full-stack developer focused on AI-backed products, RAG agents, automation dashboards, and practical ML systems. I like problems where software removes real friction for real users.
        </p>

        <div
          className="animate-fade-up flex flex-col sm:flex-row gap-4"
          style={{ animationDelay: '500ms' }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-green text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4 text-sm"
            onClick={() => window.location.href = '#work'}
          >
            View Projects
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4 text-sm"
            onClick={() => window.open('/sai-anchuri-resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
