import { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/constants/routes';

import {
  langType,
  Language,
  languageContextType,
} from './utils/languageContext';

export const App = () => {
  const [language, setLanguage] = useState<langType>('en');

  const lang: languageContextType = useMemo(
    () => ({ lang: language, setLang: setLanguage }),
    [language]
  );

  return (
    <Language.Provider value={lang}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Language.Provider>
  );
};
