import { TPost } from '@/services/notion';
import { PostItem } from './post-item';

type Data = {
  data: TPost[];
};
export const PostList = ({ data }: Data) => {
  if (!data) return <NotFound />;
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, i) => (
        <PostItem {...item} key={i} />
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
