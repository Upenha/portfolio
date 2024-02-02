import { TProjectItem } from '@/services/notion';
import { ProjectItem } from './project-item';

type Data = {
  data: TProjectItem[];
};
export const ProjectList = ({ data }: Data) => {
  if (!data) return <NotFound />;
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, i) => (
        <ProjectItem {...item} key={i} />
      ))}
    </div>
  );
};

const NotFound = () => {
  return (
    <p className="text-muted-foreground">
      i don&apos;t have a published post yet :/
    </p>
  );
};
