export interface Experience {
  id: number;
  company: string;
  logo?: string;
  role: string;
  type?: string;
  date: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 4,
    company: "DataFloat",
    logo: "/logos/datafloat.png",
    role: "Co-Founder",
    date: "May 2025 - Present",
    location: "Kitchener, ON",
    description: [
      "Built and shipped a production financial intelligence platform with the founding team using Next.js, React, TypeScript, Prisma, and PostgreSQL, taking it from prototype to a live pilot deployment running on real financial data",
      "Engineered an automated pipeline that syncs third-party accounting and CRM data into isolated per-tenant Postgres schemas, handling OAuth 2.0 server-side and layering reversible transformations that leave raw source data untouched",
      "Designed a Claude-powered agent layer that lets users run data operations through natural language, with configurable retry and timeout handling so transient model failures stay invisible to the user",
      "Implemented multi-tenant organizations and projects with role-based access control, email verification, password reset, and invite flows on BetterAuth, with server-side route protection and automated test coverage across the platform",
      "Conducted 100+ discovery interviews and analyzed secondary data from industry databases to validate product-market fit, using SWOT analysis and the Lean methodology to guide strategic pivots"
    ]
  },
  {
    id: 3,
    company: "Wilfrid Laurier University",
    logo: "/logos/wlu.jpeg",
    role: "Instructional Assistant",
    date: "Jan. 2026 - Apr. 2026",
    location: "Waterloo, ON",
    description: [
      "Marked weekly labs for 80+ students enrolled in CP216: Introduction to Microprocessors, providing written feedback and maintaining consistent grading standards on a tight weekly turnaround",
      "Served as the first point of contact for student questions on course material and weekly labs, breaking down low-level microprocessor concepts to unblock progress between lectures",
      "Aligned with the course instructor and fellow IAs on marking criteria clarifications during regular check-ins, ensuring consistent grading interpretations across the entire IA team throughout the term"
    ]
  },
  {
    id: 1,
    company: "Laurier Cybersecurity Club",
    logo: "/logos/cybersecurity-club.jpeg",
    role: "Executive Vice President",
    date: "Sep. 2024 - Apr. 2026",
    location: "Waterloo, ON",
    description: [
      "Planned and led club events collaboratively with the executive team, handling logistics, outreach, and follow-up using Notion and Google Workspace, contributing to a 60% increase in average student turnout",
      "Directed internal operations by coordinating a cross-functional team of 3+ Vice Presidents, establishing task workflows and progress tracking systems to ensure 100% on-time delivery of all club initiatives each term",
      "Oversaw technical development of the club's online projects to facilitate collaboration, using Git and GitHub",
      "Coordinated and hosted a cybersecurity panel and Capture-the-Flag contest with 40+ attendees by planning all logistics including food, event space booking, online platform setup, and guest speaker outreach"
    ]
  },
  {
    id: 2,
    company: "StartUp Lab Laurier",
    logo: "/logos/startup-lab.jpeg",
    role: "Software Engineer Intern",
    type: "Co-op / Internship",
    date: "Sep. 2025 - Dec. 2025",
    location: "Waterloo, ON",
    description: [
      "Delivered three production full-stack platforms end-to-end using TypeScript, Next.js, Supabase, Prisma, and TailwindCSS, owning system architecture, implementation, and deployment to Vercel for real users",
      "Partnered with non-technical clients to translate ambiguous requirements into scalable software solutions, automating previously manual workflows and driving adoption across multiple internal programs",
      "Built and scaled a Winternship job-matching platform supporting 111 positions (+39% YoY), 71 roles (+48%), 83+ students, and 38 employers (+65%), directly enabling program growth and increased participation",
      "Implemented secure authentication, role-based access control, and admin workflows across all platforms using Supabase Auth and BetterAuth, replacing spreadsheets, forms, and email-driven coordination"
    ]
  },
  {
    id: 0,
    company: "Idea Lab Kids",
    logo: "/logos/idea-lab-kids.jpeg",
    role: "STEAM Instructor",
    type: "Permanent Part-Time",
    date: "Jul. 2022 - Aug. 2023",
    location: "Richmond Hill, ON",
    description: [
      "Taught Python, Roblox Lua, Scratch, and Lego WeDo Robotics to 50+ students with varying levels of experience",
      "Mentored the students throughout their unique game design and feature implementation stages"
    ]
  }
];
