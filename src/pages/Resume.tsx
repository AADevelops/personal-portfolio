import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const btnBase =
  "inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium font-mono transition duration-200 hover:shadow-[0_0_14px_rgba(49,160,245,0.35)]";

function Resume() {
  useDocumentTitle("Resume");

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1 font-mono flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="flex flex-col items-center gap-3 text-center">
            <FontAwesomeIcon
              icon={faFileLines}
              size="3x"
              className="text-[#31A0F5]"
            />
            <h1 className="text-3xl font-semibold text-white">Resume</h1>
          </div>

          <div className="w-8 h-[1px] bg-gray-700 rounded-full" />

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resume.pdf"
              download
              className={`${btnBase} bg-[#1E1E1E] text-[#B2B2B2] hover:text-white`}
            >
              <FontAwesomeIcon icon={faCircleDown} />
              Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} bg-[#31A0F5] text-[#111111] font-semibold`}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              View in Browser
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
