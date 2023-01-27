import social1 from '@/assets/images/icons/social/social1.svg';
import social2 from '@/assets/images/icons/social/social2.svg';
import social3 from '@/assets/images/icons/social/social3.svg';
import social4 from '@/assets/images/icons/social/social4.svg';
import social5 from '@/assets/images/icons/social/social5.svg';
import social6 from '@/assets/images/icons/social/social6.svg';

const links = {
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

const services = {
  heading: 'Service',
  items: [
    { name: 'Pages', to: '/pages' },
    { name: 'Elements', to: '/elements' },
    { name: 'FAQ', to: '/FAQ' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Site map', to: '/map' },
  ],
};

const cantact = {
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

export const footerMenus = [links, services, cantact];

export const social = [
  { el: social1, to: 'http://www.facebook.com' },
  { el: social2, to: 'http://www.twitter.com' },
  { el: social3, to: 'http://www.youtube.com' },
  { el: social4, to: 'http://www.linkedin.com' },
  { el: social5, to: 'http://www.dribble.com' },
  { el: social6, to: 'http://www.solutions.com' },
];
