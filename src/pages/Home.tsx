import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useTypewriter from "@/hooks/useTypewriter";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { typewriterLines } from "@/data/home";
import profile from "@/data/profile";
import useDocumentTitle from "@/hooks/useDocumentTitle";

function Home() {
  useDocumentTitle();

  const automatedTyper = useTypewriter(typewriterLines, {
    typeSpeed: 85,
    deleteSpeed: 40,
    delayBetween: 3500,
    loop: true
  });

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />

      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col items-center animate-fade-in px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            👋🏼 Hey, I'm <Tag label={profile.name} preset="blue" />!
          </h1>

          <div className="automated-text-display text-[#B2B2B2] text-center text-base sm:text-lg md:text-xl gap-1.5 mt-4 sm:mt-6 mx-auto">
            {automatedTyper}
            <span className="animate-blink ml-0.5 text-2xl">|</span>
          </div>

          <div className="w-8 h-[1px] bg-gray-700 rounded-full my-8" />

          <Tag
            label={profile.statusMessage}
            preset="yellow"
            custom="mb-5 text-[17px] sm:mb-5 sm:text-lg"
          />

          <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              label="LinkedIn"
              icon={faLinkedin}
              backgroundColor="bg-[#0077B5]"
              textColor="text-white"
              destination={profile.linkedinUrl}
            />
            <Button
              label="Resume"
              icon={faFileLines}
              backgroundColor="bg-teal-700"
              textColor="text-white"
              destination="/resume"
            />
            <Button
              label="GitHub"
              icon={faGithub}
              backgroundColor="bg-[#2B3137]"
              textColor="text-white"
              destination={profile.githubUrl}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
