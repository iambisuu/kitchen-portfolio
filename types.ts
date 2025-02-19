export interface ProfileData {
    username: string;
    fullName: string;
    title: string;
    followers: number;
    following: number;
    bio: string;
    bioDescription: string;
    website: string;
    skills: string[];
    education: Array<{
      degree: string;
      school: string;
      year: string;
    }>;
    experience: Array<{
      role: string;
      company: string;
      duration: string;
      description: string;
    }>;
    posts: Array<{
      id: number;
      imageUrl: string;
      likes: number;
      comments: number;
      caption: string;
      category: string;
    }>;
    contact: {
      email: string;
      github: string;
      linkedin: string;
    };
  }
  