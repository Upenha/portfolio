'use client';
import { Separator } from '@radix-ui/react-dropdown-menu';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './code-block';

type MarkdownViewerProps = {
  content: string;
};

export const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return (
    <ReactMarkdown
      components={{
        a({ node, ...rest }) {
          return <a target="_blank" rel="noreferrer" {...rest} />;
        },
        hr({ node, ...rest }) {
          return <Separator />;
        },
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <CodeBlock
              codestring={String(children).replace(/\n$/, '')}
              language={match[1]}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      className="sm:prose-base prose-sm prose prose-purple dark:prose-invert dark:prose-pre:bg-zinc-800 prose-pre:bg-zinc-200 dark:prose-pre:text-zinc-50 prose-pre:text-zinc-950"
    >
      {content}
    </ReactMarkdown>
  );
};
