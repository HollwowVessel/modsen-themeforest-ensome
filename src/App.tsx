import { HomeHero } from 'components/HomeHero';
import { Navigation } from 'components/Navigation';

import { GlobalStyles } from './GlobalStyles';

export const App = () => (
  <div>
    <GlobalStyles />
    <Navigation />
    <HomeHero />
  </div>
);
