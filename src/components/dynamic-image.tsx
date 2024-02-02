import { Logo } from './icons';

type Post = {
  title: string;
  content: string;
  tags: string[];
  createdAt: any;
};

export const DynamicImage = (post: Post) => {
  return (
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
  );
};
