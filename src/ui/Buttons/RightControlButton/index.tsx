import { memo } from 'react';

import { RightControl } from './styled';
import { RightControlButtonProps } from './types';

export const RightControlButton = memo(
  ({ disabled = false, onClick }: RightControlButtonProps) => (
    <RightControl disabled={disabled} arrow={disabled} onClick={onClick} />
  )
);
