'use client';
import { redirect } from 'next/navigation';
import moment from 'moment';
import { Post, usePost } from '@/hooks/usePost';
import { MarkdownViewerBlock } from '@/components/markdown-viewer';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { isLoading, data } = usePost(params.slug);
  if (!params.slug) redirect('/');
  if (isLoading) return <p>Loading...</p>;
  const post = data as Post;

  const wordsCount = post.content.match(/\w+/g)?.length!;
  const readTime =
    Math.ceil(wordsCount / 60) > 0 ? Math.ceil(wordsCount / 60) : 0;

  return (
    <div className="min-w-screen min-h-full pb-12">
      <div className="mt-2 max-w-2xl min-h-full">
        <div className="flex items-center justify-between w-full pb-2">
          <h2 className="sm:text-2xl text-sm font-bold h-full md:max-w-full max-w-64">
            {post.title}
          </h2>

          <div className="flex flex-col items-end">
            <span className="sm:text-sm text-xs text-muted-foreground font-medium text-right">
              {moment(post.createdAt).format('D/MM/YYYY')}
            </span>
            <span className="sm:text-sm text-xs text-muted-foreground">
              {readTime} minutes read
            </span>
          </div>
        </div>
        <div className="flex-1">
          <MarkdownViewerBlock content={post.content} />
        </div>
      </div>
    </div>
  );
}
