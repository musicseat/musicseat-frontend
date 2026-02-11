import { readDb, writeDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const db = await readDb();
    const post = db.posts.find(p => p.id === id);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    if (post.isLiked) {
      post.likes -= 1;
      post.isLiked = false;
    } else {
      post.likes += 1;
      post.isLiked = true;
    }

    await writeDb(db);
    return NextResponse.json({ likes: post.likes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to like post' }, { status: 500 });
  }
}
