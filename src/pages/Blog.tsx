
import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogRegistry";

const TAGS = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const BlogPage = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredPosts = activeTag 
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;
  
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            The Processimo Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, analysis, and perspectives on technology, design, and business.
          </p>
        </div>
        
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeTag === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/70 text-foreground/70"
            }`}
          >
            All
          </button>
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/70 text-foreground/70"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try selecting a different tag or check back later for new content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
