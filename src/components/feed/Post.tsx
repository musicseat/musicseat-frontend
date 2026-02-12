'use client';

import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { api } from '@/services/api';
import type { Post as PostType } from '@/types';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

interface PostProps {
  post: PostType;
  onUpdate?: (post: PostType) => void;
}

export function Post({ post, onUpdate }: PostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likes, setLikes] = useState(post.likes);
  const [shares, setShares] = useState(post.shares);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  async function handleLike() {
    const previousIsLiked = isLiked;
    const previousLikes = likes;

    // Optimistic UI update
    setIsLiked(!previousIsLiked);
    setLikes(prev => previousIsLiked ? prev - 1 : prev + 1);

    try {
      const response = await api.likePost(post.id);
      setLikes(response.likes);
    } catch (error) {
      // Revert if API fails
      setIsLiked(previousIsLiked);
      setLikes(previousLikes);
      console.error('Failed to toggle like:', error);
    }
  };

  async function handleComment() {
    if (!commentText.trim()) return;
    
    try {
      const updatedPost = await api.commentOnPost(post.id, commentText);
      setComments(updatedPost.comments);
      setCommentText('');
      if (onUpdate) onUpdate(updatedPost);
    } catch (error) {
      console.error('Failed to comment:', error);
    }
  };

  async function handleShare() {
    try {
      const response = await api.sharePost(post.id);
      setShares(response.shares);
    } catch (error) {
      console.error('Failed to share post:', error);
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  }

  return (
    <article className="glass rounded-card p-6 hover-lift border border-white/5 transition-all duration-300">
      {/* Author Info */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar src={post.author.avatar} alt={post.author.name} size="md" className="ring-2 ring-primary-cyan/20" />
        <div className="flex-1">
          <h3 className="font-semibold text-neutral-50 flex items-center gap-2">
            {post.author.name}
            {post.author.id === '1' && <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan animate-pulse" />}
          </h3>
          <p className="text-caption text-neutral-400 font-medium tracking-wide uppercase">
            {post.author.username} · {formatDate(post.createdAt)}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-5">
        <p className="text-body text-neutral-100 leading-relaxed mb-4">
          {post.content}
        </p>
        {post.image && (
          <div className="relative group overflow-hidden rounded-card">
            <img
              src={post.image}
              alt="Post content"
              className="w-full object-cover max-h-[500px] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}
      </div>

      {/* Interaction Stats */}
      <div className="flex items-center gap-6 mb-4 text-body-sm text-neutral-400 font-medium">
        <span className="hover:text-primary-pink transition-colors cursor-pointer">{likes.toLocaleString()} likes</span>
        <span className="hover:text-primary-cyan transition-colors cursor-pointer">{comments.length} comments</span>
        <span className="hover:text-primary-orange transition-colors cursor-pointer">{shares} shares</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 py-3 border-t border-white/5">
        <button
          onClick={handleLike}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-button transition-all duration-300',
            isLiked
              ? 'text-primary-pink bg-primary-pink/10 shadow-[0_0_20px_rgba(250,62,255,0.1)]'
              : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
          )}
        >
          <Heart className={cn('w-5 h-5 transition-all duration-500', isLiked ? 'fill-current scale-110 animate-heart-pop' : 'scale-100')} />
          <span className="text-body-sm font-semibold">
            {isLiked ? 'Liked' : 'Like'}
          </span>
        </button>
        
        <button
          onClick={() => setShowComments(!showComments)}
          className={cn(
            'flex items-center gap-2 px-4 py-2.5 rounded-button transition-all duration-300',
            showComments 
              ? 'text-primary-cyan bg-primary-cyan/10'
              : 'text-neutral-400 hover:bg-white/5 hover:text-neutral-100'
          )}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-body-sm font-semibold">Comment</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2.5 rounded-button text-neutral-400 hover:bg-white/5 hover:text-neutral-100 transition-all duration-300"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-body-sm font-semibold">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-white/5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Comment Input */}
          <div className="flex gap-3 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="Current user" size="sm" />
            <div className="flex-1 flex gap-2">
              <Input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your thoughts..."
                className="bg-white/5 border-white/10 focus:border-primary-cyan/50 h-10"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleComment();
                }}
              />
              <Button onClick={handleComment} variant="primary-cyan" className="h-10 px-4">
                Reply
              </Button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 group">
                <Avatar src={comment.author.avatar} alt={comment.author.name} size="sm" />
                <div className="flex-1 bg-white/5 rounded-2xl rounded-tl-none p-3 border border-white/5 group-hover:bg-white/8 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-bold text-body-sm text-neutral-100">
                      {comment.author.name}
                    </p>
                    <span className="text-[10px] text-neutral-500 font-mono tracking-tighter">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-body-sm text-neutral-300 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
