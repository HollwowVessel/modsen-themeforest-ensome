import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const basicOptions = {
  resources: {
    en: {
      translation: {
        key: 'value',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
};

export const initializeI18n = () => {
  i18next.use(initReactI18next).init(basicOptions);
};
