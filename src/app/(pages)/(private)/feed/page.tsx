'use client';

import { Post } from '@/components/feed/Post';
import { PostCreator } from '@/components/feed/PostCreator';
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
    <>
      <PostCreator onPostCreated={handleNewPost} />
      
      {loading ? (
        <div className="glass rounded-card text-center py-24 border border-white/5">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary-cyan/20 border-t-primary-cyan rounded-full animate-spin" />
            <p className="text-body text-neutral-400 font-medium">Loading your rhythm...</p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Post key={post.id} post={post} onUpdate={handlePostUpdate} />
          ))}
        </div>
      )}
    </>
  );
}
