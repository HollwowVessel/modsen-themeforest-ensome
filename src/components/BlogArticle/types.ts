import { blogArticles } from '@/constants/blogArticle';

export interface BlogArticleProps {
  text: string;
  date: string;
  heading: string;
  image: string;
  views?: number;
  tags?: string[];
  cards?: typeof blogArticles;
}

export interface TagProps {
  active: boolean;
}
