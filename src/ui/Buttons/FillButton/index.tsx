import { Fill } from './styled';
import { FillButtonProps } from './types';

export const FillButton = ({ text, disabled = false }: FillButtonProps) => (
  <Fill disabled={disabled}>{text}</Fill>
);
