import { BlogArticleI } from 'types/blogTypes';
import { blogArticles } from '@/constants/blogArticle';
import { tags as allTags } from '@/constants/blogSidebar';

export const searchHelper = (
  activeTag: number,
  search: string,
  handleCards?: (items: BlogArticleI[]) => void,
  id?: number
) => {
  const items = [];
  if (typeof id === 'number') {
    activeTag = id;
  }
  for (const item of blogArticles) {
    const { tags } = item;
    for (let i = 0; i < tags.length; i++) {
      if (
        allTags[activeTag] === 'All topics' ||
        allTags[activeTag] === tags[i]
      ) {
        items.push(item);
        break;
      }
    }
  }

  if (handleCards) {
    handleCards(
      items.filter(({ heading }) =>
        heading.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
};
