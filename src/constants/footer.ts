import Facebook from '@/assets/images/icons/social/social1.svg';
import Twitter from '@/assets/images/icons/social/social2.svg';
import Linkedin from '@/assets/images/icons/social/social3.svg';
import Youtube from '@/assets/images/icons/social/social4.svg';
import Dribble from '@/assets/images/icons/social/social5.svg';
import Solutions from '@/assets/images/icons/social/social6.svg';

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
  { el: Facebook, to: 'http://www.facebook.com' },
  { el: Twitter, to: 'http://www.twitter.com' },
  { el: Linkedin, to: 'http://www.linkedin.com' },
  { el: Youtube, to: 'http://www.youtube.com' },
  { el: Dribble, to: 'http://www.dribble.com' },
  { el: Solutions, to: 'http://www.solutions.com' },
];
