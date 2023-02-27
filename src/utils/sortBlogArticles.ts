import { blogArticles } from '@/constants/blogArticle';

export const sortBlogArticles = (cards: (typeof blogArticles)['en']) =>
  cards?.sort((a, b) => b.views - a.views)?.slice(0, 4);
