import { BlogArticleI } from 'interfaces/blogTypes';

export interface SidebarProps {
  handleCards?: (items: BlogArticleI[]) => void;
}

export interface ActiveProps {
  active: boolean;
}
