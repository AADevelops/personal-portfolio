import { useEffect, useState } from "react";

type LineObject = (string | JSX.Element)[];
type MixedObject = string | JSX.Element;

function useTypewriter(
  lines: LineObject[], // Text to Display
  {
    typeSpeed = 80,
    deleteSpeed = 40,
    delayBetween = 2000,
    loop = true
  }: {
    typeSpeed?: number; // Speed of Automated Typing
    deleteSpeed?: number; // Speed of Automated Deletion
    delayBetween?: number; // Delay Between Line Switch
    loop?: boolean; // Lines Array Loop
  } = {}
) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLine = lines[lineIndex];

  const flattenedLine: { value: string | JSX.Element; length: number }[] = [];
  for (const part of currentLine) {
    if (typeof part === "string") {
      for (const char of part) {
        flattenedLine.push({ value: char, length: 1 }); // String Elements
      }
    } else {
      flattenedLine.push({ value: part, length: 1 }); // JSX Elements
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < flattenedLine.length) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, typeSpeed); // Speed of Automated Typing
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween); // Delay Between End of Typing and Beginning of Deletion
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, deleteSpeed); // Speed of Automated Deletion
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setLineIndex((prev) =>
            prev + 1 < lines.length ? prev + 1 : loop ? 0 : prev
          );
        }, 300); // Time Delay to Beginning of Writing Next Line After Previous Line Fully Deleted
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    flattenedLine.length,
    lines.length,
    delayBetween,
    loop,
    typeSpeed,
    deleteSpeed
  ]);

  const renderedLine: MixedObject[] = [];

  let currentText = "";
  for (let i = 0; i < charIndex; i++) {
    const item = flattenedLine[i].value;
    if (typeof item === "string") {
      currentText = currentText + item;
    } else {
      if (currentText) {
        renderedLine.push(currentText);
        currentText = "";
      }

      renderedLine.push(item);
    }
  }

  if (currentText) {
    renderedLine.push(currentText);
  }

  return renderedLine;
}

export default useTypewriter;
