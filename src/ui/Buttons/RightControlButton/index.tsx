import React from 'react';

import { LeftControl } from './styled';
import { RightControlButtonProps } from './types';

export const RightControlButton = ({
  disabled = false,
}: RightControlButtonProps) => (
  <LeftControl disabled={disabled} arrow={disabled} />
);
