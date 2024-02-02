import { PostList } from './post-list';
import { getPosts } from '@/actions/get-posts';

export const BlogSection = async () => {
  const { posts } = await getPosts();
  return (
    <article className="pt-6">
      <div className="space-y-1">
        <h2 className="text-lg font-bold flex flex-row items-center leading-none relative">
          posts
        </h2>
      </div>
      <ul className="space-y-1.5 py-4">
        <PostList data={posts} />
      </ul>
    </article>
  );
};
