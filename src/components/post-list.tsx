import { TPost } from '@/services/notion';
import { PostItem } from './post-item';

type Data = {
  data: TPost[];
};
export const PostList = ({ data }: Data) => {
  if (!data) return <NotFound />;
  return (
    <ul className="py-4">
      {data.map((item, i) => (
        <PostItem {...item} key={i} />
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
