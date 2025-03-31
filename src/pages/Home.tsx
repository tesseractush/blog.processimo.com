
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogRegistry";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  const featuredPost = sortedPosts[0];
  const recentPosts = sortedPosts.slice(1, 4);

  return (
    <>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 text-balance">
              AI Insights for Tomorrow's Businesses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring artificial intelligence advancements, startup innovation, and business automation strategies.
            </p>
          </div>
          
          {featuredPost && (
            <div className="mb-24 animate-slide-in">
              <BlogCard post={featuredPost} variant="featured" />
            </div>
          )}
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-medium">Latest Insights</h2>
            <Link
              to="/blogs"
              className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View all articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium mb-4">Get AI Insights First</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Subscribe for the latest breakthroughs in AI, startup strategies, and business automation techniques.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-l-md px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-primary bg-background"
              />
              <button className="rounded-r-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
