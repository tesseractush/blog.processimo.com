import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogRegistry";

const CATEGORIES = [
  { id: "all", name: "All Topics" },
  { id: "ai", name: "AI Advancements", tags: ["AI", "Machine Learning", "Neural Networks", "GPT", "Computer Vision"] },
  { id: "startups", name: "Startup Strategies", tags: ["Startups", "Funding", "Growth", "Innovation", "Venture Capital"] },
  { id: "automation", name: "Business Automation", tags: ["Automation", "Workflow", "Productivity", "Digital Transformation"] }
];

const ALL_TAGS = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredPosts = blogPosts.filter(post => {
    if (activeTag) {
      return post.tags.includes(activeTag);
    }
    
    if (activeCategory === "all") {
      return true;
    }
    
    const categoryTags = CATEGORIES.find(cat => cat.id === activeCategory)?.tags || [];
    return post.tags.some(tag => categoryTags.includes(tag));
  });
  
  const relevantTags = activeCategory === "all" 
    ? ALL_TAGS 
    : ALL_TAGS.filter(tag => {
        const categoryTags = CATEGORIES.find(cat => cat.id === activeCategory)?.tags || [];
        return categoryTags.includes(tag);
      });
  
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
            AI & Business Innovation Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert analysis on artificial intelligence advancements, startup strategies, and business automation.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveTag(null);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/70 text-foreground/70"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeTag === null
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted/50 hover:bg-muted/70 text-foreground/70"
            }`}
          >
            All Tags
          </button>
          {relevantTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeTag === tag
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted/50 hover:bg-muted/70 text-foreground/70"
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
              Try selecting a different category or tag, or check back later for new content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
