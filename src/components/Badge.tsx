interface BadgeProps {
  preset?:
    | "python"
    | "java"
    | "rust"
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "react"
    | "tailwind"
    | "express"
    | "node"
    | "mongo"
    | "fastapi"
    | "render"
    | "tauri"
    | "vercel";
  src?: string;
}

function Badge({ preset, src }: BadgeProps) {
  const presetLinks = {
    python:
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    rust: "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
    html: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    css: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    javascript:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    typescript:
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    react:
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    express:
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    node: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    mongo:
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    tailwind:
      "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    fastapi:
      "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
    render:
      "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
    tauri:
      "https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF",
    vercel:
      "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
  };

  return (
    <img className="rounded-lg" src={preset ? presetLinks[preset] : src}></img>
  );
}

export default Badge;
