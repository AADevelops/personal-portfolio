import clsx from "clsx";

function Tag(props: {
  label: string;
  preset?:
    | "gray"
    | "red"
    | "yellow"
    | "orange"
    | "green"
    | "blue"
    | "purple"
    | "pink";
  custom?: string;
}) {
  const { label, preset = "gray", custom } = props;

  const baseClassName = "rounded-lg font-mono px-1.5 py-0.5 inline-flex";
  const presetClassNames = {
    gray: "bg-gray-700/45 text-gray-400",
    red: "bg-red-700/45 text-red-400",
    green: "bg-green-700/45 text-green-400",
    yellow: "bg-yellow-700/45 text-yellow-500",
    orange: "bg-orange-700/45 text-orange-400",
    blue: "bg-blue-700/45 text-blue-400",
    purple: "bg-purple-700/45 text-purple-400",
    pink: "bg-pink-700/45 text-pink-400"
  };

  return (
    <span className={clsx(baseClassName, presetClassNames[preset], custom)}>
      {label}
    </span>
  );
}

export default Tag;
