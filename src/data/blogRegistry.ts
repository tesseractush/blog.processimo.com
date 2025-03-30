
import { BlogPost } from "./blogTypes";
import { evolutionProductDesignPost } from "./blogs/evolutionProductDesign";
import { scalableSystemsPost } from "./blogs/scalableSystems";
import { contentStrategyPost } from "./blogs/contentStrategy";

// Add all blog posts to this array
export const blogPosts: BlogPost[] = [
  evolutionProductDesignPost,
  scalableSystemsPost,
  contentStrategyPost
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
