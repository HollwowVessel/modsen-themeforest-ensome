import React from 'react';
import { Circle, InnerContainer, OuterContainer } from './styled';
import { CircleButtonProps } from './types';

export const CircleButton = ({ text, disabled = false }: CircleButtonProps) => (
  <OuterContainer>
    <InnerContainer background={disabled}>
      <Circle disabled={disabled}>{text}</Circle>
    </InnerContainer>
  </OuterContainer>
);
