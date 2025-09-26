interface Author {
  id: number;
  name: string;
  email: string;
  picture: string;
  isVerified: boolean;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isFeatured: boolean;
  views: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  authorId: number;
  author: Author;
}

export type RegisterFormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
