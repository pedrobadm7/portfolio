import { MenuIcon } from '../icons/MenuIcon'

export const Header = () => {
  return (
    <header className="py-8 px-4 md:px-8 bg-[rgba(255,255,255,0.8)] backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Pedro Barros
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
