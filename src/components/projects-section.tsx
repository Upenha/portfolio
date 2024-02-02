import { ProjectList } from './project-list';
import { getProjects } from '@/actions/get-projects';

export const ProjectsSection = async () => {
  const { projects } = await getProjects();
  return (
    <article className="pt-6">
      <div className="space-y-1">
        <h2 className="text-lg font-bold flex flex-row items-center leading-none relative">
          projects
        </h2>
      </div>
      <ul className="space-y-4 py-4">
        <ProjectList data={projects} />
      </ul>
    </article>
  );
};
