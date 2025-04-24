import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  icon?: IconDefinition;
  backgroundColor: string;
  textColor?: string;
  destination?: string;
}

function Button({
  label,
  icon,
  backgroundColor,
  textColor = "text-gray-400",
  destination
}: ButtonProps) {
  const baseClassName = `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${backgroundColor} ${textColor}`;

  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{label}</span>
    </>
  );

  const isExternal = destination?.startsWith("http");
  if (destination) {
    return isExternal ? (
      <a
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
      >
        {content}
      </a>
    ) : (
      <Link to={destination} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return <button className={baseClassName}>{content}</button>;
}

export default Button;
