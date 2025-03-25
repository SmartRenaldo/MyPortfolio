import React from "react";
import { BookOpen, Award, MapPin, Calendar } from "lucide-react";
import { education } from "../../data/education";
import { useTheme } from "../../context/ThemeContext";

const Education: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"></div>

        <div className="space-y-10">
          {education.map((edu) => (
            <div
              key={edu.id}
              className={`p-6 rounded-lg border ${borderColor} ${bgColor} flex flex-col md:flex-row gap-6 transition-transform hover:scale-[1.01] duration-300 hover:shadow-md`}
            >
              {/* School Logo */}
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div
                  className={`w-20 h-20 rounded-lg overflow-hidden border ${borderColor} flex items-center justify-center bg-white`}
                >
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <BookOpen className="w-12 h-12 text-purple-500" />
                  )}
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold">{edu.school}</h3>
                  <div className="flex items-center text-sm mt-1 md:mt-0">
                    <Calendar size={16} className="mr-1 text-purple-500" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Award size={16} className="mr-2 text-purple-500" />
                    <span className="font-medium">{edu.degree}</span>
                  </div>

                  <div className="flex flex-wrap gap-y-2">
                    <div className="flex items-center mr-4">
                      <MapPin size={16} className="mr-1 text-purple-500" />
                      <span className="text-sm">{edu.location}</span>
                    </div>

                    <div className="flex items-center">
                      <div className="px-2 py-1 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm rounded-md font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
