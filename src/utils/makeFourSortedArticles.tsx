import { blogArticles } from '@/constants/blogArticle';

export const makeFourSortedArticles = (articles: typeof blogArticles.en) =>
  articles.sort((a, b) => b.views - a.views).slice(0, 4);
