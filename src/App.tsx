import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './theme/GlobalStyles';

import { routes } from '@/constants/routes';

export const App = () => (
  <>
    <GlobalStyles />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </>
);
