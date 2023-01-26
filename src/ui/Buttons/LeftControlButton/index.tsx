import { memo } from 'react';
import { LeftControl } from './styled';
import { LeftControlButtonProps } from './types';

export const LeftControlButton = memo(
  ({ disabled = false, onClick }: LeftControlButtonProps) => (
    <LeftControl disabled={disabled} arrow={disabled} onClick={onClick} />
  )
);
