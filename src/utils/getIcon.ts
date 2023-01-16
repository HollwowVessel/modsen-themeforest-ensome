import { iconMap } from 'constants/benefitsCard';

export const getIcon = (icon: string): string => iconMap.get(icon);
