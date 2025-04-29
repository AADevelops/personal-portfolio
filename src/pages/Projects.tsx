import Navbar from "@/components/Navbar";
import ProjectTab from "@/components/ProjectTab";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import Footer from "@/components/Footer";

function Projects() {
  return (
    <div className="min-h-screen min-w-full max-h-screen max-w-full flex flex-col">
      <Navbar />

      <div className="bg-[#111111] font-mono flex flex-col flex-1 items-center py-10 space-y-2">
        <ProjectTab
          title="Personal Portfolio Website"
          projectDate="ONGOING"
          card={
            <ProjectCard
              projectTitle="PERSONAL PORTFOLIO WEBSITE"
              projectDescription="A website made to introduce myself and showcase my skills, projects, and experiences."
              developmentProcess={[
                "1. PLACEHOLDER 1",
                "2. PLACEHOLDER 2",
                "3. PLACEHOLDER 3",
                "4. PLACEHOLDER 4",
                "5. PLACEHOLDER 5"
              ]}
              projectBadges={[
                <Badge preset="typescript" />,
                <Badge preset="react" />,
                <Badge preset="tailwind" />,
                <Badge preset="html" />,
                <Badge preset="vercel" />
              ]}
              githubRepo="https://github.com/AADevelops/personal-portfolio"
              demoLink="https://amunahmad.com"
            />
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
