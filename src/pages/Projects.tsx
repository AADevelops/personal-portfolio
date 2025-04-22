import Navbar from "@/components/Navbar.tsx";
import Tag from "@/components/Tag.tsx";
import Footer from "@/components/Footer.tsx";

function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center space-y-6">
        <h1 className="sm:text-4xl font-semibold">
          <Tag label="PROJECTS PAGE - COMING SOON" preset="red" />
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
