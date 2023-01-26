import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Circle,
  InnerContainer,
  LinkContainer,
  OuterContainer,
} from './styled';
import { CircleButtonProps } from './types';

export const CircleButton = memo(
  ({ text, disabled = false, to = '' }: CircleButtonProps) => (
    <LinkContainer to={to}>
      <OuterContainer>
        <InnerContainer background={disabled}>
          <Circle disabled={disabled}>{text}</Circle>
        </InnerContainer>
      </OuterContainer>
    </LinkContainer>
  )
);
