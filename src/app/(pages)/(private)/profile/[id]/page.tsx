'use client';

import { Post } from '@/components/feed/Post';
import { BottomNav } from '@/components/layout/BottomNav';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { Avatar } from '@/components/ui/Avatar';
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
    <div className="min-h-screen bg-[var(--color-background)] pb-[60px] md:pb-0">
      {/* Left Sidebar - Fixed on desktop */}
      <LeftSidebar />

      {/* Main Content - Offset by Sidebar on desktop, centered container */}
      <div className="md:pl-[80px] w-full">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
          {/* Main Profile Content */}
          <main className="py-6 min-h-screen w-full max-w-[680px] mx-auto xl:mx-0">
            {/* Profile Header */}
            <div className="card mb-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 text-center sm:text-left">
                <Avatar src={user.avatar} alt={user.name} size="xl" />
                <div className="flex-1">
                  <h1 className="text-h1 text-[var(--color-neutral-50)] mb-1">
                    {user.name}
                  </h1>
                  <p className="text-body text-[var(--color-neutral-400)] mb-4">
                    {user.username}
                  </p>
                  <p className="text-body text-[var(--color-neutral-200)] mb-4">
                    {user.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-center sm:justify-start gap-6">
                    <div>
                      <p className="text-h3 text-[var(--color-neutral-50)]">
                        {user.postsCount}
                      </p>
                      <p className="text-body-sm text-[var(--color-neutral-400)]">Posts</p>
                    </div>
                    <div>
                      <p className="text-h3 text-[var(--color-neutral-50)]">
                        {user.followers.toLocaleString()}
                      </p>
                      <p className="text-body-sm text-[var(--color-neutral-400)]">Followers</p>
                    </div>
                    <div>
                      <p className="text-h3 text-[var(--color-neutral-50)]">
                        {user.following.toLocaleString()}
                      </p>
                      <p className="text-body-sm text-[var(--color-neutral-400)]">Following</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-t border-[var(--color-neutral-600)] pt-4 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab('posts')}
                  className={`px-4 py-2 rounded-[var(--radius-button)] transition-colors whitespace-nowrap ${
                    activeTab === 'posts'
                      ? 'bg-[var(--color-primary-cyan)] text-[var(--color-neutral-800)] font-semibold'
                      : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)]'
                  }`}
                >
                  Posts
                </button>
                <button
                  onClick={() => setActiveTab('shared')}
                  className={`px-4 py-2 rounded-[var(--radius-button)] transition-colors whitespace-nowrap ${
                    activeTab === 'shared'
                      ? 'bg-[var(--color-primary-cyan)] text-[var(--color-neutral-800)] font-semibold'
                      : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)]'
                  }`}
                >
                  Shared
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {activeTab === 'posts' && posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : activeTab === 'shared' ? (
                <div className="card text-center py-12">
                  <p className="text-body text-[var(--color-neutral-400)]">
                    No shared posts yet
                  </p>
                </div>
              ) : (
                <div className="card text-center py-12">
                  <p className="text-body text-[var(--color-neutral-400)]">
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
