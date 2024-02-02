import { TProjectItem } from '@/services/notion';
import { ProjectItem } from './project-item';

type Data = {
  data: TProjectItem[];
};
export const ProjectList = ({ data }: Data) => {
  if (!data) return <NotFound />;
  return (
    <ul className="space-y-1.5 py-4">
      {data.map((item, i) => (
        <ProjectItem {...item} key={i} />
      ))}
    </ul>
  );
};

const NotFound = () => {
  return (
    <p className="text-muted-foreground">
      i don&apos;t have a published post yet :/
    </p>
  );
};
