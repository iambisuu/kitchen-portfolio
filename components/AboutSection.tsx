import { ProfileData } from "@/types";

interface AboutSectionProps {
    education: ProfileData['education'];
  }
  
  export const AboutSection = ({ education }: AboutSectionProps) => {
    return (
      <div className="space-y-6 py-6">
        <h2 className="text-xl font-medium">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-medium">{edu.degree}</h3>
            <p className="text-gray-700">{edu.school}</p>
            <p className="text-gray-600 text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    );
  };