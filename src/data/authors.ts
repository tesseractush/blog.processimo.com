
import { Author } from "./blogTypes";

export const authors: Author[] = [
  {
    id: "1",
    name: "Mrityunjay Srivastava",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    
  },
  {
    id: "2",
    name: "Mrityunjay Srivastava",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Startup Founder and Tech Entrepreneur specializing in AI-driven solutions for emerging markets and business automation."
  },
  {
    id: "3",
    name: "Mrityunjay Srivastava",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Business Automation Strategist helping organizations implement AI-powered workflows and digital transformation initiatives."
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}
