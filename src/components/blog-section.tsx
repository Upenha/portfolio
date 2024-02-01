// million-ignore
'use client';
import { Loader2 } from 'lucide-react';
import { PostList } from './post-list';
import { usePosts } from '@/hooks/usePosts';

export const BlogSection = () => {
  const { isLoading, data } = usePosts();
  return (
    <article className="pt-6">
      <div className="space-y-1">
        <h2 className="text-lg font-bold flex flex-row items-center leading-none relative">
          {isLoading && (
            <Loader2 className="h-4 w-4 absolute animate-spin -left-6" />
          )}
          posts
        </h2>
      </div>
      <ul className="space-y-1.5 py-4">
        <PostList isLoading={isLoading} data={data} />
      </ul>
    </article>
  );
};
