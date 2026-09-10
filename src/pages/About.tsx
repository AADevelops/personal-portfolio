import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CircularProgress from "@/components/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFire,
  faBriefcase,
  faCode,
  faDatabase,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";
import profile from "@/data/profile";
import { about } from "@/data/about";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const roleIcons: Record<string, typeof faCode> = {
  "Software Engineer": faCode,
  "Data Engineer": faDatabase,
  "Project Manager": faClipboardList
};

function About() {
  useDocumentTitle("About");

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />

      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center">
        <div className="w-full max-w-4xl px-6 animate-fade-in">
          <div className="grid md:grid-cols-[2fr_1px_3fr] gap-x-8 gap-y-8">

            {/* Left: identity + bio */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-xs tracking-widest uppercase text-[#31A0F5]">
                  About
                </p>
                <h1 className="text-3xl font-semibold">{profile.name}</h1>
                <p className="text-sm text-[#B2B2B2]">
                  Full-Stack Developer<br />& Project Manager
                </p>
              </div>

              <div className="h-[1px] bg-gray-700 rounded-full" />

              <p className="text-sm text-[#B2B2B2] leading-relaxed italic">
                {about.bio}
              </p>

              <div className="flex gap-5 text-sm">
                <Link
                  to="/resume"
                  className="text-[#31A0F5] hover:text-white transition duration-200"
                >
                  View Resume →
                </Link>
                <Link
                  to="/contact"
                  className="text-[#B2B2B2]/70 hover:text-[#B2B2B2] transition duration-200"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block bg-gray-700 rounded-full" />

            {/* Right: education + interests + desired roles */}
            <div className="flex flex-col gap-5">

              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-semibold tracking-widest text-[#B2B2B2]/70 uppercase flex items-center gap-2">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  Education
                </p>
                <div className="bg-[#1E1E1E] rounded-xl p-5 flex flex-col gap-2 border-l-2 border-[#31A0F5]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <p className="text-white font-medium">
                        {about.education.institution}
                      </p>
                      <div className="grid grid-cols-[4rem_1fr] gap-y-0.5 text-sm text-[#B2B2B2]">
                        <span className="text-[#B2B2B2]/70">Major</span>
                        <span>{about.education.major}</span>
                        <span className="text-[#B2B2B2]/70">Conc.</span>
                        <span>{about.education.concentration}</span>
                        <span className="text-[#B2B2B2]/70">Minor</span>
                        <span>{about.education.minor}</span>
                      </div>
                    </div>

                    <CircularProgress
                      value={about.education.degreeProgress}
                      caption="Complete"
                    />
                  </div>

                  <p className="text-[#B2B2B2]/70 text-xs">
                    {about.education.years} · {about.education.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-semibold tracking-widest text-[#B2B2B2]/70 uppercase flex items-center gap-2">
                  <FontAwesomeIcon icon={faFire} />
                  Interests
                </p>
                <p className="text-[#B2B2B2]/70 text-sm">
                  {about.interests.map((i) => i.label).join(" · ")}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-semibold tracking-widest text-[#B2B2B2]/70 uppercase flex items-center gap-2">
                  <FontAwesomeIcon icon={faBriefcase} />
                  Desired Roles
                </p>
                <div className="flex flex-col gap-1.5">
                  {about.desiredRoles.map((role) => (
                    <div key={role} className="flex items-center gap-2 text-sm text-[#B2B2B2]/70">
                      <FontAwesomeIcon
                        icon={roleIcons[role] ?? faBriefcase}
                        className="text-[#31A0F5]/70 w-3.5 shrink-0"
                      />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
