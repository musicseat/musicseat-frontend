export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  postsCount: number;
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  shares: number;
  createdAt: string;
  isLiked?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  createdAt: string;
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface ChatMessage {
  id: string;
  user: User;
  message: string;
  timestamp: string;
  unread: boolean;
}
