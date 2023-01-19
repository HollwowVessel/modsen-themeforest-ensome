import icon1 from '@/assets/images/icons/cards/icon_1.svg';
import icon2 from '@/assets/images/icons/cards/icon_2.svg';
import icon3 from '@/assets/images/icons/cards/icon_3.svg';
import icon4 from '@/assets/images/icons/cards/icon_4.svg';

export interface CardItem {
  icon: string;
  description: string;
  heading: string;
}

export const cardItems: CardItem[] = [
  {
    icon: icon1,
    heading: 'Machine learning',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: icon2,
    heading: 'Embed analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: icon3,
    heading: 'Access control',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: icon4,
    heading: 'Data analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
];
