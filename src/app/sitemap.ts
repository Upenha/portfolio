import { BASE_URL } from '@/lib/utils';
import { getPosts } from '@/services/notion';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getPosts().then((res) => res);

  const posts = allPosts.map((post) => {
    return {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...posts,
  ];
}
