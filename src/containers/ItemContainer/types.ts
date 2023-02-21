import { SpecialCard } from 'tired-hollow-lib-modsen';

import { servicesItems } from '@/constants/servicesCard';
import { solutionsItems } from '@/constants/solutions';

export interface ItemContainerProps {
  index: string;
  unfilteredItems: typeof servicesItems | typeof solutionsItems;
  RenderCard: typeof SpecialCard;
}
