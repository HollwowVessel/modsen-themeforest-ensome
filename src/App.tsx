import { ThemeProvider } from 'styled-components';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme/theme';

import { GlobalStyles } from './theme/GlobalStyles';
import { initialOptions } from './api/paypalApi';
import { routes } from '@/constants/routes';
import { ErrorBoundary } from './components/ErrorBoundary';
import { TeamPage } from './pages/Team/TeamPage';
import { FAQPage } from './pages/FAQ';

import { AboutPage } from './pages/About';
import { BlogPage } from './pages/Blog';

export const App = () => (
  <PayPalScriptProvider options={initialOptions}>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyles />

        <Routes>
          {routes.map(({ path, element }, id) => (
            <Route path={path} element={element} key={id} />
          ))}
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  </PayPalScriptProvider>
);
