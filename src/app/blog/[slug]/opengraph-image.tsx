import { getPost } from '@/actions/get-post';
import { Logo } from '@/components/icons';
import { BASE_URL } from '@/lib/utils';
import { ImageResponse } from 'next/og';

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

  return new ImageResponse(
    (
      <div
        style={{
          background: '#06040C',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Geist Bold',
            fontSize: 64,
            color: '#FAFAFA',
            width: 800,
          }}
        >
          {post.title}
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: 800,
            gap: 16,
          }}
        >
          {post.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                color: '#AEA7BE',
                background: '#18161D',
                padding: '4px 20px',
                borderRadius: 8,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <Logo
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            height: 64,
            width: 64,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
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
    },
  );
}
