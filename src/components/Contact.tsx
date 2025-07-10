import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 max-w-6xl mx-auto text-center">
      <h2 className="numbered-heading justify-center">What's Next?</h2>
      
      <div className="max-w-xl mx-auto space-y-6">
        <h3 className="text-4xl lg:text-5xl font-semibold text-lightest-slate mb-6">
          Get In Touch
        </h3>
        
        <p className="text-slate text-lg leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox is 
          always open. Whether you have a question or just want to say hi, I'll try 
          my best to get back to you!
        </p>
        
        <div className="pt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-green text-green hover:bg-green-tint hover:text-green font-mono px-8 py-4"
            asChild
          >
            <a href="mailto:hello@nilanjanmitra.co">
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;