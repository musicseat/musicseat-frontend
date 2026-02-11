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

    post.shares += 1;
    await writeDb(db);

    return NextResponse.json({ shares: post.shares });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to share post' }, { status: 500 });
  }
}
