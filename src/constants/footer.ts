import facebook from '@/assets/images/icons/social/social1.svg';
import twitter from '@/assets/images/icons/social/social2.svg';
import linkedin from '@/assets/images/icons/social/social3.svg';
import youtube from '@/assets/images/icons/social/social4.svg';
import dribble from '@/assets/images/icons/social/social5.svg';
import solutions from '@/assets/images/icons/social/social6.svg';

const linksEN = {
  heading: 'Quick link',
  items: [
    { name: 'Home', to: '/' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contacts', to: '/contacts' },
    { name: 'Our team', to: '/elements' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'FAQ', to: '/FAQ' },
  ],
};

const servicesEN = {
  heading: 'Service',
  items: [
    { name: 'Pages', to: '/pages' },
    { name: 'Elements', to: '/elements' },
    { name: 'FAQ', to: '/FAQ' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Site map', to: '/map' },
  ],
};

const cantactEN = {
  heading: 'Cantact info',
  items: [
    { name: 'ensome@info.co.us', to: undefined },
    { name: '+1 601-201-5580', to: undefined },
    {
      name: '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
      to: undefined,
    },
  ],
};

const linksRU = {
  heading: 'Быстрая ссылка',
  items: [
    { name: 'Дом', to: '/' },
    { name: 'Решения', to: '/solutions' },
    { name: 'Блог', to: '/blog' },
    { name: 'Контакты', to: '/contacts' },
    { name: 'Наша команда', to: '/elements' },
    { name: 'О нас', to: '/about' },
    { name: 'Сервисы', to: '/services' },
    { name: 'Чаво', to: '/FAQ' },
  ],
};

const servicesRU = {
  heading: 'Сервис',
  items: [
    { name: 'Страницы', to: '/pages' },
    { name: 'Элементы', to: '/elements' },
    { name: 'Чаво', to: '/FAQ' },
    { name: 'Цены', to: '/pricing' },
    { name: 'Карта сайта', to: '/map' },
  ],
};

const cantactRU = {
  heading: 'Контактная информация',
  items: [
    { name: 'ensome@info.co.us', to: undefined },
    { name: '+1 601-201-5580', to: undefined },
    {
      name: '1642 Вашингтон-авеню, Джексон, Массачусетс, Миссисипи, 39201',
      to: undefined,
    },
  ],
};

export const footerMenus = {
  en: [linksEN, servicesEN, cantactEN],
  ru: [linksRU, servicesRU, cantactRU],
};

export const social = [
  { el: facebook, to: 'http://www.facebook.com' },
  { el: twitter, to: 'http://www.twitter.com' },
  { el: linkedin, to: 'http://www.linkedin.com' },
  { el: youtube, to: 'http://www.youtube.com' },
  { el: dribble, to: 'http://www.dribble.com' },
  { el: solutions, to: 'http://www.solutions.com' },
];
