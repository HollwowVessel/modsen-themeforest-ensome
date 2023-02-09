import styled from 'styled-components';
import minus from '@/assets/images/icons/dropdownMenu/minus.svg';
import plus from '@/assets/images/icons/dropdownMenu/plus.svg';
import { ActiveProps } from './types';

export const Container = styled.aside`
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
    display: none;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => theme.margins[3]}px 0
    ${({ theme }) => theme.margins[3]}px 0;
`;

export const Categories = styled.ul`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Category = styled.li<ActiveProps>`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.paddings[3]}px 0;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[2]}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;

  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    position: absolute;
    background: url(${({ active }) => (active ? minus : plus)});

    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[3]};
    right: ${({ theme }) => theme.rights[0]};
    cursor: pointer;
  }
`;
