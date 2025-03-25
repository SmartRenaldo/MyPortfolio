import React from "react";
import {
  Code,
  Server,
  Database,
  GitBranch,
  CheckCircle,
  Wrench,
} from "lucide-react";
import { skills } from "../../data/skills";
import { useTheme } from "../../context/ThemeContext";

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const secondaryBgColor = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  // Group skills by the new categories
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const databaseSkills = skills.filter(
    (skill) => skill.category === "database"
  );
  const devopsSkills = skills.filter((skill) => skill.category === "devops");
  const testingSkills = skills.filter((skill) => skill.category === "testing");
  const methodologySkills = skills.filter(
    (skill) => skill.category === "methodology"
  );

  const SkillCategory = ({
    title,
    skills,
    icon: Icon,
  }: {
    title: string;
    skills: typeof frontendSkills;
    icon: React.ElementType;
  }) => (
    <div className={`p-6 rounded-lg ${bgColor} border ${borderColor}`}>
      <div className="flex items-center mb-4">
        {/* Make the icon bigger and more visible with gradient background */}
        <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold ml-3">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className={`py-20 ${secondaryBgColor}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Modified with the 6 requested categories and more visible icons */}
          <SkillCategory title="Frontend" skills={frontendSkills} icon={Code} />
          <SkillCategory title="Backend" skills={backendSkills} icon={Server} />
          <SkillCategory
            title="Database"
            skills={databaseSkills}
            icon={Database}
          />
          <SkillCategory
            title="DevOps"
            skills={devopsSkills}
            icon={GitBranch}
          />
          <SkillCategory
            title="Testing"
            skills={testingSkills}
            icon={CheckCircle}
          />
          <SkillCategory
            title="Methodologies & Tools"
            skills={methodologySkills}
            icon={Wrench}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
