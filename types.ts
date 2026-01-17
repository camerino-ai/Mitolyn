
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
}

export enum Page {
  BLOG = 'blog',
  POST = 'post',
  PRODUCT = 'product'
}
