"use client"
import { useState } from 'react';
import { Grid, Bookmark, Tag } from 'lucide-react';

interface ProfileData {
  username: string;
  followers: number;
  following: number;
  bio: string;
  bioDescription: string;
  highlights: Array<{
    id: number;
    title: string;
    imageUrl: string;
  }>;
  posts: Array<{
    id: number;
    imageUrl: string;
  }>;
}

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'tagged'>('posts');
  
  const profileData: ProfileData = {
    username: 'Wohoo yay',
    followers: 44,
    following: 99,
    bio: 'meh!',
    bioDescription: 'I am a person who loves to do things.',
    highlights: [
      { id: 1, title: 'Me', imageUrl: 'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzfGVufDB8fDB8fHww' },
      { id: 2, title: 'college', imageUrl: 'https://images.unsplash.com/photo-1732482124543-e9bb4ed3fede?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D' },
      { id: 3, title: '😆', imageUrl: 'https://images.unsplash.com/photo-1732521722114-5e86ad43ecb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D' },
      { id: 4, title: 'New', imageUrl: 'https://plus.unsplash.com/premium_photo-1687186954188-76f7f4a3d829?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmxzfGVufDB8fDB8fHww' },
    ],
    posts: [
      { id: 1, imageUrl: 'https://images.unsplash.com/photo-1568739253582-afa48fbcea47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdpcmxzfGVufDB8fDB8fHww' },
      { id: 2, imageUrl: 'https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww' },
      { id: 3, imageUrl: 'https://images.unsplash.com/photo-1583396082380-01f674489d6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdpcmxzfGVufDB8fDB8fHww' },
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmxzfGVufDB8fDB8fHww"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <h1 className="text-xl font-normal">{profileData.username}</h1>
            <div className="flex gap-2">
              <button className="px-4 py-1 bg-gray-100 rounded-md font-medium">
                Edit Profile
              </button>
              <button className="px-4 py-1 bg-gray-100 rounded-md font-medium">
                View archive
              </button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start gap-6 my-4">
            <span><strong>{profileData.posts.length}</strong> posts</span>
            <span><strong>{profileData.followers}</strong> followers</span>
            <span><strong>{profileData.following}</strong> following</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="font-medium">{profileData.bio}</p>
            <p>{profileData.bioDescription}</p>
          </div>
        </div>
      </div>

      {/* Story Highlights */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
        {profileData.highlights.map((highlight) => (
          <div key={highlight.id} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center mb-1">
              {highlight.title === 'New' ? (
                <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl text-gray-300">+</span>
                </div>
              ) : (
                <img
                  src={highlight.imageUrl}
                  alt={highlight.title}
                  className="w-14 h-14 rounded-full object-cover"
                />
              )}
            </div>
            <span className="text-xs">{highlight.title}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-t">
        <div className="flex justify-center gap-12">
          <button
            className={`flex items-center gap-1 py-3 ${
              activeTab === 'posts'
                ? 'border-t border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('posts')}
          >
            <Grid size={12} />
            <span className="text-xs uppercase font-medium">Posts</span>
          </button>
          <button
            className={`flex items-center gap-1 py-3 ${
              activeTab === 'saved'
                ? 'border-t border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            <Bookmark size={12} />
            <span className="text-xs uppercase font-medium">Saved</span>
          </button>
          <button
            className={`flex items-center gap-1 py-3 ${
              activeTab === 'tagged'
                ? 'border-t border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('tagged')}
          >
            <Tag size={12} />
            <span className="text-xs uppercase font-medium">Tagged</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1">
        {profileData.posts.map((post) => (
          <div key={post.id} className="aspect-square">
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;