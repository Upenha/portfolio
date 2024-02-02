import { redirect } from 'next/navigation';
import moment from 'moment';
import { MarkdownViewer } from '@/components/markdown-viewer';
import { getPost } from '@/actions/get-post';
import { Metadata } from 'next';
import { BASE_URL } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { post } = await getPost(params.slug);
  const content = post.content.split('\n').filter(Boolean);
  content.shift();
  console.log(`${BASE_URL}/blog/${params.slug}`);
  return {
    // metadataBase: new URL(`${BASE_URL}/blog/${post.slug}`),
    title: `${post.title} | Upenha's blog`,
    description: content.at(0)?.split(' ').slice(0, 50).join(' ') + '...',
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `${BASE_URL}/blog/${params.slug}`,
      title: `${post.title} | Upenha's blog`,
      description: content.at(0)?.split(' ').slice(0, 50).join(' ') + '...',
      siteName: `@upenha on github`,
    },
    twitter: {
      title: `${post.title} | Upenha's blog`,
      description: content.at(0)?.split(' ').slice(0, 50).join(' ') + '...',
      card: 'summary_large_image',
      creator: '@upewantstokys',
    },
    authors: [
      {
        name: 'upenha',
        url: BASE_URL,
      },
    ],
    keywords: post.tags,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { post } = await getPost(params.slug);
  if (!params.slug) redirect('/');

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
          <MarkdownViewer content={post.content} />
        </div>
      </div>
    </div>
  );
}
