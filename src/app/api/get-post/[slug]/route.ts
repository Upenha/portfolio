// /api/get-post/[id]/
import { getPost } from '@/services/notion';
import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 30 * 1000;

type GetPostParams = {
  params: {
    slug: string;
  };
};
export async function GET(
  req: NextRequest,
  { params: { slug } }: GetPostParams,
) {
  const request = await getPost(slug).then((res) => res);

  return NextResponse.json({ post: request });
}
