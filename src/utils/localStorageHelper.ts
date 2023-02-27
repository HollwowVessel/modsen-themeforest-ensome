import { langType } from 'interfaces/languageType';

export const localStorageHelperGet = () =>
  (localStorage.getItem('lang') as langType) || 'en';

export const localStorageHelperSet = (lang: langType) =>
  localStorage.setItem('lang', lang);
