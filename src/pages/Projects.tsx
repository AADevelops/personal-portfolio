import Navbar from "@/components/Navbar";
import ProjectTab from "@/components/ProjectTab";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import useDocumentTitle from "@/hooks/useDocumentTitle";

function Projects() {
  useDocumentTitle("Projects");

  return (
    <div className="overflow-x-hidden min-h-screen min-w-full flex flex-col">
      <Navbar />

      <div className="bg-[#111111] font-mono flex flex-col flex-1 items-center py-10 px-4">
        <div className="w-full max-w-3xl space-y-2 animate-fade-in">
          <p className="text-xs tracking-widest uppercase text-[#31A0F5] mb-6">
            Projects
          </p>
          {projects.map((project, index) => (
            <ProjectTab
              key={project.projectTitle}
              title={project.projectTitle}
              projectDate={project.projectDate}
              defaultOpen={index === 0}
              card={
                <ProjectCard
                  projectTitle={project.projectTitle}
                  projectDescription={project.projectDescription}
                  projectDetails={project.projectDetails}
                  projectBadges={project.badgePresets.map((preset) => (
                    <Badge key={preset} preset={preset} />
                  ))}
                  githubRepo={project.githubRepo}
                  demoLink={project.demoLink}
                />
              }
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
