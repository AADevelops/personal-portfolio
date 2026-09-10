import Button from "@/components/Button";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectDetails: React.ReactNode[];
  projectBadges: React.ReactNode[];
  githubRepo?: string;
  demoLink?: string;
}

function ProjectCard({
  projectDescription,
  projectDetails,
  projectBadges,
  githubRepo,
  demoLink
}: ProjectCardProps) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-5 flex flex-col gap-5 text-[#B2B2B2]">
      <p className="text-sm leading-relaxed">{projectDescription}</p>

      <div className="h-[1px] bg-gray-700 rounded-full" />

      <div>
        <p className="text-xs font-semibold tracking-widest text-[#B2B2B2]/70 uppercase mb-2.5">
          Project Details
        </p>
        <ul className="flex flex-col gap-1.5 text-sm">
          {projectDetails.map((step, index) => (
            <li key={index} className="flex gap-2.5 items-start">
              <span className="text-[#31A0F5] shrink-0 mt-px">›</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-widest text-[#B2B2B2]/70 uppercase mb-2.5">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {projectBadges}
        </div>
      </div>

      <div className="h-[1px] bg-gray-700 rounded-full" />

      <div className="flex gap-2 justify-center">
        {githubRepo && (
          <Button
            label="Repository"
            icon={faGithub}
            backgroundColor="bg-[#2B3137]"
            textColor="text-white"
            destination={githubRepo}
          />
        )}
        {demoLink && (
          <Button
            label="Live Demo"
            icon={faLink}
            backgroundColor="bg-teal-700"
            textColor="text-white"
            destination={demoLink}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
