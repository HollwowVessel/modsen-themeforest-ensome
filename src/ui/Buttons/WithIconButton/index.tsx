import { memo } from 'react';
import { WithIcon } from './styled';
import { FillProps } from './types';

export const WithIconButton = memo(({ text, icon, handleClick }: FillProps) => (
  <WithIcon icon={icon} onClick={handleClick}>
    {text}
  </WithIcon>
));
