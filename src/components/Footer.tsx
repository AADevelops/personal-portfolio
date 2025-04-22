import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-200 text-sm text-center py-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
        <a
          href="https://linkedin.com/in/amunahmad"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="/resume.pdf" className="hover:text-blue-500 transition">
          <FontAwesomeIcon icon={faFileLines} size="3x" />
        </a>
        <a
          href="https://github.com/AADevelops"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="mailto:ahma1847@mylaurier.ca"
          className="hover:text-blue-500 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
      </div>
      <p className="text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Amun Ahmad. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
