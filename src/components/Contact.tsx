import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pedro.b.dev@gmail.com',
      href: 'mailto:pedro.b.dev@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+55 (73) 99957-7204',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Belo Horizonte, Brazil',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: SiGithub,
      label: 'GitHub',
      href: 'https://github.com/pedrobadm7',
      color: 'hover:text-neutral-900',
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pedrobadm/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:pedro.b.dev@gmail.com',
      color: 'hover:text-teal-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it.
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <Card className="p-8 bg-white border-neutral-200 shadow-portfolio-md">
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  className="absolute left-[-9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="border-neutral-300 focus:border-teal-600 focus:ring-teal-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="border-neutral-300 focus:border-teal-600 focus:ring-teal-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="border-neutral-300 focus:border-teal-600 focus:ring-teal-600 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-portfolio font-medium text-lg transition-all duration-200 shadow-portfolio-sm hover:shadow-portfolio-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6">
                  Get in touch
                </h3>
                <p className="text-lg text-neutral-600 mb-8">
                  Prefer to reach out directly? You can find me at:
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center p-4 bg-white rounded-portfolio border border-neutral-200 hover:border-teal-300 hover:shadow-portfolio-sm transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-teal-50 rounded-portfolio flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors duration-200">
                        <item.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 group-hover:text-teal-600 transition-colors duration-200">
                          {item.label}
                        </div>
                        <div className="text-neutral-600">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                  Follow me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white rounded-portfolio border border-neutral-200 hover:border-teal-300 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-portfolio-sm ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <Card className="p-6 bg-teal-50 border-teal-200">
                <h4 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  Response Time
                </h4>
                <p className="text-neutral-600">
                  I typically respond to all inquiries within 24 hours.
                  For urgent projects, feel free to reach out via phone.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;