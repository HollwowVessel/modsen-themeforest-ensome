import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { initialOptions } from './api/paypalApi';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { theme } from './theme/theme';
import { GlobalStyles } from './theme/GlobalStyles';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <PayPalScriptProvider options={initialOptions}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary>
            <GlobalStyles />
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </StrictMode>
);
