import styled from 'styled-components';
import Plus from '@/assets/images/icons/dropdownMenu/plus.svg';
import Minus from '@/assets/images/icons/dropdownMenu/minus.svg';
import { ActiveProp } from './types';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Questions = styled.section`
  width: ${({ theme }) => theme.sizes.at(-1)}px;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[5]}px;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: ${({ theme }) => theme.sizes[5]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Heading = styled.h3<ActiveProp>`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  width: ${({ theme }) => theme.sizes[5]}%;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  display: flex;
  align-items: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.grey};
  position: relative;
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${({ active }) => (active ? Minus : Plus)});
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;

    right: ${({ theme }) => theme.rights[0]};
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[1]}px;
  }
`;

export const Description = styled.p<ActiveProp>`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  margin: ${({ theme }) => theme.margins[1]}px 0 0 0;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  flex: none;
  order: 1;
  flex-grow: 0;
  display: ${({ active }) => (active ? 'block' : 'none')};
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: ${({ theme }) => theme.fonts[0]}px;
  }
`;
