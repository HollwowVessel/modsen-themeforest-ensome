import styled from 'styled-components';

import { RightControlProps } from './types';

export const RightControl = styled.button<RightControlProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  border: none;
  width: ${({ theme }) => theme.sizes[6]}px;
  height: ${({ theme }) => theme.sizes[2]}px;
  cursor: pointer;
  margin: 0 0 0 ${({ theme }) => theme.spaces[1]}px;
  transition: 0.5s;
  &:hover:enabled {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[2]}px;
    height: ${({ theme }) => theme.sizes[2]}px;
    &::after {
      right: ${({ theme }) => theme.rights[1]}px;
      top: ${({ theme }) => theme.tops[2]};
    }
  }
`;

export const Arrow = styled.img`
  width: ${({ theme }) => theme.sizes[1]}px;
  height: ${({ theme }) => theme.sizes[1]}px;
  content: '';
  position: absolute;
  top: ${({ theme }) => theme.spaces[0]}px;
  right: ${({ theme }) => theme.spaces[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    right: ${({ theme }) => theme.rights[1]}px;
    top: ${({ theme }) => theme.tops[2]};
  }
`;
