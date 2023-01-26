export interface BlogArticleProps {
  text: string;
  date: string;
  heading: string;
  image: string;
  views?: number;
  tags?: string[];
}

export interface TagProps {
  active: boolean;
}
