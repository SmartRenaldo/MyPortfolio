import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { experiences } from "../../data/experience";
import { useTheme } from "../../context/ThemeContext";

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"></div>

        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Experience details */}
              <div className={`relative pl-8 border-l-2 ${borderColor} mb-8`}>
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 -translate-x-1/2"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <div className="flex items-center text-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                      {exp.company}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <Star
                          size={16}
                          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500"
                        />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project images section - Using appropriate icon for website links */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="ml-8 mt-4">
                  <h4 className="text-md font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
                    Project Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {exp.projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block rounded-lg overflow-hidden border ${borderColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        <div
                          className="relative overflow-hidden"
                          style={{ aspectRatio: "16/9" }}
                        >
                          <img
                            src={project.image}
                            alt={project.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div
                          className={`p-3 ${bgColor} text-sm flex justify-between items-center`}
                        >
                          <span>{project.alt}</span>
                          <ExternalLink size={14} className="text-purple-500" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
