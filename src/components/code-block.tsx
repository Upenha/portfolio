import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import powershell from 'highlight.js/lib/languages/powershell';
import '../../public/github.css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('powershell', powershell);

export const CodeBlock = ({ language, codestring }: any) => {
  const highlightedCode = hljs.highlight(codestring, { language }).value;
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlightedCode,
      }}
    />
  );
};
