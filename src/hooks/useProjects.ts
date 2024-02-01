'use client';

import { TProjectItem, getProjects } from '@/services/notion';
import { useQuery } from '@tanstack/react-query';

export const getProjectsData = async (): Promise<TProjectItem[]> => {
  const data = getProjects().then((res) => res);

  return data;
};

export function useProjects() {
  const { data, isLoading, error } = useQuery<TProjectItem[]>({
    queryKey: ['projects'],
    queryFn: getProjectsData,
    refetchInterval: 1000,
  });

  return { data, error, isLoading };
}
