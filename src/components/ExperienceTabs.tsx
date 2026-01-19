import { useState } from "react";

const experiences = [
  {
    id: 2,
    company: "StartUp Lab Laurier Incubator",
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
    id: 1,
    company: "Laurier Cybersecurity Club",
    role: "Executive Vice President",
    date: "Sep. 2024 - Present",
    location: "Waterloo, ON",
    description: [
      "Plan and lead club events collaboratively with the executive team, handling logistics, outreach, and follow-up using Notion and Google Workspace, contributing to a 60% increase in average student turnout",
      "Direct internal operations by coordinating a cross-functional team of 3+ Vice Presidents, establishing task workflows and progress tracking systems to ensure 100% on-time delivery of all club initiatives each term",
      "Oversee technical development of the club's online projects to facilitate collaboration, using Git and GitHub",
      "Coordinated and hosted a cybersecurity panel and Capture-the-Flag contest with 40+ attendees by planning all logistics including food, event space booking, online platform setup, and guest speaker outreach"
    ]
  },
  {
    id: 0,
    company: "Idea Lab Kids",
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

function ExperienceTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-[calc(50%-50vw)] w-screen bg-[#111111] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-8">
        <div className="md:w-1/4 flex flex-col gap-4">
          {experiences.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setActive(index)}
              className={`text-left px-4 py-3 rounded-lg transition text-lg ${
                index === active
                  ? "bg-[#31A0F5BA] text-white font-bold"
                  : "bg-[#1E1E1E] text-[#B2B2B2] hover:bg-zinc-700"
              }`}
            >
              {job.role} <br />
              <span
                className={`text-sm ${index === active ? "text-zinc-300 font-bold" : "text-[#B2B2B2]"}`}
              >
                {" ➤ "} {job.company}
              </span>
            </button>
          ))}
        </div>

        <div
          key={experiences[active].id}
          className="md:w-2/3 bg-[#1E1E1E] p-6 rounded-lg transition-all duration-500 ease-in-out animate-fade-in-up"
        >
          <h3 className="text-2xl font-bold mb-1">
            {experiences[active].role}
          </h3>
          <div className="inline-flex">
            <p className="text-[#31A0F5] mb-2">{experiences[active].company}</p>
            {experiences[active].type && (
              <>
                <p className="px-3">•</p>
                <p className="text-[#F54831] mb-2">
                  {experiences[active].type}
                </p>
              </>
            )}
          </div>
          <p className="text-sm text-[#B2B2B2] mb-4">
            🗓️ {experiences[active].date} 📍 {experiences[active].location}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#B2B2B2]">
            {experiences[active].description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTabs;
