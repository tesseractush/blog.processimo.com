
import { BlogPost, getAuthorById } from "@/data/blogData";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { formatDistanceToNow } from "date-fns";
import { ShareButtons } from "./ShareButtons";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const author = getAuthorById(post.authorId);
  
  if (!author) {
    return null;
  }
  
  const publishedDate = new Date(post.publishedAt);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });

  return (
    <article className="pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <header className="mb-10 animate-fade-in">
          <div className="flex items-center space-x-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-balance">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between border-t border-b border-border/40 py-4">
            <div className="flex items-center space-x-4">
              <img 
                src={author.avatar} 
                alt={author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{author.name}</p>
                <p className="text-sm text-muted-foreground">{timeAgo}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
            </div>
          </div>
        </header>
        
        <div className="mb-10 overflow-hidden rounded-xl">
          <img 
            src={post.cover} 
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="animate-slide-in">
          <MarkdownRenderer content={post.content} />
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40">
          <h3 className="text-xl font-serif font-medium mb-4">About the author</h3>
          <div className="flex items-start space-x-4">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-medium mb-2">{author.name}</p>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40">
          <h3 className="text-xl font-serif font-medium mb-6">Share this article</h3>
          <ShareButtons title={post.title} />
        </div>
      </div>
    </article>
  );
}
