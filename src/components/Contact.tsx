import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Code2, ExternalLink } from 'lucide-react';

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

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message
    ].join('\n');

    window.location.href = `mailto:saisathwik1402@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  const links = [
    {
      name: 'GitHub',
      description: 'Explore my latest AI and full-stack projects',
      url: 'https://github.com/SaiSathwikAnchuri',
      icon: Github
    },
    {
      name: 'LinkedIn',
      description: 'Connect with me professionally',
      url: 'https://www.linkedin.com/in/saisathwik-anchuri-604b85292/',
      icon: Linkedin
    },
    {
      name: 'LeetCode',
      description: 'View my problem-solving profile',
      url: 'https://leetcode.com/u/saisathwik1414/',
      icon: Code2
    },
    {
      name: 'Coding Profiles',
      description: 'See more profiles and credentials',
      url: 'https://linktr.ee/Saisathwik1414',
      icon: ExternalLink
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="numbered-heading text-center justify-center mb-16">Get In Touch</h2>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="bg-light-navy/30 p-8 rounded border border-lightest-navy/20">
          <h3 className="text-2xl font-semibold text-lightest-slate mb-3">Send a Message</h3>
          <p className="text-slate text-base leading-relaxed mb-6">
            Have an internship opportunity, AI idea, open-source collaboration, or full-stack project? Send me a quick note.
          </p>

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
                placeholder="Tell me what you are building..."
                className="bg-navy border-lightest-navy text-lightest-slate placeholder:text-slate focus:border-green min-h-[120px]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green to-blue hover:from-green/90 hover:to-blue/90 text-navy font-semibold py-3 transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Open Email
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-light-navy/30 p-8 rounded border border-lightest-navy/20">
            <h3 className="text-2xl font-semibold text-lightest-slate mb-6">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Email</p>
                  <a href="mailto:saisathwik1402@gmail.com" className="text-lightest-slate hover:text-green">saisathwik1402@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Phone</p>
                  <a href="tel:+918523086459" className="text-lightest-slate hover:text-green">+91 85230 86459</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green/10 rounded flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-green" />
                </div>
                <div>
                  <p className="text-slate text-sm">Location</p>
                  <p className="text-lightest-slate">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-navy/30 p-8 rounded border border-lightest-navy/20">
            <h3 className="text-2xl font-semibold text-lightest-slate mb-6">Connect With Me</h3>
            <div className="grid gap-4">
              {links.map(({ name, description, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-navy/50 rounded hover:bg-navy/70 transition-colors"
                >
                  <div className="w-10 h-10 bg-green/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="text-lightest-slate font-medium">{name}</p>
                    <p className="text-slate text-sm">{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
