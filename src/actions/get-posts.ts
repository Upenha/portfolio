'use server';

import { BASE_URL } from '@/lib/utils';
import { TPost } from '@/services/notion';

type GetPostsResponse = {
  posts: TPost[];
};

export async function getPosts(): Promise<GetPostsResponse> {
  const response = await fetch(`${BASE_URL}/api/get-posts`, {
    cache: 'force-cache',
    next: {
      tags: ['posts'],
    },
  });
  if (!response.ok) {
    return {
      posts: [],
    };
  }
  const data = await response.json();

  return data;
}
