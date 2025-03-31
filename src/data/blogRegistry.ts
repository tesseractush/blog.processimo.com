
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
import { explainableAIPost } from "./blogs/explainableAI";
import { quantumMachineLearningPost } from "./blogs/quantumMachineLearning";
import { aiHealthcarePost } from "./blogs/aiHealthcare";
import { naturalLanguageProcessingPost } from "./blogs/naturalLanguageProcessing";
import { computerVisionPost } from "./blogs/computerVision";

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
  startupAIToolsPost,
  explainableAIPost,
  quantumMachineLearningPost,
  aiHealthcarePost,
  naturalLanguageProcessingPost,
  computerVisionPost
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
