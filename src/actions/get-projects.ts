'use server';

import { BASE_URL } from '@/lib/utils';
import { TProjectItem } from '@/services/notion';

type GetProjectsResponse = {
  projects: TProjectItem[];
};
export async function getProjects(): Promise<GetProjectsResponse> {
  const response = await fetch(`${BASE_URL}/api/get-projects`, {
    cache: 'force-cache',
    next: {
      tags: ['projects'],
    },
  });
  if (!response.ok) {
    return {
      projects: [],
    };
  }
  const data = await response.json();

  return data;
}
