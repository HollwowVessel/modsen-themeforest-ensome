import { servicesItems } from '@/constants/servicesCard';
import { solutionsItems } from '@/constants/solutions';

export interface SpecialContainerProps {
  cards: typeof solutionsItems | typeof servicesItems;
  link: string;
}
