import styled from 'styled-components';

import { LeftControlProps } from './types';

export const LeftControl = styled.button<LeftControlProps>`
  background: ${({ theme }) => theme.colors.tertiary};
  width: ${({ theme }) => theme.sizes[6]}px;
  cursor: pointer;
  height: ${({ theme }) => theme.sizes[2]}px;
  border-radius: 20px;
  border: none;
  margin: 0 0 0 ${({ theme }) => theme.spaces[1]}px;
  position: relative;
  transition: 0.8s;

  &:hover:enabled {
    background: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[2]}px;
    height: ${({ theme }) => theme.sizes[2]}px;
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
