import { memo } from 'react';
import { Fill } from './styled';
import { FillButtonProps } from './types';

export const FillButton = memo(
  ({ text, disabled = false, onClick }: FillButtonProps) => (
    <Fill disabled={disabled} onClick={onClick}>
      {text}
    </Fill>
  )
);
