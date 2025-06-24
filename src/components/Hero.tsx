import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Front-End Developer',
    'Full-Stack Engineer',
    'React Specialist',
    'UI/UX Enthusiast',
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const shouldDelete = isDeleting;

    const timeout = setTimeout(
      () => {
        if (!shouldDelete && displayText === currentRole) {
          // Pause at full text
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (shouldDelete && displayText === '') {
          // Move to next role
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else if (shouldDelete) {
          // Delete character
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          // Add character
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }
      },
      shouldDelete ? 50 : 100,
    );

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, currentIndex, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-neutral-50 to-white"
    >
      <main id="main-content" className="container-portfolio text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-lg sm:text-xl text-neutral-600 font-medium mb-4">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <h1 className="font-display text-display-xl text-neutral-900 mb-6">
              Pedro Barros
            </h1>
          </div>

          {/* Animated Role */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            <div className="h-16 sm:h-20 flex items-center justify-center mb-6">
              <h2 className="font-display text-display-md text-teal-600">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about creating innovative and impactful solutions since
              2020. I engineer slick user interfaces and high-performance web
              apps that delight users and drive business results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-portfolio font-medium text-lg transition-all duration-200 shadow-portfolio-md hover:shadow-portfolio-lg hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-neutral-300 hover:border-teal-600 text-neutral-700 hover:text-teal-600 px-8 py-3 rounded-portfolio font-medium text-lg transition-all duration-200 shadow-portfolio-sm hover:shadow-portfolio-md hover:scale-105"
            >
              <a
                href="/pedro-barros-resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-gentle">
            <button
              onClick={() => scrollToSection('about')}
              className="text-neutral-400 hover:text-teal-600 transition-colors duration-200"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-4 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-4 w-64 h-64 bg-neutral-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
};

export default Hero;
