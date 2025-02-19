import { Briefcase, Award, GraduationCap } from 'lucide-react';

interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  return (
    <div className="border-t">
      <div className="flex justify-center gap-12">
        <button
          className={`flex items-center gap-1 py-3 transition-colors duration-200 ${
            activeTab === 'portfolio'
              ? 'border-t-2 border-gray-800 text-gray-800'
              : 'text-gray-500 hover:text-gray-800'
          }`}
          onClick={() => onTabChange('portfolio')}
        >
          <Briefcase size={12} />
          <span className="text-xs uppercase font-medium">Portfolio</span>
        </button>
        <button
          className={`flex items-center gap-1 py-3 transition-colors duration-200 ${
            activeTab === 'experience'
              ? 'border-t-2 border-gray-800 text-gray-800'
              : 'text-gray-500 hover:text-gray-800'
          }`}
          onClick={() => onTabChange('experience')}
        >
          <Award size={12} />
          <span className="text-xs uppercase font-medium">Experience</span>
        </button>
        <button
          className={`flex items-center gap-1 py-3 transition-colors duration-200 ${
            activeTab === 'about'
              ? 'border-t-2 border-gray-800 text-gray-800'
              : 'text-gray-500 hover:text-gray-800'
          }`}
          onClick={() => onTabChange('about')}
        >
          <GraduationCap size={12} />
          <span className="text-xs uppercase font-medium">About</span>
        </button>
      </div>
    </div>
  );
};
