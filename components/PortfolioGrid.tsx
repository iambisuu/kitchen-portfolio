import { ProfileData } from '@/types';
import { Heart, MessageCircle } from 'lucide-react';

interface PortfolioGridProps {
  posts: ProfileData['posts'];
  showPostHover: number | null;
  onPostHover: (id: number | null) => void;
}

export const PortfolioGrid = ({ posts, showPostHover, onPostHover }: PortfolioGridProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative aspect-square group"
          onMouseEnter={() => onPostHover(post.id)}
          onMouseLeave={() => onPostHover(null)}
        >
          <img
            src={post.imageUrl}
            alt={`Post ${post.id}`}
            className="w-full h-full object-cover"
          />
          {showPostHover === post.id && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <Heart size={20} fill="white" />
                  <span>{formatNumber(post.likes)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  <span>{formatNumber(post.comments)}</span>
                </div>
              </div>
              <p className="text-center text-sm whitespace-pre-line">{post.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};