import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#111111] font-mono text-gray-200 px-4 py-4 w-full">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <div className="text-3xl">
          <Link
            to="/"
            className="py-2 px-3 hover:text-blue-500 transition tracking-wider font-medium"
          >
            AA
          </Link>
        </div>

        <nav className="space-x-4">
          <Link
            to="/about"
            className="py-2 px-3 hover:text-blue-500 transition"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="py-2 px-3 hover:text-blue-500 transition"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="py-2 px-3 hover:text-blue-500 transition"
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className="py-2 px-3 hover:text-blue-500 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
