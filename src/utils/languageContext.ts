import { createContext, Dispatch, SetStateAction } from 'react';

export type langType = 'ru' | 'en';

export type languageContextType = {
  lang: langType;
  setLang?: Dispatch<SetStateAction<langType>>;
};

export const Language = createContext<languageContextType>({ lang: 'en' });
