import { theme } from 'constants/theme';
import { HomePage } from 'pages/Home';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <HomePage />
  </ThemeProvider>
);
