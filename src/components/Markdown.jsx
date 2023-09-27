import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Markdown = ({ markdownText }) => {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || 'js');
          return !inline ? (
            <SyntaxHighlighter
              {...props}
              style={oneDark}
              language={match[1]}
              PreTag='div'>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}>
      {markdownText}
    </ReactMarkdown>
  );
};

export default Markdown;

Markdown.propTypes = {
  markdownText: PropTypes.string,
};
