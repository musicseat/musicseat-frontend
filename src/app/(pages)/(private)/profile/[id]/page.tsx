'use client';

import { Post } from '@/components/feed/Post';
import { BottomNav } from '@/components/layout/BottomNav';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Avatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';
import { api } from '@/services/api';
import type { Post as PostType, User } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Profile() {
  const params = useParams();
  const userId = params.id as string;
  
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'posts' | 'shared'>('posts');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [userData, userPosts] = await Promise.all([
          api.getUserProfile(userId),
          api.getUserPosts(userId),
        ]);
        setUser(userData);
        setPosts(userPosts);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-body text-[var(--color-neutral-400)]">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-body text-[var(--color-neutral-400)]">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-800 pb-[60px] md:pb-0">
      {/* Left Sidebar - Fixed on desktop */}
      <LeftSidebar />

      {/* Main Content - Offset by Sidebar on desktop, centered container */}
      <div className="md:pl-[80px] w-full">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
          {/* Main Profile Content */}
          <main className="py-6 min-h-screen w-full max-w-[680px] mx-auto xl:mx-0">
            {/* Profile Header */}
            <div className="glass rounded-card p-8 mb-6 border border-white/5 shadow-strong relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8 text-center sm:text-left relative z-10">
                <Avatar src={user.avatar} alt={user.name} size="xl" className="ring-4 ring-primary-cyan/20 h-24 w-24" />
                <div className="flex-1">
                  <h1 className="text-h1 text-neutral-50 mb-1 font-bold">
                    {user.name}
                  </h1>
                  <p className="text-body text-neutral-400 mb-4 font-medium tracking-wide">
                    {user.username}
                  </p>
                  <p className="text-body text-neutral-200 mb-6 max-w-lg leading-relaxed">
                    {user.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-center sm:justify-start gap-8">
                    <div className="group cursor-default">
                      <p className="text-h3 text-neutral-50 group-hover:text-primary-cyan transition-colors">
                        {user.postsCount}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Posts</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-h3 text-neutral-50 group-hover:text-primary-pink transition-colors">
                        {user.followers.toLocaleString()}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Followers</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-h3 text-neutral-50 group-hover:text-primary-orange transition-colors">
                        {user.following.toLocaleString()}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Following</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 border-t border-white/5 pt-6 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveTab('posts')}
                  className={cn(
                    'px-6 py-2.5 rounded-button transition-all duration-300 font-semibold whitespace-nowrap',
                    activeTab === 'posts'
                      ? 'bg-primary-cyan text-neutral-800 shadow-[0_0_15px_rgba(0,255,241,0.2)]'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
                  )}
                >
                  Posts
                </button>
                <button
                  onClick={() => setActiveTab('shared')}
                  className={cn(
                    'px-6 py-2.5 rounded-button transition-all duration-300 font-semibold whitespace-nowrap',
                    activeTab === 'shared'
                      ? 'bg-primary-cyan text-neutral-800 shadow-[0_0_15px_rgba(0,255,241,0.2)]'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
                  )}
                >
                  Shared
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-8">
              {activeTab === 'posts' && posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : activeTab === 'shared' ? (
                <div className="glass rounded-card text-center py-16 border border-white/5">
                  <p className="text-body text-neutral-400">
                    No shared posts yet
                  </p>
                </div>
              ) : (
                <div className="glass rounded-card text-center py-16 border border-white/5">
                  <p className="text-body text-neutral-400">
                    No posts yet
                  </p>
                </div>
              )}
            </div>
          </main>

          {/* Right Sidebar - Hidden on smaller screens */}
          <aside className="hidden xl:block py-6 sticky top-0 h-fit">
            <RightSidebar />
          </aside>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
