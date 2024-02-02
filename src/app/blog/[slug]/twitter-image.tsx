import { getPost } from '@/actions/get-post';
import { DynamicImage } from '@/components/dynamic-image';
import { BASE_URL } from '@/lib/utils';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const geistBold = fetch(new URL('/fonts/Geist-Bold.otf', BASE_URL)).then(
  (res) => res.arrayBuffer(),
);
const geistSemibold = fetch(
  new URL('/fonts/Geist-SemiBold.otf', BASE_URL),
).then((res) => res.arrayBuffer());

export default async function Image({ params }: { params: { slug: string } }) {
  const geistBoldData = await geistBold;
  const geistSemiboldData = await geistSemibold;
  const { post } = await getPost(params.slug);

  return new ImageResponse(<DynamicImage {...post} />, {
    ...size,
    fonts: [
      {
        data: geistBoldData,
        name: 'Geist Bold',
      },
      {
        data: geistSemiboldData,
        name: 'Geist Semibold',
      },
    ],
  });
}
