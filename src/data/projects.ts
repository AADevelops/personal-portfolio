import type { BadgePreset } from "@/components/Badge";

export interface Project {
  projectTitle: string;
  projectDate: string;
  projectDescription: string;
  projectDetails: string[];
  badgePresets: BadgePreset[];
  githubRepo?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    projectTitle: "DataFloat",
    projectDate: "May 2025 - Present",
    projectDescription:
      "A financial intelligence platform that connects a company's accounting and CRM systems, cleans and models the data, and turns it into financial reporting and forecasts.",
    projectDetails: [
      "Multi-tenant platform built with Next.js, React, TypeScript, Prisma, and PostgreSQL, live with pilot users on real financial data",
      "Automated ingestion pipeline with server-side OAuth 2.0 and a reversible transformation layer that leaves raw source data untouched",
      "Claude-powered agents that run data operations from natural language, secured by role-based access control and backed by automated test coverage"
    ],
    badgePresets: ["typescript", "next", "react", "prisma", "tailwind", "vercel"],
    demoLink: "https://datafloat.app"
  },
  {
    projectTitle: "Personal Portfolio Website",
    projectDate: "Apr. 2025 - Present",
    projectDescription:
      "A website made to introduce myself and showcase my skills, projects, and experiences.",
    projectDetails: [
      "Built a 7-page personal website using React, TypeScript, and TailwindCSS, implementing client-side routing and a responsive mobile navigation menu to support seamless navigation across all screen sizes",
      "Separated all site content into dedicated TypeScript data files to allow profile, project, and experience details to be updated independently of UI components",
      "Developed a custom useTypewriter hook to power an animated hero section on the landing page, with configurable type speed, delete speed, and loop behavior supporting mixed text and JSX content",
      "Built a reusable component library of 10+ components and a badge preset system with 29 shields.io integrations to visually represent the tech stack of each project",
      "Deployed to Vercel with a custom domain, including a dedicated resume page with PDF download and in-browser viewing"
    ],
    badgePresets: ["typescript", "react", "tailwind", "html", "vercel"],
    githubRepo: "https://github.com/AADevelops/personal-portfolio",
    demoLink: "https://amunahmad.com"
  },
  {
    projectTitle: "PhishyURL",
    projectDate: "Apr. 2025 - May 2025",
    projectDescription:
      "A machine learning-powered web application that detects phishing URLs using a K-Nearest Neighbors model trained on 235,000+ instances, achieving a classification accuracy of 99.91%.",
    projectDetails: [
      "Cleaned and normalized metadata from a UC Irvine dataset with 235,000+ instances, implementing pipeline-based preprocessing and outlier removal to improve data quality and minimize model bias",
      "Created Matplotlib visualizations to analyze feature relationships and key predictors of phishing behavior",
      "Trained a custom K-Nearest Neighbors model and selected optimal features, tuned hyperparameters, and refined preprocessing steps with scikit-learn, resulting in a final classification accuracy of 99.91% for phishing detection",
      "Developed a full-stack web application with React, TailwindCSS, and FastAPI to present predictions and visual insights from the trained model in a user-friendly interface"
    ],
    badgePresets: [
      "python",
      "pandas",
      "matplotlib",
      "scikitlearn",
      "react",
      "tailwind",
      "fastapi"
    ],
    githubRepo: "https://github.com/AADevelops/PhishyURL"
  },
  {
    projectTitle: "404 Hawks Not Found CTF Platform",
    projectDate: "Jan. 2025 - Present",
    projectDescription:
      "A full-stack platform built to support the Laurier Cybersecurity Club's Capture-the-Flag competition, providing real-time scoring and secure authentication for 40+ participants.",
    projectDetails: [
      "Built a full-stack MERN platform to support 40+ CTF participants with real-time scoring and login support",
      "Constructed a custom user authentication system to support team participation, validating inputs, documenting backend logic, and applying structured workflows to ensure data accuracy, access control, and system integrity",
      "Applied secure key management and backend protections to prevent platform exploitation during the event"
    ],
    badgePresets: ["typescript", "react", "tailwind", "html", "vercel"],
    githubRepo: "https://github.com/AADevelops/lcc-htb-platform"
  },
  {
    projectTitle: "Canada Roleplay Butler",
    projectDate: "Aug. 2022 - Dec. 2022",
    projectDescription:
      "A Discord bot built to provide moderation tooling and workflow automation for a FiveM roleplay server community of 2,500+ members.",
    projectDetails: [
      "Developed a Discord bot to provide moderation tooling for a video game server of 2,500+ members",
      "Used an event-driven architecture to process user-inputted commands and automate tasks such as role-based text channel visibility",
      "Streamlined server staff workflow and application systems, increasing speed and efficiency by 80%"
    ],
    badgePresets: ["javascript", "discordjs"],
    githubRepo: "https://github.com/AADevelops/canada-roleplay-butler"
  }
];
