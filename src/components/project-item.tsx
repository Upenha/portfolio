import { TProjectItem } from '@/services/notion';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const ProjectItem = ({
  description,
  name,
  githubLink,
  url,
}: TProjectItem) => {
  return (
    <li>
      <a
        className="flex flex-col !no-underline group gap-1"
        href={url}
        target={url === '/' ? '_self' : '_blank'}
      >
        <div>
          <span className="font-medium underline underline-offset-4 flex flex-row gap-2 items-center group-hover:opacity-75 transition-all duration-250">
            {name}

            {githubLink && (
              <Link href={githubLink} target="_blank">
                <GitHubLogoIcon className="group-hover:opacity-75" />
              </Link>
            )}
          </span>
        </div>
        <span className="text-muted-foreground group-hover:opacity-75">
          {description}
        </span>
      </a>
    </li>
  );
};
