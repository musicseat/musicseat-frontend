'use client';

import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';
import { Image, Smile } from 'lucide-react';
import { useState } from 'react';

export function PostCreator() {
  const [content, setContent] = useState('');

  function handlePost() {
    if (!content.trim()) return;
    // In a real app, this would call the API
    console.log('Creating post:', content);
    setContent('');
  }

  return (
    <div className="card mb-6">
      <div className="flex gap-3">
        <Avatar
          src="https://i.pravatar.cc/150?img=1"
          alt="Current user"
          size="md"
        />
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="mb-3 resize-none"
            rows={3}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-neutral-600 text-neutral-300 transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-neutral-600 text-neutral-300 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            
            <Button onClick={handlePost} variant="primary-cyan">
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
