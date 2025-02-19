// pages/ProfilePage.tsx
"use client"
import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { ProfileTabs } from './ProfileTabs';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioGrid } from './PortfolioGrid';
import { ExperienceSection } from './ExperienceSection';
import { AboutSection } from './AboutSection';
import { ProfileData } from '../types';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'experience' | 'about'>('portfolio');
  const [showPostHover, setShowPostHover] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const profileData: ProfileData = {
    username: 'life.adventurer',
    fullName: 'Sarah Anderson',
    followers: 1244,
    following: 899,
    title: "Software Engineer",
    bio: '✨ Living life one adventure at a time',
    bioDescription: 'Travel enthusiast | Photography lover | Coffee addict\nBased in San Francisco 🌉',
    website: 'adventures.blog/sarah',
    skills: ["Content Writing", "Digital Desining"],
    education: [
      { degree: "BSc Computer Science", school: "University A", year: "2020" } // Add this
  ],
  experience: [
    { role: "Software Engineer", company: "Company X", duration: "3 years", description: "Worked on various projects." } // Add this
],
contact: {
  email: "vishurizz0@gmail.com", // e.g., "example@example.com"
  github: "https://github.com/vishuRizz/", // e.g., "https://github.com/username"
  linkedin: "https://www.linkedin.com/in/vishu-pratap-soft-dev/", // e.g., "https://linkedin.com/in/username"
},
    posts: [
      { id: 1, imageUrl: 'https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww', likes: 342, comments: 18, caption: 'Beautiful sunset at the beach 🌅', category: "default category" },
      { id: 2, imageUrl: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww', likes: 567, comments: 24, caption: 'Morning coffee vibes ☕', category: "default category" },
      { id: 3, imageUrl: 'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww', likes: 891, comments: 45, caption: 'Weekend adventures 🏃‍♀️', category: "default category" },
      { id: 4, imageUrl: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D', likes: 423, comments: 21, caption: 'City lights 🌃', category: "default category" },
      { id: 5, imageUrl: 'https://images.unsplash.com/photo-1464863979621-258859e62245?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww', likes: 756, comments: 32, caption: 'Perfect morning 🌄', category: "default category" },
      { id: 6, imageUrl: 'https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D', likes: 634, comments: 28, caption: 'Nature walks 🌲', category: "default category" },
      { id: 7, imageUrl: 'https://media.istockphoto.com/id/2168842046/photo/fresh-green-seedlings-are-swiftly-and-promptly-emerging-from-nutrientrich-and-fertile-soil.webp?a=1&b=1&s=612x612&w=0&k=20&c=V3RnTLq6pLsfVyfu58yS1V4J-GVrswUQrPvZeXgfXL4=', likes: 445, comments: 19, caption: 'Art gallery visit 🎨', category: "default category" },
      { id: 8, imageUrl: 'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww', likes: 878, comments: 41, caption: 'Beach day 🏖', category: "default category" },
      { id: 9, imageUrl: 'https://media.istockphoto.com/id/505873656/photo/evening-view-of-ama-dablam.webp?a=1&b=1&s=612x612&w=0&k=20&c=e6BSM9wq91pxKsprUQtLWnf5xNpDafU6wZyNIM3Mnro=', likes: 567, comments: 25, caption: 'Cozy evening 🕯', category: "default category" }
    ]
  };
  const categories = ['all', ...new Set(profileData.posts.map(post => post.category))];

  const filteredPosts = activeCategory === 'all' 
    ? profileData.posts 
    : profileData.posts.filter(post => post.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
      <ProfileHeader profile={profileData} />
      
      <ProfileTabs 
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab as 'portfolio' | 'experience' | 'about')}
      />

      {activeTab === 'portfolio' && (
        <>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <PortfolioGrid
            posts={filteredPosts}
            showPostHover={showPostHover}
            onPostHover={setShowPostHover}
          />
        </>
      )}

      {activeTab === 'experience' && (
        <ExperienceSection experience={profileData.experience} />
      )}

      {activeTab === 'about' && (
        <AboutSection education={profileData.education} />
      )}
    </div>
  );
};

export default ProfilePage;
