import { memo } from 'react';

import arrowEnabled from '@/assets/images/icons/buttons/leftArrow.svg';
import arrowDisabled from '@/assets/images/icons/buttons/leftArrowDisabled.svg';

import { Arrow, LeftControl } from './styled';
import { LeftControlButtonProps } from './types';

export const LeftControlButton = memo(
  ({ disabled = false, onClick }: LeftControlButtonProps) => (
    <LeftControl disabled={disabled} arrow={disabled} onClick={onClick}>
      <Arrow
        src={!disabled ? arrowEnabled : arrowDisabled}
        alt="arrow"
        title=""
      />
    </LeftControl>
  )
);
