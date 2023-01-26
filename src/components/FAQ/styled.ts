import styled from 'styled-components';
import Plus from '@/assets/images/icons/dropdownMenu/plus.svg';
import Minus from '@/assets/images/icons/dropdownMenu/minus.svg';
import { ActiveProp } from './types';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Questions = styled.ul`
  width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[4]}px;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: 100%;
`;

export const Heading = styled.h3<ActiveProp>`
  font-weight: 700;
  font-size: 22px;
  width: 100%;
  line-height: 33px;
  letter-spacing: -0.015em;
  display: flex;
  align-items: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.grey};
  position: relative;
  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background: url(${({ active }) => (active ? Minus : Plus)});
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;

    right: ${({ theme }) => theme.rights[0]};
  }
`;

export const Description = styled.p<ActiveProp>`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  margin: ${({ theme }) => theme.margins[1]}px 0 0 0;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  flex: none;
  order: 1;
  flex-grow: 0;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
