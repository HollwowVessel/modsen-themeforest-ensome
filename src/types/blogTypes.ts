export interface BlogArticleI {
  icon: any;
  info: string;
  text: string;
  heading: string;
  tags: string[];
  views: number;

  [key: string]: unknown;
}
