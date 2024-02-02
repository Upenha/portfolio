import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import { ThemeButton } from './theme-button';

export const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex items-center justify-between py-4">
        <a href="/" className="flex items-center space-x-2">
          <div className="flex flex-col space-y-px leading-none group">
            <span className="group-hover:opacity-75 transition-all duration-250 text-lg font-bold">
              upenha
            </span>
            <span className="text-muted-foreground group-hover:opacity-75 transition-all duration-250 text-sm">
              software engineer
            </span>
          </div>
        </a>
        <div className="flex items-center space-x-2">
          <Link
            href="https://github.com/upenha"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            aria-label="Github"
          >
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
