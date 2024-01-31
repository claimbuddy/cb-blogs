import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="navbar-wrapper fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-red-600">
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div>
          <Link legacyBehavior href="/">
            <a className="text-2xl font-bold text-white">{props.logo}</a>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center text-xl font-medium text-white">
            {props.children}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            // Add logic for mobile menu toggle (e.g., using state)
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu (Hidden by default) */}
    <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 p-4 text-white md:hidden">
      <ul className="flex flex-col items-center">{props.children}</ul>
    </div>

    <style jsx>
      {`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000; /* Ensure it's above other content */
        }

        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
