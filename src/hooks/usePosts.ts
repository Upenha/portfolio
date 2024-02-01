'use client';

import { TPost, getPosts } from '@/services/notion';
import { useQuery } from '@tanstack/react-query';

export const getPostsData = async (): Promise<TPost[]> => {
  const data = getPosts().then((res) => res);

  return data;
};

export function usePosts() {
  const { data, isLoading, error } = useQuery<TPost[]>({
    queryKey: ['posts'],
    queryFn: getPostsData,
  });

  return { data, error, isLoading };
}
