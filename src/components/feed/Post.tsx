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

  const handleLike = async () => {
    try {
      const response = await api.likePost(post.id);
      setLikes(response.likes);
      setIsLiked(true);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  const handleComment = async () => {
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

  const handleShare = async () => {
    try {
      const response = await api.sharePost(post.id);
      setShares(response.shares);
    } catch (error) {
      console.error('Failed to share post:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <article className="card">
      {/* Author Info */}
      <div className="flex items-start gap-3 mb-4">
        <Avatar src={post.author.avatar} alt={post.author.name} size="md" />
        <div className="flex-1">
          <h3 className="font-semibold text-[var(--color-neutral-50)]">
            {post.author.name}
          </h3>
          <p className="text-caption text-[var(--color-neutral-400)]">
            {post.author.username} · {formatDate(post.createdAt)}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-body text-[var(--color-neutral-100)] mb-3">
          {post.content}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-[var(--radius-card)] object-cover max-h-[500px]"
          />
        )}
      </div>

      {/* Interaction Stats */}
      <div className="flex items-center gap-4 mb-3 text-body-sm text-[var(--color-neutral-400)]">
        <span>{likes.toLocaleString()} likes</span>
        <span>{comments.length} comments</span>
        <span>{shares} shares</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-neutral-600)]">
        <button
          onClick={handleLike}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] transition-colors',
            isLiked
              ? 'text-[var(--color-primary-pink)] bg-[var(--color-background-pink)]'
              : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)]'
          )}
        >
          <Heart className={cn('w-5 h-5', isLiked && 'fill-current')} />
          <span className="text-body-sm font-medium">Like</span>
        </button>
        
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-body-sm font-medium">Comment</span>
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-600)] transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span className="text-body-sm font-medium">Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 space-y-3">
          {/* Comment Input */}
          <div className="flex gap-2">
            <Input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleComment();
              }}
            />
            <Button onClick={handleComment} variant="primary-cyan">
              Post
            </Button>
          </div>

          {/* Comments List */}
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <Avatar src={comment.author.avatar} alt={comment.author.name} size="sm" />
              <div className="flex-1 bg-[var(--color-neutral-600)] rounded-[var(--radius-input)] p-3">
                <p className="font-semibold text-body-sm text-[var(--color-neutral-50)]">
                  {comment.author.name}
                </p>
                <p className="text-body-sm text-[var(--color-neutral-200)]">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
