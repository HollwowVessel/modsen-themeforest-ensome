import { memo } from 'react';

import arrowEnabled from '@/assets/images/icons/buttons/rightArrow.svg';
import arrowDisabled from '@/assets/images/icons/buttons/rightArrowDisabled.svg';

import { Arrow, RightControl } from './styled';
import { RightControlButtonProps } from './types';

export const RightControlButton = memo(
  ({ disabled = false, onClick }: RightControlButtonProps) => (
    <RightControl disabled={disabled} arrow={disabled} onClick={onClick}>
      <Arrow
        src={!disabled ? arrowEnabled : arrowDisabled}
        alt="arrow"
        title=""
      />
    </RightControl>
  )
);
