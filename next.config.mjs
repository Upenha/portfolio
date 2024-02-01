import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
    ],
  },
};

export default million.next(nextConfig, { auto: { rsc: true } });
