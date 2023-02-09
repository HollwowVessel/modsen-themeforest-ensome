import { BlogArticleI } from 'types/blogTypes';

export interface SidebarProps {
  handleCards: (items: BlogArticleI[]) => void;
}

export interface ActiveProps {
  active: boolean;
}
