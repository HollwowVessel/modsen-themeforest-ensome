import photo1 from 'assets/images/icons/persons/photo1.png';
import photo2 from 'assets/images/icons/persons/photo2.png';
import photo3 from 'assets/images/icons/persons/photo3.png';

export interface CardItem {
  icon: string;
  name: string;
  profession: string;
  description: string;
}

export const cardItems: CardItem[] = [
  {
    icon: 'photo1',
    name: 'Alex Bern',
    profession: 'CEO by PixelPerfect',
    description:
      '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
  },
  {
    icon: 'photo2',
    name: 'Ruben Chifundo',
    profession: 'CEO by NOX',
    description:
      '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
  },
  {
    icon: 'photo3',
    name: 'Tigran Nazaret',
    profession: 'Data analyst',
    description:
      '“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” ',
  },
];

export const photoMap = new Map([
  ['photo1', photo1],
  ['photo2', photo2],
  ['photo3', photo3],
]);
