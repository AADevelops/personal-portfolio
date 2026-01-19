import Navbar from "@/components/Navbar";
import ExperienceTabs from "@/components/ExperienceTabs";
import Footer from "@/components/Footer";

function Experience() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="bg-[#111111] font-mono text-white flex flex-col flex-1 items-center justify-center space-y-6">
        <ExperienceTabs />
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
