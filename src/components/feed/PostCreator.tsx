'use client';

import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';
import { api } from '@/services/api';
import type { Post } from '@/types';
import { Image, Smile } from 'lucide-react';
import { useState } from 'react';
import db from '@/mocks/db.json';

interface PostCreatorProps {
  onPostCreated?: (post: Post) => void;
}

export function PostCreator({ onPostCreated }: PostCreatorProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const image1 = db.users[0].avatar;

  async function handlePost() {
    if (!content.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const newPost = await api.createPost(content);
      setContent('');
      if (onPostCreated) {
        onPostCreated(newPost);
      }
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="glass rounded-card p-6 mb-8 border border-white/10 shadow-strong relative overflow-hidden group">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary-cyan/10 transition-colors duration-500" />
      
      <div className="flex gap-4 relative z-10">
        <Avatar
          src={image1}
          alt="Current user"
          size="md"
          className="ring-2 ring-primary-cyan/30 h-12 w-12"
        />
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's your rhythm today?"
            className="mb-4 bg-transparent border-none p-0 focus:ring-0 text-lg placeholder:text-neutral-500 min-h-[80px]"
            rows={2}
          />
          
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex gap-1">
              <button className="p-2.5 rounded-full hover:bg-white/5 text-neutral-400 hover:text-primary-cyan transition-all duration-200">
                <Image className="w-5 h-5" />
              </button>
              <button className="p-2.5 rounded-full hover:bg-white/5 text-neutral-400 hover:text-primary-lime transition-all duration-200">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            
            <Button 
              onClick={handlePost} 
              variant="primary-cyan"
              disabled={!content.trim() || isSubmitting}
              className="px-8 shadow-lg shadow-primary-cyan/20"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-neutral-800 rounded-full animate-bounce" />
                </div>
              ) : 'Publish'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
