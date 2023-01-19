import { LeftControl } from './styled';
import { LeftControlButtonProps } from './types';

export const LeftControlButton = ({
  disabled = false,
  onClick,
}: LeftControlButtonProps) => (
  <LeftControl disabled={disabled} arrow={disabled} onClick={onClick} />
);
