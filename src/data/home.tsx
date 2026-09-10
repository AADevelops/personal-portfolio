import Tag from "@/components/Tag";

type LineObject = (string | JSX.Element)[];

export const typewriterLines: LineObject[] = [
  [
    "Studying Computer Science & Business @ ",
    <Tag label="Wilfrid" preset="purple" />,
    " ",
    <Tag label="Laurier" preset="yellow" />,
    " University"
  ],
  ["I'm a ", <Tag label="Full-Stack" preset="pink" />, " Developer"],
  [
    "I'm a ",
    <Tag label="Co-Founder" preset="green" />,
    " of a Financial Intelligence startup: ",
    <Tag label="DataFloat" preset="blue" />
  ],
  [
    "Currently Learning ",
    <Tag label="AI Agent" preset="orange" />,
    " & ",
    <Tag label="API" preset="blue" />,
    " Development"
  ],
  ["Interested in Entrepreneurship, AI/ML, Big Data, Cybersecurity & Finance"],
  [
    "Based in ",
    <u>
      <strong>Waterloo</strong>
    </u>,
    " and ",
    <u>
      <strong>Richmond Hill</strong>
    </u>,
    ", Ontario, 🇨🇦"
  ]
];
