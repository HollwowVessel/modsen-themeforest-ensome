import { HomePage } from '@/pages/Home';
import { FAQPage } from '@/pages/FAQ';
import { SolutionsPage } from '@/pages/Solutions';
import { AboutPage } from '@/pages/About';
import { ServicesPage } from '@/pages/Services';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/solutions', element: <SolutionsPage /> },
  { path: '/about', element: <AboutPage /> },
];
