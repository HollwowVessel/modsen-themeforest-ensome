import { TFunction } from 'i18next';

export const blogArticleHelper = (t: TFunction, text: string) => [
  { text, quote: false },
  { text: t('Ut sit'), quote: false },
  { text: t('Phasellus tristique'), quote: false },
  { text: t('Morbi urna'), quote: true },
  { text: t('Mauris purus'), quote: false },
  { text: t('Ut nec'), quote: false },
];
