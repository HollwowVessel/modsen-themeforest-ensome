import { memo } from 'react';
import { WithIcon } from './styled';
import { WithIconButtonProps } from './types';

export const WithIconButton = memo(
  ({ text, icon, handleClick, disabled = false }: WithIconButtonProps) => (
    <WithIcon icon={icon} onClick={handleClick} disabled={disabled}>
      {text}
    </WithIcon>
  )
);
