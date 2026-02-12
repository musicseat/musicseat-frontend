'use client';

import { Post } from '@/components/feed/Post';
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
        <p className="text-body text-neutral-400">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-body text-neutral-400">User not found</p>
      </div>
    );
  }

  return (
    <>
      {/* Profile Header */}
      <div className="glass rounded-card p-10 mb-8 border border-white/5 shadow-strong relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-pink/10 rounded-full blur-3xl -mr-40 -mt-40 group-hover:bg-primary-pink/15 transition-all duration-700" />
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-8 text-center sm:text-left relative z-10">
                <div className="relative">
                  <Avatar src={user.avatar} alt={user.name} size="xl" className="ring-4 ring-primary-cyan/20 h-32 w-32 shadow-2xl" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center ring-4 ring-neutral-800 shadow-lg">
                    <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-display text-neutral-50 mb-1 font-bold tracking-tight">
                    {user.name}
                  </h1>
                  <p className="text-body-lg text-primary-cyan mb-6 font-semibold tracking-wide uppercase text-sm">
                    {user.username}
                  </p>
                  <p className="text-body text-neutral-300 mb-8 max-w-lg leading-relaxed">
                    {user.bio}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-center sm:justify-start gap-10">
                    <div className="group cursor-default">
                      <p className="text-h2 text-neutral-50 group-hover:text-primary-cyan transition-colors font-bold">
                        {user.postsCount}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Posts</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-h2 text-neutral-50 group-hover:text-primary-pink transition-colors font-bold">
                        {user.followers.toLocaleString()}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Followers</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-h2 text-neutral-50 group-hover:text-primary-orange transition-colors font-bold">
                        {user.following.toLocaleString()}
                      </p>
                      <p className="text-caption text-neutral-500 uppercase tracking-widest font-bold">Following</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-t border-white/5 pt-8 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveTab('posts')}
                  className={cn(
                    'px-8 py-3 rounded-button transition-all duration-300 font-bold whitespace-nowrap text-sm uppercase tracking-wider',
                    activeTab === 'posts'
                      ? 'bg-primary-cyan text-neutral-900 shadow-lg shadow-primary-cyan/20'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
                  )}
                >
                  My Tracks
                </button>
                <button
                  onClick={() => setActiveTab('shared')}
                  className={cn(
                    'px-8 py-3 rounded-button transition-all duration-300 font-bold whitespace-nowrap text-sm uppercase tracking-wider',
                    activeTab === 'shared'
                      ? 'bg-primary-cyan text-neutral-900 shadow-lg shadow-primary-cyan/20'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
                  )}
                >
                  Shared
                </button>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-10">
              {activeTab === 'posts' && posts.length > 0 ? (
                posts.map((post) => <Post key={post.id} post={post} />)
              ) : activeTab === 'shared' ? (
                <div className="glass rounded-card text-center py-24 border border-white/5">
                  <p className="text-body text-neutral-400 font-medium">
                    No shared tracks yet
                  </p>
                </div>
              ) : (
                <div className="glass rounded-card text-center py-24 border border-white/5">
                  <p className="text-body text-neutral-400 font-medium">
                    No tracks yet
                  </p>
                </div>
              )}
            </div>
    </>
  );
}
