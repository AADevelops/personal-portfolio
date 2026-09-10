import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { experiences } from "@/data/experience";

function ExperienceTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-[calc(50%-50vw)] w-screen bg-[#111111] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col gap-4">
            <p className="text-xs tracking-widest uppercase text-[#31A0F5]">Experience</p>
            {experiences.map((job, index) => (
              <button
                key={job.id}
                onClick={() => setActive(index)}
                className={`text-left px-4 py-3 rounded-lg transition text-base ${
                  index === active
                    ? "bg-[#31A0F5]/70 text-white font-bold"
                    : "bg-[#1E1E1E] text-[#B2B2B2] hover:bg-zinc-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-8 h-8 rounded-md object-contain bg-white/5 p-0.5 shrink-0"
                    />
                  ) : (
                    // Reserve the logo slot so rows without one stay aligned
                    <div className="w-8 h-8 shrink-0" aria-hidden="true" />
                  )}
                  <div>
                    {job.role} <br />
                    <span
                      className={`text-sm ${index === active ? "text-white font-bold" : "text-[#B2B2B2]"}`}
                    >
                      {" ➤ "} {job.company}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div
            key={experiences[active].id}
            className="md:flex-1 bg-[#1E1E1E] p-6 rounded-lg transition-all duration-500 ease-in-out animate-fade-in"
          >
            <h3 className="text-2xl font-bold mb-1">
              {experiences[active].role}
            </h3>
            <div className="inline-flex text-sm">
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
            <p className="text-sm text-[#B2B2B2] mb-4 flex items-center gap-3">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="text-[#B2B2B2]/70" />
                {experiences[active].date}
              </span>
              <span className="text-[#B2B2B2]/70">·</span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#B2B2B2]/70" />
                {experiences[active].location}
              </span>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#B2B2B2]">
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
