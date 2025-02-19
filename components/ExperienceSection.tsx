import { ProfileData } from "@/types";

interface ExperienceSectionProps {
    experience: ProfileData['experience'];
  }
  
  export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
    return (
      <div className="space-y-6 py-6">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium text-lg">{exp.role}</h3>
            <p className="text-blue-600">{exp.company}</p>
            <p className="text-gray-600 text-sm">{exp.duration}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    );
  };