'use client';

import { Post } from '@/components/feed/Post';
import { PostCreator } from '@/components/feed/PostCreator';
import { BottomNav } from '@/components/layout/BottomNav';
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

  const handleNewPost = (newPost: PostType) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] pb-[60px] md:pb-0">
      {/* Left Sidebar - Fixed on desktop */}
      <LeftSidebar />

      {/* Main Content - Offset by Sidebar on desktop, centered container */}
      <div className="md:pl-[80px] w-full">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
          {/* Main Feed */}
          <main className="py-6 min-h-screen w-full max-w-[680px] mx-auto xl:mx-0">
            <PostCreator onPostCreated={handleNewPost} />
            
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

          {/* Right Sidebar - Hidden on smaller screens */}
          <aside className="hidden xl:block py-6 sticky top-0 h-fit">
            <RightSidebar />
          </aside>
        </div>
      </div>

      {/* Bottom Nav - Visible on mobile */}
      <BottomNav />
    </div>
  );
}
