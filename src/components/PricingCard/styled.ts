import styled from 'styled-components';
import menuIcon from '@/assets/images/icons/general/menuIcon.svg';
import { TimeTypeProps } from './types';

export const Card = styled.div`
  min-height: 525px;
  padding: ${({ theme }) => theme.paddings[4]}px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  button {
    width: 100%;
  }
`;

export const Heading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[1]}px 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
  gap: ${({ theme }) => theme.gaps[0]}px;
`;

export const Price = styled.h4`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const TimeType = styled.button<TimeTypeProps>`
  padding: ${({ theme }) => theme.paddings[1]}px
    ${({ theme }) => theme.spaces[1]}px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  max-width: ${({ theme }) => theme.sizes[3]}px;
  max-height: ${({ theme }) => theme.sizes[2]}px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
`;

export const List = styled.ul`
  margin: ${({ theme }) => theme.spaces[2]}px 0 0 0;
`;

export const Advantages = styled.li`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  position: relative;
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spaces[0]}px;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    position: absolute;
    background: url(${menuIcon});
    background-repeat: no-repeat;
    left: 0;
    top: ${({ theme }) => theme.tops[1]};
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes[5]};
  top: 0;
  right: ${({ theme }) => theme.rights[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-size: 20px;
  }
  div:nth-child(2) {
    width: 650px;
    height: auto;
    z-index: ${({ theme }) => theme.zIndexes[6]};
  }
`;

export const GreyFill = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndexes[4]};
  top: 0;
  right: ${({ theme }) => theme.rights[0]};
  background: ${({ theme }) => theme.colors.grey};
  opacity: 0.6;
`;
