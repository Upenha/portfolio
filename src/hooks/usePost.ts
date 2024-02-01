'use client';

import { getPost } from '@/services/notion';
import { useQuery } from '@tanstack/react-query';

export type Post = {
  title: string;
  content: string;
  createdAt: any;
};

export const getPostData = async (slug: string): Promise<Post> => {
  const data = getPost(slug).then((res) => res);

  return data;
};

export function usePost(slug: string) {
  const { data, isLoading, error } = useQuery<Post>({
    queryKey: ['post', slug],
    queryFn: () => getPostData(slug),
  });

  return { data, error, isLoading };
}
