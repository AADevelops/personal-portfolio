import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface ProjectTabProps {
  title: string;
  projectDate: string;
  card: React.ReactNode;
}

function ProjectTab({ title, projectDate, card }: ProjectTabProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border w-[928px] ${isOpen ? "border-[#31A0F5]" : "border-[#B2B2B2]"} rounded-lg shadow-sm bg-[#1E1E1E] text-white`}
    >
      <button
        className={`w-full flex justify-between items-center p-4 ${isOpen ? "text-[#F54831]/60" : "text-[#B2B2B2]"} text-left font-medium text-lg`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? title : `• ${projectDate} •`} {/* "‎" */}
        {isOpen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-[#B2B2B2] text-right"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[#B2B2B2] text-right"
          />
        )}
      </button>

      {isOpen && <div className="px-4 pb-4 text-base">{card}</div>}
    </div>
  );
}

export default ProjectTab;
