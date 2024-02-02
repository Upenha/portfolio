import { getPost } from '@/actions/get-post';
import { DynamicImage } from '@/components/dynamic-image';
import { loadFonts } from '@/lib/fonts';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const { post } = await getPost(params.slug);
  const fonts = await loadFonts();

  const options = {
    fonts,
    ...size,
  };

  return new ImageResponse(<DynamicImage {...post} />, options);
}
