import { LeftControl } from './styled';
import { LeftControlButtonProps } from './types';

export const LeftControlButton = ({
  disabled = false,
}: LeftControlButtonProps) => (
  <LeftControl disabled={disabled} arrow={disabled} />
);
