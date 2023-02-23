import { Route, Routes } from 'react-router-dom';

import { routes } from '@/constants/routes';

export const App = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route path={path} element={element} key={path} />
    ))}
  </Routes>
);
