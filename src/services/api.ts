import axiosInstance from '@/lib/axios';
import type { Post, User } from '@/types';

export const api = {
  // Feed endpoints
  getFeed: async (): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>('/feed');
    return response.data;
  },

  // User endpoints
  getUserProfile: async (userId: string): Promise<User> => {
    const response = await axiosInstance.get<User>(`/users/${userId}`);
    return response.data;
  },

  getUserPosts: async (userId: string): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>(`/users/${userId}/posts`);
    return response.data;
  },

  createPost: async (content: string): Promise<Post> => {
    const response = await axiosInstance.post<Post>('/posts', { content });
    return response.data;
  },

  // Post interactions
  likePost: async (postId: string): Promise<{ likes: number }> => {
    const response = await axiosInstance.post<{ likes: number }>(`/posts/${postId}/like`);
    return response.data;
  },

  commentOnPost: async (postId: string, content: string): Promise<Post> => {
    const response = await axiosInstance.post<Post>(`/posts/${postId}/comment`, { content });
    return response.data;
  },

  sharePost: async (postId: string): Promise<{ shares: number }> => {
    const response = await axiosInstance.post<{ shares: number }>(`/posts/${postId}/share`);
    return response.data;
  },
};
