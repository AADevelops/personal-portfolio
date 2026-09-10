import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 transition ${isActive ? "text-[#31A0F5]" : "hover:text-[#31A0F5]"}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full py-3 px-5 text-left transition ${isActive ? "text-[#31A0F5]" : "text-[#B2B2B2] hover:text-[#31A0F5]"}`;

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="bg-[#111111] font-mono text-[#B2B2B2] px-4 py-4 w-full relative z-50">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <div className="text-3xl">
          <Link
            to="/"
            className="py-2 px-3 hover:text-[#31A0F5] transition tracking-wider font-medium"
            onClick={handleNavClick}
          >
            AA
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden py-2 px-3 hover:text-[#31A0F5] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-700 mt-2">
          <nav className="flex flex-col">
            <NavLink to="/about" className={mobileNavLinkClass} onClick={handleNavClick}>About</NavLink>
            <NavLink to="/projects" className={mobileNavLinkClass} onClick={handleNavClick}>Projects</NavLink>
            <NavLink to="/experience" className={mobileNavLinkClass} onClick={handleNavClick}>Experience</NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={handleNavClick}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
