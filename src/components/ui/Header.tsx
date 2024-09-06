import { BriefcaseIcon } from '../icons/BriefcaseIcon'
import { MenuIcon } from '../icons/MenuIcon'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <BriefcaseIcon className="h-6 w-6" />
          <span>Pedro Barros</span>
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">
            Who I am
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            Tech
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>

        <button className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
