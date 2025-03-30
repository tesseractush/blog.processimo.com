
import { Author } from "./blogTypes";

export const authors: Author[] = [
  {
    id: "1",
    name: "Elena Castellano",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Product designer and design system specialist with over 8 years of experience building user-centered interfaces."
  },
  {
    id: "2",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Software engineer and open source contributor focusing on performance optimization and developer experience."
  },
  {
    id: "3",
    name: "Sophia Williams",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Product marketing expert and content strategist helping brands tell meaningful stories through digital media."
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}
