import { langType } from 'interfaces/languageType';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return language as langType;
};
