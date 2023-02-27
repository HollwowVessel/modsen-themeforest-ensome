import { langType } from 'interfaces/languageType';
import { useTranslation } from 'react-i18next';

import { localStorageHelperGet } from '@/utils/localStorageHelper';

export const useLanguage = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const lang = localStorageHelperGet();
  if (lang) {
    return lang;
  }

  return language as langType;
};
