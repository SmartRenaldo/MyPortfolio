import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { projects } from "../../data/projects";
import { useTheme } from "../../context/ThemeContext";

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const secondaryBgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <section id="projects" className={`py-20 ${secondaryBgColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"></div>
        <p className="text-lg mb-12 max-w-2xl">
          Here are some of my recent projects. I specialise in creating clean,
          efficient, and user-friendly applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden border ${borderColor} transition-transform hover:scale-105 hover:shadow-lg`}
            >
              {/* Clickable Image with Hover Effect - Fixed Overlay Issue */}
              <a
                href={project.videoUrl || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Play button that appears on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-purple-600 bg-opacity-90 rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform">
                    <Play className="text-white" size={24} />
                  </div>
                </div>
              </a>

              <div className={`p-6 ${bgColor}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${secondaryBgColor} hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-indigo-500/10`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm rounded-md hover:from-purple-700 hover:to-indigo-600 transition-all shadow hover:shadow-md transform hover:translate-y-[-1px]"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 border border-purple-500 text-purple-600 dark:text-purple-400 text-sm rounded-md hover:bg-purple-500/10 transition-all transform hover:translate-y-[-1px]`}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
