import { readDb, writeDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    const db = await readDb();

    const newPostBase = {
      id: `p${Date.now()}`,
      authorId: "1", // Hardcoded current user
      content,
      likes: 0,
      shares: 0,
      createdAt: new Date().toISOString(),
      isLiked: false,
      comments: []
    };

    db.posts.unshift(newPostBase);
    await writeDb(db);

    // Return the full post object for immediate UI update
    const author = db.users.find(u => u.id === newPostBase.authorId)!;
    const fullPost = { ...newPostBase, author };

    return NextResponse.json(fullPost);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
