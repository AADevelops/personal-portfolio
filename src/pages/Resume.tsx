import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import PDFViewer from "@/components/PDFViewer";
import Footer from "@/components/Footer";

function Resume() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 font-mono flex justify-center items-center">
        <div className="rounded text-gray-400 flex flex-col items-center">
          <a
            href="/resume.pdf"
            download={true}
            className="hover:text-blue-500 transition px-[2px] py-[2px] mb-[10px]"
          >
            {<FontAwesomeIcon icon={faCircleDown} size="xl" />} Download
          </a>

          <div className="border border-gray-400 rounded p-1">
            <PDFViewer url="/resume.pdf" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
