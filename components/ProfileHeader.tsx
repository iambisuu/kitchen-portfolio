import { ProfileData } from '@/types';
import { Camera, Mail, Github, Linkedin } from 'lucide-react';

interface ProfileHeaderProps {
  profile: ProfileData;
}

export const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
      <div className="relative group">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-gray-50 shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1688676796006-bbd1599bbfb6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
          <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <h1 className="text-xl font-medium">{profile.username}</h1>
          <div className="flex gap-2">
            <a href={`mailto:${profile.contact.email}`} className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
            <a href={profile.contact.github} target="_blank" className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.contact.linkedin} target="_blank" className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center md:text-left space-y-2 mt-4">
          <p className="font-medium text-gray-900">{profile.fullName}</p>
          <p className="text-blue-600">{profile.title}</p>
          <p className="whitespace-pre-line text-gray-700">{profile.bioDescription}</p>
          <a href={profile.website} className="text-blue-500 hover:underline">
            {profile.website}
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
