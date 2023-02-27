import { blogArticles } from '@/constants/blogArticle';
import { tags as allTags } from '@/constants/blogSidebarTags';

import { langType } from '../interfaces/languageType';

export const filterCards = (
  search: string,
  id: number,
  activeTags: number[],
  lang: langType
) => {
  const activeT: string[] = [];

  const active = [...activeTags];

  if (id >= 0 && active.indexOf(id) === -1) {
    active.push(id);
  } else if (active.indexOf(id) !== -1) {
    active.splice(active.indexOf(id), 1);
  }

  for (const i of active) {
    activeT.push(allTags[i]);
  }

  if (activeT.indexOf('All topics') !== -1) {
    return blogArticles[lang];
  }

  return blogArticles[lang].filter(
    ({ heading, tags }) =>
      heading.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      activeT.indexOf(tags) !== -1
  );
};

export const filterOnClear = (activeTags: number[], lang: langType) => {
  const activeT: string[] = [];

  for (const i of activeTags) {
    activeT.push(allTags[i]);
  }

  return blogArticles[lang].filter(
    ({ tags }) =>
      activeT.indexOf(tags) !== -1 || activeT.indexOf('All topics') === -1
  );
};
