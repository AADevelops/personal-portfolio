export type BadgePreset =
  | "css"
  | "discordjs"
  | "express"
  | "fastapi"
  | "git"
  | "github"
  | "html"
  | "java"
  | "javascript"
  | "javaswing"
  | "matplotlib"
  | "mongo"
  | "n8n"
  | "next"
  | "node"
  | "pandas"
  | "prisma"
  | "pygame"
  | "python"
  | "react"
  | "render"
  | "rust"
  | "scikitlearn"
  | "stripe"
  | "supabase"
  | "tailwind"
  | "tauri"
  | "typescript"
  | "vercel";

interface BadgeProps {
  preset?: BadgePreset;
  src?: string;
}

function Badge({ preset, src }: BadgeProps) {
  const presetLinks = {
    css: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    discordjs:
      "https://img.shields.io/badge/discord.js-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white",
    express:
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    fastapi:
      "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
    git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    github:
      "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    html: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    javascript:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    javaswing:
      "https://img.shields.io/badge/java%20swing-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    matplotlib:
      "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    mongo:
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    n8n: "https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white",
    next: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    node: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    pandas:
      "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    prisma:
      "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
    pygame:
      "https://img.shields.io/badge/pygame-%23000000.svg?style=for-the-badge&logo=python&logoColor=white",
    python:
      "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    react:
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    render:
      "https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white",
    rust: "https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white",
    scikitlearn:
      "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white",
    stripe:
      "https://img.shields.io/badge/stripe-%236772E5.svg?style=for-the-badge&logo=stripe&logoColor=white",
    supabase:
      "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
    tailwind:
      "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    tauri:
      "https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23FFFFFF",
    typescript:
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    vercel:
      "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
  };

  return (
    <img
      className="rounded-lg"
      src={preset ? presetLinks[preset] : src}
      alt={preset ? `${preset} badge` : "Technology badge"}
      loading="lazy"
    />
  );
}

export default Badge;
