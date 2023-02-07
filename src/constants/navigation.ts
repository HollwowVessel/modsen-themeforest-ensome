export const menuItems = [
  { name: 'Home', path: '/', components: [] },
  { name: 'Solutions', path: '/solutions', components: [] },
  {
    name: 'Pages',
    components: [
      { name: 'FAQ', path: 'FAQ' },
      { name: 'Services', path: 'services' },
      { name: 'About', path: 'about' },
    ],
    path: undefined,
  },
  { name: 'Elements', path: '/elements', components: [] },
  { name: 'Blog', path: '/blog', components: [] },
  { name: 'Contacts', path: '/contacts', components: [] },
];
