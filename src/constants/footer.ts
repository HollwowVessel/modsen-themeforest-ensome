import social1 from './../assets/images/icons/social/social1.png';
import social2 from './../assets/images/icons/social/social2.png';
import social3 from './../assets/images/icons/social/social3.png';
import social4 from './../assets/images/icons/social/social4.png';
import social5 from './../assets/images/icons/social/social5.png';
import social6 from './../assets/images/icons/social/social6.png';

const links = {
  heading: 'Quick link',
  items: [
    'Home',
    'Solutions',
    'Blog',
    'Contacts',
    'Our team',
    'About Us',
    'Services',
    'FAQ',
  ],
};

const services = {
  heading: 'Service',
  items: ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map'],
};

const cantact = {
  heading: 'Cantact info',
  items: [
    'ensome@info.co.us',
    '+1 601-201-5580',
    '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
  ],
};

export const footerMenus = [links, services, cantact];

export const socialMap = new Map([
  ['social1', social1],
  ['social2', social2],
  ['social3', social3],
  ['social4', social4],
  ['social5', social5],
  ['social6', social6],
]);

export const social = [
  'social1',
  'social2',
  'social3',
  'social4',
  'social5',
  'social6',
];
