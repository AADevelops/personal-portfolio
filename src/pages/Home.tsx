import Navbar from "@/components/Navbar";
import useTypewriter from "@/hooks/useTypewriter";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

function Home() {
  type LineObject = (string | JSX.Element)[];

  const lines: LineObject[] = [
    [
      "Studying Computer Science & Business @ ",
      <Tag label="Wilfrid" preset="purple" />,
      " ",
      <Tag label="Laurier" preset="yellow" />,
      " University"
    ],
    ["I'm a ", <Tag label="Full-Stack" preset="pink" />, " Developer"],
    [
      "I'm the ",
      <Tag label="Founder" preset="green" />,
      " of a Business Intelligence & Data Analytics ",
      <Tag label="Stealth Startup" preset="red" />
    ],
    [
      "Currently Learning Desktop Application Development with ",
      <Tag label="Rust" preset="orange" />,
      " & ",
      <Tag label="Tauri" preset="blue" />
    ],
    [
      "Interested in Entrepreneurship, AI/ML, Big Data, Cybersecurity & Finance"
    ],
    [
      "Based in ",
      <u>
        <strong>Waterloo</strong>
      </u>,
      " and ",
      <u>
        <strong>Richmond Hill</strong>
      </u>,
      ", Ontario, 🇨🇦"
    ]
  ];

  const automatedTyper = useTypewriter(lines, {
    typeSpeed: 85,
    deleteSpeed: 40,
    delayBetween: 3500,
    loop: true
  });

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />

      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          👋🏼 Hey, I'm <Tag label="Amun Ahmad" preset="blue" />!
        </h1>

        <div className="automated-text-display text-[#B2B2B2] text-center text-base sm:text-lg md:text-xl gap-1.5 mt-4 sm:mt-6 mx-auto">
          {automatedTyper}
          <span className="animate-blink ml-0.5 text-2xl">|</span>
        </div>

        <div className="w-8 h-[1px] bg-gray-500 rounded-full my-8" />

        {/* OG: mb-10 */}
        <Tag
          label="- Currently Seeking Fall 2025 Internship -"
          preset="yellow"
          custom="mb-5 text-[15px] sm:mb-5 sm:text-lg"
        />

        <Tag
          label="* WARNING: Website NOT complete. *"
          preset="red"
          custom="mb-10 text-[15px] sm:mb-5 sm:text-lg"
        />

        <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            label="LinkedIn"
            icon={faLinkedin}
            backgroundColor="bg-[#0077B5]"
            textColor="text-white"
            destination="https://linkedin.com/in/amunahmad"
          />
          <Button
            label="Resume"
            icon={faFileLines}
            backgroundColor="bg-teal-600"
            textColor="text-white"
            destination="/resume"
          />
          <Button
            label="GitHub"
            icon={faGithub}
            backgroundColor="bg-[#2B3137]"
            textColor="text-white"
            destination="https://github.com/AADevelops"
          />
        </div>
      </div>

      <footer className="bg-[#111111] text-sm text-center py-6">
        <div className="text-[#B2B2B2] mt-4 flex justify-center items-center space-x-1">
          <p>&copy;</p>
          <p className="font-mono">
            {new Date().getFullYear()} Amun Ahmad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
