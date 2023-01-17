import icon1 from 'assets/images/icons/cards/icon_1.jpg';
import icon2 from 'assets/images/icons/cards/icon_2.jpg';
import icon3 from 'assets/images/icons/cards/icon_3.jpg';
import icon4 from 'assets/images/icons/cards/icon_4.jpg';

export const iconMap = new Map([
  ['icon1', icon1],
  ['icon2', icon2],
  ['icon3', icon3],
  ['icon4', icon4],
]);

export interface CardItem {
  icon: string;
  description: string;
  heading: string;
}

export const cardItems: CardItem[] = [
  {
    icon: 'icon1',
    heading: 'Machine learning',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: 'icon2',
    heading: 'Embed analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: 'icon3',
    heading: 'Access control',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: 'icon4',
    heading: 'Data analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
];
