import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { localStorageHelperGet } from '@/utils/localStorageHelper';

import translationEN from '../locales/en/translation.json';
import translationRU from '../locales/ru/translation.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: localStorageHelperGet() as string,
  fallbackLng: 'en',
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
});
