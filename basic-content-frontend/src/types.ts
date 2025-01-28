// src/types.ts

export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string; // Assuming string for date-time representation like ISO format
    author?: string | null;
    category?: string | null;
    updatedAt?: string | null;
    likesCount: number;
    authorId?: number | null;
    isPublished: boolean;
    views: number;
  }
  
  // If you need to differentiate between a new post and an existing one:
  export interface NewPost {
    title: string;
    content: string;
    author?: string;
    category?: string;
    isPublished?: boolean;
  }
  
  // For updating, you might want a type that allows partial updates:
  export type UpdatePost = Partial<Post>;