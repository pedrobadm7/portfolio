import { cn } from '../../utils/cn';

export function MenuToggle({
  isMobileMenuOpen,
  toggleMobileMenu,
}: {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}) {
  return (
    <button
      onClick={toggleMobileMenu}
      type="button"
      aria-label="open-close-hamburger-menu"
      className="md:hidden flex flex-col justify-between w-5 h-5 focus:outline-none"
    >
      <span
        className={cn(
          'h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
          `${isMobileMenuOpen && 'rotate-45 translate-y-2.5'}`,
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 bg-current transition duration-300 ease-in-out',
          `${isMobileMenuOpen && 'opacity-0'}`,
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 bg-current transform transition duration-300 ease-in-out',
          `${isMobileMenuOpen && '-rotate-45 -translate-y-2'}`,
        )}
      />
    </button>
  );
}
