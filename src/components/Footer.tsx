import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About', href: '#about', external: false },
        { label: 'Projects', href: '#projects', external: false },
        { label: 'Contact', href: '#contact', external: false },
      ],
    },
    {
      title: 'Connect',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/pedrobadm7',
          external: true,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/pedrobadm/',
          external: true,
        },
        {
          label: 'Email',
          href: 'mailto:pedro.b.dev@gmail.com',
          external: true,
        },
      ],
    },
  ];

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener noreferrer');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-neutral-900 text-white relative">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-200 hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>

      <div className="container-portfolio pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">
                Pedro Barros
              </h3>
              <p className="text-neutral-300 mb-6 max-w-md">
                Passionate front-end and full-stack developer creating
                innovative digital experiences. Let's build something amazing
                together.
              </p>
              <div className="flex items-center text-neutral-400">
                <span className="mr-2">
                  Currently available for new projects
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-lg font-semibold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() =>
                          handleLinkClick(link.href, link.external)
                        }
                        className="text-neutral-300 hover:text-teal-400 transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-neutral-400 text-sm">
                © {currentYear} Pedro Barros. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
