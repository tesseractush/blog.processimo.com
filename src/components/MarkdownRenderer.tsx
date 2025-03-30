
import { useEffect, useRef } from "react";
import { marked } from "marked";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const html = marked(content);
      contentRef.current.innerHTML = html;
      
      // Add any post-processing for syntax highlighting here if needed
      // For example, if using Prism.js
      // if (window.Prism) {
      //   window.Prism.highlightAllUnder(contentRef.current);
      // }
    }
  }, [content]);

  return (
    <div 
      ref={contentRef} 
      className={`blog-content ${className || ""}`} 
    />
  );
}
