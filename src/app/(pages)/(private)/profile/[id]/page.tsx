'use client';

import { Post } from '@/components/feed/Post';
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
    <div className="grid grid-cols-[280px_1fr_380px] gap-6 max-w-[1600px] mx-auto">
      {/* Left Sidebar - Navigation */}
      <LeftSidebar />

      {/* Main Profile Content */}
      <main className="py-6 min-h-screen">
        {/* Profile Header */}
        <div className="card mb-6">
          <div className="flex items-start gap-6 mb-6">
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
              <div className="flex gap-6">
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
          <div className="flex gap-4 border-t border-[var(--color-neutral-600)] pt-4">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-2 rounded-[var(--radius-button)] transition-colors ${
                activeTab === 'posts'
                  ? 'bg-[var(--color-primary-cyan)] text-[var(--color-neutral-800)] font-semibold'
                  : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)]'
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab('shared')}
              className={`px-4 py-2 rounded-[var(--radius-button)] transition-colors ${
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

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}
