import { HomePage } from '@/pages/Home';

import { TeamPage } from '@/pages/Team/TeamPage';
import { ContactsPage } from '@/pages/Contacts';
import { BlogPage } from '@/pages/Blog';
import { SolutionsPage } from '@/pages/Solutions';
import { FAQPage } from '@/pages/FAQ';
import { ServicesPage } from '@/pages/Services';
import { AboutPage } from '@/pages/About';
import { SolutionsItemPage } from '@/pages/SolutionsItem';
import { BlogArticle } from '@/components/BlogArticle';
import { ServicesItemPage } from '@/pages/ServicesItem';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/solutions', element: <SolutionsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/elements', element: <TeamPage /> },
  { path: '/FAQ', element: <FAQPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/solutions/:index', element: <SolutionsItemPage /> },
  { path: '/blog/:index', element: <BlogPage /> },
  { path: '/services/:index', element: <ServicesItemPage /> },
];
