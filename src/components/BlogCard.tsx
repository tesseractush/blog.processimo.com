
import { BlogPost, getAuthorById } from "@/data/blogData";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
  className?: string;
}

export function BlogCard({ post, variant = "default", className }: BlogCardProps) {
  const author = getAuthorById(post.authorId);
  const publishedDate = new Date(post.publishedAt);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });
  
  if (variant === "featured") {
    return (
      <div className={cn("group relative overflow-hidden rounded-xl", className)}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10" />
        <img 
          src={post.cover} 
          alt={post.title}
          className="w-full h-[60vh] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
          <div className="flex items-center space-x-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-4xl font-serif font-medium leading-tight text-white mb-4 text-balance">
            {post.title}
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl">{post.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={author?.avatar} 
                alt={author?.name}
                className="w-9 h-9 rounded-full border-2 border-white/30"
              />
              <div>
                <p className="text-white font-medium">{author?.name}</p>
                <p className="text-white/70 text-sm">{timeAgo}</p>
              </div>
            </div>
            <Link 
              to={`/blog/${post.slug}`}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-md transition-colors hover:bg-white/20"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn("group h-full", className)}>
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="h-full flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card hover:shadow-md transition-all duration-300">
          <div className="relative overflow-hidden aspect-video">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 flex flex-col p-6">
            <div className="flex items-center space-x-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary/90 transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {post.description}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
              <div className="flex items-center space-x-2">
                <img
                  src={author?.avatar}
                  alt={author?.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">{author?.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
