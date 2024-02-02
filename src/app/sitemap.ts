import { BASE_URL } from '@/lib/utils';
import { getPosts } from '@/actions/get-posts';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts: allPosts } = await getPosts();

  const posts = allPosts.map((post) => {
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...posts,
  ];
}
