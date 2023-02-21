import styled from 'styled-components';

import { InputProps } from './types';

export const Input = styled.input<InputProps>`
  width: ${({ theme }) => theme.sizes[5]}%;

  display: block;
  padding: ${({ theme }) => theme.paddings[2]}px 0
    ${({ theme }) => theme.paddings[2]}px ${({ theme }) => theme.paddings[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  border: 3px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.grey)};
  outline: none;
  background: ${({ theme }) => theme.colors.helperBlueThree};

  border-radius: 6px;
  &:hover,
  &:focus,
  &:active {
    border: 3px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.colors.grey};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
    margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  }
`;

export const Send = styled.button`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  position: absolute;
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.paddings[2] + 3}px
    ${({ theme }) => theme.paddings[3]}px;
  border-radius: 6px;
  width: ${({ theme }) => theme.sizes[6]}px;
  cursor: pointer;
  border: none;
  outline: none;
  right: 0;
  top: 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    position: initial;
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const Interaction = styled.div`
  min-width: ${({ theme }) => theme.sizes.at(-5)}px;
  position: relative;
  border-radius: 6px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    position: initial;
    min-width: auto;
    max-width: ${({ theme }) => theme.sizes[5]}%;
  }
`;
