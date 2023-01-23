import { HomePage } from '@/pages/Home';

import { ServicesPage } from '@/pages/Services';
import { TeamPage } from '@/pages/Team/TeamPage';
import { ContactsPage } from '@/pages/Contacts';
import { BlogPage } from '@/pages/Blog';
import { SolutionsPage } from '@/pages/Solutions';

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/solutions', element: <SolutionsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/elements', element: <TeamPage /> },
];
