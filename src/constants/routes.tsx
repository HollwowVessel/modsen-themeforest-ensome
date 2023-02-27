import { AboutPage } from '@/pages/About';
import { BlogPage } from '@/pages/Blog';
import { BlogItemPage } from '@/pages/BlogItem';
import { ContactsPage } from '@/pages/Contacts';
import { FAQPage } from '@/pages/FAQ';
import { HomePage } from '@/pages/Home';
import { NotFoundPage } from '@/pages/NotFound';
import { ServicesPage } from '@/pages/Services';
import { ServicesItemPage } from '@/pages/ServicesItem';
import { SolutionsPage } from '@/pages/Solutions';
import { SolutionsItemPage } from '@/pages/SolutionsItem';
import { TeamPage } from '@/pages/Team/TeamPage';
import { TeamItemPage } from '@/pages/TeamItemPage';
import { TestimonialsItemPage } from '@/pages/TestimonialsItem';

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
  { path: '/blog/:index', element: <BlogItemPage /> },
  { path: '/services/:index', element: <ServicesItemPage /> },
  { path: '/testimonials/:index', element: <TestimonialsItemPage /> },
  { path: '/elements/:index', element: <TeamItemPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export const pathNames = {
  home: '/',
  solutions: '/solutions',
  blog: '/blog',
  contacts: '/contacts',
  elements: '/elements',
  FAQ: '/FAQ',
  services: '/services',
  about: '/about',
};
