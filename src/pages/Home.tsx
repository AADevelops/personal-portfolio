import Navbar from "@/components/Navbar.tsx";
import useTypewriter from "@/hooks/useTypewriter.ts";
import Tag from "@/components/Tag.tsx";

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
      "I'm a ",
      <Tag label="Startup Founder" preset="green" />,
      " for a ",
      <Tag label="Stealth Startup" preset="red" />
    ],
    [
      "Currently Learning Desktop Application Development with ",
      <Tag label="Rust" preset="orange" />,
      " & ",
      <Tag label="Tauri" preset="blue" />
    ],
    ["Interested in Entrepreneurship, AI/ML, Cybersecurity & Finance"],
    [
      "Based in ",
      <u>
        <strong>Waterloo</strong>
      </u>,
      " and ",
      <u>
        <strong>Richmond Hill</strong>
      </u>,
      ", Ontario, Canada"
    ]
  ];

  const automatedTyper = useTypewriter(lines, {
    typeSpeed: 85,
    deleteSpeed: 40,
    delayBetween: 3500,
    loop: true
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center space-y-6">
        <h1 className="sm:text-4xl font-semibold">
          👋🏼 Hey, I'm <Tag label="Amun Ahmad" preset="blue" />!
        </h1>
        <div className="automated-text-display text-gray-400 text-lg flex items-center gap-1.5">
          {automatedTyper.map((lineSection, index) =>
            typeof lineSection === "string" ? (
              <span key={index}>{lineSection}</span>
            ) : (
              lineSection
            )
          )}
          <span className="animate-blink ml-0.5 text-2xl">|</span>
        </div>

        <h3>
          <Tag
            label="- Currently Seeking Fall 2025 Internship -"
            preset="yellow"
          />
        </h3>

        <div className="space-x-4">
          <a
            href="https://linkedin.com/in/amunahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="./resume.pdf"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/AADevelops"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
