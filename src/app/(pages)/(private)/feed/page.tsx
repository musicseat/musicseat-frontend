'use client';

import { Post } from '@/components/feed/Post';
import { PostCreator } from '@/components/feed/PostCreator';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { api } from '@/services/api';
import type { Post as PostType } from '@/types';
import { useEffect, useState } from 'react';

export default function Feed() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const data = await api.getFeed();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  const handlePostUpdate = (updatedPost: PostType) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  return (
    <div className="grid grid-cols-[280px_1fr_380px] gap-6 max-w-[1600px] mx-auto">
      {/* Left Sidebar - Navigation */}
      <LeftSidebar />

      {/* Main Feed */}
      <main className="py-6 min-h-screen">
        <PostCreator />
        
        {loading ? (
          <div className="card text-center py-12">
            <p className="text-body text-[var(--color-neutral-400)]">Loading feed...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} onUpdate={handlePostUpdate} />
            ))}
          </div>
        )}
      </main>

      {/* Right Sidebar - Stories, Friends, Chat */}
      <RightSidebar />
    </div>
  );
}
