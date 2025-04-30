import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#111111] text-[#B2B2B2] text-sm text-center py-6">
      <div className="flex flex-row justify-center text-xs space-x-4 sm:space-y-0 sm:space-x-6">
        <a
          href="https://linkedin.com/in/amunahmad"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <Link to="/resume" className="hover:text-[#31A0F5] transition">
          <FontAwesomeIcon icon={faFileLines} size="3x" />
        </Link>
        <a
          href="https://github.com/AADevelops"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="mailto:ahma1847@mylaurier.ca"
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
      </div>

      <div className="text-[#B2B2B2] mt-4 flex justify-center items-center space-x-1">
        <p>&copy;</p>
        <p className="font-mono">
          {new Date().getFullYear()} Amun Ahmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
