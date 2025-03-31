
import { Author } from "./blogTypes";

export const authors: Author[] = [
  {
    id: "1",
    name: "Mrityunjay Srivastava",
    avatar: "https://github.com/tesseractush/portfolio/blob/main/tushar.jpeg",
    bio: "Startup Founder and Tech Entrepreneur specializing in AI-driven solutions for emerging markets and business automation."
    
  }
  
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}
