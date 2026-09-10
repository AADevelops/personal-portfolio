import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileLines, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import profile from "@/data/profile";

function Footer() {
  return (
    <footer className="bg-[#111111] text-[#B2B2B2] text-sm text-center py-6">
      <div className="flex flex-row justify-center text-xs space-x-4 sm:space-y-0 sm:space-x-6">
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <Link to="/resume" className="hover:text-[#31A0F5] transition">
          <FontAwesomeIcon icon={faFileLines} size="xl" />
        </Link>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-[#31A0F5] transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
      </div>

      <div className="text-[#B2B2B2] mt-4 flex justify-center items-center space-x-1">
        <p>&copy;</p>
        <p className="font-mono">
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
