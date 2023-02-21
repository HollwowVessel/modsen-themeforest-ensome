const navigationItemsEN = [
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

const navigationItemsRu = [
  { name: 'Дом', path: '/', components: [] },
  { name: 'Решения', path: '/solutions', components: [] },
  {
    name: 'Страницы',
    components: [
      { name: 'Чаво', path: 'FAQ' },
      { name: 'Сервисы', path: 'services' },
      { name: 'Относительно', path: 'about' },
    ],
    path: undefined,
  },
  { name: 'Элементы', path: '/elements', components: [] },
  { name: 'Блог', path: '/blog', components: [] },
  { name: 'Контакты', path: '/contacts', components: [] },
];

export const navigationItems = {
  en: [...navigationItemsEN],
  ru: [...navigationItemsRu],
};
