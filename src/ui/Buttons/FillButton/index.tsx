import { Fill } from './styled';
import { FillButtonProps } from './types';

export const FillButton = ({
  text,
  disabled = false,
  onClick,
}: FillButtonProps) => (
  <Fill disabled={disabled} onClick={onClick}>
    {text}
  </Fill>
);
