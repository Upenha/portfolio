import { Separator } from '@radix-ui/react-dropdown-menu';
import { block } from 'million/react';
import ReactMarkdown from 'react-markdown';

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
      }}
      className="sm:prose-base prose-sm prose prose-purple dark:prose-invert dark:prose-pre:bg-zinc-800 prose-pre:bg-zinc-200 dark:prose-pre:text-zinc-50 prose-pre:text-zinc-950"
    >
      {content}
    </ReactMarkdown>
  );
};

export const MarkdownViewerBlock = block(MarkdownViewer);
