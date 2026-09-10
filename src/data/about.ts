type TagPreset =
  | "gray"
  | "red"
  | "yellow"
  | "orange"
  | "green"
  | "blue"
  | "purple"
  | "pink";

export interface AboutData {
  subtitle: string;
  bio: string;
  education: {
    institution: string;
    major: string;
    minor: string;
    concentration: string;
    years: string;
    location: string;
    degreeProgress: number;
  };
  interests: { label: string; preset: TagPreset }[];
  desiredRoles: string[];
}

export const about: AboutData = {
  subtitle: "Full-Stack Developer & Project Manager",

  bio: "I'm a full-stack developer who thinks about the business problems behind the code, translating ideas into working systems while keeping teams and stakeholders aligned.",

  education: {
    institution: "Wilfrid Laurier University",
    major: "Computer Science",
    minor: "Business Administration",
    concentration: "Big Data Systems",
    years: "2023 - 2027",
    location: "Waterloo, ON",
    degreeProgress: 80
  },

  interests: [
    { label: "Entrepreneurship", preset: "green" },
    { label: "AI / ML", preset: "blue" },
    { label: "Big Data", preset: "purple" },
    { label: "Cybersecurity", preset: "red" },
    { label: "Finance", preset: "yellow" }
  ],

  desiredRoles: [
    "Software Engineer",
    "Data Engineer",
    "Project Manager"
  ]
};
