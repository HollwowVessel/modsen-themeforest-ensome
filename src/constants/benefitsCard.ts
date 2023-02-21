import machineLearning from '@/assets/images/icons/cards/icon_1.svg';
import embedAnalytics from '@/assets/images/icons/cards/icon_2.svg';
import accessControl from '@/assets/images/icons/cards/icon_3.svg';
import dataAnalytics from '@/assets/images/icons/cards/icon_4.svg';

export interface CardItem {
  icon: string;
  description: string;
  heading: string;
}

const benefitsCardEN: CardItem[] = [
  {
    icon: machineLearning,
    heading: 'Machine learning',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: embedAnalytics,
    heading: 'Embed analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: accessControl,
    heading: 'Access control',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
  {
    icon: dataAnalytics,
    heading: 'Data analytics',
    description:
      'At vero eos et accusamus et iusto odio dignissimos duciu quili blandit praesentium voluptatum ipsa quae ab illo.',
  },
];

const benefitsCardRU: CardItem[] = [
  {
    icon: machineLearning,
    heading: 'Машинное обучение',
    description:
      'Но на самом деле мы и обвиняем их, и справедливо ненавидим вождя, который льстит себе нынешними удовольствиями, исходящими от него.',
  },
  {
    icon: embedAnalytics,
    heading: 'Встроенная аналитика',
    description:
      'Но на самом деле мы и обвиняем их, и справедливо ненавидим вождя, который льстит себе нынешними удовольствиями, исходящими от него.',
  },
  {
    icon: accessControl,
    heading: 'Контроль доступа',
    description:
      'Но на самом деле мы и обвиняем их, и справедливо ненавидим вождя, который льстит себе нынешними удовольствиями, исходящими от него.',
  },
  {
    icon: dataAnalytics,
    heading: 'Анализ данных',
    description:
      'Но на самом деле мы и обвиняем их, и справедливо ненавидим вождя, который льстит себе нынешними удовольствиями, исходящими от него.',
  },
];

export const benefitsCard = {
  en: [...benefitsCardEN],
  ru: [...benefitsCardRU],
};
