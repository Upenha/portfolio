import { TPost } from '@/services/notion';
import { Badge } from './ui/badge';
import Link from 'next/link';
// import Link from 'next/link';

export const PostItem = ({ createdAt, id, slug, tags, title }: TPost) => {
  return (
    <li>
      <Link
        className="flex flex-col !no-underline group gap-1"
        href={'/blog/' + slug}
        // target
      >
        <div>
          <span className="font-medium underline underline-offset-4 flex flex-row gap-2 items-center group-hover:opacity-75 transition-all duration-250">
            {title}
          </span>
        </div>
        <div className="group-hover:opacity-75 flex flex-row gap-2">
          {tags.map((tag, i) => {
            return (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            );
          })}
        </div>
      </Link>
    </li>
  );
};
