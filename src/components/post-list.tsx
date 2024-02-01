import { TPost } from '@/services/notion';
import { For } from 'million/react';
import { PostItem } from './post-item';

type Data = {
  data: TPost[] | undefined;
  isLoading: boolean;
};
export const PostList = ({ data, isLoading }: Data) => {
  if (isLoading) return;
  if (!data) return <NotFound />;
  return (
    <div className="flex flex-col gap-4">
      <For ssr each={data}>
        {(post) => <PostItem {...post} />}
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
