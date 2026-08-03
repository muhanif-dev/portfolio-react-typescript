import { useState } from "react";
import { NavLink } from "react-router-dom";
import HireMe from "../../ui/Button/HireMe";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-white hover:text-orange-500 transition-colors duration-300";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold tracking-wide text-orange-500"
        >
          MH.
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hire Me Button */}
        <HireMe />

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <ul className="flex flex-col gap-6 p-6">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="rounded-lg bg-orange-500 px-5 py-2 text-center font-medium text-white transition-all duration-300 hover:bg-orange-600"
              >
                Hire Me
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;