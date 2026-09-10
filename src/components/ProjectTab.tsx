import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface ProjectTabProps {
  title: string;
  projectDate: string;
  card: React.ReactNode;
  defaultOpen?: boolean;
}

function ProjectTab({
  title,
  projectDate,
  card,
  defaultOpen = false
}: ProjectTabProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`w-full rounded-lg bg-[#1E1E1E] text-white transition-colors duration-200 ${
        isOpen ? "border border-[#31A0F5]/40" : "border border-transparent"
      }`}
    >
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-0.5">
          <span
            className={`font-medium text-base transition-colors duration-200 ${
              isOpen ? "text-[#31A0F5]" : "text-white"
            }`}
          >
            {title}
          </span>
          <span className="text-xs text-[#B2B2B2]/70">{projectDate}</span>
        </div>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={`text-sm transition-colors duration-200 ${
            isOpen ? "text-[#31A0F5]" : "text-[#B2B2B2]/70"
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="mx-5 h-[1px] bg-[#31A0F5]/20" />
          <div className="px-5 py-5">{card}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTab;
