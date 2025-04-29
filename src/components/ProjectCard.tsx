import Button from "@/components/Button";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  developmentProcess: React.ReactNode[];
  projectBadges: React.ReactNode[];
  githubRepo: string;
  demoLink?: string;
}

function ProjectCard({
  projectTitle,
  projectDescription,
  developmentProcess,
  projectBadges,
  githubRepo,
  demoLink
}: ProjectCardProps) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-6 space-y-5 flex flex-col">
      <h3 className="text-3xl font-bold flex justify-center text-[#31A0F5]">
        {projectTitle}
      </h3>

      <p className="text-[#B2B2B2] flex justify-center">{projectDescription}</p>

      <div className="flex justify-center items-center">
        <div className="w-8 h-[1px] bg-gray-500 rounded-full my-4" />
      </div>

      <div className="text-[#B2B2B2]">
        <h1 className="text-lg font-bold">DEVELOPMENT PROCESS: </h1>
        <div className="flex flex-col space-y-1">
          {developmentProcess.map((step, index) => (
            <span key={index}>{step}</span>
          ))}
        </div>
      </div>

      <div className="pt-2 inline-flex">
        <h1 className="text-lg font-bold text-[#B2B2B2] pr-1">
          TECHNOLOGY STACK:
        </h1>
        <div className="text-base flex justify-center space-x-2">
          {projectBadges.map((badge) => badge)}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-8 h-[1px] bg-gray-500 rounded-full my-4" />
      </div>

      <div className="space-x-2 flex justify-center">
        <Button
          label="Repository"
          icon={faGithub}
          backgroundColor="bg-[#2B3137]"
          textColor="text-white"
          destination={githubRepo}
        />
        {demoLink && (
          <Button
            label="Live Demo"
            icon={faLink}
            backgroundColor="bg-teal-600"
            textColor="text-white"
            destination={demoLink}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
