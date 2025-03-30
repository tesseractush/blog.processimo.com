
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPostBySlug } from "@/data/blogRegistry";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { BlogPostContent } from "@/components/BlogPostContent";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!post && slug) {
      navigate("/blog", { replace: true });
      return;
    }
    
    setIsMounted(true);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, slug, navigate]);
  
  if (!post || !isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-muted rounded mx-auto mb-4"></div>
          <div className="h-4 w-32 bg-muted rounded mx-auto"></div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <ReadingProgressBar />
      <BlogPostContent post={post} />
    </>
  );
};

export default BlogPostPage;
