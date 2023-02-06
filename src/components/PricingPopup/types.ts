import { MouseEvent } from 'react';

export interface PricingPopupProps {
  handlePopup: () => void;
  handleCardClick: (e: MouseEvent<HTMLDivElement>) => void;
  type: string;
  money: number;
  options: string[];
}
