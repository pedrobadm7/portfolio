import { useEffect, useState } from 'react';

import { MenuToggle } from '../common/MenuToggle';
import { BriefcaseIcon } from '../icons/BriefcaseIcon';

const MEDIUM_SIZE = 768;

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      window.history.pushState(null, '', `#${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MEDIUM_SIZE) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        <button
          type="button"
          className="flex items-center gap-2 text-lg font-bold"
          onClick={() => scrollToSection('about')}
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span>Pedro Barros</span>
        </button>
        <nav className="hidden md:flex space-x-4">
          <button
            type="button"
            className="hover:underline"
            onClick={() => scrollToSection('about')}
          >
            Who I am
          </button>
          <button
            type="button"
            className="hover:underline"
            onClick={() => scrollToSection('tech')}
          >
            Tech
          </button>
          <button
            type="button"
            className="hover:underline"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            type="button"
            className="hover:underline"
            onClick={() => scrollToSection('cta')}
          >
            Contact
          </button>
        </nav>

        <MenuToggle
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-border backdrop-blur px-4 py-2 absolute w-full top-16 z-40">
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                type="button"
                className="block hover:underline"
                onClick={() => scrollToSection('about')}
              >
                Who I am
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block hover:underline"
                onClick={() => scrollToSection('tech')}
              >
                Tech
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block hover:underline"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="block hover:underline"
                onClick={() => scrollToSection('cta')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
