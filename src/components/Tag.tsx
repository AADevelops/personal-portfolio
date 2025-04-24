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
    gray: "bg-gray-600/30 text-gray-400",
    red: "bg-red-900/30 text-red-400",
    green: "bg-green-900/30 text-green-400",
    yellow: "bg-amber-900/30 text-amber-400",
    orange: "bg-orange-900/30 text-orange-400",
    blue: "bg-blue-900/30 text-blue-400",
    purple: "bg-purple-900/30 text-purple-400",
    pink: "bg-pink-900/30 text-pink-400"
  };

  return (
    <span className={clsx(baseClassName, presetClassNames[preset], custom)}>
      {label}
    </span>
  );
}

export default Tag;
