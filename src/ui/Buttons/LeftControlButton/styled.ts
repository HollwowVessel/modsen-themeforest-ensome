import styled from 'styled-components';
// eslint-disable-next-line import/no-useless-path-segments
import arrowEnabled from '@/assets/images/icons/buttons/leftArrow.svg';
import arrowDisabled from '@/assets/images/icons/buttons/leftArrowDisabled.svg';
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
  &:after {
    content: '';
    background: url(${({ arrow }) =>
      !arrow ? `${arrowEnabled}` : `${arrowDisabled}`});
    width: ${({ theme }) => theme.sizes[1]}px;
    height: ${({ theme }) => theme.sizes[1]}px;
    position: absolute;
    top: ${({ theme }) => theme.spaces[0]}px;
    left: ${({ theme }) => theme.spaces[3]}px;
  }

  &:hover:enabled {
    background: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[2]}px;
    height: ${({ theme }) => theme.sizes[2]}px;
    &::after {
      left: ${({ theme }) => theme.rights[0]}px;
      top: ${({ theme }) => theme.tops[2]};
    }
  }
`;
