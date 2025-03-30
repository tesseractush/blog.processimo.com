
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  cover: string;
  publishedAt: string;
  readingTime: number;
  authorId: string;
  tags: string[];
  slug: string;
}
