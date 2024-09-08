import { MouseEvent, useEffect, useState } from 'react';
import { MenuToggle } from '../common/MenuToggle';
import { BriefcaseIcon } from '../icons/BriefcaseIcon';

const MEDIUM_SIZE = 768

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    const element = document.getElementById(id);

    if (element) {
      window.history.pushState(null, '', `#${id}`)
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MEDIUM_SIZE) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold" onClick={(e) => scrollToSection(e, 'about')}>
          <BriefcaseIcon className="h-6 w-6" />
          <span>Pedro Barros</span>
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline" onClick={(e) => scrollToSection(e, 'about')}>
            Who I am
          </a>
          <a href="#" className="hover:underline" onClick={(e) => scrollToSection(e, 'tech')}>
            Tech
          </a>
          <a href="#" className="hover:underline" onClick={(e) => scrollToSection(e, 'projects')}>
            Projects
          </a>
          <a href="#" className="hover:underline" onClick={(e) => scrollToSection(e, 'cta')}>
            Contact
          </a>
        </nav>

        <MenuToggle isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/90 backdrop-blur px-4 py-2 absolute w-full top-16 z-40">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="block hover:underline" onClick={(e) => scrollToSection(e, 'about')}>
                Who I am
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline" onClick={(e) => scrollToSection(e, 'tech')}>
                Tech
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline" onClick={(e) => scrollToSection(e, 'projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline" onClick={(e) => scrollToSection(e, 'cta')}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
