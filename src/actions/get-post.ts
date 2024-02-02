'use server';

import { BASE_URL } from '@/lib/utils';

type GetPostResponse = {
  post: {
    title: string;
    content: string;
    createdAt: any;
  };
};

export async function getPost(slug: string): Promise<GetPostResponse> {
  const response = await fetch(`${BASE_URL}/api/get-post/${slug}`, {
    cache: 'force-cache',
    next: {
      tags: ['post', slug],
    },
  });

  const data = await response.json();

  return data;
}
