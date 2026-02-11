import { getFullPosts } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const allPosts = await getFullPosts();
    const userPosts = allPosts.filter(p => p.author.id === id);

    return NextResponse.json(userPosts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user posts' }, { status: 500 });
  }
}
