import React, { memo } from 'react';

import { LeftControl } from './styled';
import { RightControlButtonProps } from './types';

export const RightControlButton = memo(
  ({ disabled = false, onClick }: RightControlButtonProps) => (
    <LeftControl disabled={disabled} arrow={disabled} onClick={onClick} />
  )
);
