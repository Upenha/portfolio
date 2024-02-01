import { TProjectItem } from '@/services/notion';
import { ProjectItem } from './project-item';
import { For } from 'million/react';

type Data = {
  data: TProjectItem[] | undefined;
  isLoading: boolean;
};
export const ProjectList = ({ data, isLoading }: Data) => {
  if (isLoading) return;
  if (!data) return <NotFound />;
  return (
    <div className="flex flex-col gap-4">
      <For ssr each={data}>
        {(item) => <ProjectItem {...item} />}
      </For>
    </div>
  );
};

const NotFound = () => {
  return (
    <p className="text-muted-foreground">
      i don't have a published post yet :/
    </p>
  );
};
