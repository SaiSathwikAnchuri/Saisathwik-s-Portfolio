import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="numbered-heading text-center justify-center mb-16">Get In Touch</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Form */}
        <div className="bg-light-navy/30 p-8 rounded-lg border border-lightest-navy/20">
          <h3 className="text-2xl font-semibold text-lightest-slate mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lightest-slate">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-navy border-lightest-navy text-lightest-slate placeholder:text-slate focus:border-green"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lightest-slate">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-navy border-lightest-navy text-lightest-slate placeholder:text-slate focus:border-green"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-lightest-slate">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project collaboration"
                className="bg-navy border-lightest-navy text-lightest-slate placeholder:text-slate focus:border-green"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lightest-slate">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                className="bg-navy border-lightest-navy text-lightest-slate placeholder:text-slate focus:border-green min-h-[120px]"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-green to-blue hover:from-green/90 hover:to-blue/90 text-navy font-semibold py-3 transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-light-navy/30 p-8 rounded-lg border border-lightest-navy/20">
            <h3 className="text-2xl font-semibold text-lightest-slate mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <p className="text-lightest-slate">saisathwik1402@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Phone</p>
                  <p className="text-lightest-slate">+91 8523086459</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-lightest-slate">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-navy/30 p-8 rounded-lg border border-lightest-navy/20">
            <h3 className="text-2xl font-semibold text-lightest-slate mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-navy/50 rounded-lg hover:bg-navy/70 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-lightest-slate font-medium">GitHub</p>
                  <p className="text-slate text-sm">Check out my latest projects and contributions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-navy/50 rounded-lg hover:bg-navy/70 transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-green/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-lightest-slate font-medium">LinkedIn</p>
                  <p className="text-slate text-sm">Connect with me professionally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;