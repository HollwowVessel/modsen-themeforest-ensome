export interface BlogArticleI {
  icon: string;
  info: string;
  text: string;
  heading: string;
  tags: string;
  views: number;

  [key: string]: unknown;
}
