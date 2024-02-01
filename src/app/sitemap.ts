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

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const posts = await getPostsData().then((res) => res);
//   return posts.map((post: TPost) => ({
//     url: `${BASE_URL}/blog/${post.slug}`,
//     lastModified: new Date(),
//     changeFrequency: 'monthly',
//     priority: 0.5,
//   }));
//   //   return posts.map((product) => ({
//   //     url: `${BASE_URL}/product/${id}`,
//   //     lastModified: product.date,
//   //   }))
// }
