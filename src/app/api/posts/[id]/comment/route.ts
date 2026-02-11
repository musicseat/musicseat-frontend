import { getFullPosts, readDb, writeDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const { content } = await request.json();
    const db = await readDb();
    const post = db.posts.find(p => p.id === id);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const newComment = {
      id: `c${Date.now()}`,
      authorId: "1", // Hardcoded current user
      content,
      createdAt: new Date().toISOString()
    };

    post.comments.push(newComment);
    await writeDb(db);

    // Return the full post object with populated authors
    const allFullPosts = await getFullPosts();
    const updatedPost = allFullPosts.find(p => p.id === id);

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to comment' }, { status: 500 });
  }
}
