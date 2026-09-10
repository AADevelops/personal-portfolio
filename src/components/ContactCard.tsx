import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContactCardProps {
  icon: IconDefinition;
  label: string;
  sublabel: string;
  href: string;
  external?: boolean;
}

function ContactCard({ icon, label, sublabel, href, external = false }: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center justify-between bg-[#1E1E1E] rounded-xl px-5 py-4 text-[#B2B2B2] hover:text-white hover:border-[#31A0F5]/40 border border-transparent transition duration-200 group"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={icon}
          className="text-[#31A0F5]/70 group-hover:text-[#31A0F5] transition duration-200 w-5"
          size="lg"
        />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-white">{label}</span>
          <span className="text-xs text-[#B2B2B2]/70">{sublabel}</span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="text-[#B2B2B2]/70 group-hover:text-[#31A0F5]/70 transition duration-200 text-xs"
      />
    </a>
  );
}

export default ContactCard;
