// million-ignore
'use client';
import { Loader2 } from 'lucide-react';
import { ProjectList } from './project-list';
import { useProjects } from '@/hooks/useProjects';

export const ProjectsSection = () => {
  const { isLoading, data } = useProjects();
  return (
    <article className="pt-6">
      <div className="space-y-1">
        <h2 className="text-lg font-bold flex flex-row items-center leading-none relative">
          {isLoading && (
            <Loader2 className="h-4 w-4 absolute animate-spin -left-6" />
          )}
          projects
        </h2>
      </div>
      <ul className="space-y-4 py-4">
        <ProjectList isLoading={isLoading} data={data} />
      </ul>
    </article>
  );
};
