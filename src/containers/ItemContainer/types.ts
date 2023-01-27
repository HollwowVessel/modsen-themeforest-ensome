import { servicesItems } from '@/constants/servicesCard';
import { solutionsItems } from '@/constants/solutions';
import { SpecialCard } from '@/ui/Cards/SpecialCard';

export interface ItemContainerProps {
  index: string;
  unfilteredItems: typeof servicesItems | typeof solutionsItems;
  RenderCard: typeof SpecialCard;
}
