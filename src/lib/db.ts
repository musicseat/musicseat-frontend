import type { Comment, Post, User } from '@/types';
import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src/mocks/db.json');

interface DbSchema {
  users: User[];
  posts: Array<Omit<Post, 'author' | 'comments'> & {
    authorId: string;
    comments: Array<Omit<Comment, 'author'> & { authorId: string }>;
  }>;
}

export async function readDb(): Promise<DbSchema> {
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

export async function writeDb(data: DbSchema): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getFullPosts(): Promise<Post[]> {
  const db = await readDb();
  return db.posts.map(post => {
    const author = db.users.find(u => u.id === post.authorId)!;
    return {
      ...post,
      author,
      comments: post.comments.map(comment => ({
        ...comment,
        author: db.users.find(u => u.id === comment.authorId)!
      }))
    } as Post;
  });
}
