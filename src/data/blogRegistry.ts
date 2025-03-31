
import { BlogPost } from "./blogTypes";
import { evolutionProductDesignPost } from "./blogs/evolutionProductDesign";
import { scalableSystemsPost } from "./blogs/scalableSystems";
import { contentStrategyPost } from "./blogs/contentStrategy";
import { aiEthicsPost } from "./blogs/aiEthics";
import { chatbotStrategyPost } from "./blogs/chatbotStrategy";
import { dataStrategyPost } from "./blogs/dataStrategy";
import { startupMLOpsPost } from "./blogs/startupMLOps";
import { agileAIPost } from "./blogs/agileAI";
import { automationWorkflowPost } from "./blogs/automationWorkflow";
import { startupAIToolsPost } from "./blogs/startupAITools";

// Add all blog posts to this array
export const blogPosts: BlogPost[] = [
  evolutionProductDesignPost,
  scalableSystemsPost,
  contentStrategyPost,
  aiEthicsPost,
  chatbotStrategyPost,
  dataStrategyPost,
  startupMLOpsPost,
  agileAIPost,
  automationWorkflowPost,
  startupAIToolsPost
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
