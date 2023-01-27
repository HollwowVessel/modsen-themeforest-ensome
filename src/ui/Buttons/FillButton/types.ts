import { MouseEvent } from 'react';

export interface FillButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void);
}
